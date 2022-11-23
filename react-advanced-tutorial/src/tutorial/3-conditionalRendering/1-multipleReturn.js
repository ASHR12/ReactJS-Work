import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUser] = useState([]);
  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      console.log(response);
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      }
      // Import tp set useEffect with empty dependency list else it will trigger chain .
    } catch (error) {
      console.log("Error", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <>
        <div>
          <h1>Loading....</h1>
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>
          <h1>Error....</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <h3>Git Hub User</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img className="user-img" src={avatar_url} alt="" />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MultipleReturn;
