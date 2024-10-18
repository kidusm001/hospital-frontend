import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch data from the local JSON file
  useEffect(() => {
    fetch("/doctors.json")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  // Determine the correct image filename based on the index
  const getImageSrc = (index) => {
    if (index < 7) {
      return `/img/Picture${index + 1}.jpg`; // For Picture1.jpg to Picture7.jpg
    }
    return `/img/Picture${index + 1}.png`; // For Picture8.png to Picture10.png
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Doctors
            </p>
            <h1>Our Experienced Doctors</h1>
          </div>
          <div className="row g-4">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                imageSrc={getImageSrc(index)} // Use the dynamic image source
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctors;
