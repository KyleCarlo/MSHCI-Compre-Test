"use client";

import {
  ReactNode,
  useState,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

const NameContext = createContext<{
  name: string;
  setName: Dispatch<SetStateAction<string>>;
} | null>(null);

export const NameProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export function useNameContext() {
  const nameContext = useContext(NameContext);

  if (!nameContext) {
    throw new Error("useNameContext must be used within NameProvider");
  }

  return nameContext;
}
