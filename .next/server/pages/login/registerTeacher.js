"use strict";
(() => {
var exports = {};
exports.id = "pages/login/registerTeacher";
exports.ids = ["pages/login/registerTeacher"];
exports.modules = {

/***/ "./pages/login/registerTeacher.js":
/*!****************************************!*\
  !*** ./pages/login/registerTeacher.js ***!
  \****************************************/
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
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\login\\registerTeacher.js";










const registerTeacher = props => {
  // console.log("props from register page :", props);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: teacherName,
    1: setTeacherName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function validateForm() {
    return email.length > 0 && password.length > 0 && teacherName.length > 0;
  }

  async function handleSubmit() {
    try {
      const resposne = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:8080/registerTeacher", {
        teacher_id: email,
        teacher_name: teacherName,
        password: password
      });
      const data = await resposne.data; // receive : Registered Succesfully

      if (resposne.status === 400 || !data) {
        window.alert("Something went wrong during registration !!!");
      } else {
        const teacher = {
          teacher_id: email,
          teacher_name: teacherName
        };
        console.log("Teacher Registered", teacher); // props.userLoginHandler(student);       ********************
        // router.push("/test/selectTest");        *****************
      }
    } catch (err) {
      alert("fetch error");
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
        children: "Registration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "New Teacher Registration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            autoFocus: true,
            type: "text",
            value: teacherName,
            onChange: e => setTeacherName(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "password",
            value: password,
            onChange: e => setPassword(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
          block: "true",
          className: "mt-4" // type="submit" (This is not allowing action to work properly)
          ,
          disabled: !validateForm(),
          onClick: () => handleSubmit(),
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: () => router.push("/login/loginTeacher"),
        children: "Already registered, go to Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerTeacher);

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/registerTeacher.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUMsaUJBQWlCLEdBQUloQyxNQUFELElBQVk7QUFDM0MsU0FBTztBQUNMMEIsSUFBQUEsSUFBSSxFQUFFLHFCQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRTNCO0FBRkosR0FBUDtBQUlELENBTE07Ozs7Ozs7Ozs7QUN0QlA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL2xvZ2luL3JlZ2lzdGVyVGVhY2hlci5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlckxvZ2luIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJUZWFjaGVyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9wcyBmcm9tIHJlZ2lzdGVyIHBhZ2UgOlwiLCBwcm9wcyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0ZWFjaGVyTmFtZSwgc2V0VGVhY2hlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIHJldHVybiBlbWFpbC5sZW5ndGggPiAwICYmIHBhc3N3b3JkLmxlbmd0aCA+IDAgJiYgdGVhY2hlck5hbWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RlclRlYWNoZXJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAgICAgICAgIHRlYWNoZXJfbmFtZTogdGVhY2hlck5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9zbmUuZGF0YTsgLy8gcmVjZWl2ZSA6IFJlZ2lzdGVyZWQgU3VjY2VzZnVsbHlcclxuXHJcbiAgICAgIGlmIChyZXNwb3NuZS5zdGF0dXMgPT09IDQwMCB8fCAhZGF0YSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyByZWdpc3RyYXRpb24gISEhXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRlYWNoZXIgPSB7XHJcbiAgICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAgICAgICAgIHRlYWNoZXJfbmFtZTogdGVhY2hlck5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlYWNoZXIgUmVnaXN0ZXJlZFwiLCB0ZWFjaGVyKTtcclxuICAgICAgICAvLyBwcm9wcy51c2VyTG9naW5IYW5kbGVyKHN0dWRlbnQpOyAgICAgICAqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL3Rlc3Qvc2VsZWN0VGVzdFwiKTsgICAgICAgICoqKioqKioqKioqKioqKioqXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydChcImZldGNoIGVycm9yXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJyb3cgZ3gtMFwiXHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVnaXN0cmF0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG10LTUgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZS1saW5rXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogNSwgcmlnaHQ6IDEwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSG9tZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2UgZnMtMyBmdy1ib2xkIG15LTVcIj5cclxuICAgICAgICAgIE5ldyBUZWFjaGVyIFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwidGVhY2hlck5hbWVcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGVhY2hlck5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZWFjaGVyTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgLy8gdHlwZT1cInN1Ym1pdFwiIChUaGlzIGlzIG5vdCBhbGxvd2luZyBhY3Rpb24gdG8gd29yayBwcm9wZXJseSlcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWxpZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgc2ltcGxlLWxpbmsgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL2xvZ2luVGVhY2hlclwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbHJlYWR5IHJlZ2lzdGVyZWQsIGdvIHRvIExvZ2luXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8vIGNvbnN0IG1kdHAgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbi8vICAgdGVhY2hlckxvZ2luSGFuZGxlcjogKGRhdGEpID0+IGRpc3BhdGNoKHVzZXJMb2dpbihkYXRhKSksXHJcbi8vIH0pO1xyXG4vLyBjb25zdCBtc3RwID0gKHN0YXRlKSA9PiAoe1xyXG4vLyAgIHN0dWRlbnQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLFxyXG4vLyB9KTtcclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJUZWFjaGVyO1xyXG4iLCJleHBvcnQgY29uc3QgdXNlckxvZ2luID0gKHVzZXIpID0+IHtcclxuICAvLyBjb25zb2xlLndhcm4oXCJkYXRhIHJlY2VpdmVkIGluIGFjdGlvblwiLCB1c2VyKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJVU0VSX0xPR0lOXCIsXHJcbiAgICBwYXlsb2FkOiB1c2VyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VMRUNUX09QVElPTlNcIixcclxuICAgIHBheWxvYWQ6IG9wdGlvbnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRRdWVzdGlvbnMgPSAocXVlc3Rpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogcXVlc3Rpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxRdWVzdGlvbnMgPSAobGVuZ3RoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1RPVEFMX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogbGVuZ3RoLFxyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VyTG9naW4iLCJjb25uZWN0IiwicmVnaXN0ZXJUZWFjaGVyIiwicHJvcHMiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInRlYWNoZXJOYW1lIiwic2V0VGVhY2hlck5hbWUiLCJyb3V0ZXIiLCJ2YWxpZGF0ZUZvcm0iLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJyZXNwb3NuZSIsInBvc3QiLCJ0ZWFjaGVyX2lkIiwidGVhY2hlcl9uYW1lIiwiZGF0YSIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwidGVhY2hlciIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJtZXNzYWdlIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImN1cnNvciIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VyIiwidHlwZSIsInBheWxvYWQiLCJzZWxlY3RPcHRpb25zIiwib3B0aW9ucyIsInNldFF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsInNldFRvdGFsUXVlc3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==