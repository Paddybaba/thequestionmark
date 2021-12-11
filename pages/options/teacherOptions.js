import React from "react";
import router from "next/router";
import { FaHome } from "react-icons/fa";
const teacherOptions = () => {
  return (
    <>
      <div className="container-fluid gx-0">
        <div
          className="simple-link"
          style={{
            position: "absolute",
            top: 5,
            right: 15,
            cursor: "pointer",
            fontSize: "1.5em",
          }}
          onClick={() => router.push("/")}
        >
          <FaHome />
        </div>
        <div className="row gx-0">
          <div className="col-8 mx-auto" style={{ marginTop: 100 }}>
            <div className="row mx-auto gx-0">
              <div className="col-sm-6 ">
                <div
                  className="box newQuestion-box"
                  onClick={() => router.push("/question/addQuestion2")}
                >
                  Add new Question
                </div>
              </div>
              <div className="col-sm-6 ">
                <div className="box question-bank-box">My Question Bank </div>
              </div>
            </div>
            <div className="row mx-auto gx-0">
              <div className="col-sm-6 ">
                <div className="box mystudents-box">My Students</div>
              </div>
              <div className="col-sm-6 ">
                <div className="box extra-box">One more Tab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default teacherOptions;
