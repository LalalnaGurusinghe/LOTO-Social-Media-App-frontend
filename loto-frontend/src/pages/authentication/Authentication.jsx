import React from "react";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="main-container">
      <div className="img-container">
        <img
          className="image"
          src="/images/eb54052e-a94f-4ea5-a9eb-b166ed8263e0.png"
          alt="background"
        />
      </div>
      <div className="auth-container">
        <div className="card">
          <img className="icon" src="/images/2df90632-040b-485f-9e6e-06fb102df30e.png" alt="" />
          <p className="sub-heading">Connect, Share, and Grow with Loto.</p>
          <div className="login">
            <Outlet /> {/* This will dynamically render Login or Register */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
