import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  const { name, website } = user;

  
  return (
    <div>
      <h2 className="text-2xl">Details about user: {name}</h2>
      <p>{website}</p>
  
    </div>
  );
};

export default UserDetails;
