import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./app-routes/Navigation";
import AppRoutes from "./app-routes/AppRoutes";
import JoblyApi from "../api/api";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [token, setToken] = useState(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState("");

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
      <div className="App">
        <Navigation />
        <AppRoutes login={login} signup={signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
