import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div className="col" id="services">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <button onClick={() => handleNavigate(id)} className="btn btn-primary">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Service;
