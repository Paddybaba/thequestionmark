import React from "react";

const MyNavbar = ({ heading }) => {
  return (
    <div className="mybar">
      <h3 className="xy-center" style={{ fontWeight: "bold" }}>
        {heading}
      </h3>
      <div>
        <p>Dashboard</p>
      </div>
    </div>
  );
};

export default MyNavbar;
