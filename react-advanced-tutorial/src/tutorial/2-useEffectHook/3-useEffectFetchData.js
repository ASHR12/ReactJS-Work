import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const useEffectFetchData = () => {
  const [users, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // Import tp set useEffect with empty dependency list else it will trigger chain .
    setUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
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

export default useEffectFetchData;
