"use strict";
self["webpackHotUpdate_N_E"]("pages/test/selectTest",{

/***/ "./pages/test/selectTest.js":
/*!**********************************!*\
  !*** ./pages/test/selectTest.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-autocomplete-hint */ "./node_modules/react-autocomplete-hint/dist/src/index.js");
/* harmony import */ var react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete_hint__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\selectTest.js",
    _this = undefined,
    _s = $RefreshSig$();














var selectTest = function selectTest(props) {
  _s();

  console.log("select page props", props);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      authorHint = _useState[0],
      setAuthorHint = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.student.user.student_name),
      mystudent = _useState2[0],
      setStudent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Science"),
      subject = _useState3[0],
      setSubject = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      author = _useState4[0],
      setAuthor = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      year = _useState5[0],
      setYear = _useState5[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, authors;
    return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_7___default().post("".concat(_api_mypaths__WEBPACK_IMPORTED_MODULE_8__.default, "/getauthors"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.data;

          case 5:
            authors = _context.sent;
            console.log("authors", authors);
            setAuthorHint(authors);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  function validateForm() {
    return subject.length > 0 && author.length > 0 && year > 0;
  }

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var options, questions;
      return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                subject: subject,
                author: author,
                year: year
              };
              props.selectOptionsHandler(options);
              _context2.next = 4;
              return requestQuestions(options);

            case 4:
              questions = _context2.sent;

              if (questions.length > 0) {
                props.setQuestionsHandler(questions);
                router.push("/test/start_test");
              } else {
                alert("NO tests available");
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }(); // console.log(props);


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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
            className: "text-center mt-4",
            children: "Select your test paper"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "col-10 mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
                  size: "lg",
                  controlId: "subject",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
                    children: "Subject"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
                    className: "form-select",
                    "aria-label": "Default select example",
                    onChange: function onChange(e) {
                      return setSubject(e.target.value);
                    },
                    defaultValue: "Science",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "Mathematics",
                      children: "Mathematics"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "General Knowledge",
                      children: "General Knowledge"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "Science",
                      children: "Science"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                      value: "English",
                      children: "English"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
                  size: "lg",
                  controlId: "author",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
                    children: "Select Author"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
                    className: "form-select",
                    "aria-label": "Default select example",
                    onChange: function onChange(e) {
                      return setAuthor(e.target.value);
                    },
                    defaultValue: "Science",
                    children: authorHint.map(function (author, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        value: author,
                        children: author
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 27
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
                  className: "mt-4",
                  size: "lg",
                  controlId: "year",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
                    children: "Year"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
                    type: "text",
                    value: year,
                    onChange: function onChange(e) {
                      return setYear(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
                  block: "true",
                  className: "mt-4" // disabled={!validateForm()}
                  ,
                  onClick: function onClick() {
                    return onSubmit();
                  },
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
                block: "true",
                className: "mt-4" // type="submit" (This is not allowing action to work properly)
                ,
                onClick: function onClick() {
                  return router.push("/login/loginStudent");
                },
                children: "Log Out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(selectTest, "FIywwOaoWiaEsHRkvsj3O0OnUeA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

var requestQuestions = /*#__PURE__*/function () {
  var _ref3 = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(options) {
    var response, data;
    return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_7___default().post("".concat(_api_mypaths__WEBPACK_IMPORTED_MODULE_8__.default, "/getquest"), options);

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.data;

          case 5:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function requestQuestions(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var mdtp = function mdtp(dispatch) {
  return {
    selectOptionsHandler: function selectOptionsHandler(options) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.selectOptions)(options));
    },
    setQuestionsHandler: function setQuestionsHandler(questions) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.setQuestions)(questions));
    }
  };
};

var mstp = function mstp(state) {
  return {
    student: state.studentReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mstp, mdtp)(selectTest));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9zZWxlY3RUZXN0LjdlMGMxNjFmYzYzYzVjNzlhZWNjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsS0FBakM7O0FBQ0Esa0JBQW9DWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPYyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnQ2YsK0NBQVEsQ0FBQ1csS0FBSyxDQUFDSyxPQUFOLENBQWNDLElBQWQsQ0FBbUJDLFlBQXBCLENBQXhDO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxVQUFsQjs7QUFDQSxtQkFBOEJwQiwrQ0FBUSxDQUFDLFNBQUQsQ0FBdEM7QUFBQSxNQUFPcUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBNEJ0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPdUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT3lCLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBM0IsRUFBQUEsZ0RBQVMsMlFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZVMsaURBQUEsV0FBY0MsaURBQWQsaUJBRGY7O0FBQUE7QUFDRm1CLFlBQUFBLFFBREU7QUFBQTtBQUFBLG1CQUVjQSxRQUFRLENBQUNDLElBRnZCOztBQUFBO0FBRUZDLFlBQUFBLE9BRkU7QUFHUmxCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFB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RDtBQUFBLFNBQWU7QUFDMUJkLElBQUFBLG9CQUFvQixFQUFFLDhCQUFDRCxPQUFEO0FBQUEsYUFBYWUsUUFBUSxDQUFDaEQsNkRBQWEsQ0FBQ2lDLE9BQUQsQ0FBZCxDQUFyQjtBQUFBLEtBREk7QUFFMUJJLElBQUFBLG1CQUFtQixFQUFFLDZCQUFDRCxTQUFEO0FBQUEsYUFBZVksUUFBUSxDQUFDL0MsNERBQVksQ0FBQ21DLFNBQUQsQ0FBYixDQUF2QjtBQUFBO0FBRkssR0FBZjtBQUFBLENBQWI7O0FBSUEsSUFBTWEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkJwQyxJQUFBQSxPQUFPLEVBQUVvQyxLQUFLLENBQUNDO0FBRFEsR0FBWjtBQUFBLENBQWI7O0FBR0EsK0RBQWVwRCxvREFBTyxDQUFDa0QsSUFBRCxFQUFPRixJQUFQLENBQVAsQ0FBb0J2QyxVQUFwQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3Qvc2VsZWN0VGVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdE9wdGlvbnMsIHNldFF1ZXN0aW9ucyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIaW50IH0gZnJvbSBcInJlYWN0LWF1dG9jb21wbGV0ZS1oaW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIi4uL2FwaS9teXBhdGhzXCI7XHJcbmNvbnN0IHNlbGVjdFRlc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInNlbGVjdCBwYWdlIHByb3BzXCIsIHByb3BzKTtcclxuICBjb25zdCBbYXV0aG9ySGludCwgc2V0QXV0aG9ySGludF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW215c3R1ZGVudCwgc2V0U3R1ZGVudF0gPSB1c2VTdGF0ZShwcm9wcy5zdHVkZW50LnVzZXIuc3R1ZGVudF9uYW1lKTtcclxuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZShcIlNjaWVuY2VcIik7XHJcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3BhdGh9L2dldGF1dGhvcnNgKTtcclxuICAgIGNvbnN0IGF1dGhvcnMgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coXCJhdXRob3JzXCIsIGF1dGhvcnMpO1xyXG4gICAgc2V0QXV0aG9ySGludChhdXRob3JzKTtcclxuICB9LCBbXSk7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgcmV0dXJuIHN1YmplY3QubGVuZ3RoID4gMCAmJiBhdXRob3IubGVuZ3RoID4gMCAmJiB5ZWFyID4gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGF1dGhvcixcclxuICAgICAgeWVhcixcclxuICAgIH07XHJcbiAgICBwcm9wcy5zZWxlY3RPcHRpb25zSGFuZGxlcihvcHRpb25zKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IHJlcXVlc3RRdWVzdGlvbnMob3B0aW9ucyk7XHJcbiAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcHJvcHMuc2V0UXVlc3Rpb25zSGFuZGxlcihxdWVzdGlvbnMpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi90ZXN0L3N0YXJ0X3Rlc3RcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5PIHRlc3RzIGF2YWlsYWJsZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIsIGhlaWdodDogXCIxMDB2aFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLTEwIHRleHQtY2VudGVyIG14LWF1dG8gbXQtNVwiPlxyXG4gICAgICAgICAgICAgIFdlbGNvbWUgOiB7bXlzdHVkZW50fVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlNlbGVjdCB5b3VyIHRlc3QgcGFwZXI8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwic3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlN1YmplY3Q8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXRoZW1hdGljc1wiPk1hdGhlbWF0aWNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhbCBLbm93bGVkZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjaWVuY2VcIj5TY2llbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRW5nbGlzaFwiPkVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5TZWxlY3QgQXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHthdXRob3JIaW50Lm1hcCgoYXV0aG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2F1dGhvcn0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHZW5lcmFsIEtub3dsZWRnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmFsIEtub3dsZWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2NpZW5jZVwiPlNjaWVuY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF1dGhvcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF1dGhvcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SGludCBvcHRpb25zPXthdXRob3JIaW50fSBhbGxvd1RhYkZpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ5ZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+WWVhcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0WWVhcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpbi9sb2dpblN0dWRlbnRcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IHJlcXVlc3RRdWVzdGlvbnMgPSBhc3luYyAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtwYXRofS9nZXRxdWVzdGAsIG9wdGlvbnMpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZWxlY3RPcHRpb25zSGFuZGxlcjogKG9wdGlvbnMpID0+IGRpc3BhdGNoKHNlbGVjdE9wdGlvbnMob3B0aW9ucykpLFxyXG4gIHNldFF1ZXN0aW9uc0hhbmRsZXI6IChxdWVzdGlvbnMpID0+IGRpc3BhdGNoKHNldFF1ZXN0aW9ucyhxdWVzdGlvbnMpKSxcclxufSk7XHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbiAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHAsIG1kdHApKHNlbGVjdFRlc3QpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJzZWxlY3RPcHRpb25zIiwic2V0UXVlc3Rpb25zIiwiRm9ybSIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkhpbnQiLCJheGlvcyIsInBhdGgiLCJzZWxlY3RUZXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYXV0aG9ySGludCIsInNldEF1dGhvckhpbnQiLCJzdHVkZW50IiwidXNlciIsInN0dWRlbnRfbmFtZSIsIm15c3R1ZGVudCIsInNldFN0dWRlbnQiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsImF1dGhvciIsInNldEF1dGhvciIsInllYXIiLCJzZXRZZWFyIiwicG9zdCIsInJlc3BvbnNlIiwiZGF0YSIsImF1dGhvcnMiLCJ2YWxpZGF0ZUZvcm0iLCJsZW5ndGgiLCJyb3V0ZXIiLCJvblN1Ym1pdCIsIm9wdGlvbnMiLCJzZWxlY3RPcHRpb25zSGFuZGxlciIsInJlcXVlc3RRdWVzdGlvbnMiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnNIYW5kbGVyIiwicHVzaCIsImFsZXJ0IiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiLCJtZHRwIiwiZGlzcGF0Y2giLCJtc3RwIiwic3RhdGUiLCJzdHVkZW50UmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=