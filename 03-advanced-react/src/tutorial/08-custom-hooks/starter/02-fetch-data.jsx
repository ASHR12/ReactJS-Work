import React from "react";
import useFetchData from "../starter/useFetchData ";
const url = "https://api.github.com/users/QuincyLarson";
const UserList = () => {
  const { data, isLoading, error } = useFetchData(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Check if the error is related to a non-successful HTTP response
    if (error.message.startsWith("HTTP error")) {
      return (
        <div>
          Error: Failed to fetch data. HTTP status code:{" "}
          {error.message.split(" ")[2]}
        </div>
      );
    }
    // Handle other types of errors
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      <li key={data.id}>{data.login}</li>
    </ul>
  );
};

export default UserList;
