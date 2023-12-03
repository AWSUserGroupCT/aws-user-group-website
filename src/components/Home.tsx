import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  return <div>Welcome to the Home Page!</div>;
};

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user?.name ?? "Unknown"}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default { Home, Profile };
