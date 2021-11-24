"use strict";
(() => {
var exports = {};
exports.id = "pages/login/loginTeacher";
exports.ids = ["pages/login/loginTeacher"];
exports.modules = {

/***/ "./pages/login/loginTeacher.js":
/*!*************************************!*\
  !*** ./pages/login/loginTeacher.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\login\\loginTeacher.js";










const loginTeacher = props => {
  // console.log("props from login page :", props);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    try {
      const resposne = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:8080/loginTeacher", {
        teacher_id: email,
        password: password
      });
      const data = await resposne.data;
      const teacher = await data.teacher;

      if (resposne.status === 400 || !data) {
        window.alert("Invalid Credentials 1 !!!");
      } else {//LOGIN TEAHCER TO SELECT SUBJECT PAGE
        // props.userLoginHandler(student);
        // router.push("/test/selectTest");
      }
    } catch (err) {
      alert("Something went wrong !!!");
      console.log(err.message);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "row gx-0",
    style: {
      height: "100vh",
      backgroundColor: "honeydew"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Teacher Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "col-7 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "simple-link",
        style: {
          position: "absolute",
          top: 5,
          right: 10,
          cursor: "pointer"
        },
        onClick: () => router.push("/"),
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "Teacher Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          size: "lg",
          controlId: "email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Teacher ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            autoFocus: true,
            type: "email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "password",
            value: password,
            onChange: e => setPassword(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
          block: "true",
          className: "mt-4" // type="submit" (This is not allowing action to work properly)
          ,
          disabled: !validateForm(),
          onClick: () => handleSubmit(),
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: () => router.push("/login/registerTeacher"),
        children: "New Teacher, Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginTeacher);

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/loginTeacher.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsWUFERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUVGO0FBRkosR0FBUDtBQUlELENBTk07QUFRQSxNQUFNRyxhQUFhLEdBQUlDLE9BQUQsSUFBYTtBQUN4QyxTQUFPO0FBQ0xILElBQUFBLElBQUksRUFBRSxnQkFERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUVFO0FBRkosR0FBUDtBQUlELENBTE07QUFPQSxNQUFNQyxZQUFZLEdBQUlDLFNBQUQsSUFBZTtBQUN6QyxTQUFPO0FBQ0xMLElBQUFBLElBQUksRUFBRSxlQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUk7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1DLGlCQUFpQixHQUFJL0IsTUFBRCxJQUFZO0FBQzNDLFNBQU87QUFDTHlCLElBQUFBLElBQUksRUFBRSxxQkFERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUUxQjtBQUZKLEdBQVA7QUFJRCxDQUxNOzs7Ozs7Ozs7O0FDdEJQOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9wYWdlcy9sb2dpbi9sb2dpblRlYWNoZXIuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZXJMb2dpbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IGxvZ2luVGVhY2hlciA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSBsb2dpbiBwYWdlIDpcIiwgcHJvcHMpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICByZXR1cm4gZW1haWwubGVuZ3RoID4gMCAmJiBwYXNzd29yZC5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9zbmUgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luVGVhY2hlclwiLCB7XHJcbiAgICAgICAgdGVhY2hlcl9pZDogZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3Bvc25lLmRhdGE7XHJcbiAgICAgIGNvbnN0IHRlYWNoZXIgPSBhd2FpdCBkYXRhLnRlYWNoZXI7XHJcblxyXG4gICAgICBpZiAocmVzcG9zbmUuc3RhdHVzID09PSA0MDAgfHwgIWRhdGEpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJJbnZhbGlkIENyZWRlbnRpYWxzIDEgISEhXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vTE9HSU4gVEVBSENFUiBUTyBTRUxFQ1QgU1VCSkVDVCBQQUdFXHJcbiAgICAgICAgLy8gcHJvcHMudXNlckxvZ2luSGFuZGxlcihzdHVkZW50KTtcclxuICAgICAgICAvLyByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nICEhIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicm93IGd4LTBcIlxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIgfX1cclxuICAgID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRlYWNoZXIgTG9naW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgbXQtNSBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlLWxpbmtcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiA1LCByaWdodDogMTAsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBIb21lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSBmcy0zIGZ3LWJvbGQgbXktNVwiPlxyXG4gICAgICAgICAgVGVhY2hlciBMb2dpblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGVhY2hlciBJRDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBzaW1wbGUtbGluayBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW4vcmVnaXN0ZXJUZWFjaGVyXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5ldyBUZWFjaGVyLCBSZWdpc3RlclxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5UZWFjaGVyO1xyXG4iLCJleHBvcnQgY29uc3QgdXNlckxvZ2luID0gKHVzZXIpID0+IHtcclxuICAvLyBjb25zb2xlLndhcm4oXCJkYXRhIHJlY2VpdmVkIGluIGFjdGlvblwiLCB1c2VyKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJVU0VSX0xPR0lOXCIsXHJcbiAgICBwYXlsb2FkOiB1c2VyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VMRUNUX09QVElPTlNcIixcclxuICAgIHBheWxvYWQ6IG9wdGlvbnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRRdWVzdGlvbnMgPSAocXVlc3Rpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogcXVlc3Rpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxRdWVzdGlvbnMgPSAobGVuZ3RoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1RPVEFMX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogbGVuZ3RoLFxyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VyTG9naW4iLCJjb25uZWN0IiwibG9naW5UZWFjaGVyIiwicHJvcHMiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInZhbGlkYXRlRm9ybSIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInJlc3Bvc25lIiwicG9zdCIsInRlYWNoZXJfaWQiLCJkYXRhIiwidGVhY2hlciIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY3Vyc29yIiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXIiLCJ0eXBlIiwicGF5bG9hZCIsInNlbGVjdE9wdGlvbnMiLCJvcHRpb25zIiwic2V0UXVlc3Rpb25zIiwicXVlc3Rpb25zIiwic2V0VG90YWxRdWVzdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9