import React from "react";
import "./BookAppointment.css";
const BookAppointment = () => {
  return (
    <div id="appointment" className="container-fluid p-5 mx-auto row g-5 align-items-center justify-content-between">
      <div style={{backgroundColor:'lightgray'}} className="col-md-6">
        <h2>Free Confidential Addiction Appointment</h2>
        <p className='lead text-white'>
          Priory is presently offering free assessments by telephone or Skype to
          support individuals wanting to access our hospital addiction treatment
          services
        </p>
      </div>
      <div className="col-md-6 col-12 card appointment-card p-md-5">
        <h5 className="text-center">Request an Appointment</h5>

        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Date</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Sumarry</label>
          </div>
          <button className="btn btn-danger fw-bolder py-2 px-3">
            Book an Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
