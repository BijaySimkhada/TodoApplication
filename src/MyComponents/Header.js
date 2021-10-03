import React from "react";
import logo192 from "./logo192.png";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark py-3 px-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          To-do Application with React{" "}
          <img src={logo192} alt="" height="40px" width="40px" />
        </span>
      </div>
    </nav>
  );
};
