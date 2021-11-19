"use strict";
(() => {
var exports = {};
exports.id = "pages/test/selectTest";
exports.ids = ["pages/test/selectTest"];
exports.modules = {

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\selectTest.js";











const selectTest = props => {
  // console.log("select page props", props);
  const {
    0: authorHint,
    1: setAuthorHint
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: mystudent,
    1: setStudent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.student.user.student);
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
    const response = await axios__WEBPACK_IMPORTED_MODULE_7___default().post("http://localhost:8080/getauthors");
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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "container-fluid",
      style: {
        backgroundColor: "honeydew",
        height: "100vh"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "col-10 mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
            className: "col-10 text-center mx-auto mt-5",
            children: ["Welcome : ", mystudent]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
            className: "text-center mt-4",
            children: "Select your test paper"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "col-10 mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                  size: "lg",
                  controlId: "subject",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                    children: "Subject"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
                    className: "form-select",
                    "aria-label": "Default select example",
                    onChange: e => setSubject(e.target.value),
                    defaultValue: "Science",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                      value: "Mathematics",
                      children: "Mathematics"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                      value: "gk",
                      children: "General Knowledge"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                      value: "Science",
                      children: "Science"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                      value: "English",
                      children: "English"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
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
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                  className: "mt-4",
                  size: "lg",
                  controlId: "author",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                    children: "Author"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6__.Hint, {
                    options: authorHint,
                    allowTabFill: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                      className: "form-control",
                      value: author,
                      onChange: e => setAuthor(e.target.value)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                  className: "mt-4",
                  size: "lg",
                  controlId: "year",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                    children: "Year"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                    type: "text",
                    value: year,
                    onChange: e => setYear(e.target.value)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                  block: "true",
                  className: "mt-4" // disabled={!validateForm()}
                  ,
                  onClick: () => onSubmit(),
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                block: "true",
                className: "mt-4" // type="submit" (This is not allowing action to work properly)
                ,
                onClick: () => router.push("/login/loginPage"),
                children: "Log Out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
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
  const response = await axios__WEBPACK_IMPORTED_MODULE_7___default().post("http://localhost:8080/getquest", options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBUDtBQUlELENBTE07QUFPQSxNQUFNa0IsaUJBQWlCLEdBQUl2QixNQUFELElBQVk7QUFDM0MsU0FBTztBQUNMcUIsSUFBQUEsSUFBSSxFQUFFLHFCQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRXRCO0FBRkosR0FBUDtBQUlELENBTE07Ozs7Ozs7Ozs7QUN0QlA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL3Rlc3Qvc2VsZWN0VGVzdC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWF1dG9jb21wbGV0ZS1oaW50XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdE9wdGlvbnMsIHNldFF1ZXN0aW9ucyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIaW50IH0gZnJvbSBcInJlYWN0LWF1dG9jb21wbGV0ZS1oaW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHNlbGVjdFRlc3QgPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdCBwYWdlIHByb3BzXCIsIHByb3BzKTtcclxuICBjb25zdCBbYXV0aG9ySGludCwgc2V0QXV0aG9ySGludF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW215c3R1ZGVudCwgc2V0U3R1ZGVudF0gPSB1c2VTdGF0ZShwcm9wcy5zdHVkZW50LnVzZXIuc3R1ZGVudCk7XHJcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoXCJTY2llbmNlXCIpO1xyXG4gIGNvbnN0IFthdXRob3IsIHNldEF1dGhvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nZXRhdXRob3JzXCIpO1xyXG4gICAgY29uc3QgYXV0aG9ycyA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhcImF1dGhvcnNcIiwgYXV0aG9ycyk7XHJcbiAgICBzZXRBdXRob3JIaW50KGF1dGhvcnMpO1xyXG4gIH0sIFtdKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICByZXR1cm4gc3ViamVjdC5sZW5ndGggPiAwICYmIGF1dGhvci5sZW5ndGggPiAwICYmIHllYXIgPiAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgc3ViamVjdCxcclxuICAgICAgYXV0aG9yLFxyXG4gICAgICB5ZWFyLFxyXG4gICAgfTtcclxuICAgIHByb3BzLnNlbGVjdE9wdGlvbnNIYW5kbGVyKG9wdGlvbnMpO1xyXG4gICAgY29uc3QgcXVlc3Rpb25zID0gYXdhaXQgcmVxdWVzdFF1ZXN0aW9ucyhvcHRpb25zKTtcclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBwcm9wcy5zZXRRdWVzdGlvbnNIYW5kbGVyKHF1ZXN0aW9ucyk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Rlc3Qvc3RhcnRfdGVzdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiTk8gdGVzdHMgYXZhaWxhYmxlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiwgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb2wtMTAgdGV4dC1jZW50ZXIgbXgtYXV0byBtdC01XCI+XHJcbiAgICAgICAgICAgICAgV2VsY29tZSA6IHtteXN0dWRlbnR9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+U2VsZWN0IHlvdXIgdGVzdCBwYXBlcjwvaDM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJzdWJqZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+U3ViamVjdDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1YmplY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiU2NpZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJna1wiPkdlbmVyYWwgS25vd2xlZGdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2NpZW5jZVwiPlNjaWVuY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF1dGhvcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SGludCBvcHRpb25zPXthdXRob3JIaW50fSBhbGxvd1RhYkZpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInllYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5ZZWFyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRZZWFyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXshdmFsaWRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TdWJtaXQoKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJzdWJtaXRcIiAoVGhpcyBpcyBub3QgYWxsb3dpbmcgYWN0aW9uIHRvIHdvcmsgcHJvcGVybHkpXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL2xvZ2luUGFnZVwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgcmVxdWVzdFF1ZXN0aW9ucyA9IGFzeW5jIChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dldHF1ZXN0XCIsIG9wdGlvbnMpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZWxlY3RPcHRpb25zSGFuZGxlcjogKG9wdGlvbnMpID0+IGRpc3BhdGNoKHNlbGVjdE9wdGlvbnMob3B0aW9ucykpLFxyXG4gIHNldFF1ZXN0aW9uc0hhbmRsZXI6IChxdWVzdGlvbnMpID0+IGRpc3BhdGNoKHNldFF1ZXN0aW9ucyhxdWVzdGlvbnMpKSxcclxufSk7XHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbiAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHAsIG1kdHApKHNlbGVjdFRlc3QpO1xyXG4iLCJleHBvcnQgY29uc3QgdXNlckxvZ2luID0gKHVzZXIpID0+IHtcclxuICAvLyBjb25zb2xlLndhcm4oXCJkYXRhIHJlY2VpdmVkIGluIGFjdGlvblwiLCB1c2VyKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJVU0VSX0xPR0lOXCIsXHJcbiAgICBwYXlsb2FkOiB1c2VyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VMRUNUX09QVElPTlNcIixcclxuICAgIHBheWxvYWQ6IG9wdGlvbnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRRdWVzdGlvbnMgPSAocXVlc3Rpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogcXVlc3Rpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxRdWVzdGlvbnMgPSAobGVuZ3RoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1RPVEFMX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogbGVuZ3RoLFxyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF1dG9jb21wbGV0ZS1oaW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29ubmVjdCIsInNlbGVjdE9wdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJGb3JtIiwiQnV0dG9uIiwidXNlUm91dGVyIiwiSGludCIsImF4aW9zIiwic2VsZWN0VGVzdCIsInByb3BzIiwiYXV0aG9ySGludCIsInNldEF1dGhvckhpbnQiLCJteXN0dWRlbnQiLCJzZXRTdHVkZW50Iiwic3R1ZGVudCIsInVzZXIiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsImF1dGhvciIsInNldEF1dGhvciIsInllYXIiLCJzZXRZZWFyIiwicmVzcG9uc2UiLCJwb3N0IiwiYXV0aG9ycyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwicm91dGVyIiwib25TdWJtaXQiLCJvcHRpb25zIiwic2VsZWN0T3B0aW9uc0hhbmRsZXIiLCJxdWVzdGlvbnMiLCJyZXF1ZXN0UXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zSGFuZGxlciIsInB1c2giLCJhbGVydCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1kdHAiLCJkaXNwYXRjaCIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwidXNlckxvZ2luIiwidHlwZSIsInBheWxvYWQiLCJzZXRUb3RhbFF1ZXN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=