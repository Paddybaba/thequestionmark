"use strict";
(() => {
var exports = {};
exports.id = "pages/test/selectTest";
exports.ids = ["pages/test/selectTest"];
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

/***/ "./pages/test/selectTest.js":
/*!**********************************!*\
  !*** ./pages/test/selectTest.js ***!
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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-autocomplete-hint */ "react-autocomplete-hint");
/* harmony import */ var react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\selectTest.js";












const selectTest = props => {
  console.log("select page props", props);
  const {
    0: authorHint,
    1: setAuthorHint
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: mystudent,
    1: setStudent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.student.user.student_name);
  const {
    0: subject,
    1: setSubject
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Science");
  const {
    0: author,
    1: setAuthor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: year,
    1: setYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    const response = await axios__WEBPACK_IMPORTED_MODULE_7___default().post(`${_api_mypaths__WEBPACK_IMPORTED_MODULE_8__.default}/getauthors`);
    const authors = await response.data;
    console.log("authors", authors);
    setAuthorHint(authors);
  }, []);

  function validateForm() {
    return subject.length > 0 && author.length > 0 && year > 0;
  }

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const onSubmit = async () => {
    const options = {
      subject,
      author,
      year
    };
    props.selectOptionsHandler(options);
    const questions = await requestQuestions(options);

    if (questions.length > 0) {
      props.setQuestionsHandler(questions);
      router.push("/test/start_test");
    } else {
      alert("NO tests available");
    }
  }; // console.log(props);


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "container-fluid",
      style: {
        backgroundColor: "honeydew",
        height: "100vh"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "col-10 mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
            className: "col-10 text-center mx-auto mt-5",
            children: ["Welcome : ", mystudent]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
            className: "text-center mt-4",
            children: "Select your test paper"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "col-10 mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                  size: "lg",
                  controlId: "subject",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                    children: "Subject"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
                    className: "form-select",
                    "aria-label": "Default select example",
                    onChange: e => setSubject(e.target.value),
                    defaultValue: "Science",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "Mathematics",
                      children: "Mathematics"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "General Knowledge",
                      children: "General Knowledge"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "Science",
                      children: "Science"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "English",
                      children: "English"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                  className: "mt-3",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                    children: "Select Author"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                    className: "form-select",
                    "aria-label": "Default select example",
                    list: "author-options",
                    onChange: e => setAuthor(e.target.value)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("datalist", {
                    id: "author-options",
                    children: authorHint.map((author, index) => {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        value: author,
                        children: author
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 27
                      }, undefined);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                  className: "mt-3",
                  size: "lg",
                  controlId: "year",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                    children: "Year"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                    type: "text",
                    value: year,
                    onChange: e => setYear(e.target.value)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  block: "true",
                  className: "mt-4" // disabled={!validateForm()}
                  ,
                  onClick: () => onSubmit(),
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                block: "true",
                className: "mt-4" // type="submit" (This is not allowing action to work properly)
                ,
                onClick: () => router.push("/login/loginStudent"),
                children: "Log Out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

const requestQuestions = async options => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_7___default().post(`${_api_mypaths__WEBPACK_IMPORTED_MODULE_8__.default}/getquest`, options);
  const data = await response.data;
  return data;
};

const mdtp = dispatch => ({
  selectOptionsHandler: options => dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.selectOptions)(options)),
  setQuestionsHandler: questions => dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.setQuestions)(questions))
});

const mstp = state => ({
  student: state.studentReducer
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mstp, mdtp)(selectTest));

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userLogin": () => (/* binding */ userLogin),
/* harmony export */   "selectOptions": () => (/* binding */ selectOptions),
/* harmony export */   "setQuestions": () => (/* binding */ setQuestions),
/* harmony export */   "setTotalQuestions": () => (/* binding */ setTotalQuestions)
/* harmony export */ });
const userLogin = user => {
  // console.warn("data received in action", user);
  return {
    type: "USER_LOGIN",
    payload: user
  };
};
const selectOptions = options => {
  return {
    type: "SELECT_OPTIONS",
    payload: options
  };
};
const setQuestions = questions => {
  return {
    type: "SET_QUESTIONS",
    payload: questions
  };
};
const setTotalQuestions = length => {
  return {
    type: "SET_TOTAL_QUESTIONS",
    payload: length
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ "react-autocomplete-hint":
/*!******************************************!*\
  !*** external "react-autocomplete-hint" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-autocomplete-hint");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

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
var __webpack_exports__ = (__webpack_exec__("./pages/test/selectTest.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQVA7QUFJRCxDQU5NO0FBUUEsTUFBTWhCLGFBQWEsR0FBSWdDLE9BQUQsSUFBYTtBQUN4QyxTQUFPO0FBQ0xvQixJQUFBQSxJQUFJLEVBQUUsZ0JBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFckI7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU0vQixZQUFZLEdBQUlpQyxTQUFELElBQWU7QUFDekMsU0FBTztBQUNMa0IsSUFBQUEsSUFBSSxFQUFFLGVBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFbkI7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1vQixpQkFBaUIsR0FBSXpCLE1BQUQsSUFBWTtBQUMzQyxTQUFPO0FBQ0x1QixJQUFBQSxJQUFJLEVBQUUscUJBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFeEI7QUFGSixHQUFQO0FBSUQsQ0FMTTs7Ozs7Ozs7OztBQ3RCUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvYXBpL215cGF0aHMuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvdGVzdC9zZWxlY3RUZXN0LmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3JlZHV4L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYXV0b2NvbXBsZXRlLWhpbnRcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSBcImh0dHBzOi8vcXVpei1zZXJ2ZXItcGFkZHkuaGVyb2t1YXBwLmNvbVwiO1xyXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdE9wdGlvbnMsIHNldFF1ZXN0aW9ucyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIaW50IH0gZnJvbSBcInJlYWN0LWF1dG9jb21wbGV0ZS1oaW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIi4uL2FwaS9teXBhdGhzXCI7XHJcbmNvbnN0IHNlbGVjdFRlc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInNlbGVjdCBwYWdlIHByb3BzXCIsIHByb3BzKTtcclxuICBjb25zdCBbYXV0aG9ySGludCwgc2V0QXV0aG9ySGludF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW215c3R1ZGVudCwgc2V0U3R1ZGVudF0gPSB1c2VTdGF0ZShwcm9wcy5zdHVkZW50LnVzZXIuc3R1ZGVudF9uYW1lKTtcclxuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZShcIlNjaWVuY2VcIik7XHJcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3BhdGh9L2dldGF1dGhvcnNgKTtcclxuICAgIGNvbnN0IGF1dGhvcnMgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coXCJhdXRob3JzXCIsIGF1dGhvcnMpO1xyXG4gICAgc2V0QXV0aG9ySGludChhdXRob3JzKTtcclxuICB9LCBbXSk7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgcmV0dXJuIHN1YmplY3QubGVuZ3RoID4gMCAmJiBhdXRob3IubGVuZ3RoID4gMCAmJiB5ZWFyID4gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGF1dGhvcixcclxuICAgICAgeWVhcixcclxuICAgIH07XHJcbiAgICBwcm9wcy5zZWxlY3RPcHRpb25zSGFuZGxlcihvcHRpb25zKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IHJlcXVlc3RRdWVzdGlvbnMob3B0aW9ucyk7XHJcbiAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcHJvcHMuc2V0UXVlc3Rpb25zSGFuZGxlcihxdWVzdGlvbnMpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi90ZXN0L3N0YXJ0X3Rlc3RcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5PIHRlc3RzIGF2YWlsYWJsZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIsIGhlaWdodDogXCIxMDB2aFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLTEwIHRleHQtY2VudGVyIG14LWF1dG8gbXQtNVwiPlxyXG4gICAgICAgICAgICAgIFdlbGNvbWUgOiB7bXlzdHVkZW50fVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlNlbGVjdCB5b3VyIHRlc3QgcGFwZXI8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwic3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlN1YmplY3Q8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXRoZW1hdGljc1wiPk1hdGhlbWF0aWNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhbCBLbm93bGVkZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjaWVuY2VcIj5TY2llbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRW5nbGlzaFwiPkVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBBdXRob3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdD1cImF1dGhvci1vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImF1dGhvci1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9ySGludC5tYXAoKGF1dGhvciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXthdXRob3J9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkdyb3VwIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlNlbGVjdCBBdXRob3I8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHthdXRob3JIaW50Lm1hcCgoYXV0aG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2F1dGhvcn0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BdXRob3I8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BdXRob3I8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpbnQgb3B0aW9ucz17YXV0aG9ySGludH0gYWxsb3dUYWJGaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaW50PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC0zXCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlllYXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFllYXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9eyF2YWxpZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblN1Ym1pdCgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInN1Ym1pdFwiIChUaGlzIGlzIG5vdCBhbGxvd2luZyBhY3Rpb24gdG8gd29yayBwcm9wZXJseSlcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW4vbG9naW5TdHVkZW50XCIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5jb25zdCByZXF1ZXN0UXVlc3Rpb25zID0gYXN5bmMgKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cGF0aH0vZ2V0cXVlc3RgLCBvcHRpb25zKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IG1kdHAgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2VsZWN0T3B0aW9uc0hhbmRsZXI6IChvcHRpb25zKSA9PiBkaXNwYXRjaChzZWxlY3RPcHRpb25zKG9wdGlvbnMpKSxcclxuICBzZXRRdWVzdGlvbnNIYW5kbGVyOiAocXVlc3Rpb25zKSA9PiBkaXNwYXRjaChzZXRRdWVzdGlvbnMocXVlc3Rpb25zKSksXHJcbn0pO1xyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiAoe1xyXG4gIHN0dWRlbnQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtc3RwLCBtZHRwKShzZWxlY3RUZXN0KTtcclxuIiwiZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgLy8gY29uc29sZS53YXJuKFwiZGF0YSByZWNlaXZlZCBpbiBhY3Rpb25cIiwgdXNlcik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiVVNFUl9MT0dJTlwiLFxyXG4gICAgcGF5bG9hZDogdXNlcixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFTEVDVF9PUFRJT05TXCIsXHJcbiAgICBwYXlsb2FkOiBvcHRpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UXVlc3Rpb25zID0gKHF1ZXN0aW9ucykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFVF9RVUVTVElPTlNcIixcclxuICAgIHBheWxvYWQ6IHF1ZXN0aW9ucyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFRvdGFsUXVlc3Rpb25zID0gKGxlbmd0aCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFVF9UT1RBTF9RVUVTVElPTlNcIixcclxuICAgIHBheWxvYWQ6IGxlbmd0aCxcclxuICB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hdXRvY29tcGxldGUtaGludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsicGF0aCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25uZWN0Iiwic2VsZWN0T3B0aW9ucyIsInNldFF1ZXN0aW9ucyIsIkZvcm0iLCJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJIaW50IiwiYXhpb3MiLCJzZWxlY3RUZXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYXV0aG9ySGludCIsInNldEF1dGhvckhpbnQiLCJteXN0dWRlbnQiLCJzZXRTdHVkZW50Iiwic3R1ZGVudCIsInVzZXIiLCJzdHVkZW50X25hbWUiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsImF1dGhvciIsInNldEF1dGhvciIsInllYXIiLCJzZXRZZWFyIiwicmVzcG9uc2UiLCJwb3N0IiwiYXV0aG9ycyIsImRhdGEiLCJ2YWxpZGF0ZUZvcm0iLCJsZW5ndGgiLCJyb3V0ZXIiLCJvblN1Ym1pdCIsIm9wdGlvbnMiLCJzZWxlY3RPcHRpb25zSGFuZGxlciIsInF1ZXN0aW9ucyIsInJlcXVlc3RRdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnNIYW5kbGVyIiwicHVzaCIsImFsZXJ0IiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiLCJtZHRwIiwiZGlzcGF0Y2giLCJtc3RwIiwic3RhdGUiLCJzdHVkZW50UmVkdWNlciIsInVzZXJMb2dpbiIsInR5cGUiLCJwYXlsb2FkIiwic2V0VG90YWxRdWVzdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9