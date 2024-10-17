// import React from "react";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard"; // Assuming ServiceCard is a separate component
import fetchDepartments from "../fetches/fetchDepartments";

const ServiceSec = () => {
  const {
    data: departments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["departments"], // Updated from array to object form
    queryFn: fetchDepartments,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Services
          </p>
          <h1>Health Care Solutions</h1>
        </div>
        <div className="row g-4">
          {departments.map((dept, index) => (
            <ServiceCard
              key={index}
              title={dept.title}
              description={dept.description}
              icon={dept.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSec;
