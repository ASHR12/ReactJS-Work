import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const fetchPhotos = async (key) => {
  console.log("inside function");
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
    params: { query: key.queryKey[1] },
  });
  console.log("data", data);
  return data.results;
};

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["photos", searchTerm],
    queryFn: fetchPhotos,
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>An error occurred...</h4>
      </section>
    );
  }

  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.map((photo) => {
        let url = photo?.urls?.regular;
        return (
          <img
            key={photo.id}
            src={url}
            alt={photo.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
