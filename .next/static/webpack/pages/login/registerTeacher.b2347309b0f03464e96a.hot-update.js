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
                }; // props.userLoginHandler(student);       ********************
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
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "New Teacher Registration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
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
            lineNumber: 71,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          size: "lg",
          controlId: "email",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "password",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "password",
            value: password,
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
          block: "true",
          className: "mt-4" // type="submit" (This is not allowing action to work properly)
          ,
          disabled: !validateForm(),
          onClick: function onClick() {
            return console.log(teacherName);
          },
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: function onClick() {
          return router.push("/login/loginTeacher");
        },
        children: "Already registered, go to Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4vcmVnaXN0ZXJUZWFjaGVyLmIyMzQ3MzA5YjBmMDM0NjRlOTZhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNqQztBQUNBLGtCQUEwQlQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWdDWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPWSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFzQ2IsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT2MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCOztBQUVBLFdBQVNZLFlBQVQsR0FBd0I7QUFDdEIsV0FBT1AsS0FBSyxDQUFDUSxNQUFOLEdBQWUsQ0FBZixJQUFvQk4sUUFBUSxDQUFDTSxNQUFULEdBQWtCLENBQXRDLElBQTJDSixXQUFXLENBQUNJLE1BQVosR0FBcUIsQ0FBdkU7QUFDRDs7QUFUZ0MsV0FXbEJDLFlBWGtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdSQVdqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRTJCZixpREFBQSxDQUNyQix1Q0FEcUIsRUFFckI7QUFDRWlCLGdCQUFBQSxVQUFVLEVBQUVYLEtBRGQ7QUFFRVksZ0JBQUFBLFlBQVksRUFBRVIsV0FGaEI7QUFHRUYsZ0JBQUFBLFFBQVEsRUFBRUE7QUFIWixlQUZxQixDQUYzQjs7QUFBQTtBQUVVVyxjQUFBQSxRQUZWO0FBQUE7QUFBQSxxQkFVdUJBLFFBQVEsQ0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxpRUFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFLLEVBQUU3QixRQUZUO0FBR0Usb0JBQVEsRUFBRSxrQkFBQzJCLENBQUQ7QUFBQSxxQkFBTzFCLFdBQVcsQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkYsZUEwQkUsOERBQUMsNERBQUQ7QUFDRSxlQUFLLEVBQUMsTUFEUjtBQUVFLG1CQUFTLEVBQUMsTUFGWixDQUdFO0FBSEY7QUFJRSxrQkFBUSxFQUFFLENBQUN4QixZQUFZLEVBSnpCO0FBS0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNWSxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLFdBQVosQ0FBTjtBQUFBLFdBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBK0NFO0FBQ0UsaUJBQVMsRUFBQyxtQkFEWjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxNQUFNLENBQUNzQixJQUFQLENBQVkscUJBQVosQ0FBTjtBQUFBLFNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRUQsQ0F2R0QsRUF3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0E3R005QjtVQUtXSDs7O0FBeUdqQiwrREFBZUcsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi9yZWdpc3RlclRlYWNoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlckxvZ2luIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJUZWFjaGVyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9wcyBmcm9tIHJlZ2lzdGVyIHBhZ2UgOlwiLCBwcm9wcyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0ZWFjaGVyTmFtZSwgc2V0VGVhY2hlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIHJldHVybiBlbWFpbC5sZW5ndGggPiAwICYmIHBhc3N3b3JkLmxlbmd0aCA+IDAgJiYgdGVhY2hlck5hbWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RlclRlYWNoZXJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAgICAgICAgIHRlYWNoZXJfbmFtZTogdGVhY2hlck5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9zbmUuZGF0YTsgLy8gcmVjZWl2ZSA6IFJlZ2lzdGVyZWQgU3VjY2VzZnVsbHlcclxuXHJcbiAgICAgIGlmIChyZXNwb3NuZS5zdGF0dXMgPT09IDQwMCB8fCAhZGF0YSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyByZWdpc3RyYXRpb24gISEhXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRlYWNoZXIgPSB7XHJcbiAgICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAgICAgICAgIHRlYWNoZXJfbmFtZTogdGVhY2hlck5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBwcm9wcy51c2VyTG9naW5IYW5kbGVyKHN0dWRlbnQpOyAgICAgICAqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL3Rlc3Qvc2VsZWN0VGVzdFwiKTsgICAgICAgICoqKioqKioqKioqKioqKioqXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydChcImZldGNoIGVycm9yXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJyb3cgZ3gtMFwiXHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVnaXN0cmF0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG10LTUgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZS1saW5rXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogNSwgcmlnaHQ6IDEwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSG9tZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2UgZnMtMyBmdy1ib2xkIG15LTVcIj5cclxuICAgICAgICAgIE5ldyBUZWFjaGVyIFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwidGVhY2hlck5hbWVcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGVhY2hlck5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZWFjaGVyTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyh0ZWFjaGVyTmFtZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgc2ltcGxlLWxpbmsgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL2xvZ2luVGVhY2hlclwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbHJlYWR5IHJlZ2lzdGVyZWQsIGdvIHRvIExvZ2luXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8vIGNvbnN0IG1kdHAgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbi8vICAgdGVhY2hlckxvZ2luSGFuZGxlcjogKGRhdGEpID0+IGRpc3BhdGNoKHVzZXJMb2dpbihkYXRhKSksXHJcbi8vIH0pO1xyXG4vLyBjb25zdCBtc3RwID0gKHN0YXRlKSA9PiAoe1xyXG4vLyAgIHN0dWRlbnQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLFxyXG4vLyB9KTtcclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJUZWFjaGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VyTG9naW4iLCJjb25uZWN0IiwicmVnaXN0ZXJUZWFjaGVyIiwicHJvcHMiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInRlYWNoZXJOYW1lIiwic2V0VGVhY2hlck5hbWUiLCJyb3V0ZXIiLCJ2YWxpZGF0ZUZvcm0iLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwb3N0IiwidGVhY2hlcl9pZCIsInRlYWNoZXJfbmFtZSIsInJlc3Bvc25lIiwiZGF0YSIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwidGVhY2hlciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImN1cnNvciIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9