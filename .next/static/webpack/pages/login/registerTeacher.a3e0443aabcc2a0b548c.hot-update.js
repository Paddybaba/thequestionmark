"use strict";
self["webpackHotUpdate_N_E"]("pages/login/registerTeacher",{

/***/ "./pages/login/registerTeacher.js":
/*!****************************************!*\
  !*** ./pages/login/registerTeacher.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\login\\registerTeacher.js",
    _this = undefined,
    _s = $RefreshSig$();












var registerTeacher = function registerTeacher(props) {
  _s();

  // console.log("props from register page :", props);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      teacherName = _useState3[0],
      setTeacherName = _useState3[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function validateForm() {
    return email.length > 0 && password.length > 0 && teacherName.length > 0;
  }

  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var resposne, data, teacher;
      return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:8080/registerTeacher", {
                teacher_id: email,
                teacher_name: teacherName,
                password: password
              });

            case 3:
              resposne = _context.sent;
              _context.next = 6;
              return resposne.data;

            case 6:
              data = _context.sent;

              // receive : Registered Succesfully
              if (resposne.status === 400 || !data) {
                window.alert("Something went wrong during registration !!!");
              } else {
                teacher = {
                  teacher_id: email,
                  teacher_name: teacherName
                };
                console.log("Teacher Registered", teacher); // props.userLoginHandler(student);       ********************
                // router.push("/test/selectTest");        *****************
              }

              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert("fetch error");
              console.log(_context.t0.message);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "row gx-0",
    style: {
      height: "100vh",
      backgroundColor: "honeydew"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Registration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "col-7 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "simple-link",
        style: {
          position: "absolute",
          top: 5,
          right: 10,
          cursor: "pointer"
        },
        onClick: function onClick() {
          return router.push("/");
        },
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "New Teacher Registration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            autoFocus: true,
            type: "text",
            value: teacherName,
            onChange: function onChange(e) {
              return setTeacherName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "password",
            value: password,
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
          block: "true",
          className: "mt-4" // type="submit" (This is not allowing action to work properly)
          ,
          disabled: !validateForm(),
          onClick: function onClick() {
            return handleSubmit();
          },
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: function onClick() {
          return router.push("/login/loginTeacher");
        },
        children: "Already registered, go to Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, _this);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


_s(registerTeacher, "xn2Q34K+o0ScRT/jmqE1GcodpE0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (registerTeacher);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4vcmVnaXN0ZXJUZWFjaGVyLmEzZTA0NDNhYWJjYzJhMGI1NDhjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNqQztBQUNBLGtCQUEwQlQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWdDWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPWSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFzQ2IsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT2MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCOztBQUVBLFdBQVNZLFlBQVQsR0FBd0I7QUFDdEIsV0FBT1AsS0FBSyxDQUFDUSxNQUFOLEdBQWUsQ0FBZixJQUFvQk4sUUFBUSxDQUFDTSxNQUFULEdBQWtCLENBQXRDLElBQTJDSixXQUFXLENBQUNJLE1BQVosR0FBcUIsQ0FBdkU7QUFDRDs7QUFUZ0MsV0FXbEJDLFlBWGtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdSQVdqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRTJCZixpREFBQSxDQUNyQix1Q0FEcUIsRUFFckI7QUFDRWlCLGdCQUFBQSxVQUFVLEVBQUVYLEtBRGQ7QUFFRVksZ0JBQUFBLFlBQVksRUFBRVIsV0FGaEI7QUFHRUYsZ0JBQUFBLFFBQVEsRUFBRUE7QUFIWixlQUZxQixDQUYzQjs7QUFBQTtBQUVVVyxjQUFBQSxRQUZWO0FBQUE7QUFBQSxxQkFVdUJBLFFBQVEsQ0FB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UyxFQUFDLE1BQXRCO0FBQTZCLGNBQUksRUFBQyxJQUFsQztBQUF1QyxtQkFBUyxFQUFDLFVBQWpEO0FBQUEsa0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxpRUFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFLLEVBQUU3QixRQUZUO0FBR0Usb0JBQVEsRUFBRSxrQkFBQzJCLENBQUQ7QUFBQSxxQkFBTzFCLFdBQVcsQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkYsZUEwQkUsOERBQUMsNERBQUQ7QUFDRSxlQUFLLEVBQUMsTUFEUjtBQUVFLG1CQUFTLEVBQUMsTUFGWixDQUdFO0FBSEY7QUFJRSxrQkFBUSxFQUFFLENBQUN4QixZQUFZLEVBSnpCO0FBS0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRSxZQUFZLEVBQWxCO0FBQUEsV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUErQ0U7QUFDRSxpQkFBUyxFQUFDLG1CQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1ILE1BQU0sQ0FBQ3NCLElBQVAsQ0FBWSxxQkFBWixDQUFOO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdFRCxDQXhHRCxFQXlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTlHTTlCO1VBS1dIOzs7QUEwR2pCLCtEQUFlRyxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luL3JlZ2lzdGVyVGVhY2hlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VyTG9naW4gfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCByZWdpc3RlclRlYWNoZXIgPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gcmVnaXN0ZXIgcGFnZSA6XCIsIHByb3BzKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RlYWNoZXJOYW1lLCBzZXRUZWFjaGVyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgcmV0dXJuIGVtYWlsLmxlbmd0aCA+IDAgJiYgcGFzc3dvcmQubGVuZ3RoID4gMCAmJiB0ZWFjaGVyTmFtZS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9zbmUgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlZ2lzdGVyVGVhY2hlclwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRlYWNoZXJfaWQ6IGVtYWlsLFxyXG4gICAgICAgICAgdGVhY2hlcl9uYW1lOiB0ZWFjaGVyTmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb3NuZS5kYXRhOyAvLyByZWNlaXZlIDogUmVnaXN0ZXJlZCBTdWNjZXNmdWxseVxyXG5cclxuICAgICAgaWYgKHJlc3Bvc25lLnN0YXR1cyA9PT0gNDAwIHx8ICFkYXRhKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIHJlZ2lzdHJhdGlvbiAhISFcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IHtcclxuICAgICAgICAgIHRlYWNoZXJfaWQ6IGVtYWlsLFxyXG4gICAgICAgICAgdGVhY2hlcl9uYW1lOiB0ZWFjaGVyTmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVhY2hlciBSZWdpc3RlcmVkXCIsIHRlYWNoZXIpO1xyXG4gICAgICAgIC8vIHByb3BzLnVzZXJMb2dpbkhhbmRsZXIoc3R1ZGVudCk7ICAgICAgICoqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvdGVzdC9zZWxlY3RUZXN0XCIpOyAgICAgICAgKioqKioqKioqKioqKioqKipcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGFsZXJ0KFwiZmV0Y2ggZXJyb3JcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInJvdyBneC0wXCJcclxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIGJhY2tncm91bmRDb2xvcjogXCJob25leWRld1wiIH19XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SZWdpc3RyYXRpb248L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgbXQtNSBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlLWxpbmtcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiA1LCByaWdodDogMTAsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBIb21lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSBmcy0zIGZ3LWJvbGQgbXktNVwiPlxyXG4gICAgICAgICAgTmV3IFRlYWNoZXIgUmVnaXN0cmF0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ0ZWFjaGVyTmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZWFjaGVyTmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRlYWNoZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBzaW1wbGUtbGluayBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW4vbG9naW5UZWFjaGVyXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFscmVhZHkgcmVnaXN0ZXJlZCwgZ28gdG8gTG9naW5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8gY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuLy8gICB0ZWFjaGVyTG9naW5IYW5kbGVyOiAoZGF0YSkgPT4gZGlzcGF0Y2godXNlckxvZ2luKGRhdGEpKSxcclxuLy8gfSk7XHJcbi8vIGNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbi8vIH0pO1xyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclRlYWNoZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkZvcm0iLCJCdXR0b24iLCJheGlvcyIsInVzZVJvdXRlciIsInVzZXJMb2dpbiIsImNvbm5lY3QiLCJyZWdpc3RlclRlYWNoZXIiLCJwcm9wcyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidGVhY2hlck5hbWUiLCJzZXRUZWFjaGVyTmFtZSIsInJvdXRlciIsInZhbGlkYXRlRm9ybSIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInBvc3QiLCJ0ZWFjaGVyX2lkIiwidGVhY2hlcl9uYW1lIiwicmVzcG9zbmUiLCJkYXRhIiwic3RhdHVzIiwid2luZG93IiwiYWxlcnQiLCJ0ZWFjaGVyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY3Vyc29yIiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=