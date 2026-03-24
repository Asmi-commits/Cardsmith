import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FlashcardProvider } from './context/FlashcardContext';
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes';
import MainLayout from './components/layout/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <FlashcardProvider>
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </FlashcardProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}