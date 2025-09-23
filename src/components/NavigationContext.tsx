import React, { createContext, useContext, useState, ReactNode } from "react";

type NavigationState = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  navigate: (section: string) => void;
  currentComponent: ReactNode | null;
};

const NavigationContext = createContext<NavigationState | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState("home");
  const [currentComponent, setCurrentComponent] = useState<ReactNode | null>(null);

  // Mapping paths to components
  const pathToComponentMap: Record<string, ReactNode> = {
    "/cybersecurity-training": <></>, // will be set from Training page imports
    "/cybersecurity-fundamentals": <></>,
    "/cyber-essentials": <></>,
    "/cissp-training": <></>,
    "/cism-training": <></>,
    "/vciso-training": <></>,
    "/iso-standard-training": <></>,
    "/network-training": <></>,
    "/database-training": <></>,
    "/cisco-ccna": <></>,
    "/cisco-ccie": <></>,
    "/checkpoint-ccsa": <></>,
    "/comptia-network": <></>,
    "/comptia-security": <></>,
    "/oracle-db-certification": <></>,
    "/microsoft-sql-certification": <></>,
    "/azure-db-admin": <></>,
    "/iso-27001-fundamentals": <></>,
    "/iso-9001": <></>,
    "/iso-20000": <></>,
    "/iso-22301": <></>,
    "/iso-31000": <></>,
  };

  const navigate = (section: string) => {
    // Check if section matches a page route
    if (pathToComponentMap[section]) {
      setCurrentComponent(pathToComponentMap[section]);
    } else {
      setCurrentComponent(null); // reset to normal sections
    }
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavigationContext.Provider
      value={{ currentSection, setCurrentSection, navigate, currentComponent }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
