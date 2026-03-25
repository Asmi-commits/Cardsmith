import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardGrid({ cards }) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <div key={card.id} className="card-enter" style={{ animationDelay: `${i * 80}ms` }}>
          <Flashcard front={card.front} back={card.back} index={i} />
        </div>
      ))}
    </div>
  );
}