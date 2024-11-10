// src/app/context/ApiContext.js
"use client"
import { createContext, useState, useContext } from 'react';

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [apiUrl, setApiUrl] = useState("default");
  return (
    <ApiContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </ApiContext.Provider>
  );
}

// Ensure this export is correct
export const useApi = () => useContext(ApiContext);
