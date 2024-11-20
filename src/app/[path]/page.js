// /app/[path]/page.js

import HomePageClient from "../component/homepageClient";
import { getHomepageData, getHomepageContentData } from "../fetchData";

// Utility function to transform a kebab-case string to camelCase
function toCamelCase(str) {
  return str.replace(/-./g, match => match.charAt(1).toUpperCase());
}

export default async function HomePage({ params }) {
  // Extract the dynamic value from params
  const pathValueRaw = params.path || 'default'; // Defaults to 'default' if not provided
  const pathValue = toCamelCase(pathValueRaw);

  // Fetch data based on the path value
  const data = await getHomepageData(pathValue);
  const contentData = await getHomepageContentData(pathValue);
  const shouldHideSection = ['b2b', 'homeowners', 'architectsAndInteriorDesigners'].includes(pathValue);

  // Pass the fetched data to the client-side component
  return <HomePageClient data={data} contentData={contentData} shouldHideSection={shouldHideSection} />;
}
