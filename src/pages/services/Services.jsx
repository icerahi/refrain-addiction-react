import React from "react";
import { Link, useLocation } from "react-router-dom";
import useServicesData from "../../hooks/useServicesData";
import Loader from "../shared/loader/Loader";

import Service from "./service/Service";

const Services = () => {
  const { services, isLoading } = useServicesData();
  const location = useLocation();

  let showServices;
  if (location.pathname === "/services") {
    showServices = services;
  } else {
    showServices = services.slice(0, 6);
  }
  
  return (
    <div className="container my-5">
      <div className="text-center">
        <h2>Reclaim Your Life!</h2>
        <p className="lead">
          The Best Drug Addiction Treatment Program For You.
        </p>
        <hr className="w-25 mx-auto" />
      </div>
      
      {isLoading && <Loader/> }
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {showServices.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
      
      {location.pathname !== "/services" ? (
        <Link className="text-decoration-none" to="/services">
          <button
            style={{ borderRadius: "25px" }}
            className="btn btn-outline-dark fw-bolder my-5 py-2 px-5 mx-auto d-block"
          >
            See All
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Services;
