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
                  className: "mt-4",
                  size: "lg",
                  controlId: "author",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                    children: "Author"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6__.Hint, {
                    options: authorHint,
                    allowTabFill: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                      className: "form-control",
                      value: author,
                      onChange: e => setAuthor(e.target.value)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                  className: "mt-4",
                  size: "lg",
                  controlId: "year",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                    children: "Year"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                    type: "text",
                    value: year,
                    onChange: e => setYear(e.target.value)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  block: "true",
                  className: "mt-4" // disabled={!validateForm()}
                  ,
                  onClick: () => onSubmit(),
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
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
                lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQUEsT0FBTyxFQUFFbkI7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU0vQixZQUFZLEdBQUlpQyxTQUFELElBQWU7QUFDekMsU0FBTztBQUNMZ0IsSUFBQUEsSUFBSSxFQUFFLGVBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFakI7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1rQixpQkFBaUIsR0FBSXZCLE1BQUQsSUFBWTtBQUMzQyxTQUFPO0FBQ0xxQixJQUFBQSxJQUFJLEVBQUUscUJBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFdEI7QUFGSixHQUFQO0FBSUQsQ0FMTTs7Ozs7Ozs7OztBQ3RCUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvYXBpL215cGF0aHMuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvdGVzdC9zZWxlY3RUZXN0LmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3JlZHV4L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYXV0b2NvbXBsZXRlLWhpbnRcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSBcImh0dHBzOi8vcXVpei1zZXJ2ZXItcGFkZHkuaGVyb2t1YXBwLmNvbVwiO1xyXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdE9wdGlvbnMsIHNldFF1ZXN0aW9ucyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIaW50IH0gZnJvbSBcInJlYWN0LWF1dG9jb21wbGV0ZS1oaW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIi4uL2FwaS9teXBhdGhzXCI7XHJcbmNvbnN0IHNlbGVjdFRlc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInNlbGVjdCBwYWdlIHByb3BzXCIsIHByb3BzKTtcclxuICBjb25zdCBbYXV0aG9ySGludCwgc2V0QXV0aG9ySGludF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW215c3R1ZGVudCwgc2V0U3R1ZGVudF0gPSB1c2VTdGF0ZShwcm9wcy5zdHVkZW50LnVzZXIuc3R1ZGVudF9uYW1lKTtcclxuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZShcIlNjaWVuY2VcIik7XHJcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3BhdGh9L2dldGF1dGhvcnNgKTtcclxuICAgIGNvbnN0IGF1dGhvcnMgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coXCJhdXRob3JzXCIsIGF1dGhvcnMpO1xyXG4gICAgc2V0QXV0aG9ySGludChhdXRob3JzKTtcclxuICB9LCBbXSk7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgcmV0dXJuIHN1YmplY3QubGVuZ3RoID4gMCAmJiBhdXRob3IubGVuZ3RoID4gMCAmJiB5ZWFyID4gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGF1dGhvcixcclxuICAgICAgeWVhcixcclxuICAgIH07XHJcbiAgICBwcm9wcy5zZWxlY3RPcHRpb25zSGFuZGxlcihvcHRpb25zKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IHJlcXVlc3RRdWVzdGlvbnMob3B0aW9ucyk7XHJcbiAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcHJvcHMuc2V0UXVlc3Rpb25zSGFuZGxlcihxdWVzdGlvbnMpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi90ZXN0L3N0YXJ0X3Rlc3RcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5PIHRlc3RzIGF2YWlsYWJsZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIsIGhlaWdodDogXCIxMDB2aFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLTEwIHRleHQtY2VudGVyIG14LWF1dG8gbXQtNVwiPlxyXG4gICAgICAgICAgICAgIFdlbGNvbWUgOiB7bXlzdHVkZW50fVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlNlbGVjdCB5b3VyIHRlc3QgcGFwZXI8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwic3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlN1YmplY3Q8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXRoZW1hdGljc1wiPk1hdGhlbWF0aWNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhbCBLbm93bGVkZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjaWVuY2VcIj5TY2llbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRW5nbGlzaFwiPkVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF1dGhvcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BdXRob3I8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpbnQgb3B0aW9ucz17YXV0aG9ySGludH0gYWxsb3dUYWJGaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaW50PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ5ZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+WWVhcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0WWVhcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpbi9sb2dpblN0dWRlbnRcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IHJlcXVlc3RRdWVzdGlvbnMgPSBhc3luYyAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtwYXRofS9nZXRxdWVzdGAsIG9wdGlvbnMpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZWxlY3RPcHRpb25zSGFuZGxlcjogKG9wdGlvbnMpID0+IGRpc3BhdGNoKHNlbGVjdE9wdGlvbnMob3B0aW9ucykpLFxyXG4gIHNldFF1ZXN0aW9uc0hhbmRsZXI6IChxdWVzdGlvbnMpID0+IGRpc3BhdGNoKHNldFF1ZXN0aW9ucyhxdWVzdGlvbnMpKSxcclxufSk7XHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbiAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHAsIG1kdHApKHNlbGVjdFRlc3QpO1xyXG4iLCJleHBvcnQgY29uc3QgdXNlckxvZ2luID0gKHVzZXIpID0+IHtcclxuICAvLyBjb25zb2xlLndhcm4oXCJkYXRhIHJlY2VpdmVkIGluIGFjdGlvblwiLCB1c2VyKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJVU0VSX0xPR0lOXCIsXHJcbiAgICBwYXlsb2FkOiB1c2VyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VMRUNUX09QVElPTlNcIixcclxuICAgIHBheWxvYWQ6IG9wdGlvbnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRRdWVzdGlvbnMgPSAocXVlc3Rpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogcXVlc3Rpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxRdWVzdGlvbnMgPSAobGVuZ3RoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1RPVEFMX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogbGVuZ3RoLFxyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF1dG9jb21wbGV0ZS1oaW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJwYXRoIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJzZWxlY3RPcHRpb25zIiwic2V0UXVlc3Rpb25zIiwiRm9ybSIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkhpbnQiLCJheGlvcyIsInNlbGVjdFRlc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJhdXRob3JIaW50Iiwic2V0QXV0aG9ySGludCIsIm15c3R1ZGVudCIsInNldFN0dWRlbnQiLCJzdHVkZW50IiwidXNlciIsInN0dWRlbnRfbmFtZSIsInN1YmplY3QiLCJzZXRTdWJqZWN0IiwiYXV0aG9yIiwic2V0QXV0aG9yIiwieWVhciIsInNldFllYXIiLCJyZXNwb25zZSIsInBvc3QiLCJhdXRob3JzIiwiZGF0YSIsInZhbGlkYXRlRm9ybSIsImxlbmd0aCIsInJvdXRlciIsIm9uU3VibWl0Iiwib3B0aW9ucyIsInNlbGVjdE9wdGlvbnNIYW5kbGVyIiwicXVlc3Rpb25zIiwicmVxdWVzdFF1ZXN0aW9ucyIsInNldFF1ZXN0aW9uc0hhbmRsZXIiLCJwdXNoIiwiYWxlcnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtZHRwIiwiZGlzcGF0Y2giLCJtc3RwIiwic3RhdGUiLCJzdHVkZW50UmVkdWNlciIsInVzZXJMb2dpbiIsInR5cGUiLCJwYXlsb2FkIiwic2V0VG90YWxRdWVzdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9