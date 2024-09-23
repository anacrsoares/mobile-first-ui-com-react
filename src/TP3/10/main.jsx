import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Feed from "./components/Feed/Feed";
import Friends from "./components/Friends/Friends";
import Suggestions from "./components/Suggestions/Suggestions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Feed />
    <Friends />
    <Suggestions />
  </React.StrictMode>
);
