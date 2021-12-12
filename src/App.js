import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./app-routes/Navigation";
import AppRoutes from "./app-routes/AppRoutes";
import UserContext from "./auth/UserContext";
import JoblyApi from "../api/api";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [token, setToken] = useState(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState("");
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(
    function setCurrentUserDetail() {
      async function getCurrentUser() {
        if (token) {
          try {
            JoblyApi.token = token;
            let username = jwt.decode(token);
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
            setApplicationIds(new Set(currentUser.applications));
          } catch (e) {
            console.error("Error getting user details", e);
            setCurrentUser(null);
          }
        }
      }
    },
    [token]
  );

  async function login(data) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Navigation />
          <AppRoutes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
