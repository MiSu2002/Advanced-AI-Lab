import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container min-vw-100">
        <Link to="/" className="navbar-brand fw-bold fs-5 text-white">
          Advanced AI Lab <span className="fw-normal text-info fs-6">| Soumita Basu</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-2 gap-lg-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-info" : "text-light"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-author"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-info" : "text-light"}`
                }
              >
                About the Author
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/prescribed-textbooks"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-info" : "text-light"}`
                }
              >
                Prescribed Textbooks
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}