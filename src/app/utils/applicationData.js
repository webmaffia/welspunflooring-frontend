// lib/api.js
export const fetchApplications = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/application?populate[banner][populate]=*&populate[details][populate]=*&populate[application][populate]=*`
      );
      const data = await response.json();
      return data.data.attributes.application;
    } catch (error) {
      console.error('Error fetching application details:', error);
      return [];
    }
  };
  