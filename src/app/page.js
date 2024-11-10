// src/app/page.js
"use client"
import { useEffect } from 'react';
import HomePageClient from "./component/homepageClient";


export default function home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return  <HomePageClient />;
}
