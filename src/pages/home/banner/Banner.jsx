import React from "react";
import "./Banner.css";
import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/4.jpg";
import banner3 from "../../../assets/banner/6.jpg";

const Banner = () => {
  return (
    <div
      
      id="carouselExampleFade"
      className="carousel slide carousel-fade banner"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={banner1}
            className="d-block img-fluid banner-image w-100"
            alt="..."
          />
          <div className="carousel-caption banner-caption">
            <h1> Start A New Life</h1>
            <h4>
              Insecurity Easily Leads To Poor Choices, Addiction And Broken
              Relationships
            </h4>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block banner-image w-100" alt="..." />
          <div className="carousel-caption banner-caption">
            <h1> Addiction Effects</h1>
            <h4>
              Substance Abuse Affects Every Aspect Of A Persons Life From
              Family, Friends, Work.
            </h4>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block banner-image w-100" alt="..." />
          <div className="carousel-caption banner-caption">
            <h1>Committing to Recovery</h1>
            <h4>
              Choosing Drug Abuse Rehabilitation Is A Solid First Step Towards
              Helping You.
            </h4>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
