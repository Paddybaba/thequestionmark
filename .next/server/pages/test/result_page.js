"use strict";
(() => {
var exports = {};
exports.id = "pages/test/result_page";
exports.ids = ["pages/test/result_page"];
exports.modules = {

/***/ "./pages/api/mypaths.js":
/*!******************************!*\
  !*** ./pages/api/mypaths.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const path = "https://quiz-server-paddy.herokuapp.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);

/***/ }),

/***/ "./pages/test/result_page.js":
/*!***********************************!*\
  !*** ./pages/test/result_page.js ***!
  \***********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\result_page.js";




 //////
//  make an array of correct answers *
//  pointer events remove from options *
//  question navigation box color (red for wrong)
//  display correct answer in green *
//  display marked answer in green border if correct and red border if incorrect




const result_page = props => {
  const data = props.questBank; //   console.log(correctAnswerArray);

  const {
    0: progress,
    1: setProgress
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( false ? 0 : {});
  const {
    0: activeQ,
    1: setActiveQ
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // const [clickedOption, setClickedOption] = useState(progress.clickedAnsList);

  try {} catch (e) {
    console.log("cannont read quest");
  }

  const onNextClick = () => {
    setActiveQ(activeQ + 1); // setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1); // setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  try {
    let currentQuestion = data[activeQ].question;
    const clickedAnswerArray = data.map((quest, index) => {
      return quest.question.options[progress.clickedAnsList[index]];
    });
    const correctAnswerArray = data.map((quest, index) => {
      return quest.question.correct_ans;
    });
    const correctAnswer = correctAnswerArray[activeQ].toLowerCase();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_components_TopBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container-fluid test-page gx-0 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "row gx-0 main-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "col-10 mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "row ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "col-sm-8 mx-auto quest-box",
                style: {
                  pointerEvents: "none"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "row quest-toprow",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    className: "col-6",
                    children: [" Question No. ", activeQ + 1]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    className: "col-6 text-center",
                    children: "Marks : 5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "row ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    className: "col-12 quest-question mt-2 mr-3",
                    children: currentQuestion.quest
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ol", {
                    children: currentQuestion.options.map((element, index) => {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                        position: index,
                        className: "options",
                        onClick: e => onOptionClick(e),
                        style: {
                          border: index == progress.clickedAnsList[activeQ] ? "1px solid green" : "none",
                          backgroundColor: element.toLowerCase() == correctAnswer ? "greenyellow" : "transparent"
                        },
                        children: element
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 27
                      }, undefined);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "col-sm-4 mx-auto navi-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                  children: ["Total Questions : ", progress.total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, undefined), data.map((element, index) => {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    className: "question-number-box",
                    style: (activeQ === index ? {
                      backgroundColor: "grey",
                      color: "white"
                    } : {}, correctAnswerArray[index].toLowerCase() == clickedAnswerArray[index].toLowerCase() ? {
                      backgroundColor: "greenyellow"
                    } : {
                      backgroundColor: "red"
                    }),
                    onClick: () => {
                      setActiveQ(index);
                    },
                    children: index + 1
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 23
                  }, undefined);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "row mx-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "col-10 mx-auto footer-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                  className: "previous-next",
                  onClick: () => onPreviousClick() // style={{ visibility: activeQ == 0 ? "hidden" : "visible" }}
                  ,
                  disabled: activeQ === 0,
                  children: "Previous"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
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
                  lineNumber: 133,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/test/selectTest"),
                  children: "END TEST"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  } catch (err) {
    console.log(err);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
        className: "text-center mt-5",
        children: "Mark All the questions First!!!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h5", {
        className: "text-center",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/test/test_page"),
        style: {
          cursor: "pointer"
        },
        children: "Go back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mstp)(result_page));

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
var __webpack_exports__ = (__webpack_exec__("./pages/test/result_page.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxjQUFOLENBQXFCRztBQUR6QixHQUFQO0FBR0QsQ0FKRDs7QUFLQSxpRUFBZXBELG9EQUFPLENBQUMrQyxJQUFELENBQVAsQ0FBYzlDLE1BQWQsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7Ozs7QUFDQSxNQUFNb0UsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUssSUFBSSxHQUFHRCw2Q0FBTSxFQUFuQjtBQUNBekQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQnlELElBQUksQ0FBQ0EsSUFBM0I7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCxDQVJEOztBQVVBLGlFQUFlTCxLQUFmOzs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL2FwaS9teXBhdGhzLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL3Rlc3QvcmVzdWx0X3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL1RvcEJhci5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9zcmMvY29tcG9uZW50cy9XYXRjaC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gXCJodHRwczovL3F1aXotc2VydmVyLXBhZGR5Lmhlcm9rdWFwcC5jb21cIjtcclxuZXhwb3J0IGRlZmF1bHQgcGF0aDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIi4uL2FwaS9teXBhdGhzXCI7XHJcbi8vLy8vL1xyXG4vLyAgbWFrZSBhbiBhcnJheSBvZiBjb3JyZWN0IGFuc3dlcnMgKlxyXG4vLyAgcG9pbnRlciBldmVudHMgcmVtb3ZlIGZyb20gb3B0aW9ucyAqXHJcbi8vICBxdWVzdGlvbiBuYXZpZ2F0aW9uIGJveCBjb2xvciAocmVkIGZvciB3cm9uZylcclxuLy8gIGRpc3BsYXkgY29ycmVjdCBhbnN3ZXIgaW4gZ3JlZW4gKlxyXG4vLyAgZGlzcGxheSBtYXJrZWQgYW5zd2VyIGluIGdyZWVuIGJvcmRlciBpZiBjb3JyZWN0IGFuZCByZWQgYm9yZGVyIGlmIGluY29ycmVjdFxyXG5cclxuY29uc3QgcmVzdWx0X3BhZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBkYXRhID0gcHJvcHMucXVlc3RCYW5rO1xyXG5cclxuICAvLyAgIGNvbnNvbGUubG9nKGNvcnJlY3RBbnN3ZXJBcnJheSk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpXHJcbiAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIikpXHJcbiAgICAgICAgOiB7fVxyXG4gICAgICA6IHt9XHJcbiAgKTtcclxuICBjb25zdCBbYWN0aXZlUSwgc2V0QWN0aXZlUV0gPSB1c2VTdGF0ZSgwKTtcclxuICAvLyBjb25zdCBbY2xpY2tlZE9wdGlvbiwgc2V0Q2xpY2tlZE9wdGlvbl0gPSB1c2VTdGF0ZShwcm9ncmVzcy5jbGlja2VkQW5zTGlzdCk7XHJcbiAgdHJ5IHtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbm5vbnQgcmVhZCBxdWVzdFwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRICsgMSk7XHJcbiAgICAvLyBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgLSAxKTtcclxuICAgIC8vIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsZXQgY3VycmVudFF1ZXN0aW9uID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbjtcclxuICAgIGNvbnN0IGNsaWNrZWRBbnN3ZXJBcnJheSA9IGRhdGEubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXN0LnF1ZXN0aW9uLm9wdGlvbnNbcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbaW5kZXhdXTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJBcnJheSA9IGRhdGEubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXN0LnF1ZXN0aW9uLmNvcnJlY3RfYW5zO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VyID0gY29ycmVjdEFuc3dlckFycmF5W2FjdGl2ZVFdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXN0LXBhZ2UgZ3gtMCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTAgbWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc20tOCBteC1hdXRvIHF1ZXN0LWJveFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHF1ZXN0LXRvcHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj4gUXVlc3Rpb24gTm8uIHthY3RpdmVRICsgMX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRleHQtY2VudGVyXCI+TWFya3MgOiA1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBxdWVzdC1xdWVzdGlvbiBtdC0yIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ucXVlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ub3B0aW9ucy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25PcHRpb25DbGljayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PSBwcm9ncmVzcy5jbGlja2VkQW5zTGlzdFthY3RpdmVRXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50b0xvd2VyQ2FzZSgpID09IGNvcnJlY3RBbnN3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmVlbnllbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IG14LWF1dG8gbmF2aS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgUXVlc3Rpb25zIDoge3Byb2dyZXNzLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLW51bWJlci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZVEgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJBcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKSA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRBbnN3ZXJBcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJncmVlbnllbGxvd1wiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG8gZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmV2aW91c0NsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgdmlzaWJpbGl0eTogYWN0aXZlUSA9PSAwID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmV4dENsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHZpc2liaWxpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGFjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBwcmV2aW91cy1uZXh0IGZpbmlzaC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rlc3Qvc2VsZWN0VGVzdFwiKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEVORCBURVNUXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNVwiPk1hcmsgQWxsIHRoZSBxdWVzdGlvbnMgRmlyc3QhISE8L2gzPlxyXG4gICAgICAgIDxoNVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdGVzdC90ZXN0X3BhZ2VcIil9XHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR28gYmFja1xyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRBZnRlcihhcnJheSwgaW5kZXgsIG5ld0l0ZW0pIHtcclxuICByZXR1cm4gWy4uLmFycmF5LnNsaWNlKDAsIGluZGV4KSwgbmV3SXRlbSwgLi4uYXJyYXkuc2xpY2UoaW5kZXgpXTtcclxufVxyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdEJhbms6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnF1ZXN0aW9ucyxcclxuICAgIHN0dWRlbnRfcmVjb3JkOiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLnByb2dyZXNzLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkocmVzdWx0X3BhZ2UpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ291bnRkb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDE4MDApO1xyXG4gIGNvbnN0IFtNTSwgc2V0TU1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW1NTLCBzZXRTU10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID1cclxuICAgICAgY291bnRlciA+IDAgJiYgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q291bnRlcihjb3VudGVyIC0gMSksIDEwMDApO1xyXG5cclxuICAgIGxldCBtID0gTWF0aC5yb3VuZChjb3VudGVyIC8gNjAgLSAoY291bnRlciAlIDYwKSAvIDYwKTtcclxuICAgIGxldCBzID0gY291bnRlciAlIDYwO1xyXG5cclxuICAgIGxldCBtbSA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcclxuICAgIGxldCBzcyA9IChcIjBcIiArIHMpLnNsaWNlKC0yKTtcclxuXHJcbiAgICBzZXRNTShtbSk7XHJcbiAgICBzZXRTUyhzcyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtjb3VudGVyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAge01NfTp7U1N9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwiLi9Db3VudGRvd25cIjtcclxuaW1wb3J0IFdhdGNoIGZyb20gXCIuL1dhdGNoXCI7XHJcbmNvbnN0IFRvcEJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSB0b3BiYXJcIiwgcHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLnN0dWRlbnQuc3R1ZGVudF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdGV4dC1jZW50ZXIgIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3R1ZGVudC5vcHRpb25zLnN1YmplY3R9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRkb3duIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkoVG9wQmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgV2F0Y2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG1vbWVudCgpO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0ZSA6XCIsIGRhdGUuZGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoND4xOjAwPC9oND5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRjaDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsicGF0aCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiVG9wQmFyIiwicm91dGVyIiwicmVzdWx0X3BhZ2UiLCJwcm9wcyIsImRhdGEiLCJxdWVzdEJhbmsiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImFjdGl2ZVEiLCJzZXRBY3RpdmVRIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbk5leHRDbGljayIsIm9uUHJldmlvdXNDbGljayIsImN1cnJlbnRRdWVzdGlvbiIsInF1ZXN0aW9uIiwiY2xpY2tlZEFuc3dlckFycmF5IiwibWFwIiwicXVlc3QiLCJpbmRleCIsIm9wdGlvbnMiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnN3ZXJBcnJheSIsImNvcnJlY3RfYW5zIiwiY29ycmVjdEFuc3dlciIsInRvTG93ZXJDYXNlIiwicG9pbnRlckV2ZW50cyIsImVsZW1lbnQiLCJvbk9wdGlvbkNsaWNrIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidG90YWwiLCJjb2xvciIsImxlbmd0aCIsInB1c2giLCJlcnIiLCJjdXJzb3IiLCJhZGRBZnRlciIsImFycmF5IiwibmV3SXRlbSIsInNsaWNlIiwibXN0cCIsInN0YXRlIiwic3R1ZGVudFJlZHVjZXIiLCJxdWVzdGlvbnMiLCJzdHVkZW50X3JlY29yZCIsInVzZXIiLCJDb3VudGRvd24iLCJjb3VudGVyIiwic2V0Q291bnRlciIsIk1NIiwic2V0TU0iLCJTUyIsInNldFNTIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIm0iLCJNYXRoIiwicm91bmQiLCJzIiwibW0iLCJzcyIsImNsZWFySW50ZXJ2YWwiLCJXYXRjaCIsInN0dWRlbnQiLCJzdHVkZW50X25hbWUiLCJzdWJqZWN0IiwibW9tZW50IiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=