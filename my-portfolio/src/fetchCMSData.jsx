import { createClient } from "contentful";
import { useState, useEffect } from "react";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const environmentId = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const contentType = import.meta.env.VITE_CONTENT_TYPE;
const client = createClient({
  space: spaceId,
  environment: environmentId,
  accessToken: accessToken,
});

const useFetchCMSData = () => {
  const [loading, setLoading] = useState(false);
  const [cmsdata, setCmsData] = useState([]);

  useEffect(() => {
    const fetchCMSData = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: contentType,
        });
        const cmsdata = response.items.map((item) => {
          const { tweetId, youtubevideoId, links } = item.fields;
          return {
            tweetId,
            youtubevideoId,
            links,
          };
        });
        setCmsData(cmsdata);
        // console.log("fetch", cmsdata);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCmsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCMSData();
  }, []); // The empty array ensures this effect runs only once after the component mounts.

  return { loading, cmsdata };
};

export default useFetchCMSData;
