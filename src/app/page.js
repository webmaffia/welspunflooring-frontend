import HomePageClient from "./component/homepageClient";
import { getHomepageData, getHomepageContentData } from "./fetchData";

export default async function HomePage() {
  // Use default value for homepage
  const data = await getHomepageData('default');
  const contentData = await getHomepageContentData('default');

  // Pass the fetched data to the client-side component
  return <HomePageClient data={data} contentData={contentData}  />;
}