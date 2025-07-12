import React from "react";
import Carousel from "../Components/Carousel";
import HotJobs from "../Components/HotJobs";
import WhyVolunteer from "../Components/WhyVolunteer";
import ImpactStats from "../Components/ImpactStats";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <HotJobs></HotJobs>
      <WhyVolunteer></WhyVolunteer>
      <ImpactStats></ImpactStats>
    </div>
  );
};

export default Home;
