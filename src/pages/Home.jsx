// import React from "react";
import AboutSec from "../components/AboutSec";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ServiceSec from "../components/ServiceSec";
// import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Topbar />
      <Navbar />
      <Header />
      <AboutSec />
      <ServiceSec />
      <Footer />
    </div>
  );
};

export default Home;
