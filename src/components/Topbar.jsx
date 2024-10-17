// import React from 'react'

const Topbar = () => {
  return (
    <div
      className="container-fluid bg-light p-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>
              <a href="https://maps.app.goo.gl/h374LMVbdK4vjHa4A">Location</a>
            </small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>096 540 7886</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              href="https://web.facebook.com/hallelujah.hospital"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              href="https://x.com/hallelujahgene1"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              href="https://www.linkedin.com/company/hallelujah-general-hospital/?originalSubdomain=et"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-0"
              href="https://www.instagram.com/hallelujah_hospital/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
