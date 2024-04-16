import React from "react";
import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();

  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default SinglePageError;
