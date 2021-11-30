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
var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\start_test.js";







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
                  children: props.student.student_name
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
                  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/test/test_page2");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksUUFBWixFQUFzQkksSUFBSSxDQUFDQSxJQUEzQjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBUkQ7O0FBVUEsaUVBQWVOLEtBQWY7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvdGVzdC9zdGFydF90ZXN0LmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9zcmMvY29tcG9uZW50cy9Ub3BCYXIuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vc3JjL2NvbXBvbmVudHMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgU3RhcnRUZXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9wcyBmcm9tIHN0YXJ0IHRlc3RcIiwgcHJvcHMpO1xyXG4gIGNvbnN0IG51bWJlcl9vZl9xdWVzdGlvbnMgPSBwcm9wcy5xdWVzdEJhbmsubGVuZ3RoO1xyXG4gIGNvbnN0IGFycmF5b2ZOdWxscyA9IG5ldyBBcnJheShudW1iZXJfb2ZfcXVlc3Rpb25zKS5maWxsKFwieFwiKTtcclxuICBjb25zdCBzY29yZSA9IHtcclxuICAgIHRvdGFsOiBudW1iZXJfb2ZfcXVlc3Rpb25zLFxyXG4gICAgYW5zd2VyZWQ6IFtdLFxyXG4gICAgdW5hbnN3ZXJlZDogW10sXHJcbiAgICBtYXJrZWQ6IFtdLFxyXG4gICAgY29ycmVjdDogW10sXHJcbiAgICBpbmNvcnJlY3Q6IFtdLFxyXG4gICAgY2xpY2tlZEFuc0xpc3Q6IGFycmF5b2ZOdWxscyxcclxuICAgIGNvcnJlY3RBbnNMaXN0OiBbXSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXN0LXBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFsbCB0aGUgYmVzdCwgPHN0cm9uZz57cHJvcHMuc3R1ZGVudC5zdHVkZW50X25hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RhcnQtYnV0dG9uIG14LWF1dG8gbXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi90ZXN0L3Rlc3RfcGFnZTJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZVwiLCBKU09OLnN0cmluZ2lmeShzY29yZSkpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTdGFydCBUZXN0XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4gKHtcclxuICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLFxyXG4gIHF1ZXN0QmFuazogc3RhdGUuc3R1ZGVudFJlZHVjZXIucXVlc3Rpb25zLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtc3RwKShTdGFydFRlc3QpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ291bnRkb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDE4MDApO1xyXG4gIGNvbnN0IFtNTSwgc2V0TU1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW1NTLCBzZXRTU10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID1cclxuICAgICAgY291bnRlciA+IDAgJiYgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q291bnRlcihjb3VudGVyIC0gMSksIDEwMDApO1xyXG5cclxuICAgIGxldCBtID0gTWF0aC5yb3VuZChjb3VudGVyIC8gNjAgLSAoY291bnRlciAlIDYwKSAvIDYwKTtcclxuICAgIGxldCBzID0gY291bnRlciAlIDYwO1xyXG5cclxuICAgIGxldCBtbSA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcclxuICAgIGxldCBzcyA9IChcIjBcIiArIHMpLnNsaWNlKC0yKTtcclxuXHJcbiAgICBzZXRNTShtbSk7XHJcbiAgICBzZXRTUyhzcyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtjb3VudGVyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAge01NfTp7U1N9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwiLi9Db3VudGRvd25cIjtcclxuaW1wb3J0IFdhdGNoIGZyb20gXCIuL1dhdGNoXCI7XHJcbmNvbnN0IFRvcEJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSB0b3BiYXJcIiwgcHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLnN0dWRlbnQuc3R1ZGVudF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdGV4dC1jZW50ZXIgIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3R1ZGVudC5vcHRpb25zLnN1YmplY3R9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRkb3duIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkoVG9wQmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgV2F0Y2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG1vbWVudCgpO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0ZSA6XCIsIGRhdGUuZGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoND4xOjAwPC9oND5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRjaDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJUb3BCYXIiLCJjb25uZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiU3RhcnRUZXN0IiwicHJvcHMiLCJudW1iZXJfb2ZfcXVlc3Rpb25zIiwicXVlc3RCYW5rIiwibGVuZ3RoIiwiYXJyYXlvZk51bGxzIiwiQXJyYXkiLCJmaWxsIiwic2NvcmUiLCJ0b3RhbCIsImFuc3dlcmVkIiwidW5hbnN3ZXJlZCIsIm1hcmtlZCIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnNMaXN0Iiwic3R1ZGVudCIsInN0dWRlbnRfbmFtZSIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwidXNlciIsInF1ZXN0aW9ucyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ291bnRkb3duIiwiY291bnRlciIsInNldENvdW50ZXIiLCJNTSIsInNldE1NIiwiU1MiLCJzZXRTUyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJtIiwiTWF0aCIsInJvdW5kIiwicyIsIm1tIiwic2xpY2UiLCJzcyIsImNsZWFySW50ZXJ2YWwiLCJXYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwic3ViamVjdCIsIm1vbWVudCIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9