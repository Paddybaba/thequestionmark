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
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                    children: "Select Author"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                    className: "form-select",
                    "aria-label": "Default select example",
                    list: "author-options",
                    onChange: function onChange(e) {
                      return setAuthor(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("datalist", {
                    id: "author-options",
                    children: authorHint.map(function (author, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        value: author,
                        children: author
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 27
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
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
                    lineNumber: 132,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
                    type: "text",
                    value: year,
                    onChange: function onChange(e) {
                      return setYear(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
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
                  lineNumber: 139,
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
                lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9zZWxlY3RUZXN0LmIzOGY5MWUzNzhhZjUwNDVkODkwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsS0FBakM7O0FBQ0Esa0JBQW9DWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPYyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnQ2YsK0NBQVEsQ0FBQ1csS0FBSyxDQUFDSyxPQUFOLENBQWNDLElBQWQsQ0FBbUJDLFlBQXBCLENBQXhDO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxVQUFsQjs7QUFDQSxtQkFBOEJwQiwrQ0FBUSxDQUFDLFNBQUQsQ0FBdEM7QUFBQSxNQUFPcUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBNEJ0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPdUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT3lCLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBM0IsRUFBQUEsZ0RBQVMsMlFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZVMsaURBQUEsV0FBY0MsaURBQWQsaUJBRGY7O0FBQUE7QUFDRm1CLFlBQUFBLFFBREU7QUFBQTtBQUFBLG1CQUVjQSxRQUFRLENBQUNDLElBRnZCOztBQUFBO0FBRUZDLFlBQUFBLE9BRkU7QUFHUmxCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFB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QUEsU0FBZTtBQUMxQmQsSUFBQUEsb0JBQW9CLEVBQUUsOEJBQUNELE9BQUQ7QUFBQSxhQUFhZSxRQUFRLENBQUNoRCw2REFBYSxDQUFDaUMsT0FBRCxDQUFkLENBQXJCO0FBQUEsS0FESTtBQUUxQkksSUFBQUEsbUJBQW1CLEVBQUUsNkJBQUNELFNBQUQ7QUFBQSxhQUFlWSxRQUFRLENBQUMvQyw0REFBWSxDQUFDbUMsU0FBRCxDQUFiLENBQXZCO0FBQUE7QUFGSyxHQUFmO0FBQUEsQ0FBYjs7QUFJQSxJQUFNYSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2QnBDLElBQUFBLE9BQU8sRUFBRW9DLEtBQUssQ0FBQ0M7QUFEUSxHQUFaO0FBQUEsQ0FBYjs7QUFHQSwrREFBZXBELG9EQUFPLENBQUNrRCxJQUFELEVBQU9GLElBQVAsQ0FBUCxDQUFvQnZDLFVBQXBCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC9zZWxlY3RUZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0T3B0aW9ucywgc2V0UXVlc3Rpb25zIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhpbnQgfSBmcm9tIFwicmVhY3QtYXV0b2NvbXBsZXRlLWhpbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwiLi4vYXBpL215cGF0aHNcIjtcclxuY29uc3Qgc2VsZWN0VGVzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwic2VsZWN0IHBhZ2UgcHJvcHNcIiwgcHJvcHMpO1xyXG4gIGNvbnN0IFthdXRob3JIaW50LCBzZXRBdXRob3JIaW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbXlzdHVkZW50LCBzZXRTdHVkZW50XSA9IHVzZVN0YXRlKHByb3BzLnN0dWRlbnQudXNlci5zdHVkZW50X25hbWUpO1xyXG4gIGNvbnN0IFtzdWJqZWN0LCBzZXRTdWJqZWN0XSA9IHVzZVN0YXRlKFwiU2NpZW5jZVwiKTtcclxuICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cGF0aH0vZ2V0YXV0aG9yc2ApO1xyXG4gICAgY29uc3QgYXV0aG9ycyA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhcImF1dGhvcnNcIiwgYXV0aG9ycyk7XHJcbiAgICBzZXRBdXRob3JIaW50KGF1dGhvcnMpO1xyXG4gIH0sIFtdKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICByZXR1cm4gc3ViamVjdC5sZW5ndGggPiAwICYmIGF1dGhvci5sZW5ndGggPiAwICYmIHllYXIgPiAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgc3ViamVjdCxcclxuICAgICAgYXV0aG9yLFxyXG4gICAgICB5ZWFyLFxyXG4gICAgfTtcclxuICAgIHByb3BzLnNlbGVjdE9wdGlvbnNIYW5kbGVyKG9wdGlvbnMpO1xyXG4gICAgY29uc3QgcXVlc3Rpb25zID0gYXdhaXQgcmVxdWVzdFF1ZXN0aW9ucyhvcHRpb25zKTtcclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBwcm9wcy5zZXRRdWVzdGlvbnNIYW5kbGVyKHF1ZXN0aW9ucyk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Rlc3Qvc3RhcnRfdGVzdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiTk8gdGVzdHMgYXZhaWxhYmxlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiwgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb2wtMTAgdGV4dC1jZW50ZXIgbXgtYXV0byBtdC01XCI+XHJcbiAgICAgICAgICAgICAgV2VsY29tZSA6IHtteXN0dWRlbnR9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+U2VsZWN0IHlvdXIgdGVzdCBwYXBlcjwvaDM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJzdWJqZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+U3ViamVjdDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1YmplY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiU2NpZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHZW5lcmFsIEtub3dsZWRnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmFsIEtub3dsZWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2NpZW5jZVwiPlNjaWVuY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgQXV0aG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9XCJhdXRob3Itb3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJhdXRob3Itb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2F1dGhvckhpbnQubWFwKChhdXRob3IsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YXV0aG9yfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5TZWxlY3QgQXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9ySGludC5tYXAoKGF1dGhvciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXthdXRob3J9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaW50IG9wdGlvbnM9e2F1dGhvckhpbnR9IGFsbG93VGFiRmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGludD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInllYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5ZZWFyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRZZWFyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXshdmFsaWRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TdWJtaXQoKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJzdWJtaXRcIiAoVGhpcyBpcyBub3QgYWxsb3dpbmcgYWN0aW9uIHRvIHdvcmsgcHJvcGVybHkpXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL2xvZ2luU3R1ZGVudFwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgcmVxdWVzdFF1ZXN0aW9ucyA9IGFzeW5jIChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3BhdGh9L2dldHF1ZXN0YCwgb3B0aW9ucyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBtZHRwID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNlbGVjdE9wdGlvbnNIYW5kbGVyOiAob3B0aW9ucykgPT4gZGlzcGF0Y2goc2VsZWN0T3B0aW9ucyhvcHRpb25zKSksXHJcbiAgc2V0UXVlc3Rpb25zSGFuZGxlcjogKHF1ZXN0aW9ucykgPT4gZGlzcGF0Y2goc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucykpLFxyXG59KTtcclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4gKHtcclxuICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCwgbWR0cCkoc2VsZWN0VGVzdCk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29ubmVjdCIsInNlbGVjdE9wdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJGb3JtIiwiQnV0dG9uIiwidXNlUm91dGVyIiwiSGludCIsImF4aW9zIiwicGF0aCIsInNlbGVjdFRlc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJhdXRob3JIaW50Iiwic2V0QXV0aG9ySGludCIsInN0dWRlbnQiLCJ1c2VyIiwic3R1ZGVudF9uYW1lIiwibXlzdHVkZW50Iiwic2V0U3R1ZGVudCIsInN1YmplY3QiLCJzZXRTdWJqZWN0IiwiYXV0aG9yIiwic2V0QXV0aG9yIiwieWVhciIsInNldFllYXIiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwiYXV0aG9ycyIsInZhbGlkYXRlRm9ybSIsImxlbmd0aCIsInJvdXRlciIsIm9uU3VibWl0Iiwib3B0aW9ucyIsInNlbGVjdE9wdGlvbnNIYW5kbGVyIiwicmVxdWVzdFF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9uc0hhbmRsZXIiLCJwdXNoIiwiYWxlcnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCIsIm1kdHAiLCJkaXNwYXRjaCIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==