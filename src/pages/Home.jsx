import React from "react";
import Carousel from "../Components/Carousel";
import HotJobs from "../Components/HotJobs";
import WhyVolunteer from "../Components/WhyVolunteer";
import ImpactStats from "../Components/ImpactStats";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Volunteer Connect | Home</title>
      </Helmet>
      <Carousel></Carousel>
      <HotJobs></HotJobs>
      <WhyVolunteer></WhyVolunteer>
      <ImpactStats></ImpactStats>
    </div>
  );
};

export default Home;
