import React from "react";
import TopBar1 from "../../src/components/TopBar1";
import StartTestNavbar from "../../src/components/navbars/StartTestNavbar";
import { connect } from "react-redux";
import router, { useRouter } from "next/router";

const StartTest = (props) => {
  // console.log("props from start test", props);
  const student = props.student;
  const number_of_questions = props.questBank.length;
  const arrayofNulls = new Array(number_of_questions).fill("x");
  const score = {
    total: number_of_questions,
    answered: [],
    unanswered: [],
    marked: [],
    correct: [],
    incorrect: [],
    clickedAnsList: arrayofNulls,
    correctAnsList: [],
  };
  return (
    <>
      <div className="test-page">
        <div className="row gx-0">
          <div className="col-12 mx-auto gx-0">
            <div style={{ position: "fixed", top: 0, width: "100%" }}>
              {/* <TopBar1 /> */}
              <StartTestNavbar heading={student.student_name} />
            </div>
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="welcome text-center">
                  All the best, <strong>{props.student.student_name}</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto ">
                <div
                  className="start-button mx-auto mt-3"
                  onClick={() => {
                    router.replace("/test/test_page2");
                    localStorage.setItem("score", JSON.stringify(score));
                  }}
                >
                  Start Test
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mstp = (state) => ({
  student: state.studentReducer.user,
  questBank: state.studentReducer.questions,
});
export default connect(mstp)(StartTest);
