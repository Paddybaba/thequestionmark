"use strict";
(() => {
var exports = {};
exports.id = "pages/test/test_page";
exports.ids = ["pages/test/test_page"];
exports.modules = {

/***/ "./pages/test/test_page.js":
/*!*********************************!*\
  !*** ./pages/test/test_page.js ***!
  \*********************************/
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
var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\test_page.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function saveProgress(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

const test_page = props => {
  // console.log(props.student_record);
  const data = props.questBank;
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
    // const tempArray = [...clickedOption];
    // tempArray[activeQ] = e.target.getAttribute("position");
    // setClickedOption([...tempArray]);
    // setClickedOption({
    //   ...clickedOption,
    //   [activeQ]: e.target.getAttribute("position"),
    // });
    // console.log("clickedOPtion", clickedOption);
    // setProgress({ ...progress, clickedAnsList: clickedOption });
    addToClicked(e.target.getAttribute("position"));
    addToAnswered();
    const clickedAnswer = e.target.innerHTML.toLowerCase();
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
        lineNumber: 108,
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
                    lineNumber: 115,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "col-6 text-center",
                    children: "Marks : 5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "row ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "col-12 quest-question mt-2 mr-3",
                    children: currentQuestion.quest
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ol", {
                    children: currentQuestion.options.map((element, index) => {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        position: index,
                        className: "options",
                        onClick: e => onOptionClick(e),
                        style: {
                          border: index == progress.clickedAnsList[activeQ] ? "1px solid green" : "none"
                        },
                        children: element
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 27
                      }, undefined);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "col-sm-4 mx-auto navi-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                  children: ["Total Questions : ", progress.total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
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
                    lineNumber: 149,
                    columnNumber: 23
                  }, undefined);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
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
                  lineNumber: 176,
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
                  lineNumber: 184,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: () => setModalShow(true),
                  children: "Finish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_PopModal__WEBPACK_IMPORTED_MODULE_3__.default, {
                  show: modalShow,
                  onHide: () => setModalShow(false),
                  progress: progress
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  } catch (err) {
    console.log(err);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "Error occured"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mstp)(test_page));

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
var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\src\\components\\Countdown.js";




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
var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\src\\components\\PopModal.js";

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
var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\src\\components\\TopBar.js";







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
var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\src\\components\\Watch.js";





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
var __webpack_exports__ = (__webpack_exec__("./pages/test/test_page.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvdGVzdC90ZXN0X3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL1BvcE1vZGFsLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL1RvcEJhci5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9zcmMvY29tcG9uZW50cy9XYXRjaC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IFBvcE1vZGFsIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gc2F2ZVByb2dyZXNzKHNjb3JlKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZVwiLCBKU09OLnN0cmluZ2lmeShzY29yZSkpO1xyXG59XHJcblxyXG5jb25zdCB0ZXN0X3BhZ2UgPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5zdHVkZW50X3JlY29yZCk7XHJcbiAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICBjb25zdCBhcnJheW9mTnVsbHMgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpLmZpbGwoXCJ4XCIpO1xyXG4gIGNvbnN0IHNjb3JlID0ge1xyXG4gICAgdG90YWw6IGRhdGEubGVuZ3RoLFxyXG4gICAgYW5zd2VyZWQ6IFtdLFxyXG4gICAgdW5hbnN3ZXJlZDogW10sXHJcbiAgICBtYXJrZWQ6IFtdLFxyXG4gICAgY29ycmVjdDogW10sXHJcbiAgICBpbmNvcnJlY3Q6IFtdLFxyXG4gICAgY2xpY2tlZEFuc0xpc3Q6IGFycmF5b2ZOdWxscyxcclxuICAgIGNvcnJlY3RBbnNMaXN0OiBbXSxcclxuICB9O1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoXHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKVxyXG4gICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpKVxyXG4gICAgICAgIDogc2NvcmVcclxuICAgICAgOiBzY29yZVxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZVEsIHNldEFjdGl2ZVFdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NsaWNrZWRPcHRpb24sIHNldENsaWNrZWRPcHRpb25dID0gdXNlU3RhdGUocHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3QpO1xyXG5cclxuICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGFkZFRvQW5zd2VyZWQoKSB7XHJcbiAgICB2YXIgYW5zd2VyZWRRdWVzdCA9IHByb2dyZXNzLmFuc3dlcmVkO1xyXG4gICAgYW5zd2VyZWRRdWVzdC5pbmRleE9mKGFjdGl2ZVEpID09PSAtMVxyXG4gICAgICA/IGFuc3dlcmVkUXVlc3QucHVzaChhY3RpdmVRKVxyXG4gICAgICA6IGNvbnNvbGUubG9nKFwiYWxyZWFkeSBhbnN3ZXJlZFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVEsIFwiIGlzIHByZXNlbnQgaW4gXCIsIGFuc3dlcmVkUXVlc3QpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgYW5zd2VyZWQ6IGFuc3dlcmVkUXVlc3QgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZFRvQ2xpY2tlZCh2YWx1ZSkge1xyXG4gICAgdmFyIGNsaWNrZWRMaXN0ID0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3Q7XHJcbiAgICBjbGlja2VkTGlzdFthY3RpdmVRXSA9IHZhbHVlO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJuZXcgQXJyYXlcIiwgY2xpY2tlZExpc3QpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRMaXN0IH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUb1Jlc3VsdChjbGlja2VkLCBjb3JyZWN0KSB7XHJcbiAgICB2YXIgY29ycmVjdEFycmF5ID0gcHJvZ3Jlc3MuY29ycmVjdDtcclxuICAgIHZhciBpbmNvcnJlY3RBcnJheSA9IHByb2dyZXNzLmluY29ycmVjdDtcclxuICAgIGlmIChjbGlja2VkID09PSBjb3JyZWN0KSB7XHJcbiAgICAgIGNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpID09PSAtMSA/IGNvcnJlY3RBcnJheS5wdXNoKGFjdGl2ZVEpIDoge307XHJcbiAgICAgIGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgIT09IC0xXHJcbiAgICAgICAgPyBpbmNvcnJlY3RBcnJheS5zcGxpY2UoaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSwgMSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjb3JyZWN0OiBjb3JyZWN0QXJyYXkgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpID09PSAtMVxyXG4gICAgICAgID8gaW5jb3JyZWN0QXJyYXkucHVzaChhY3RpdmVRKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIGNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpICE9PSAtMVxyXG4gICAgICAgID8gY29ycmVjdEFycmF5LnNwbGljZShjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSwgMSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBpbmNvcnJlY3Q6IGluY29ycmVjdEFycmF5IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc29sZS5sb2coY2xpY2tlZE9wdGlvbik7XHJcblxyXG4gIGNvbnN0IG9uT3B0aW9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgLy8gY29uc3QgdGVtcEFycmF5ID0gWy4uLmNsaWNrZWRPcHRpb25dO1xyXG4gICAgLy8gdGVtcEFycmF5W2FjdGl2ZVFdID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAvLyBzZXRDbGlja2VkT3B0aW9uKFsuLi50ZW1wQXJyYXldKTtcclxuICAgIC8vIHNldENsaWNrZWRPcHRpb24oe1xyXG4gICAgLy8gICAuLi5jbGlja2VkT3B0aW9uLFxyXG4gICAgLy8gICBbYWN0aXZlUV06IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpLFxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNsaWNrZWRPUHRpb25cIiwgY2xpY2tlZE9wdGlvbik7XHJcbiAgICAvLyBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICAgIGFkZFRvQ2xpY2tlZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSk7XHJcbiAgICBhZGRUb0Fuc3dlcmVkKCk7XHJcbiAgICBjb25zdCBjbGlja2VkQW5zd2VyID0gZS50YXJnZXQuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBjb3JyZWN0QW5zID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbi5jb3JyZWN0X2Fucy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgYWRkVG9SZXN1bHQoY2xpY2tlZEFuc3dlciwgY29ycmVjdEFucyk7XHJcbiAgICBzYXZlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRICsgMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgLSAxKTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB2YXIgbnVtYmVyT2ZDb3JyZWN0cyA9IHByb2dyZXNzLmNvcnJlY3QubGVuZ3RoO1xyXG4gICAgYWxlcnQoXCJGaW5pc2hcIiwgbnVtYmVyT2ZDb3JyZWN0cyk7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgbGV0IGN1cnJlbnRRdWVzdGlvbiA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXN0LXBhZ2UgZ3gtMCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTAgbWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBteC1hdXRvIHF1ZXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBxdWVzdC10b3Byb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+IFF1ZXN0aW9uIE5vLiB7YWN0aXZlUSArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPk1hcmtzIDogNTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcXVlc3QtcXVlc3Rpb24gbXQtMiBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLm9wdGlvbnMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uT3B0aW9uQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IG14LWF1dG8gbmF2aS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgUXVlc3Rpb25zIDoge3Byb2dyZXNzLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLW51bWJlci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZVEgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLmFuc3dlcmVkLmluY2x1ZGVzKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTI4LCAxOTIsIDMzKVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG8gZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmV2aW91c0NsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgdmlzaWJpbGl0eTogYWN0aXZlUSA9PSAwID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmV4dENsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHZpc2liaWxpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGFjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBwcmV2aW91cy1uZXh0IGZpbmlzaC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsU2hvdyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFBvcE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5FcnJvciBvY2N1cmVkPC9kaXY+O1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZEFmdGVyKGFycmF5LCBpbmRleCwgbmV3SXRlbSkge1xyXG4gIHJldHVybiBbLi4uYXJyYXkuc2xpY2UoMCwgaW5kZXgpLCBuZXdJdGVtLCAuLi5hcnJheS5zbGljZShpbmRleCldO1xyXG59XHJcblxyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHF1ZXN0QmFuazogc3RhdGUuc3R1ZGVudFJlZHVjZXIucXVlc3Rpb25zLFxyXG4gICAgc3R1ZGVudF9yZWNvcmQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnVzZXIucHJvZ3Jlc3MsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtc3RwKSh0ZXN0X3BhZ2UpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ291bnRkb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDE4MDApO1xyXG4gIGNvbnN0IFtNTSwgc2V0TU1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW1NTLCBzZXRTU10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID1cclxuICAgICAgY291bnRlciA+IDAgJiYgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q291bnRlcihjb3VudGVyIC0gMSksIDEwMDApO1xyXG5cclxuICAgIGxldCBtID0gTWF0aC5yb3VuZChjb3VudGVyIC8gNjAgLSAoY291bnRlciAlIDYwKSAvIDYwKTtcclxuICAgIGxldCBzID0gY291bnRlciAlIDYwO1xyXG5cclxuICAgIGxldCBtbSA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcclxuICAgIGxldCBzcyA9IChcIjBcIiArIHMpLnNsaWNlKC0yKTtcclxuXHJcbiAgICBzZXRNTShtbSk7XHJcbiAgICBzZXRTUyhzcyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtjb3VudGVyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAge01NfTp7U1N9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFBvcE1vZGFsKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgID5cclxuICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlNjb3JlY2FyZDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICA8aDQ+VG90YWwgUXVlc3Rpb25zIDoge3Byb3BzLnByb2dyZXNzLnRvdGFsfTwvaDQ+XHJcbiAgICAgICAgPGg0PkNvcnJlY3QgQW5zd2VyIDoge3Byb3BzLnByb2dyZXNzLmNvcnJlY3QubGVuZ3RofTwvaDQ+XHJcbiAgICAgICAgPGg0PkluY29ycmVjdCBBbnN3ZXJzIDoge3Byb3BzLnByb2dyZXNzLmluY29ycmVjdC5sZW5ndGh9PC9oND5cclxuICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fT5cclxuICAgICAgICAgIE1hcmtzIE9idGFpbmVkIDp7XCIgXCJ9XHJcbiAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgKHByb3BzLnByb2dyZXNzLmNvcnJlY3QubGVuZ3RoIC8gcHJvcHMucHJvZ3Jlc3MudG90YWwpICogMTAwXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgJVxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIil9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6IFwibGVmdFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRmluaXNoIFRlc3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rlc3QvcmVzdWx0X3BhZ2VcIil9PlxyXG4gICAgICAgICAgQ2hlY2sgUmVzdWx0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3BNb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcIi4vQ291bnRkb3duXCI7XHJcbmltcG9ydCBXYXRjaCBmcm9tIFwiLi9XYXRjaFwiO1xyXG5jb25zdCBUb3BCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gdG9wYmFyXCIsIHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wYmFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1maWxsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdHVkZW50LnN0dWRlbnRfbmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1maWxsIHRleHQtY2VudGVyICB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnN0dWRlbnQub3B0aW9ucy5zdWJqZWN0fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPENvdW50ZG93biAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIudXNlcixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHApKFRvcEJhcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmNvbnN0IFdhdGNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBtb21lbnQoKTtcclxuICBjb25zb2xlLmxvZyhcImRhdGUgOlwiLCBkYXRlLmRhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDQ+MTowMDwvaDQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2F0Y2g7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiVG9wQmFyIiwiUG9wTW9kYWwiLCJzYXZlUHJvZ3Jlc3MiLCJzY29yZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidGVzdF9wYWdlIiwicHJvcHMiLCJkYXRhIiwicXVlc3RCYW5rIiwiYXJyYXlvZk51bGxzIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwidG90YWwiLCJhbnN3ZXJlZCIsInVuYW5zd2VyZWQiLCJtYXJrZWQiLCJjb3JyZWN0IiwiaW5jb3JyZWN0IiwiY2xpY2tlZEFuc0xpc3QiLCJjb3JyZWN0QW5zTGlzdCIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJnZXRJdGVtIiwicGFyc2UiLCJhY3RpdmVRIiwic2V0QWN0aXZlUSIsImNsaWNrZWRPcHRpb24iLCJzZXRDbGlja2VkT3B0aW9uIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiYWRkVG9BbnN3ZXJlZCIsImFuc3dlcmVkUXVlc3QiLCJpbmRleE9mIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb0NsaWNrZWQiLCJ2YWx1ZSIsImNsaWNrZWRMaXN0IiwiYWRkVG9SZXN1bHQiLCJjbGlja2VkIiwiY29ycmVjdEFycmF5IiwiaW5jb3JyZWN0QXJyYXkiLCJzcGxpY2UiLCJvbk9wdGlvbkNsaWNrIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNsaWNrZWRBbnN3ZXIiLCJpbm5lckhUTUwiLCJ0b0xvd2VyQ2FzZSIsImNvcnJlY3RBbnMiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJvbkZpbmlzaENsaWNrIiwibnVtYmVyT2ZDb3JyZWN0cyIsImFsZXJ0IiwiY3VycmVudFF1ZXN0aW9uIiwicXVlc3QiLCJvcHRpb25zIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJpbmNsdWRlcyIsImVyciIsImFkZEFmdGVyIiwiYXJyYXkiLCJuZXdJdGVtIiwic2xpY2UiLCJtc3RwIiwic3RhdGUiLCJzdHVkZW50UmVkdWNlciIsInF1ZXN0aW9ucyIsInN0dWRlbnRfcmVjb3JkIiwidXNlciIsIkNvdW50ZG93biIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiTU0iLCJzZXRNTSIsIlNTIiwic2V0U1MiLCJ0aW1lciIsInNldEludGVydmFsIiwibSIsIk1hdGgiLCJyb3VuZCIsInMiLCJtbSIsInNzIiwiY2xlYXJJbnRlcnZhbCIsIk1vZGFsIiwiQnV0dG9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9udFdlaWdodCIsImFsaWduU2VsZiIsIm9uSGlkZSIsIldhdGNoIiwic3R1ZGVudCIsInN0dWRlbnRfbmFtZSIsInN1YmplY3QiLCJtb21lbnQiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==