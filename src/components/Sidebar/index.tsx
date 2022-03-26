import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style/index.css";

const Sidebar: FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-border"></div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span className="fs-4">Menu</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/authors"
              className="nav-link"
              activeClassName="nav-link active"
              aria-current="page"
            >
              Author
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite-author"
              className="nav-link"
              activeClassName="nav-link active"
            >
              Favorite Author
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
