import React from "react";
import moment from "moment";
const Watch = () => {
  const date = moment();
  console.log("date :", date.date);
  return (
    <>
      <h4>1:00</h4>
    </>
  );
};

export default Watch;
