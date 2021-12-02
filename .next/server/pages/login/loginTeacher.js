"use strict";
(() => {
var exports = {};
exports.id = "pages/login/loginTeacher";
exports.ids = ["pages/login/loginTeacher"];
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
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\DEV\\MCQ\\thequestionmark\\pages\\login\\loginTeacher.js";











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
      const resposne = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${_api_mypaths__WEBPACK_IMPORTED_MODULE_8__.default}/loginTeacher`, {
        teacher_id: email,
        password: password
      });
      const data = await resposne.data;
      const teacher = await data.teacher;
      localStorage.setItem("teacher", JSON.stringify(teacher)); // console.log("data", teacher.teacher_name)

      if (resposne.status === 400 || !data) {
        window.alert("Invalid Credentials 1 !!!");
      } else {
        //LOGIN TEAHCER TO SELECT SUBJECT PAGE
        // props.userLoginHandler(student);
        router.push("/question/addQuestion");
      }
    } catch (err) {
      alert("Something went wrong !!!");
      console.log(err.message);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "row gx-0",
    style: {
      height: "100vh",
      backgroundColor: "honeydew"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {
        children: "Teacher Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "col-7 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
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
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "Teacher Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          size: "lg",
          controlId: "email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Teacher ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            autoFocus: true,
            type: "email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "password",
            value: password,
            onChange: e => setPassword(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
          block: "true",
          className: "mt-4" // type="submit" (This is not allowing action to work properly)
          ,
          disabled: !validateForm(),
          onClick: () => handleSubmit(),
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: () => router.push("/login/registerTeacher", teacher = teacher),
        children: "New Teacher, Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFqRCxDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwREQsQ0ExRkQ7O0FBNEZBLGlFQUFlZCxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHTyxNQUFNRixTQUFTLEdBQUlzQyxJQUFELElBQVU7QUFDakM7QUFDQSxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQsQ0FOTTtBQVFBLE1BQU1HLGFBQWEsR0FBSUMsT0FBRCxJQUFhO0FBQ3hDLFNBQU87QUFDTEgsSUFBQUEsSUFBSSxFQUFFLGdCQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUU7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1DLFlBQVksR0FBSUMsU0FBRCxJQUFlO0FBQ3pDLFNBQU87QUFDTEwsSUFBQUEsSUFBSSxFQUFFLGVBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFSTtBQUZKLEdBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTUMsaUJBQWlCLEdBQUluQyxNQUFELElBQVk7QUFDM0MsU0FBTztBQUNMNkIsSUFBQUEsSUFBSSxFQUFFLHFCQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRTlCO0FBRkosR0FBUDtBQUlELENBTE07Ozs7Ozs7Ozs7QUN0QlA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL2FwaS9teXBhdGhzLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL2xvZ2luL2xvZ2luVGVhY2hlci5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IFwiaHR0cHM6Ly9xdWl6LXNlcnZlci1wYWRkeS5oZXJva3VhcHAuY29tXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHBhdGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZXJMb2dpbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIi4uL2FwaS9teXBhdGhzXCI7XHJcbmNvbnN0IGxvZ2luVGVhY2hlciA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSBsb2dpbiBwYWdlIDpcIiwgcHJvcHMpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICByZXR1cm4gZW1haWwubGVuZ3RoID4gMCAmJiBwYXNzd29yZC5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9zbmUgPSBhd2FpdCBheGlvcy5wb3N0KGAke3BhdGh9L2xvZ2luVGVhY2hlcmAsIHtcclxuICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9zbmUuZGF0YTtcclxuICAgICAgY29uc3QgdGVhY2hlciA9IGF3YWl0IGRhdGEudGVhY2hlcjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZWFjaGVyXCIsIEpTT04uc3RyaW5naWZ5KHRlYWNoZXIpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIHRlYWNoZXIudGVhY2hlcl9uYW1lKVxyXG4gICAgICBpZiAocmVzcG9zbmUuc3RhdHVzID09PSA0MDAgfHwgIWRhdGEpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJJbnZhbGlkIENyZWRlbnRpYWxzIDEgISEhXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vTE9HSU4gVEVBSENFUiBUTyBTRUxFQ1QgU1VCSkVDVCBQQUdFXHJcbiAgICAgICAgLy8gcHJvcHMudXNlckxvZ2luSGFuZGxlcihzdHVkZW50KTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9xdWVzdGlvbi9hZGRRdWVzdGlvblwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgISEhXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJyb3cgZ3gtMFwiXHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGVhY2hlciBMb2dpbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBtdC01IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGUtbGlua1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDUsIHJpZ2h0OiAxMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIGZzLTMgZnctYm9sZCBteS01XCI+XHJcbiAgICAgICAgICBUZWFjaGVyIExvZ2luXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5UZWFjaGVyIElEPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIC8vIHR5cGU9XCJzdWJtaXRcIiAoVGhpcyBpcyBub3QgYWxsb3dpbmcgYWN0aW9uIHRvIHdvcmsgcHJvcGVybHkpXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshdmFsaWRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHNpbXBsZS1saW5rIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpbi9yZWdpc3RlclRlYWNoZXJcIiwgKHRlYWNoZXIgPSB0ZWFjaGVyKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXcgVGVhY2hlciwgUmVnaXN0ZXJcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luVGVhY2hlcjtcclxuIiwiZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgLy8gY29uc29sZS53YXJuKFwiZGF0YSByZWNlaXZlZCBpbiBhY3Rpb25cIiwgdXNlcik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiVVNFUl9MT0dJTlwiLFxyXG4gICAgcGF5bG9hZDogdXNlcixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFTEVDVF9PUFRJT05TXCIsXHJcbiAgICBwYXlsb2FkOiBvcHRpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UXVlc3Rpb25zID0gKHF1ZXN0aW9ucykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFVF9RVUVTVElPTlNcIixcclxuICAgIHBheWxvYWQ6IHF1ZXN0aW9ucyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFRvdGFsUXVlc3Rpb25zID0gKGxlbmd0aCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFVF9UT1RBTF9RVUVTVElPTlNcIixcclxuICAgIHBheWxvYWQ6IGxlbmd0aCxcclxuICB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInBhdGgiLCJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkZvcm0iLCJCdXR0b24iLCJheGlvcyIsInVzZVJvdXRlciIsInVzZXJMb2dpbiIsImNvbm5lY3QiLCJsb2dpblRlYWNoZXIiLCJwcm9wcyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicmVzcG9zbmUiLCJwb3N0IiwidGVhY2hlcl9pZCIsImRhdGEiLCJ0ZWFjaGVyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJ3aW5kb3ciLCJhbGVydCIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjdXJzb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VyIiwidHlwZSIsInBheWxvYWQiLCJzZWxlY3RPcHRpb25zIiwib3B0aW9ucyIsInNldFF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsInNldFRvdGFsUXVlc3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==