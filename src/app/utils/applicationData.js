// lib/api.js
export const fetchApplications = async () => {
    try {
      const response = await fetch(
        'https://staging-cms.welspunflooring.com/api/application?populate[banner][populate]=*&populate[details][populate]=*&populate[application][populate]=*'
      );
      const data = await response.json();
      return data.data.attributes.application;
    } catch (error) {
      console.error('Error fetching application details:', error);
      return [];
    }
  };
  