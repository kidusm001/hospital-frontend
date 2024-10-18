import React from "react";

const DoctorCard = ({ name, imageSrc }) => {
  return (
    <div
      className="col-lg-3 col-md-6 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="team-item position-relative rounded overflow-hidden">
        <div className="overflow-hidden">
          <img className="img-fluid" src={imageSrc} alt={name} />
        </div>
        <div className="team-text bg-light text-center p-4">
          <h5>{name}</h5>
          {/* You can put "General Medicine" or another default department here */}
          <div className="team-social text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
