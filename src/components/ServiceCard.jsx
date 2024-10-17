import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item bg-light rounded h-100 p-5">
        <div
          className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
          style={{ width: "65px", height: "65px" }}
        >
          {/* Using dynamic FontAwesome icon */}
          <i className={`fa ${icon} text-primary fs-4`}></i>
        </div>
        <h4 className="mb-3">{title}</h4>
        <p className="mb-4">{description}</p>
        {/* <a className="btn" href="">
          <i className="fa fa-plus text-primary me-3"></i>Read More
        </a> */}
      </div>
    </div>
  );
};

export default ServiceCard;
