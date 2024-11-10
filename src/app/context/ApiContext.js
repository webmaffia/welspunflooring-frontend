// src/app/context/ApiContext.js
"use client"
import { createContext, useState, useContext } from 'react';

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [apiUrl, setApiUrl] = useState("default");
  const [showSquareSwiper, setShowSquareSwiper] = useState(true); // Track visibility of SquareSwiper
  const [showBannerContent, setShowBannerContent] = useState(true);

  const toggleComponentsVisibility = (visibility) => {
    setShowSquareSwiper(visibility);  // Toggle SquareSwiper visibility
    setShowBannerContent(visibility);  // Toggle BannerContent visibility
  };
  return (
    <ApiContext.Provider value={{ apiUrl, setApiUrl, showSquareSwiper, showBannerContent, toggleComponentsVisibility}}>
      {children}
    </ApiContext.Provider>
  );
}

// Ensure this export is correct
export const useApi = () => useContext(ApiContext);
