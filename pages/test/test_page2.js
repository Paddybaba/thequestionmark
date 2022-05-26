import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TestPageNavbar from "../../src/components/navbars/TestPageNavbar";
import TopBar from "../../src/components/TopBar";
import PopModal from "../../src/components/PopModal";
import Speaker from "../../src/components/Speaker";
import axios from "axios";
import path from "../api/mypaths";
// const myQuestions = [
//   {
//       subject: "General Knowledge",
//       author: "Anup Kumar",
//       model: "question-with-image",
//       question: {
//         quest: {
//           image:
//             "https://images.unsplash.com/photo-1610361418971-50cb8d1f8339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
//           que: "Where is this famous monument located?",
//         },
//         options: [
//           { image: "", option: "Delhi" },
//           { image: "", option: "Mumbai" },
//           { image: "", option: "Agra" },
//           { image: "", option: "Jaipur" },
//         ],
//         correct_ans: "Agra",
//         marks: 5,
//     },
//     difficulty: "medium",
//   },
//   {
//     subject: "General Knowledge",
//     author: "Anup Kumar",
//     model: "question-with-image",
//     question: {
//       quest: {
//         image:
//           "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
//         que: "Where is this famous monument located?",
//       },
//       options: [
//         { image: "", option: "Delhi" },
//         { image: "", option: "Mumbai" },
//         { image: "", option: "Agra" },
//         { image: "", option: "Jaipur" },
//       ],
//       correct_ans: "Delhi",
//       marks: 5,
//     },
//     difficulty: "medium",
//   },
//   {
//     subject: "General Knowledge",
//     author: "Anup Kumar",
//     model: "all-text",
//     question: {
//       quest: { image: "", que: "Where is Red Fort  located?" },
//       options: [
//         { image: "", option: "Delhi" },
//         { image: "", option: "Mumbai" },
//         { image: "", option: "Agra" },
//         { image: "", option: "Jaipur" },
//       ],
//       correct_ans: "Delhi",
//       marks: 5,
//     },
//     difficulty: "medium",
//   },
//   {
//     subject: "General Knowledge",
//     author: "Anup Kumar",
//     model: "options-with-image",
//     question: {
//       quest: { image: "", que: "Which of this is located in Hyderabad?" },
//       options: [
//         {
//           image:
//             "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
//           option: "a",
//         },
//         {
//           image:
//             "https://media.istockphoto.com/photos/high-wide-angle-view-of-charminar-in-the-night-picture-id1215274990",
//           option: "b",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//           option: "c",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//           option: "d",
//         },
//       ],

//       correct_ans: "b",
//       marks: 5,
//     },
//     difficulty: "medium",
//   },
// ];
function saveProgress(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

const test_page2 = (props) => {
  // console.log("props from test page-2:", props.questBank);
  const data = props.questBank;
  const student = props.student;
  // const data = myQuestions;
  const arrayofNulls = new Array(data.length).fill("x");
  const score = {
    total: data.length,
    answered: [],
    unanswered: [],
    marked: [],
    correct: [],
    incorrect: [],
    clickedAnsList: arrayofNulls,
    correctAnsList: [],
  };
  const [progress, setProgress] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("score")
        ? JSON.parse(localStorage.getItem("score"))
        : score
      : score
  );
  const [activeQ, setActiveQ] = useState(0);
  const [clickedOption, setClickedOption] = useState(progress.clickedAnsList);

  const [modalShow, setModalShow] = useState(false);
  function addToAnswered() {
    var answeredQuest = progress.answered;
    answeredQuest.indexOf(activeQ) === -1 ? answeredQuest.push(activeQ) : {};
    // console.log(activeQ, " is present in ", answeredQuest);
    setProgress({ ...progress, answered: answeredQuest });
    // console.log("progress", progress);
  }
  function addToClicked(value) {
    var clickedList = progress.clickedAnsList;
    clickedList[activeQ] = value;
    setProgress({ ...progress, clickedAnsList: clickedList });
    // console.log(progress.correctAnsList);
  }
  function addToResult(clicked, correct) {
    var correctArray = progress.correct;
    var incorrectArray = progress.incorrect;
    if (clicked === correct) {
      correctArray.indexOf(activeQ) === -1 ? correctArray.push(activeQ) : {};
      incorrectArray.indexOf(activeQ) !== -1
        ? incorrectArray.splice(incorrectArray.indexOf(activeQ), 1)
        : {};
      setProgress({ ...progress, correct: correctArray });
    } else {
      incorrectArray.indexOf(activeQ) === -1
        ? incorrectArray.push(activeQ)
        : {};
      correctArray.indexOf(activeQ) !== -1
        ? correctArray.splice(correctArray.indexOf(activeQ), 1)
        : {};
      setProgress({ ...progress, incorrect: incorrectArray });
    }
  }

  // console.log(clickedOption);

  const onOptionClick = (e) => {
    addToClicked(e.target.getAttribute("position"));
    addToAnswered();
    const clickedAnswer = e.target.getAttribute("content").toLowerCase();
    // console.log(clickedAnswer);
    const correctAns = data[activeQ].question.correct_ans.toLowerCase();
    // console.log("corrrect answer ", correctAns);
    addToResult(clickedAnswer, correctAns);
    saveProgress(progress);
  };

  const onNextClick = () => {
    setActiveQ(activeQ + 1);
    setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1);
    setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  const onFinishClick = () => {
    var numberOfCorrects = progress.correct.length;
    alert("Finish", numberOfCorrects);
  };

  try {
    let currentQuestion = data[activeQ].question;
    console.log("question", currentQuestion.quest.que);
    // if (currentQuestion.quest.que === "") {
    //   document.getElementById("quest-image").style.width = "100%";
    // } else {
    //   document.getElementById("quest-image").style.width = "150px";
    // }
    console.log("activeQ", activeQ);
    return (
      <div className="gx-0">
        <div style={{ width: "100%" }}>
          <TestPageNavbar
            student={student.student_name}
            subject={student.options.subject}
          />
        </div>

        <div className=" test-page gx-0 ">
          <div className="row gx-0">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-sm-8 mx-auto quest-box">
                  <div className="row quest-toprow">
                    <div className="col-6"> Question No. {activeQ + 1}</div>
                    <div className="col-6 text-center">Marks : 5</div>
                  </div>

                  <div className="row">
                    <div className="col-12 quest-question mt-1 mr-3 mb-1">
                      {currentQuestion.quest.image != "" ? (
                        <img
                          id="quest-image"
                          className="question-image"
                          src={currentQuestion.quest.image}
                        ></img>
                      ) : null}
                      <div className="d-flex w-100 mt-2">
                        {currentQuestion.quest.que.length > 0 ? (
                          <Speaker speak_this={currentQuestion.quest.que} />
                        ) : null}
                        <textarea
                          className="text-bottom fw-bold question-text"
                          readOnly
                          disabled
                          value={currentQuestion.quest.que}
                        >
                          {currentQuestion.quest.que}
                        </textarea>
                      </div>
                    </div>

                    <ol>
                      {currentQuestion.options.map((element, index) => {
                        return (
                          <li
                            key={index}
                            onClick={(e) => onOptionClick(e)}
                            // style={{
                            //   border:
                            //     index == progress.clickedAnsList[activeQ]
                            //       ? "1px solid green"
                            //       : "none",
                            // }}
                          >
                            <div
                              className="options"
                              position={index}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                alignContent: "center",
                                borderRadius: 3,
                                border:
                                  index == progress.clickedAnsList[activeQ]
                                    ? "1px solid white"
                                    : "none",
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
                  </div>
                </div>
                <div className="col-sm-4 mx-auto navi-box">
                  <p style={{ marginBottom: "-5px" }}>
                    Total Questions : {progress.total}
                  </p>
                  {data.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="question-number-box"
                        style={
                          (activeQ === index
                            ? { backgroundColor: "grey", color: "white" }
                            : {},
                          progress.answered.includes(index)
                            ? { backgroundColor: "#603F8B" }
                            : {})
                        }
                        onClick={() => {
                          setActiveQ(index);
                          setProgress({
                            ...progress,
                            clickedAnsList: clickedOption,
                          });
                        }}
                      >
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto">
          <div
            // className="col-12 mx-auto footer-box"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                className="previous-next"
                onClick={() => onPreviousClick()}
                disabled={activeQ === 0}
              >
                Previous
              </button>
              <button
                className="previous-next"
                onClick={() => onNextClick()}
                disabled={activeQ == data.length - 1}
              >
                Next
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 0,
              }}
            >
              <button
                className="previous-next finish-button"
                onClick={() =>
                  saveMyTest(props.student, progress, props.questBank)
                }
              >
                Save
              </button>
              <button
                className=" previous-next finish-button"
                onClick={() => setModalShow(true)}
              >
                Finish
              </button>
            </div>
            <PopModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              progress={progress}
            />
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);

    return <div>Error occured</div>;
  }
};

function addAfter(array, index, newItem) {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

async function saveMyTest(student, progress, questions) {
  const savedTest = {
    questions: questions,
    options: student.options,
    progress: progress,
    student_id: student.student_id,
  };

  const response = await axios.post(`${path}/savestudenttest`, savedTest);
  if (response) alert("Test saved successfully !!!");
  console.log("Will save this in record", savedTest);
}

const mstp = (state) => {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress,
    student: state.studentReducer.user,
  };
};

export default connect(mstp)(test_page2);
