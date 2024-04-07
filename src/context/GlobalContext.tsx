"use client";

import { countries } from "@/assets/data";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext<any>(null);

type TGlobalContextProvider = {
  children: React.ReactNode;
}

export default function GlobalContextProvider({ children }: TGlobalContextProvider) {
  const [country, setCountry] = useState(countries[0]);

  return (
    <GlobalContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContext.Provider"
    );
  }
  return context;
}
