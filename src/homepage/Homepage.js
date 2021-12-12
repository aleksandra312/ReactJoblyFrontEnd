import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

const Homepage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currentUser ? (
        <h2>Welcome Back, {currentUser.firstName || currentUser.username}!</h2>
      ) : (
        <p>
          <Link className="btn btn-primary font-weight-bold mr-3" to="/login">
            Log in
          </Link>
          <Link className="btn btn-primary font-weight-bold" to="/signup">
            Sign up
          </Link>
        </p>
      )}
    </div>
  );
};

export default Homepage;
