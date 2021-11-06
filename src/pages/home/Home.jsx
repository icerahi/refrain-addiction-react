import React from "react";
import Services from "../services/Services";

import Banner from "./banner/Banner";
import Collaboration from "./collaboration/Collaboration";
import Specialities from "./specialities/Specialities";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Specialities />
      <Collaboration/>
    </>
  );
};

export default Home;
