"use strict";
(() => {
var exports = {};
exports.id = "pages/login/registerStudent";
exports.ids = ["pages/login/registerStudent"];
exports.modules = {

/***/ "./pages/login/registerStudent.js":
/*!****************************************!*\
  !*** ./pages/login/registerStudent.js ***!
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
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\login\\registerStudent.js";










const registerStudent = props => {
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
    0: studentName,
    1: setStudentName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function validateForm() {
    return email.length > 0 && password.length > 0 && studentName.length > 0;
  }

  async function handleSubmit() {
    try {
      const resposne = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:8080/registerStudent", {
        student_id: email,
        student_name: studentName,
        password: password
      });
      const data = await resposne.data; // receive : Registered Succesfully

      if (resposne.status === 400 || !data) {
        window.alert("Something went wrong during registration !!!");
      } else {
        const student = {
          student_id: email,
          student_name: studentName
        };
        props.userLoginHandler(student);
        router.push("/test/selectTest");
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
        lineNumber: 55,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "New Student Registration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          size: "lg",
          controlId: "studentName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            autoFocus: true,
            type: "text",
            value: studentName,
            onChange: e => setStudentName(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "password",
            value: password,
            onChange: e => setPassword(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
          lineNumber: 94,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: () => router.push("/login/loginStudent"),
        children: "Already registered, go to Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};

const mdtp = dispatch => ({
  userLoginHandler: data => dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.userLogin)(data))
});

const mstp = state => ({
  student: state.studentReducer
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mstp, mdtp)(registerStudent));

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/registerStudent.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tk07QUFRQSxNQUFNRyxhQUFhLEdBQUlDLE9BQUQsSUFBYTtBQUN4QyxTQUFPO0FBQ0xILElBQUFBLElBQUksRUFBRSxnQkFERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUVFO0FBRkosR0FBUDtBQUlELENBTE07QUFPQSxNQUFNQyxZQUFZLEdBQUlDLFNBQUQsSUFBZTtBQUN6QyxTQUFPO0FBQ0xMLElBQUFBLElBQUksRUFBRSxlQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUk7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1DLGlCQUFpQixHQUFJdEMsTUFBRCxJQUFZO0FBQzNDLFNBQU87QUFDTGdDLElBQUFBLElBQUksRUFBRSxxQkFERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUVqQztBQUZKLEdBQVA7QUFJRCxDQUxNOzs7Ozs7Ozs7O0FDdEJQOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvLi9wYWdlcy9sb2dpbi9yZWdpc3RlclN0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZXJMb2dpbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyU3R1ZGVudCA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSByZWdpc3RlciBwYWdlIDpcIiwgcHJvcHMpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3R1ZGVudE5hbWUsIHNldFN0dWRlbnROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICByZXR1cm4gZW1haWwubGVuZ3RoID4gMCAmJiBwYXNzd29yZC5sZW5ndGggPiAwICYmIHN0dWRlbnROYW1lLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb3NuZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVnaXN0ZXJTdHVkZW50XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3R1ZGVudF9pZDogZW1haWwsXHJcbiAgICAgICAgICBzdHVkZW50X25hbWU6IHN0dWRlbnROYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3Bvc25lLmRhdGE7IC8vIHJlY2VpdmUgOiBSZWdpc3RlcmVkIFN1Y2Nlc2Z1bGx5XHJcblxyXG4gICAgICBpZiAocmVzcG9zbmUuc3RhdHVzID09PSA0MDAgfHwgIWRhdGEpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgcmVnaXN0cmF0aW9uICEhIVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0ge1xyXG4gICAgICAgICAgc3R1ZGVudF9pZDogZW1haWwsXHJcbiAgICAgICAgICBzdHVkZW50X25hbWU6IHN0dWRlbnROYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvcHMudXNlckxvZ2luSGFuZGxlcihzdHVkZW50KTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydChcImZldGNoIGVycm9yXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJyb3cgZ3gtMFwiXHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVnaXN0cmF0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG10LTUgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZS1saW5rXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogNSwgcmlnaHQ6IDEwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSG9tZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2UgZnMtMyBmdy1ib2xkIG15LTVcIj5cclxuICAgICAgICAgIE5ldyBTdHVkZW50IFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwic3R1ZGVudE5hbWVcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c3R1ZGVudE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdHVkZW50TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgLy8gdHlwZT1cInN1Ym1pdFwiIChUaGlzIGlzIG5vdCBhbGxvd2luZyBhY3Rpb24gdG8gd29yayBwcm9wZXJseSlcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWxpZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgc2ltcGxlLWxpbmsgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL2xvZ2luU3R1ZGVudFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbHJlYWR5IHJlZ2lzdGVyZWQsIGdvIHRvIExvZ2luXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IG1kdHAgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgdXNlckxvZ2luSGFuZGxlcjogKGRhdGEpID0+IGRpc3BhdGNoKHVzZXJMb2dpbihkYXRhKSksXHJcbn0pO1xyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiAoe1xyXG4gIHN0dWRlbnQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtc3RwLCBtZHRwKShyZWdpc3RlclN0dWRlbnQpO1xyXG4iLCJleHBvcnQgY29uc3QgdXNlckxvZ2luID0gKHVzZXIpID0+IHtcclxuICAvLyBjb25zb2xlLndhcm4oXCJkYXRhIHJlY2VpdmVkIGluIGFjdGlvblwiLCB1c2VyKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJVU0VSX0xPR0lOXCIsXHJcbiAgICBwYXlsb2FkOiB1c2VyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VMRUNUX09QVElPTlNcIixcclxuICAgIHBheWxvYWQ6IG9wdGlvbnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRRdWVzdGlvbnMgPSAocXVlc3Rpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogcXVlc3Rpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxRdWVzdGlvbnMgPSAobGVuZ3RoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX1RPVEFMX1FVRVNUSU9OU1wiLFxyXG4gICAgcGF5bG9hZDogbGVuZ3RoLFxyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VyTG9naW4iLCJjb25uZWN0IiwicmVnaXN0ZXJTdHVkZW50IiwicHJvcHMiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN0dWRlbnROYW1lIiwic2V0U3R1ZGVudE5hbWUiLCJyb3V0ZXIiLCJ2YWxpZGF0ZUZvcm0iLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJyZXNwb3NuZSIsInBvc3QiLCJzdHVkZW50X2lkIiwic3R1ZGVudF9uYW1lIiwiZGF0YSIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0Iiwic3R1ZGVudCIsInVzZXJMb2dpbkhhbmRsZXIiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY3Vyc29yIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWR0cCIsImRpc3BhdGNoIiwibXN0cCIsInN0YXRlIiwic3R1ZGVudFJlZHVjZXIiLCJ1c2VyIiwidHlwZSIsInBheWxvYWQiLCJzZWxlY3RPcHRpb25zIiwib3B0aW9ucyIsInNldFF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsInNldFRvdGFsUXVlc3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==