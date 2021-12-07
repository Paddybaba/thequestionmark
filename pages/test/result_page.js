import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TopBar from "../../src/components/TopBar";
import router from "next/router";
import path from "../api/mypaths";
//////
//  make an array of correct answers *
//  pointer events remove from options *
//  question navigation box color (red for wrong)
//  display correct answer in green *
//  display marked answer in green border if correct and red border if incorrect

const result_page = (props) => {
  const data = props.questBank;
  // console.log("props from result_page", data)
  //   console.log(correctAnswerArray);
  const [progress, setProgress] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("score")
        ? JSON.parse(localStorage.getItem("score"))
        : {}
      : {}
  );
  // console.log("progress from result page :", progress)
  const [activeQ, setActiveQ] = useState(0);
  // const [clickedOption, setClickedOption] = useState(progress.clickedAnsList);
  try {
  } catch (e) {
    // console.log("cannont read quest");
  }

  const onNextClick = () => {
    setActiveQ(activeQ + 1);
    // setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1);
    // setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  try {
    let currentQuestion = data[activeQ].question;
    console.log(currentQuestion);
    const clickedAnswerArray = data.map((quest, index) => {
      return quest.question.options[progress.clickedAnsList[index]].option;
    });

    const correctAnswerArray = data.map((quest, index) => {
      return quest.question.correct_ans;
    });
    const correctAnswer = correctAnswerArray[activeQ].toLowerCase();

    return (
      <>
        <div style={{ position: "fixed", top: 0, width: "100%" }}>
          <TopBar />
        </div>
        <div className="container-fluid test-page gx-0 ">
          <div className="row gx-0 main-container">
            <div className="col-11 mx-auto">
              <div className="row ">
                <div className="col-sm-8 mx-auto quest-box">
                  <div className="row quest-toprow">
                    <div className="col-6"> Question No. {activeQ + 1}</div>
                    <div className="col-6 text-center">Marks : 5</div>
                  </div>
                  <div className="row ">
                    <div className="col-12 quest-question mt-2 mr-3 mb-2">
                      {currentQuestion.quest.image != "" ? (
                        <img
                          className="question-image"
                          src={currentQuestion.quest.image}
                        ></img>
                      ) : null}
                      <p className="text-bottom fw-bold">
                        {currentQuestion.quest.que}
                      </p>
                    </div>

                    <ol style={{ pointerEvents: "none" }}>
                      {currentQuestion.options.map((element, index) => {
                        return (
                          <li
                            key={index}
                            position={index}
                            className="options"
                            onClick={(e) => onOptionClick(e)}
                            style={{}}
                          >
                            <div
                              className="options"
                              position={index}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                alignContent: "center",
                                border:
                                  index == progress.clickedAnsList[activeQ]
                                    ? "1px solid green"
                                    : "none",
                                backgroundColor:
                                  element.option.toLowerCase() == correctAnswer
                                    ? "greenyellow"
                                    : "transparent",
                              }}
                              content={element.option}
                            >
                              {element.image != "" ? (
                                <img
                                  className="option-image"
                                  src={element.image}
                                ></img>
                              ) : null}
                              {element.option.length > 0 &&
                              element.option != "A" &&
                              element.option != "B" &&
                              element.option != "C" &&
                              element.option != "D" ? (
                                <p
                                  style={{
                                    verticalAlign: "center",
                                    margin: 3,
                                  }}
                                >
                                  {element.option}
                                </p>
                              ) : null}
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                    <div>
                      <div>Explanation</div>
                      <div style={{ fontStyle: "italic" }}>
                        {currentQuestion.explanation}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mx-auto navi-box">
                  <p>Total Questions : {progress.total}</p>
                  {data.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="question-number-box"
                        style={
                          (activeQ === index
                            ? { backgroundColor: "grey", color: "white" }
                            : {},
                          correctAnswerArray[index].toLowerCase() ==
                          clickedAnswerArray[index].toLowerCase()
                            ? { backgroundColor: "greenyellow" }
                            : { backgroundColor: "red" })
                        }
                        onClick={() => {
                          setActiveQ(index);
                        }}
                      >
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-10 mx-auto footer-box">
                  <button
                    className="previous-next"
                    onClick={() => onPreviousClick()}
                    // style={{ visibility: activeQ == 0 ? "hidden" : "visible" }}
                    disabled={activeQ === 0}
                  >
                    Previous
                  </button>
                  <button
                    className="previous-next"
                    onClick={() => onNextClick()}
                    // style={{
                    //   visibility:
                    //     // activeQ == data.length - 1 ? "hidden" : "visible",
                    // }}
                    disabled={activeQ == data.length - 1}
                  >
                    Next
                  </button>
                  <button
                    className=" previous-next finish-button"
                    onClick={() => router.replace("/test/selectTest")}
                  >
                    END TEST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (err) {
    // console.log(err);

    return (
      <div className="row">
        <h3 className="text-center mt-5">Mark All the questions First!!!</h3>
        <h5
          className="text-center"
          onClick={() => router.push("/test/test_page2")}
          style={{ cursor: "pointer" }}
        >
          Go back
        </h5>
      </div>
    );
  }
};

function addAfter(array, index, newItem) {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

const mstp = (state) => {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress,
  };
};
export default connect(mstp)(result_page);
