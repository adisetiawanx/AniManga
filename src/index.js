import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AniMangaContextProvider from "./contexts/animanga-context";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <AniMangaContextProvider>
        <App />
      </AniMangaContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
