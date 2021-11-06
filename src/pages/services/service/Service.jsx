import React from "react";
import { Link } from "react-router-dom";
import './Service.css'
const Service = ({ service }) => {
 
  const { image, desc, name, slug } = service;
  return (
    <div className="col">
      <div className="card border-0 service-card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc.slice(0, 100)} ...</p>
          <Link to={`/service/${slug}`}>
            <button className="btn btn-dark"> Read more </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
