import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-1 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <NavLink
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <img
          src="/img/logo.png"
          alt="Logo"
          className="image-fluid h-100 me-2"
        />
        <div className="d-flex flex-column">
          <h1 className="m-0 text-primary">Hallelujah</h1>
          <p className="m-0 text-primary">General Hospital</p>
        </div>
      </NavLink>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
            Service
          </NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `dropdown-item ${isActive ? "active" : ""}`
                }
              >
                Our Doctor
              </NavLink>
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  `dropdown-item ${isActive ? "active" : ""}`
                }
              >
                Appointment
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
        <NavLink
          to="/appointment"
          className="btn btn-primary rounded-1 py-4 px-lg-5 d-none d-lg-block"
        >
          Appointment<i className="fa fa-arrow-right ms-3"></i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
