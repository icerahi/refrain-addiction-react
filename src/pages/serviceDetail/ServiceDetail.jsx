import React from "react";
import { useParams } from "react-router-dom";
import useServicesData from "../../hooks/useServicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { services } = useServicesData();

  if (services.length === 0) {
    return (
      <div className="spinner-grow mx-auto text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const service = services.find((item) => item.slug === slug);
  const { image, desc, name } = service;
  return (
    <div className="container">
      <div className="col-md-7 mx-auto col-12">
        <img src={image} alt="" className="img-fluid" />

        <div className="my-3">
          <h1>{name}</h1>

          <p className="text-secondary">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
