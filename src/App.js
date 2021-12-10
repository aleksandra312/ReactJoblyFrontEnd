import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./app-routes/Navigation";
import AppRoutes from "./app-routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
