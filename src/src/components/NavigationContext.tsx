import React, { createContext, useContext, useState } from 'react';

type NavigationState = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

const NavigationContext = createContext<NavigationState | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <NavigationContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}