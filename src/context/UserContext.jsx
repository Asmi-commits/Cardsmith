import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('cardsmith-user');
    return stored
      ? JSON.parse(stored)
      : {
          name: 'Learner',
          email: '',
          avatar: null,
          totalCards: 0,
          streakDays: 0,
          joinedDate: new Date().toISOString(),
        };
  });

  const updateUser = (updates) => {
    setUser((prev) => {
      const updated = { ...prev, ...updates };
      localStorage.setItem('cardsmith-user', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);