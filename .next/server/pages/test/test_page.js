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
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\test_page.js";

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
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\Countdown.js";




const Countdown = () => {
  const {
    0: counter,
    1: setCounter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(60);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "countdown",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: counter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
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
        children: ["Marks Obtained :", " ", props.progress.correct.length / props.progress.total * 100, "%"]
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
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        onClick: props.onHide,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/test/result_page"),
        children: "Check Result"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\TopBar.js";






const TopBar = props => {
  // console.log("props from topbar", props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "mx-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "topbar",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "d-flex",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: props.student.student
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Countdown__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              children: "Date and time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3BhZ2VzL3Rlc3QvdGVzdF9wYWdlLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9zcmMvY29tcG9uZW50cy9Ub3BCYXIuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvVG9wQmFyXCI7XHJcbmltcG9ydCBQb3BNb2RhbCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9wTW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIHNhdmVQcm9ncmVzcyhzY29yZSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NvcmVcIiwgSlNPTi5zdHJpbmdpZnkoc2NvcmUpKTtcclxufVxyXG5cclxuY29uc3QgdGVzdF9wYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuc3R1ZGVudF9yZWNvcmQpO1xyXG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5xdWVzdEJhbms7XHJcbiAgY29uc3QgYXJyYXlvZk51bGxzID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKFwieFwiKTtcclxuICBjb25zdCBzY29yZSA9IHtcclxuICAgIHRvdGFsOiBkYXRhLmxlbmd0aCxcclxuICAgIGFuc3dlcmVkOiBbXSxcclxuICAgIHVuYW5zd2VyZWQ6IFtdLFxyXG4gICAgbWFya2VkOiBbXSxcclxuICAgIGNvcnJlY3Q6IFtdLFxyXG4gICAgaW5jb3JyZWN0OiBbXSxcclxuICAgIGNsaWNrZWRBbnNMaXN0OiBhcnJheW9mTnVsbHMsXHJcbiAgICBjb3JyZWN0QW5zTGlzdDogW10sXHJcbiAgfTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSlcclxuICAgICAgICA6IHNjb3JlXHJcbiAgICAgIDogc2NvcmVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVRLCBzZXRBY3RpdmVRXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjbGlja2VkT3B0aW9uLCBzZXRDbGlja2VkT3B0aW9uXSA9IHVzZVN0YXRlKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuXHJcbiAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBhZGRUb0Fuc3dlcmVkKCkge1xyXG4gICAgdmFyIGFuc3dlcmVkUXVlc3QgPSBwcm9ncmVzcy5hbnN3ZXJlZDtcclxuICAgIGFuc3dlcmVkUXVlc3QuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgPyBhbnN3ZXJlZFF1ZXN0LnB1c2goYWN0aXZlUSlcclxuICAgICAgOiBjb25zb2xlLmxvZyhcImFscmVhZHkgYW5zd2VyZWRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVRLCBcIiBpcyBwcmVzZW50IGluIFwiLCBhbnN3ZXJlZFF1ZXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGFuc3dlcmVkOiBhbnN3ZXJlZFF1ZXN0IH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUb0NsaWNrZWQodmFsdWUpIHtcclxuICAgIHZhciBjbGlja2VkTGlzdCA9IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0O1xyXG4gICAgY2xpY2tlZExpc3RbYWN0aXZlUV0gPSB2YWx1ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmV3IEFycmF5XCIsIGNsaWNrZWRMaXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkTGlzdCB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9SZXN1bHQoY2xpY2tlZCwgY29ycmVjdCkge1xyXG4gICAgdmFyIGNvcnJlY3RBcnJheSA9IHByb2dyZXNzLmNvcnJlY3Q7XHJcbiAgICB2YXIgaW5jb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5pbmNvcnJlY3Q7XHJcbiAgICBpZiAoY2xpY2tlZCA9PT0gY29ycmVjdCkge1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTEgPyBjb3JyZWN0QXJyYXkucHVzaChhY3RpdmVRKSA6IHt9O1xyXG4gICAgICBpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpICE9PSAtMVxyXG4gICAgICAgID8gaW5jb3JyZWN0QXJyYXkuc3BsaWNlKGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY29ycmVjdDogY29ycmVjdEFycmF5IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGNvcnJlY3RBcnJheS5zcGxpY2UoY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgaW5jb3JyZWN0OiBpbmNvcnJlY3RBcnJheSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRPcHRpb24pO1xyXG5cclxuICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnN0IHRlbXBBcnJheSA9IFsuLi5jbGlja2VkT3B0aW9uXTtcclxuICAgIC8vIHRlbXBBcnJheVthY3RpdmVRXSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgLy8gc2V0Q2xpY2tlZE9wdGlvbihbLi4udGVtcEFycmF5XSk7XHJcbiAgICAvLyBzZXRDbGlja2VkT3B0aW9uKHtcclxuICAgIC8vICAgLi4uY2xpY2tlZE9wdGlvbixcclxuICAgIC8vICAgW2FjdGl2ZVFdOiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSxcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjbGlja2VkT1B0aW9uXCIsIGNsaWNrZWRPcHRpb24pO1xyXG4gICAgLy8gc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgICBhZGRUb0NsaWNrZWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIikpO1xyXG4gICAgYWRkVG9BbnN3ZXJlZCgpO1xyXG4gICAgY29uc3QgY2xpY2tlZEFuc3dlciA9IGUudGFyZ2V0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgY29ycmVjdEFucyA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb24uY29ycmVjdF9hbnMudG9Mb3dlckNhc2UoKTtcclxuICAgIGFkZFRvUmVzdWx0KGNsaWNrZWRBbnN3ZXIsIGNvcnJlY3RBbnMpO1xyXG4gICAgc2F2ZVByb2dyZXNzKHByb2dyZXNzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbk5leHRDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSArIDEpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QcmV2aW91c0NsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRIC0gMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaENsaWNrID0gKCkgPT4ge1xyXG4gICAgdmFyIG51bWJlck9mQ29ycmVjdHMgPSBwcm9ncmVzcy5jb3JyZWN0Lmxlbmd0aDtcclxuICAgIGFsZXJ0KFwiRmluaXNoXCIsIG51bWJlck9mQ29ycmVjdHMpO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjdXJyZW50UXVlc3Rpb24gPSBkYXRhW2FjdGl2ZVFdLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGVzdC1wYWdlIGd4LTAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneC0wIG1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggbXgtYXV0byBxdWVzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcXVlc3QtdG9wcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPiBRdWVzdGlvbiBOby4ge2FjdGl2ZVEgKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGV4dC1jZW50ZXJcIj5NYXJrcyA6IDU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHF1ZXN0LXF1ZXN0aW9uIG10LTIgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5vcHRpb25zLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbk9wdGlvbkNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBteC1hdXRvIG5hdmktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFF1ZXN0aW9ucyA6IHtwcm9ncmVzcy50b3RhbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1udW1iZXItYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVRID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIGNvbG9yOiBcIndoaXRlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcy5hbnN3ZXJlZC5pbmNsdWRlcyhpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDEyOCwgMTkyLCAzMylcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVRKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvIGZvb3Rlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJldmlvdXNDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHZpc2liaWxpdHk6IGFjdGl2ZVEgPT0gMCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5leHRDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2aXNpYmlsaXR5OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBhY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcHJldmlvdXMtbmV4dCBmaW5pc2gtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3BNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldE1vZGFsU2hvdyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3Igb2NjdXJlZDwvZGl2PjtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRBZnRlcihhcnJheSwgaW5kZXgsIG5ld0l0ZW0pIHtcclxuICByZXR1cm4gWy4uLmFycmF5LnNsaWNlKDAsIGluZGV4KSwgbmV3SXRlbSwgLi4uYXJyYXkuc2xpY2UoaW5kZXgpXTtcclxufVxyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdEJhbms6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnF1ZXN0aW9ucyxcclxuICAgIHN0dWRlbnRfcmVjb3JkOiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLnByb2dyZXNzLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkodGVzdF9wYWdlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvdW50ZG93biA9ICgpID0+IHtcclxuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSg2MCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9XHJcbiAgICAgIGNvdW50ZXIgPiAwICYmIHNldEludGVydmFsKCgpID0+IHNldENvdW50ZXIoY291bnRlciAtIDEpLCAxMDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9LCBbY291bnRlcl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPlxyXG4gICAgICAgIDxoMz57Y291bnRlcn08L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gUG9wTW9kYWwocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+U2NvcmVjYXJkPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxoND5Ub3RhbCBRdWVzdGlvbnMgOiB7cHJvcHMucHJvZ3Jlc3MudG90YWx9PC9oND5cclxuICAgICAgICA8aDQ+Q29ycmVjdCBBbnN3ZXIgOiB7cHJvcHMucHJvZ3Jlc3MuY29ycmVjdC5sZW5ndGh9PC9oND5cclxuICAgICAgICA8aDQ+SW5jb3JyZWN0IEFuc3dlcnMgOiB7cHJvcHMucHJvZ3Jlc3MuaW5jb3JyZWN0Lmxlbmd0aH08L2g0PlxyXG4gICAgICAgIDxoNCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19PlxyXG4gICAgICAgICAgTWFya3MgT2J0YWluZWQgOntcIiBcIn1cclxuICAgICAgICAgIHsocHJvcHMucHJvZ3Jlc3MuY29ycmVjdC5sZW5ndGggLyBwcm9wcy5wcm9ncmVzcy50b3RhbCkgKiAxMDB9JVxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIil9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6IFwibGVmdFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRmluaXNoIFRlc3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rlc3QvcmVzdWx0X3BhZ2VcIil9PlxyXG4gICAgICAgICAgQ2hlY2sgUmVzdWx0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3BNb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcIi4vQ291bnRkb3duXCI7XHJcbmNvbnN0IFRvcEJhciA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSB0b3BiYXJcIiwgcHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3Byb3BzLnN0dWRlbnQuc3R1ZGVudH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvdW50ZG93biAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+RGF0ZSBhbmQgdGltZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIudXNlcixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHApKFRvcEJhcik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJUb3BCYXIiLCJQb3BNb2RhbCIsInNhdmVQcm9ncmVzcyIsInNjb3JlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0X3BhZ2UiLCJwcm9wcyIsImRhdGEiLCJxdWVzdEJhbmsiLCJhcnJheW9mTnVsbHMiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJ0b3RhbCIsImFuc3dlcmVkIiwidW5hbnN3ZXJlZCIsIm1hcmtlZCIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnNMaXN0IiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImdldEl0ZW0iLCJwYXJzZSIsImFjdGl2ZVEiLCJzZXRBY3RpdmVRIiwiY2xpY2tlZE9wdGlvbiIsInNldENsaWNrZWRPcHRpb24iLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJhZGRUb0Fuc3dlcmVkIiwiYW5zd2VyZWRRdWVzdCIsImluZGV4T2YiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZFRvQ2xpY2tlZCIsInZhbHVlIiwiY2xpY2tlZExpc3QiLCJhZGRUb1Jlc3VsdCIsImNsaWNrZWQiLCJjb3JyZWN0QXJyYXkiLCJpbmNvcnJlY3RBcnJheSIsInNwbGljZSIsIm9uT3B0aW9uQ2xpY2siLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY2xpY2tlZEFuc3dlciIsImlubmVySFRNTCIsInRvTG93ZXJDYXNlIiwiY29ycmVjdEFucyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnMiLCJvbk5leHRDbGljayIsIm9uUHJldmlvdXNDbGljayIsIm9uRmluaXNoQ2xpY2siLCJudW1iZXJPZkNvcnJlY3RzIiwiYWxlcnQiLCJjdXJyZW50UXVlc3Rpb24iLCJxdWVzdCIsIm9wdGlvbnMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImluY2x1ZGVzIiwiZXJyIiwiYWRkQWZ0ZXIiLCJhcnJheSIsIm5ld0l0ZW0iLCJzbGljZSIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwicXVlc3Rpb25zIiwic3R1ZGVudF9yZWNvcmQiLCJ1c2VyIiwiQ291bnRkb3duIiwiY291bnRlciIsInNldENvdW50ZXIiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIk1vZGFsIiwiQnV0dG9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9udFdlaWdodCIsImFsaWduU2VsZiIsIm9uSGlkZSIsInN0dWRlbnQiXSwic291cmNlUm9vdCI6IiJ9