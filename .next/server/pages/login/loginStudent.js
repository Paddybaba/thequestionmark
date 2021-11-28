"use strict";
(() => {
var exports = {};
exports.id = "pages/login/loginStudent";
exports.ids = ["pages/login/loginStudent"];
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

/***/ "./pages/login/loginStudent.js":
/*!*************************************!*\
  !*** ./pages/login/loginStudent.js ***!
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
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\login\\loginStudent.js";











const loginPage = props => {
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
      const resposne = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${_api_mypaths__WEBPACK_IMPORTED_MODULE_8__.default}/login`, {
        student_id: email,
        password: password
      });
      const data = await resposne.data;
      const student = await data.student;
      console.log("studnet", student);

      if (resposne.status === 400 || !data) {
        window.alert("Invalid Credentials 1 !!!");
      } else {
        props.userLoginHandler(student);
        router.push("/test/selectTest");
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
        children: "Student Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "Student Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          size: "lg",
          controlId: "email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Student ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: () => router.push("/login/registerStudent"),
        children: "New Student, Register"
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

const mdtp = dispatch => ({
  userLoginHandler: data => dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.userLogin)(data))
});

const mstp = state => ({
  student: state.studentReducer
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mstp, mdtp)(loginPage));

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/loginStudent.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL2FwaS9teXBhdGhzLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL2xvZ2luL2xvZ2luU3R1ZGVudC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IFwiaHR0cHM6Ly9xdWl6LXNlcnZlci1wYWRkeS5oZXJva3VhcHAuY29tXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHBhdGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZXJMb2dpbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIi4uL2FwaS9teXBhdGhzXCI7XHJcblxyXG5jb25zdCBsb2dpblBhZ2UgPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gbG9naW4gcGFnZSA6XCIsIHByb3BzKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgcmV0dXJuIGVtYWlsLmxlbmd0aCA+IDAgJiYgcGFzc3dvcmQubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChgJHtwYXRofS9sb2dpbmAsIHtcclxuICAgICAgICBzdHVkZW50X2lkOiBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9zbmUuZGF0YTtcclxuICAgICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IGRhdGEuc3R1ZGVudDtcclxuICAgICAgY29uc29sZS5sb2coXCJzdHVkbmV0XCIsIHN0dWRlbnQpO1xyXG4gICAgICBpZiAocmVzcG9zbmUuc3RhdHVzID09PSA0MDAgfHwgIWRhdGEpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJJbnZhbGlkIENyZWRlbnRpYWxzIDEgISEhXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb3BzLnVzZXJMb2dpbkhhbmRsZXIoc3R1ZGVudCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvdGVzdC9zZWxlY3RUZXN0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyAhISFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInJvdyBneC0wXCJcclxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIGJhY2tncm91bmRDb2xvcjogXCJob25leWRld1wiIH19XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TdHVkZW50IExvZ2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG10LTUgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZS1saW5rXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogNSwgcmlnaHQ6IDEwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSG9tZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2UgZnMtMyBmdy1ib2xkIG15LTVcIj5cclxuICAgICAgICAgIFN0dWRlbnQgTG9naW5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlN0dWRlbnQgSUQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgLy8gdHlwZT1cInN1Ym1pdFwiIChUaGlzIGlzIG5vdCBhbGxvd2luZyBhY3Rpb24gdG8gd29yayBwcm9wZXJseSlcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWxpZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgc2ltcGxlLWxpbmsgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL3JlZ2lzdGVyU3R1ZGVudFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXcgU3R1ZGVudCwgUmVnaXN0ZXJcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuICB1c2VyTG9naW5IYW5kbGVyOiAoZGF0YSkgPT4gZGlzcGF0Y2godXNlckxvZ2luKGRhdGEpKSxcclxufSk7XHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbiAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHAsIG1kdHApKGxvZ2luUGFnZSk7XHJcbiIsImV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAodXNlcikgPT4ge1xyXG4gIC8vIGNvbnNvbGUud2FybihcImRhdGEgcmVjZWl2ZWQgaW4gYWN0aW9uXCIsIHVzZXIpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlVTRVJfTE9HSU5cIixcclxuICAgIHBheWxvYWQ6IHVzZXIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJTRUxFQ1RfT1BUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogb3B0aW9ucyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFF1ZXN0aW9ucyA9IChxdWVzdGlvbnMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJTRVRfUVVFU1RJT05TXCIsXHJcbiAgICBwYXlsb2FkOiBxdWVzdGlvbnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFF1ZXN0aW9ucyA9IChsZW5ndGgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJTRVRfVE9UQUxfUVVFU1RJT05TXCIsXHJcbiAgICBwYXlsb2FkOiBsZW5ndGgsXHJcbiAgfTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJwYXRoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VyTG9naW4iLCJjb25uZWN0IiwibG9naW5QYWdlIiwicHJvcHMiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInZhbGlkYXRlRm9ybSIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInJlc3Bvc25lIiwicG9zdCIsInN0dWRlbnRfaWQiLCJkYXRhIiwic3R1ZGVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJ3aW5kb3ciLCJhbGVydCIsInVzZXJMb2dpbkhhbmRsZXIiLCJwdXNoIiwiZXJyIiwibWVzc2FnZSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjdXJzb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtZHRwIiwiZGlzcGF0Y2giLCJtc3RwIiwic3RhdGUiLCJzdHVkZW50UmVkdWNlciIsInVzZXIiLCJ0eXBlIiwicGF5bG9hZCIsInNlbGVjdE9wdGlvbnMiLCJvcHRpb25zIiwic2V0UXVlc3Rpb25zIiwicXVlc3Rpb25zIiwic2V0VG90YWxRdWVzdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9