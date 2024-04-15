import { createClient } from "contentful";
import { useState, useEffect } from "react";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const environmentId = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: spaceId,
  environment: environmentId,
  accessToken: accessToken,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({ content_type: "projects" });
        const projects = response.items.map((item) => {
          const { title, url, image } = item.fields;
          return {
            title,
            url,
            id: item.sys.id,
            imageUrl: image?.fields.file.url, // Adding optional chaining to handle cases where image might not be present.
          };
        });
        setProjects(projects);
        // console.log("fetch", projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // The empty array ensures this effect runs only once after the component mounts.

  return { loading, projects };
};

export default useFetchProjects;
