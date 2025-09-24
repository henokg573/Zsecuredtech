import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type NavigationState = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  navigate: (section: string) => void;
  currentComponent: ReactNode | null;
  goToAdminLogin: () => void;
  goToAdminDashboard: () => void;
};

const NavigationContext = createContext<NavigationState | undefined>(undefined);

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = useState("home");
  const [currentComponent, setCurrentComponent] = useState<ReactNode | null>(
    null
  );

  // Map special routes to placeholder components (can dynamically set later)
  const pathToComponentMap: Record<string, ReactNode> = {
    "/cybersecurity-training": <></>,
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

    // Hidden admin pages
    "admin-login": <></>,
    "admin-dashboard": <></>,
  };

  const navigate = (section: string) => {
    if (pathToComponentMap[section] !== undefined) {
      setCurrentComponent(pathToComponentMap[section]);
    } else {
      setCurrentComponent(null); // normal pages
    }
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Extra helper functions for admin pages
  const goToAdminLogin = () => {
    sessionStorage.removeItem("isAdmin");
    navigate("admin-login");
  };

  const goToAdminDashboard = () => {
    if (sessionStorage.getItem("isAdmin") === "true") {
      navigate("admin-dashboard");
    } else {
      navigate("admin-login"); // redirect if not logged in
    }
  };

  // Optional: auto-check for manual navigation stored in localStorage
  useEffect(() => {
    const manualNav = localStorage.getItem("manualNavigation");
    if (manualNav) {
      navigate(manualNav);
      localStorage.removeItem("manualNavigation");
    }
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        navigate,
        currentComponent,
        goToAdminLogin,
        goToAdminDashboard,
      }}
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
