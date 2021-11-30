"use strict";
self["webpackHotUpdate_N_E"]("pages/test/result_page",{

/***/ "./pages/test/result_page.js":
/*!***********************************!*\
  !*** ./pages/test/result_page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/TopBar */ "./src/components/TopBar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\result_page.js",
    _this = undefined,
    _s = $RefreshSig$();





 //////
//  make an array of correct answers *
//  pointer events remove from options *
//  question navigation box color (red for wrong)
//  display correct answer in green *
//  display marked answer in green border if correct and red border if incorrect




var result_page = function result_page(props) {
  _s();

  var data = props.questBank; // console.log("props from result_page", data)
  //   console.log(correctAnswerArray);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( true ? localStorage.getItem("score") ? JSON.parse(localStorage.getItem("score")) : {} : 0),
      progress = _useState[0],
      setProgress = _useState[1]; // console.log("progress from result page :", progress)


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeQ = _useState2[0],
      setActiveQ = _useState2[1]; // const [clickedOption, setClickedOption] = useState(progress.clickedAnsList);


  try {} catch (e) {
    console.log("cannont read quest");
  }

  var onNextClick = function onNextClick() {
    setActiveQ(activeQ + 1); // setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  var onPreviousClick = function onPreviousClick() {
    setActiveQ(activeQ - 1); // setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  try {
    var currentQuestion = data[activeQ].question;
    var clickedAnswerArray = data.map(function (quest, index) {
      return quest.question.options[progress.clickedAnsList[index]];
    });
    console.log("clickedAnswerArray", clickedAnswerArray);
    var correctAnswerArray = data.map(function (quest, index) {
      return quest.question.correct_ans;
    });
    var correctAnswer = correctAnswerArray[activeQ].toLowerCase();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_TopBar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "container-fluid test-page gx-0 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "row gx-0 main-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "col-10 mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "row ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "col-sm-8 mx-auto quest-box",
                style: {
                  pointerEvents: "none"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "row quest-toprow",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-6",
                    children: [" Question No. ", activeQ + 1]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-6 text-center",
                    children: "Marks : 5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "row ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-12 quest-question mt-2 mr-3",
                    children: currentQuestion.quest.que
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ol", {
                    children: currentQuestion.options.map(function (element, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                        position: index,
                        className: "options",
                        onClick: function onClick(e) {
                          return onOptionClick(e);
                        },
                        style: {
                          border: index == progress.clickedAnsList[activeQ] ? "1px solid green" : "none",
                          backgroundColor: element.option.toLowerCase() == correctAnswer ? "greenyellow" : "transparent"
                        },
                        children: element.option
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 27
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "col-sm-4 mx-auto navi-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: ["Total Questions : ", progress.total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, _this), data.map(function (element, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "question-number-box",
                    style: (activeQ === index ? {
                      backgroundColor: "grey",
                      color: "white"
                    } : {}, correctAnswerArray[index].toLowerCase() == clickedAnswerArray[index].toLowerCase() ? {
                      backgroundColor: "greenyellow"
                    } : {
                      backgroundColor: "red"
                    }),
                    onClick: function onClick() {
                      setActiveQ(index);
                    },
                    children: index + 1
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "row mx-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "col-10 mx-auto footer-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: "previous-next",
                  onClick: function onClick() {
                    return onPreviousClick();
                  } // style={{ visibility: activeQ == 0 ? "hidden" : "visible" }}
                  ,
                  disabled: activeQ === 0,
                  children: "Previous"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: "previous-next",
                  onClick: function onClick() {
                    return onNextClick();
                  } // style={{
                  //   visibility:
                  //     // activeQ == data.length - 1 ? "hidden" : "visible",
                  // }}
                  ,
                  disabled: activeQ == data.length - 1,
                  children: "Next"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/test/selectTest");
                  },
                  children: "END TEST"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  } catch (err) {
    console.log(err);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
        className: "text-center mt-5",
        children: "Mark All the questions First!!!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h5", {
        className: "text-center",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/test/test_page");
        },
        style: {
          cursor: "pointer"
        },
        children: "Go back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, _this);
  }
};

_s(result_page, "si9Y2NhrI/cbmh8aDMNQ/nvDPjM=");

function addAfter(array, index, newItem) {
  return [].concat((0,E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(0, index)), [newItem], (0,E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(index)));
}

var mstp = function mstp(state) {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mstp)(result_page));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9yZXN1bHRfcGFnZS45MGM0ZTM0ZDZjMjEzYzg5MTIwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM3QixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsU0FBbkIsQ0FENkIsQ0FFN0I7QUFDQTs7QUFDQSxrQkFBZ0NSLCtDQUFRLENBQ3RDLFFBQ0lTLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUNFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FERixHQUVFLEVBSE4sR0FJSSxDQUxrQyxDQUF4QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakIsZ0JBSjZCLENBVzdCOzs7QUFDQSxtQkFBOEJkLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9lLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEIsaUJBWjZCLENBYTdCOzs7QUFDQSxNQUFJLENBQ0gsQ0FERCxDQUNFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNEOztBQUVELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJKLElBQUFBLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVixDQUR3QixDQUV4QjtBQUNELEdBSEQ7O0FBS0EsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCTCxJQUFBQSxVQUFVLENBQUNELE9BQU8sR0FBRyxDQUFYLENBQVYsQ0FENEIsQ0FFNUI7QUFDRCxHQUhEOztBQUtBLE1BQUk7QUFDRixRQUFJ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Q0QsS0FBSyxDQUFDRSxLQUFOLENBQVl2QixLQUFaLENBQTlDO0FBQ0Q7O0FBRUQsSUFBTXdCLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUFPO0FBQ0w1QyxJQUFBQSxTQUFTLEVBQUU0QyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJDLFNBRDNCO0FBRUxDLElBQUFBLGNBQWMsRUFBRUgsS0FBSyxDQUFDQyxjQUFOLENBQXFCRyxJQUFyQixDQUEwQjNDO0FBRnJDLEdBQVA7QUFJRCxDQUxEOztBQU1BLCtEQUFlWixvREFBTyxDQUFDa0QsSUFBRCxDQUFQLENBQWM5QyxXQUFkLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC9yZXN1bHRfcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvcEJhclwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwiLi4vYXBpL215cGF0aHNcIjtcclxuLy8vLy8vXHJcbi8vICBtYWtlIGFuIGFycmF5IG9mIGNvcnJlY3QgYW5zd2VycyAqXHJcbi8vICBwb2ludGVyIGV2ZW50cyByZW1vdmUgZnJvbSBvcHRpb25zICpcclxuLy8gIHF1ZXN0aW9uIG5hdmlnYXRpb24gYm94IGNvbG9yIChyZWQgZm9yIHdyb25nKVxyXG4vLyAgZGlzcGxheSBjb3JyZWN0IGFuc3dlciBpbiBncmVlbiAqXHJcbi8vICBkaXNwbGF5IG1hcmtlZCBhbnN3ZXIgaW4gZ3JlZW4gYm9yZGVyIGlmIGNvcnJlY3QgYW5kIHJlZCBib3JkZXIgaWYgaW5jb3JyZWN0XHJcblxyXG5jb25zdCByZXN1bHRfcGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5xdWVzdEJhbms7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9wcyBmcm9tIHJlc3VsdF9wYWdlXCIsIGRhdGEpXHJcbiAgLy8gICBjb25zb2xlLmxvZyhjb3JyZWN0QW5zd2VyQXJyYXkpO1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoXHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKVxyXG4gICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpKVxyXG4gICAgICAgIDoge31cclxuICAgICAgOiB7fVxyXG4gICk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9ncmVzcyBmcm9tIHJlc3VsdCBwYWdlIDpcIiwgcHJvZ3Jlc3MpXHJcbiAgY29uc3QgW2FjdGl2ZVEsIHNldEFjdGl2ZVFdID0gdXNlU3RhdGUoMCk7XHJcbiAgLy8gY29uc3QgW2NsaWNrZWRPcHRpb24sIHNldENsaWNrZWRPcHRpb25dID0gdXNlU3RhdGUocHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3QpO1xyXG4gIHRyeSB7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJjYW5ub250IHJlYWQgcXVlc3RcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk5leHRDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSArIDEpO1xyXG4gICAgLy8gc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QcmV2aW91c0NsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRIC0gMSk7XHJcbiAgICAvLyBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgbGV0IGN1cnJlbnRRdWVzdGlvbiA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb247XHJcbiAgICBjb25zdCBjbGlja2VkQW5zd2VyQXJyYXkgPSBkYXRhLm1hcCgocXVlc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiBxdWVzdC5xdWVzdGlvbi5vcHRpb25zW3Byb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2luZGV4XV07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZEFuc3dlckFycmF5XCIsIGNsaWNrZWRBbnN3ZXJBcnJheSlcclxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJBcnJheSA9IGRhdGEubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXN0LnF1ZXN0aW9uLmNvcnJlY3RfYW5zO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VyID0gY29ycmVjdEFuc3dlckFycmF5W2FjdGl2ZVFdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXN0LXBhZ2UgZ3gtMCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTAgbWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc20tOCBteC1hdXRvIHF1ZXN0LWJveFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHF1ZXN0LXRvcHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj4gUXVlc3Rpb24gTm8uIHthY3RpdmVRICsgMX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRleHQtY2VudGVyXCI+TWFya3MgOiA1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBxdWVzdC1xdWVzdGlvbiBtdC0yIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ucXVlc3QucXVlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLm9wdGlvbnMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uT3B0aW9uQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uLnRvTG93ZXJDYXNlKCkgPT0gY29ycmVjdEFuc3dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVueWVsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5vcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IG14LWF1dG8gbmF2aS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgUXVlc3Rpb25zIDoge3Byb2dyZXNzLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLW51bWJlci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZVEgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJBcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKSA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRBbnN3ZXJBcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJncmVlbnllbGxvd1wiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG8gZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmV2aW91c0NsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgdmlzaWJpbGl0eTogYWN0aXZlUSA9PSAwID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmV4dENsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHZpc2liaWxpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGFjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBwcmV2aW91cy1uZXh0IGZpbmlzaC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rlc3Qvc2VsZWN0VGVzdFwiKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEVORCBURVNUXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNVwiPk1hcmsgQWxsIHRoZSBxdWVzdGlvbnMgRmlyc3QhISE8L2gzPlxyXG4gICAgICAgIDxoNVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdGVzdC90ZXN0X3BhZ2VcIil9XHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR28gYmFja1xyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRBZnRlcihhcnJheSwgaW5kZXgsIG5ld0l0ZW0pIHtcclxuICByZXR1cm4gWy4uLmFycmF5LnNsaWNlKDAsIGluZGV4KSwgbmV3SXRlbSwgLi4uYXJyYXkuc2xpY2UoaW5kZXgpXTtcclxufVxyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdEJhbms6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnF1ZXN0aW9ucyxcclxuICAgIHN0dWRlbnRfcmVjb3JkOiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLnByb2dyZXNzLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkocmVzdWx0X3BhZ2UpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJUb3BCYXIiLCJyb3V0ZXIiLCJwYXRoIiwicmVzdWx0X3BhZ2UiLCJwcm9wcyIsImRhdGEiLCJxdWVzdEJhbmsiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImFjdGl2ZVEiLCJzZXRBY3RpdmVRIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbk5leHRDbGljayIsIm9uUHJldmlvdXNDbGljayIsImN1cnJlbnRRdWVzdGlvbiIsInF1ZXN0aW9uIiwiY2xpY2tlZEFuc3dlckFycmF5IiwibWFwIiwicXVlc3QiLCJpbmRleCIsIm9wdGlvbnMiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnN3ZXJBcnJheSIsImNvcnJlY3RfYW5zIiwiY29ycmVjdEFuc3dlciIsInRvTG93ZXJDYXNlIiwicG9pbnRlckV2ZW50cyIsInF1ZSIsImVsZW1lbnQiLCJvbk9wdGlvbkNsaWNrIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwib3B0aW9uIiwidG90YWwiLCJjb2xvciIsImxlbmd0aCIsInB1c2giLCJlcnIiLCJjdXJzb3IiLCJhZGRBZnRlciIsImFycmF5IiwibmV3SXRlbSIsInNsaWNlIiwibXN0cCIsInN0YXRlIiwic3R1ZGVudFJlZHVjZXIiLCJxdWVzdGlvbnMiLCJzdHVkZW50X3JlY29yZCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9