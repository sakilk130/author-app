import React, { FC } from "react";
import "./style/index.css";
// import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-border"></div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span className="fs-4">Menu</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Author
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Favorite Author
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
