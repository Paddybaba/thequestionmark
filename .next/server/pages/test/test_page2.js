"use strict";
(() => {
var exports = {};
exports.id = "pages/test/test_page2";
exports.ids = ["pages/test/test_page2"];
exports.modules = {

/***/ "./pages/test/test_page2.js":
/*!**********************************!*\
  !*** ./pages/test/test_page2.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/TopBar */ "./src/components/TopBar.js");
/* harmony import */ var _src_components_PopModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/PopModal */ "./src/components/PopModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\test_page2.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const myQuestions = [{
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "question-with-image",
  question: {
    quest: {
      image: "https://images.unsplash.com/photo-1610361418971-50cb8d1f8339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      que: "Where is this famous monument located?"
    },
    options: [{
      image: "",
      option: "Delhi"
    }, {
      image: "",
      option: "Mumbai"
    }, {
      image: "",
      option: "Agra"
    }, {
      image: "",
      option: "Jaipur"
    }],
    correct_ans: "Agra",
    marks: 5
  },
  difficulty: "medium"
}, {
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "question-with-image",
  question: {
    quest: {
      image: "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
      que: "Where is this famous monument located?"
    },
    options: [{
      image: "",
      option: "Delhi"
    }, {
      image: "",
      option: "Mumbai"
    }, {
      image: "",
      option: "Agra"
    }, {
      image: "",
      option: "Jaipur"
    }],
    correct_ans: "Delhi",
    marks: 5
  },
  difficulty: "medium"
}, {
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "all-text",
  question: {
    quest: {
      image: "",
      que: "Where is this famous monument located?"
    },
    options: [{
      image: "",
      option: "Delhi"
    }, {
      image: "",
      option: "Mumbai"
    }, {
      image: "",
      option: "Agra"
    }, {
      image: "",
      option: "Jaipur"
    }],
    correct_ans: "Delhi",
    marks: 5
  },
  difficulty: "medium"
}, {
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "options-with-image",
  question: {
    quest: {
      image: "",
      que: "Which of this is located in Hyderabad?"
    },
    options: [{
      image: "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
      option: "a"
    }, {
      image: "https://media.istockphoto.com/photos/high-wide-angle-view-of-charminar-in-the-night-picture-id1215274990",
      option: "b"
    }, {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      option: "c"
    }, {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      option: "d"
    }],
    correct_ans: "b",
    marks: 5
  },
  difficulty: "medium"
}];

function saveProgress(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

const test_page2 = props => {
  // console.log(props.student_record);
  //   const data = props.questBank;
  const data = myQuestions;
  const arrayofNulls = new Array(data.length).fill("x");
  const score = {
    total: data.length,
    answered: [],
    unanswered: [],
    marked: [],
    correct: [],
    incorrect: [],
    clickedAnsList: arrayofNulls,
    correctAnsList: []
  };
  const {
    0: progress,
    1: setProgress
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( false ? 0 : score);
  const {
    0: activeQ,
    1: setActiveQ
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: clickedOption,
    1: setClickedOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(progress.clickedAnsList);
  const {
    0: modalShow,
    1: setModalShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function addToAnswered() {
    var answeredQuest = progress.answered;
    answeredQuest.indexOf(activeQ) === -1 ? answeredQuest.push(activeQ) : console.log("already answered"); // console.log(activeQ, " is present in ", answeredQuest);

    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      answered: answeredQuest
    })); // console.log(progress);
  }

  function addToClicked(value) {
    var clickedList = progress.clickedAnsList;
    clickedList[activeQ] = value; // console.log("new Array", clickedList);

    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      clickedAnsList: clickedList
    }));
    console.log(progress.clickedAnsList);
  }

  function addToResult(clicked, correct) {
    var correctArray = progress.correct;
    var incorrectArray = progress.incorrect;

    if (clicked === correct) {
      correctArray.indexOf(activeQ) === -1 ? correctArray.push(activeQ) : {};
      incorrectArray.indexOf(activeQ) !== -1 ? incorrectArray.splice(incorrectArray.indexOf(activeQ), 1) : {};
      setProgress(_objectSpread(_objectSpread({}, progress), {}, {
        correct: correctArray
      }));
    } else {
      incorrectArray.indexOf(activeQ) === -1 ? incorrectArray.push(activeQ) : {};
      correctArray.indexOf(activeQ) !== -1 ? correctArray.splice(correctArray.indexOf(activeQ), 1) : {};
      setProgress(_objectSpread(_objectSpread({}, progress), {}, {
        incorrect: incorrectArray
      }));
    }
  } // console.log(clickedOption);


  const onOptionClick = e => {
    addToClicked(e.target.getAttribute("position"));
    addToAnswered();
    const clickedAnswer = e.target.getAttribute("content");
    console.log(clickedAnswer);
    const correctAns = data[activeQ].question.correct_ans.toLowerCase();
    addToResult(clickedAnswer, correctAns);
    saveProgress(progress);
  };

  const onNextClick = () => {
    setActiveQ(activeQ + 1);
    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      clickedAnsList: clickedOption
    }));
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1);
    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      clickedAnsList: clickedOption
    }));
  };

  const onFinishClick = () => {
    var numberOfCorrects = progress.correct.length;
    alert("Finish", numberOfCorrects);
  };

  try {
    let currentQuestion = data[activeQ].question;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_TopBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container-fluid test-page gx-0 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row gx-0 main-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "col-10 mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "row ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "col-sm-8 mx-auto quest-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "row quest-toprow",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "col-6",
                    children: [" Question No. ", activeQ + 1]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "col-6 text-center",
                    children: "Marks : 5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "row ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "col-12 quest-question mt-2 mr-3 mb-2",
                    children: [currentQuestion.quest.image != "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      className: "question-image",
                      src: currentQuestion.quest.image
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 25
                    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                      className: "text-bottom fw-bold",
                      children: currentQuestion.quest.que
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ol", {
                    children: currentQuestion.options.map((element, index) => {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        onClick: e => onOptionClick(e) // style={{
                        //   border:
                        //     index == progress.clickedAnsList[activeQ]
                        //       ? "1px solid green"
                        //       : "none",
                        // }}
                        ,
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "options",
                          position: index,
                          style: {
                            display: "flex",
                            alignItems: "center",
                            alignContent: "center",
                            border: index == progress.clickedAnsList[activeQ] ? "1px solid green" : "none"
                          },
                          content: element.option,
                          children: [element.image != "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                            className: "option-image",
                            src: element.image
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 249,
                            columnNumber: 33
                          }, undefined) : null, element.option.length > 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                            style: {
                              verticalAlign: "center",
                              margin: 3
                            },
                            children: element.option
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 33
                          }, undefined) : null]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 234,
                          columnNumber: 29
                        }, undefined)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 27
                      }, undefined);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "col-sm-4 mx-auto navi-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                  children: ["Total Questions : ", progress.total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 19
                }, undefined), data.map((element, index) => {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "question-number-box",
                    style: (activeQ === index ? {
                      backgroundColor: "grey",
                      color: "white"
                    } : {}, progress.answered.includes(index) ? {
                      backgroundColor: "rgb(128, 192, 33)"
                    } : {}),
                    onClick: () => {
                      setActiveQ(index);
                      setProgress(_objectSpread(_objectSpread({}, progress), {}, {
                        clickedAnsList: clickedOption
                      }));
                    },
                    children: index + 1
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 23
                  }, undefined);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "row mx-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "col-10 mx-auto footer-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                  className: "previous-next",
                  onClick: () => onPreviousClick() // style={{ visibility: activeQ == 0 ? "hidden" : "visible" }}
                  ,
                  disabled: activeQ === 0,
                  children: "Previous"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                  className: "previous-next",
                  onClick: () => onNextClick() // style={{
                  //   visibility:
                  //     // activeQ == data.length - 1 ? "hidden" : "visible",
                  // }}
                  ,
                  disabled: activeQ == data.length - 1,
                  children: "Next"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: () => setModalShow(true),
                  children: "Finish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_PopModal__WEBPACK_IMPORTED_MODULE_3__.default, {
                  show: modalShow,
                  onHide: () => setModalShow(false),
                  progress: progress
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  } catch (err) {
    console.log(err);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "Error occured"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 12
    }, undefined);
  }
};

function addAfter(array, index, newItem) {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

const mstp = state => {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mstp)(test_page2));

/***/ }),

/***/ "./src/components/Countdown.js":
/*!*************************************!*\
  !*** ./src/components/Countdown.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\Countdown.js";




const Countdown = () => {
  const {
    0: counter,
    1: setCounter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1800);
  const {
    0: MM,
    1: setMM
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: SS,
    1: setSS
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    let m = Math.round(counter / 60 - counter % 60 / 60);
    let s = counter % 60;
    let mm = ("0" + m).slice(-2);
    let ss = ("0" + s).slice(-2);
    setMM(mm);
    setSS(ss);
    return () => clearInterval(timer);
  }, [counter]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "countdown",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: [MM, ":", SS]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);

/***/ }),

/***/ "./src/components/PopModal.js":
/*!************************************!*\
  !*** ./src/components/PopModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\PopModal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function PopModal(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, props), {}, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Header), {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Title), {
        id: "contained-modal-title-vcenter",
        children: "Scorecard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Body), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        children: ["Total Questions : ", props.progress.total]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        children: ["Correct Answer : ", props.progress.correct.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        children: ["Incorrect Answers : ", props.progress.incorrect.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        style: {
          fontWeight: "bolder"
        },
        children: ["Marks Obtained :", " ", Math.round(props.progress.correct.length / props.progress.total * 100), "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Footer), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/test/selectTest"),
        style: {
          alignSelf: "left"
        },
        children: "Finish Test"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        onClick: props.onHide,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/test/result_page"),
        children: "Check Result"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopModal);

/***/ }),

/***/ "./src/components/TopBar.js":
/*!**********************************!*\
  !*** ./src/components/TopBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Countdown */ "./src/components/Countdown.js");
/* harmony import */ var _Watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Watch */ "./src/components/Watch.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\TopBar.js";







const TopBar = props => {
  console.log("props from topbar", props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "mx-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "topbar",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "d-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "flex-fill text-center",
                children: props.student.student_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "flex-fill text-center  text-uppercase",
              children: props.student.options.subject
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "text-right",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Countdown__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

const mstp = state => {
  return {
    student: state.studentReducer.user
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mstp)(TopBar));

/***/ }),

/***/ "./src/components/Watch.js":
/*!*********************************!*\
  !*** ./src/components/Watch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\Watch.js";





const Watch = () => {
  const date = moment__WEBPACK_IMPORTED_MODULE_1___default()();
  console.log("date :", date.date);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
      children: "1:00"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Watch);

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test/test_page2.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFQO0FBR0QsQ0FKRDs7QUFLQSxpRUFBZWpHLG9EQUFPLENBQUMyRixJQUFELENBQVAsQ0FBYzFGLE1BQWQsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7Ozs7QUFDQSxNQUFNd0gsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUksSUFBSSxHQUFHRCw2Q0FBTSxFQUFuQjtBQUNBekUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQnlFLElBQUksQ0FBQ0EsSUFBM0I7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCxDQVJEOztBQVVBLGlFQUFlSixLQUFmOzs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9wYWdlcy90ZXN0L3Rlc3RfcGFnZTIuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL1BvcE1vZGFsLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL1RvcEJhci5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9zcmMvY29tcG9uZW50cy9XYXRjaC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IFBvcE1vZGFsIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbFwiO1xyXG5cclxuY29uc3QgbXlRdWVzdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4gICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7XHJcbiAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjEwMzYxNDE4OTcxLTUwY2I4ZDFmODMzOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDM2JnE9ODBcIixcclxuICAgICAgICBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIixcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJBZ3JhXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwicXVlc3Rpb24td2l0aC1pbWFnZVwiLFxyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHtcclxuICAgICAgICBpbWFnZTpcclxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4MjgwNjg5NzAtN2I3NTA4MjQ4NWNkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MTMmcT04MFwiLFxyXG4gICAgICAgIHF1ZTogXCJXaGVyZSBpcyB0aGlzIGZhbW91cyBtb251bWVudCBsb2NhdGVkP1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkRlbGhpXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwiYWxsLXRleHRcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIiB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkRlbGhpXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwib3B0aW9ucy13aXRoLWltYWdlXCIsXHJcbiAgICBxdWVzdGlvbjoge1xyXG4gICAgICBxdWVzdDogeyBpbWFnZTogXCJcIiwgcXVlOiBcIldoaWNoIG9mIHRoaXMgaXMgbG9jYXRlZCBpbiBIeWRlcmFiYWQ/XCIgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg1ODI4MDY4OTcwLTdiNzUwODI0ODVjZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTEzJnE9ODBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvaGlnaC13aWRlLWFuZ2xlLXZpZXctb2YtY2hhcm1pbmFyLWluLXRoZS1uaWdodC1waWN0dXJlLWlkMTIxNTI3NDk5MFwiLFxyXG4gICAgICAgICAgb3B0aW9uOiBcImJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI0NDkyNDEyOTM3LWIyODA3NGE1ZDdkYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcxJnE9ODBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJjXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNDQ5MjQxMjkzNy1iMjgwNzRhNWQ3ZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MSZxPTgwXCIsXHJcbiAgICAgICAgICBvcHRpb246IFwiZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBjb3JyZWN0X2FuczogXCJiXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuXTtcclxuZnVuY3Rpb24gc2F2ZVByb2dyZXNzKHNjb3JlKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZVwiLCBKU09OLnN0cmluZ2lmeShzY29yZSkpO1xyXG59XHJcblxyXG5jb25zdCB0ZXN0X3BhZ2UyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuc3R1ZGVudF9yZWNvcmQpO1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICBjb25zdCBkYXRhID0gbXlRdWVzdGlvbnM7XHJcbiAgY29uc3QgYXJyYXlvZk51bGxzID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKFwieFwiKTtcclxuICBjb25zdCBzY29yZSA9IHtcclxuICAgIHRvdGFsOiBkYXRhLmxlbmd0aCxcclxuICAgIGFuc3dlcmVkOiBbXSxcclxuICAgIHVuYW5zd2VyZWQ6IFtdLFxyXG4gICAgbWFya2VkOiBbXSxcclxuICAgIGNvcnJlY3Q6IFtdLFxyXG4gICAgaW5jb3JyZWN0OiBbXSxcclxuICAgIGNsaWNrZWRBbnNMaXN0OiBhcnJheW9mTnVsbHMsXHJcbiAgICBjb3JyZWN0QW5zTGlzdDogW10sXHJcbiAgfTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSlcclxuICAgICAgICA6IHNjb3JlXHJcbiAgICAgIDogc2NvcmVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVRLCBzZXRBY3RpdmVRXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjbGlja2VkT3B0aW9uLCBzZXRDbGlja2VkT3B0aW9uXSA9IHVzZVN0YXRlKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuXHJcbiAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBhZGRUb0Fuc3dlcmVkKCkge1xyXG4gICAgdmFyIGFuc3dlcmVkUXVlc3QgPSBwcm9ncmVzcy5hbnN3ZXJlZDtcclxuICAgIGFuc3dlcmVkUXVlc3QuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgPyBhbnN3ZXJlZFF1ZXN0LnB1c2goYWN0aXZlUSlcclxuICAgICAgOiBjb25zb2xlLmxvZyhcImFscmVhZHkgYW5zd2VyZWRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVRLCBcIiBpcyBwcmVzZW50IGluIFwiLCBhbnN3ZXJlZFF1ZXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGFuc3dlcmVkOiBhbnN3ZXJlZFF1ZXN0IH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUb0NsaWNrZWQodmFsdWUpIHtcclxuICAgIHZhciBjbGlja2VkTGlzdCA9IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0O1xyXG4gICAgY2xpY2tlZExpc3RbYWN0aXZlUV0gPSB2YWx1ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmV3IEFycmF5XCIsIGNsaWNrZWRMaXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkTGlzdCB9KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9SZXN1bHQoY2xpY2tlZCwgY29ycmVjdCkge1xyXG4gICAgdmFyIGNvcnJlY3RBcnJheSA9IHByb2dyZXNzLmNvcnJlY3Q7XHJcbiAgICB2YXIgaW5jb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5pbmNvcnJlY3Q7XHJcbiAgICBpZiAoY2xpY2tlZCA9PT0gY29ycmVjdCkge1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTEgPyBjb3JyZWN0QXJyYXkucHVzaChhY3RpdmVRKSA6IHt9O1xyXG4gICAgICBpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpICE9PSAtMVxyXG4gICAgICAgID8gaW5jb3JyZWN0QXJyYXkuc3BsaWNlKGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY29ycmVjdDogY29ycmVjdEFycmF5IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGNvcnJlY3RBcnJheS5zcGxpY2UoY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgaW5jb3JyZWN0OiBpbmNvcnJlY3RBcnJheSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRPcHRpb24pO1xyXG5cclxuICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGFkZFRvQ2xpY2tlZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSk7XHJcbiAgICBhZGRUb0Fuc3dlcmVkKCk7XHJcbiAgICBjb25zdCBjbGlja2VkQW5zd2VyID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGNsaWNrZWRBbnN3ZXIpO1xyXG4gICAgY29uc3QgY29ycmVjdEFucyA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb24uY29ycmVjdF9hbnMudG9Mb3dlckNhc2UoKTtcclxuICAgIGFkZFRvUmVzdWx0KGNsaWNrZWRBbnN3ZXIsIGNvcnJlY3RBbnMpO1xyXG4gICAgc2F2ZVByb2dyZXNzKHByb2dyZXNzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbk5leHRDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSArIDEpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QcmV2aW91c0NsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRIC0gMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaENsaWNrID0gKCkgPT4ge1xyXG4gICAgdmFyIG51bWJlck9mQ29ycmVjdHMgPSBwcm9ncmVzcy5jb3JyZWN0Lmxlbmd0aDtcclxuICAgIGFsZXJ0KFwiRmluaXNoXCIsIG51bWJlck9mQ29ycmVjdHMpO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjdXJyZW50UXVlc3Rpb24gPSBkYXRhW2FjdGl2ZVFdLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGVzdC1wYWdlIGd4LTAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneC0wIG1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggbXgtYXV0byBxdWVzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcXVlc3QtdG9wcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPiBRdWVzdGlvbiBOby4ge2FjdGl2ZVEgKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGV4dC1jZW50ZXJcIj5NYXJrcyA6IDU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBxdWVzdC1xdWVzdGlvbiBtdC0yIG1yLTMgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5pbWFnZSAhPSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYm90dG9tIGZ3LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5xdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ub3B0aW9ucy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uT3B0aW9uQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBib3JkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gXCIxcHggc29saWQgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtlbGVtZW50Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaW1hZ2UgIT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb24taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm9wdGlvbi5sZW5ndGggPiAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IG14LWF1dG8gbmF2aS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgUXVlc3Rpb25zIDoge3Byb2dyZXNzLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLW51bWJlci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZVEgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLmFuc3dlcmVkLmluY2x1ZGVzKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTI4LCAxOTIsIDMzKVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG8gZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmV2aW91c0NsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgdmlzaWJpbGl0eTogYWN0aXZlUSA9PSAwID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmV4dENsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHZpc2liaWxpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGFjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBwcmV2aW91cy1uZXh0IGZpbmlzaC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsU2hvdyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFBvcE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5FcnJvciBvY2N1cmVkPC9kaXY+O1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZEFmdGVyKGFycmF5LCBpbmRleCwgbmV3SXRlbSkge1xyXG4gIHJldHVybiBbLi4uYXJyYXkuc2xpY2UoMCwgaW5kZXgpLCBuZXdJdGVtLCAuLi5hcnJheS5zbGljZShpbmRleCldO1xyXG59XHJcblxyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHF1ZXN0QmFuazogc3RhdGUuc3R1ZGVudFJlZHVjZXIucXVlc3Rpb25zLFxyXG4gICAgc3R1ZGVudF9yZWNvcmQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnVzZXIucHJvZ3Jlc3MsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkodGVzdF9wYWdlMik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMTgwMCk7XHJcbiAgY29uc3QgW01NLCBzZXRNTV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbU1MsIHNldFNTXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPVxyXG4gICAgICBjb3VudGVyID4gMCAmJiBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDb3VudGVyKGNvdW50ZXIgLSAxKSwgMTAwMCk7XHJcblxyXG4gICAgbGV0IG0gPSBNYXRoLnJvdW5kKGNvdW50ZXIgLyA2MCAtIChjb3VudGVyICUgNjApIC8gNjApO1xyXG4gICAgbGV0IHMgPSBjb3VudGVyICUgNjA7XHJcblxyXG4gICAgbGV0IG1tID0gKFwiMFwiICsgbSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHNzID0gKFwiMFwiICsgcykuc2xpY2UoLTIpO1xyXG5cclxuICAgIHNldE1NKG1tKTtcclxuICAgIHNldFNTKHNzKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSwgW2NvdW50ZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICB7TU19OntTU31cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gUG9wTW9kYWwocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+U2NvcmVjYXJkPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxoND5Ub3RhbCBRdWVzdGlvbnMgOiB7cHJvcHMucHJvZ3Jlc3MudG90YWx9PC9oND5cclxuICAgICAgICA8aDQ+Q29ycmVjdCBBbnN3ZXIgOiB7cHJvcHMucHJvZ3Jlc3MuY29ycmVjdC5sZW5ndGh9PC9oND5cclxuICAgICAgICA8aDQ+SW5jb3JyZWN0IEFuc3dlcnMgOiB7cHJvcHMucHJvZ3Jlc3MuaW5jb3JyZWN0Lmxlbmd0aH08L2g0PlxyXG4gICAgICAgIDxoNCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19PlxyXG4gICAgICAgICAgTWFya3MgT2J0YWluZWQgOntcIiBcIn1cclxuICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAocHJvcHMucHJvZ3Jlc3MuY29ycmVjdC5sZW5ndGggLyBwcm9wcy5wcm9ncmVzcy50b3RhbCkgKiAxMDBcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICAlXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rlc3Qvc2VsZWN0VGVzdFwiKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduU2VsZjogXCJsZWZ0XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBGaW5pc2ggVGVzdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17cHJvcHMub25IaWRlfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdGVzdC9yZXN1bHRfcGFnZVwiKX0+XHJcbiAgICAgICAgICBDaGVjayBSZXN1bHRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcE1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwiLi9Db3VudGRvd25cIjtcclxuaW1wb3J0IFdhdGNoIGZyb20gXCIuL1dhdGNoXCI7XHJcbmNvbnN0IFRvcEJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSB0b3BiYXJcIiwgcHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLnN0dWRlbnQuc3R1ZGVudF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdGV4dC1jZW50ZXIgIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3R1ZGVudC5vcHRpb25zLnN1YmplY3R9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRkb3duIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkoVG9wQmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgV2F0Y2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG1vbWVudCgpO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0ZSA6XCIsIGRhdGUuZGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoND4xOjAwPC9oND5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRjaDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJUb3BCYXIiLCJQb3BNb2RhbCIsIm15UXVlc3Rpb25zIiwic3ViamVjdCIsImF1dGhvciIsIm1vZGVsIiwicXVlc3Rpb24iLCJxdWVzdCIsImltYWdlIiwicXVlIiwib3B0aW9ucyIsIm9wdGlvbiIsImNvcnJlY3RfYW5zIiwibWFya3MiLCJkaWZmaWN1bHR5Iiwic2F2ZVByb2dyZXNzIiwic2NvcmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3RfcGFnZTIiLCJwcm9wcyIsImRhdGEiLCJhcnJheW9mTnVsbHMiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJ0b3RhbCIsImFuc3dlcmVkIiwidW5hbnN3ZXJlZCIsIm1hcmtlZCIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnNMaXN0IiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImdldEl0ZW0iLCJwYXJzZSIsImFjdGl2ZVEiLCJzZXRBY3RpdmVRIiwiY2xpY2tlZE9wdGlvbiIsInNldENsaWNrZWRPcHRpb24iLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJhZGRUb0Fuc3dlcmVkIiwiYW5zd2VyZWRRdWVzdCIsImluZGV4T2YiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZFRvQ2xpY2tlZCIsInZhbHVlIiwiY2xpY2tlZExpc3QiLCJhZGRUb1Jlc3VsdCIsImNsaWNrZWQiLCJjb3JyZWN0QXJyYXkiLCJpbmNvcnJlY3RBcnJheSIsInNwbGljZSIsIm9uT3B0aW9uQ2xpY2siLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY2xpY2tlZEFuc3dlciIsImNvcnJlY3RBbnMiLCJ0b0xvd2VyQ2FzZSIsIm9uTmV4dENsaWNrIiwib25QcmV2aW91c0NsaWNrIiwib25GaW5pc2hDbGljayIsIm51bWJlck9mQ29ycmVjdHMiLCJhbGVydCIsImN1cnJlbnRRdWVzdGlvbiIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwiYm9yZGVyIiwidmVydGljYWxBbGlnbiIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW5jbHVkZXMiLCJlcnIiLCJhZGRBZnRlciIsImFycmF5IiwibmV3SXRlbSIsInNsaWNlIiwibXN0cCIsInN0YXRlIiwicXVlc3RCYW5rIiwic3R1ZGVudFJlZHVjZXIiLCJxdWVzdGlvbnMiLCJzdHVkZW50X3JlY29yZCIsInVzZXIiLCJDb3VudGRvd24iLCJjb3VudGVyIiwic2V0Q291bnRlciIsIk1NIiwic2V0TU0iLCJTUyIsInNldFNTIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIm0iLCJNYXRoIiwicm91bmQiLCJzIiwibW0iLCJzcyIsImNsZWFySW50ZXJ2YWwiLCJNb2RhbCIsIkJ1dHRvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImZvbnRXZWlnaHQiLCJhbGlnblNlbGYiLCJvbkhpZGUiLCJXYXRjaCIsInN0dWRlbnQiLCJzdHVkZW50X25hbWUiLCJtb21lbnQiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==