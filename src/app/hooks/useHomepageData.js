// hooks/useHomepageData.js
"use client"
import { useEffect, useState } from 'react';
import { fetchFromStrapi } from '../utils/fetchApi';

const useHomepageData = () => {
  const [homepageData, setHomepageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromStrapi(
        'homepage?populate[default][populate]=*'
      );
      if (data) {
        setHomepageData(data);
      } else {
        setError('Failed to fetch homepage data');
      }
    };

    fetchData();
  }, []);

  return { homepageData, error };
};

export default useHomepageData;
