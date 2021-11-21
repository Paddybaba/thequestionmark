import React, { useEffect } from "react";
import { connect } from "react-redux";
import Countdown from "./Countdown";
import Watch from "./Watch";
const TopBar = (props) => {
  console.log("props from topbar", props.student.options.subject);
  return (
    <>
      <div className="">
        <div className="row">
          <div className="mx-auto">
            <div className="topbar">
              <div className="d-flex">
                <div className="flex-fill text-center">
                  {props.student.student}
                </div>
              </div>
              <div className="flex-fill text-center  text-uppercase">
                {props.student.options.subject}
              </div>
              <div className="text-right">
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mstp = (state) => {
  return {
    student: state.studentReducer.user,
  };
};
export default connect(mstp)(TopBar);
