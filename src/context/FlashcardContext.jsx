import React, { createContext, useContext, useReducer } from 'react';

const FlashcardContext = createContext();

const initialState = {
  cards: [],
  currentIndex: 0,
  isFlipped: false,
  isGenerating: false,
  topic: '',
  cardCount: 10,
  history: JSON.parse(localStorage.getItem('cardsmith-history') || '[]'),
};

function flashcardReducer(state, action) {
  switch (action.type) {
    case 'SET_TOPIC':
      return { ...state, topic: action.payload };

    case 'SET_CARD_COUNT':
      return { ...state, cardCount: action.payload };

    case 'START_GENERATING':
      return { ...state, isGenerating: true };

    case 'SET_CARDS':
      return {
        ...state,
        cards: action.payload,
        currentIndex: 0,
        isFlipped: false,
        isGenerating: false,
      };

    case 'FLIP_CARD':
      return { ...state, isFlipped: !state.isFlipped };

    case 'NEXT_CARD':
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, state.cards.length - 1),
        isFlipped: false,
      };

    case 'PREV_CARD':
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
        isFlipped: false,
      };

    case 'GO_TO_CARD':
      return { ...state, currentIndex: action.payload, isFlipped: false };

    case 'SAVE_TO_HISTORY': {
      const entry = {
        id: Date.now(),
        topic: state.topic,
        cards: state.cards,
        createdAt: new Date().toISOString(),
        cardCount: state.cards.length,
      };
      const updated = [entry, ...state.history].slice(0, 50);
      localStorage.setItem('cardsmith-history', JSON.stringify(updated));
      return { ...state, history: updated };
    }

    case 'DELETE_HISTORY': {
      const filtered = state.history.filter((h) => h.id !== action.payload);
      localStorage.setItem('cardsmith-history', JSON.stringify(filtered));
      return { ...state, history: filtered };
    }

    case 'LOAD_FROM_HISTORY':
      return {
        ...state,
        cards: action.payload.cards,
        topic: action.payload.topic,
        currentIndex: 0,
        isFlipped: false,
      };

    case 'RESET':
      return { ...initialState, history: state.history };

    default:
      return state;
  }
}

export function FlashcardProvider({ children }) {
  const [state, dispatch] = useReducer(flashcardReducer, initialState);

  return (
    <FlashcardContext.Provider value={{ state, dispatch }}>
      {children}
    </FlashcardContext.Provider>
  );
}

export const useFlashcards = () => useContext(FlashcardContext);