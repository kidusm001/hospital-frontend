// import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>
                <a
                  className="text-white"
                  href="https://maps.app.goo.gl/h374LMVbdK4vjHa4A"
                >
                  Location
                </a>
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>096 540 7886
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>
                info@hallelujahospital.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/service">
                Our Services
              </Link>
              <Link className="btn btn-link" to="/appointment">
                Appointment
              </Link>
              <Link className="btn btn-link" to="/doctors">
                Doctors
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link className="border-bottom" to="#">
                  Hallelujah General Hospital
                </Link>
                , All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
