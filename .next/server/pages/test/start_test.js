"use strict";
(() => {
var exports = {};
exports.id = "pages/test/start_test";
exports.ids = ["pages/test/start_test"];
exports.modules = {

/***/ "./pages/test/start_test.js":
/*!**********************************!*\
  !*** ./pages/test/start_test.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/TopBar */ "./src/components/TopBar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\start_test.js";







const StartTest = props => {
  // console.log("props from start test", props);
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
    correctAnsList: []
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "container-fluid test-page",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "col-12 mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_TopBar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-10 mx-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "welcome text-center",
                children: ["All the best, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("strong", {
                  children: props.student.student
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 33
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-10 mx-auto ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "start-button mx-auto mt-3",
                onClick: () => {
                  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/test/test_page");
                  localStorage.setItem("score", JSON.stringify(score));
                },
                children: "Start Test"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

const mstp = state => ({
  student: state.studentReducer.user,
  questBank: state.studentReducer.questions
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mstp)(StartTest));

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
  console.log("props from topbar", props.student.options.subject);
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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                children: props.student.student
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              children: props.student.options.subject
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Countdown__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
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
var __webpack_exports__ = (__webpack_exec__("./pages/test/start_test.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQVIsQ0FBWSxRQUFaLEVBQXNCSSxJQUFJLENBQUNBLElBQTNCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FSRDs7QUFVQSxpRUFBZU4sS0FBZjs7Ozs7Ozs7OztBQ1pBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9wYWdlcy90ZXN0L3N0YXJ0X3Rlc3QuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL1RvcEJhci5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9zcmMvY29tcG9uZW50cy9XYXRjaC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvcEJhclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBTdGFydFRlc3QgPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gc3RhcnQgdGVzdFwiLCBwcm9wcyk7XHJcbiAgY29uc3QgbnVtYmVyX29mX3F1ZXN0aW9ucyA9IHByb3BzLnF1ZXN0QmFuay5sZW5ndGg7XHJcbiAgY29uc3QgYXJyYXlvZk51bGxzID0gbmV3IEFycmF5KG51bWJlcl9vZl9xdWVzdGlvbnMpLmZpbGwoXCJ4XCIpO1xyXG4gIGNvbnN0IHNjb3JlID0ge1xyXG4gICAgdG90YWw6IG51bWJlcl9vZl9xdWVzdGlvbnMsXHJcbiAgICBhbnN3ZXJlZDogW10sXHJcbiAgICB1bmFuc3dlcmVkOiBbXSxcclxuICAgIG1hcmtlZDogW10sXHJcbiAgICBjb3JyZWN0OiBbXSxcclxuICAgIGluY29ycmVjdDogW10sXHJcbiAgICBjbGlja2VkQW5zTGlzdDogYXJyYXlvZk51bGxzLFxyXG4gICAgY29ycmVjdEFuc0xpc3Q6IFtdLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRlc3QtcGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgQWxsIHRoZSBiZXN0LCA8c3Ryb25nPntwcm9wcy5zdHVkZW50LnN0dWRlbnR9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RhcnQtYnV0dG9uIG14LWF1dG8gbXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi90ZXN0L3Rlc3RfcGFnZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3JlXCIsIEpTT04uc3RyaW5naWZ5KHNjb3JlKSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXJ0IFRlc3RcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiAoe1xyXG4gIHN0dWRlbnQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnVzZXIsXHJcbiAgcXVlc3RCYW5rOiBzdGF0ZS5zdHVkZW50UmVkdWNlci5xdWVzdGlvbnMsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHApKFN0YXJ0VGVzdCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMTgwMCk7XHJcbiAgY29uc3QgW01NLCBzZXRNTV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbU1MsIHNldFNTXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPVxyXG4gICAgICBjb3VudGVyID4gMCAmJiBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDb3VudGVyKGNvdW50ZXIgLSAxKSwgMTAwMCk7XHJcblxyXG4gICAgbGV0IG0gPSBNYXRoLnJvdW5kKGNvdW50ZXIgLyA2MCAtIChjb3VudGVyICUgNjApIC8gNjApO1xyXG4gICAgbGV0IHMgPSBjb3VudGVyICUgNjA7XHJcblxyXG4gICAgbGV0IG1tID0gKFwiMFwiICsgbSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHNzID0gKFwiMFwiICsgcykuc2xpY2UoLTIpO1xyXG5cclxuICAgIHNldE1NKG1tKTtcclxuICAgIHNldFNTKHNzKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSwgW2NvdW50ZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICB7TU19OntTU31cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCIuL0NvdW50ZG93blwiO1xyXG5pbXBvcnQgV2F0Y2ggZnJvbSBcIi4vV2F0Y2hcIjtcclxuY29uc3QgVG9wQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJwcm9wcyBmcm9tIHRvcGJhclwiLCBwcm9wcy5zdHVkZW50Lm9wdGlvbnMuc3ViamVjdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57cHJvcHMuc3R1ZGVudC5zdHVkZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLnN0dWRlbnQub3B0aW9ucy5zdWJqZWN0fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRkb3duIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkoVG9wQmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgV2F0Y2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG1vbWVudCgpO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0ZSA6XCIsIGRhdGUuZGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoND4xOjAwPC9oND5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRjaDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJUb3BCYXIiLCJjb25uZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiU3RhcnRUZXN0IiwicHJvcHMiLCJudW1iZXJfb2ZfcXVlc3Rpb25zIiwicXVlc3RCYW5rIiwibGVuZ3RoIiwiYXJyYXlvZk51bGxzIiwiQXJyYXkiLCJmaWxsIiwic2NvcmUiLCJ0b3RhbCIsImFuc3dlcmVkIiwidW5hbnN3ZXJlZCIsIm1hcmtlZCIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnNMaXN0Iiwic3R1ZGVudCIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwidXNlciIsInF1ZXN0aW9ucyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ291bnRkb3duIiwiY291bnRlciIsInNldENvdW50ZXIiLCJNTSIsInNldE1NIiwiU1MiLCJzZXRTUyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJtIiwiTWF0aCIsInJvdW5kIiwicyIsIm1tIiwic2xpY2UiLCJzcyIsImNsZWFySW50ZXJ2YWwiLCJXYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwic3ViamVjdCIsIm1vbWVudCIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9