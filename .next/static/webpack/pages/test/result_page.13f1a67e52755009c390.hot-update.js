"use strict";
self["webpackHotUpdate_N_E"]("pages/test/result_page",{

/***/ "./pages/test/result_page.js":
/*!***********************************!*\
  !*** ./pages/test/result_page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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


var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\result_page.js",
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

  var data = props.questBank; //   console.log(correctAnswerArray);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( true ? localStorage.getItem("score") ? JSON.parse(localStorage.getItem("score")) : {} : 0),
      progress = _useState[0],
      setProgress = _useState[1];

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
    var correctAnswerArray = data.map(function (quest, index) {
      return quest.question.correct_ans;
    });
    var correctAnswer = correctAnswerArray[activeQ].toLowerCase();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_TopBar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-6 text-center",
                    children: "Marks : 5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "row ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-12 quest-question mt-2 mr-3",
                    children: currentQuestion.quest
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
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
                          backgroundColor: element.toLowerCase() == correctAnswer ? "greenyellow" : "transparent"
                        },
                        children: element
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 27
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "col-sm-4 mx-auto navi-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: ["Total Questions : ", progress.total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
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
                    lineNumber: 101,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
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
                  lineNumber: 125,
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
                  lineNumber: 133,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/test/selectTest");
                  },
                  children: "END TEST"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  } catch (err) {
    console.log(err);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
        className: "text-center",
        children: "Error occured"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
        lineNumber: 163,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, _this);
  }
};

_s(result_page, "si9Y2NhrI/cbmh8aDMNQ/nvDPjM=");

function addAfter(array, index, newItem) {
  return [].concat((0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(0, index)), [newItem], (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(index)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9yZXN1bHRfcGFnZS4xM2YxYTY3ZTUyNzU1MDA5YzM5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM3QixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsU0FBbkIsQ0FENkIsQ0FHN0I7O0FBQ0Esa0JBQWdDUiwrQ0FBUSxDQUN0QyxRQUNJUyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsSUFDRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBREYsR0FFRSxFQUhOLEdBSUksQ0FMa0MsQ0FBeEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQU9BLG1CQUE4QmQsK0NBQVEsQ0FBQyxDQUFELENBQXRDO0FBQUEsTUFBT2UsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQixpQkFYNkIsQ0FZN0I7OztBQUNBLE1BQUksQ0FDSCxDQURELENBQ0UsT0FBT0MsQ0FBUCxFQUFVO0FBQ1ZDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0Q7O0FBRUQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkosSUFBQUEsVUFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBWCxDQUFWLENBRHdCLENBRXhCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJMLElBQUFBLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVixDQUQ0QixDQUU1QjtBQUNELEdBSEQ7O0FBS0EsTUFBSTtBQUNGLFFBQUlPLGVBQWUsR0FBR2YsSUFBSSxDQUFDUSxPQUFELENBQUosQ0FBY1EsUUFBcEM7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR2pCLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDcEQsYUFBT0QsS0FBSyxDQUFDSCxRQUFOLENBQWVLLE9BQWYsQ0FBdUJmLFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0JGLEtBQXhCLENBQXZCLENBQVA7QUFDRCxLQUYwQixDQUEzQjtBQUlBLFFBQU1HLGtCQUFrQixHQUFHdkIsSUFBSSxDQUFDa0IsR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNwRCxhQUFPRCxLQUFLLENBQUNILFFBQU4sQ0FBZVEsV0FBdEI7QUFDRCxLQUYwQixDQUEzQjtBQUdBLFFBQU1DLGFBQWEsR0FBR0Ysa0JBQWtCLENBQUNmLE9BQUQsQ0FBbEIsQ0FBNEJrQixXQUE1QixFQUF0QjtBQUNBLHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDRTtBQUNFLHlCQUFTLEVBQUMsNEJBRFo7QUFFRSxxQkFBSyxFQUFFO0FBQUVDLGtCQUFBQSxhQUFhLEVBQUU7QUFBakIsaUJBRlQ7QUFBQSx3Q0FJRTtBQUFLLDJCQUFTLEVBQUMsa0JBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsT0FBZjtBQUFBLGlEQUFzQ25CLE9BQU8sR0FBRyxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFLLDZCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBUUU7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsaUNBQWY7QUFBQSw4QkFDR08sZUFBZSxDQUFDSTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBS0U7QUFBQSw4QkFDR0osZUFBZSxDQUFDTSxPQUFoQixDQUF3QkgsR0FBeEIsQ0FBNEIsVUFBQ1UsT0FBRCxFQUFVUixLQUFWLEVBQW9CO0FBQy9DLDBDQUNFO0FBRUUsZ0NBQVEsRUFBRUEsS0FGWjtBQUdFLGlDQUFTLEVBQUMsU0FIWjtBQUlFLCtCQUFPLEVBQUUsaUJBQUNWLENBQUQ7QUFBQSxpQ0FBT21CLGFBQWEsQ0FBQ25CLENBQUQsQ0FBcEI7QUFBQSx5QkFKWDtBQUtFLDZCQUFLLEVBQUU7QUFDTG9CLDBCQUFBQSxNQUFNLEVBQ0pWLEtBQUssSUFBSWQsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QmQsT0FBeEIsQ0FBVCxHQUNJLGlCQURKLEdBRUksTUFKRDtBQUtMdUIsMEJBQUFBLGVBQWUsRUFDYkgsT0FBTyxDQUFDRixXQUFSLE1BQXlCRCxhQUF6QixHQUNJLGFBREosR0FFSTtBQVJELHlCQUxUO0FBQUEsa0NBZ0JHRztBQWhCSCx5QkFDT1IsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGO0FBb0JELHFCQXJCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQXdDRTtBQUFLLHlCQUFTLEVBQUMsMkJBQWY7QUFBQSx3Q0FDRTtBQUFBLG1EQUFzQmQsUUFBUSxDQUFDMEIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUdoQyxJQUFJLENBQUNrQixHQUFMLENBQVMsVUFBQ1UsT0FBRCxFQUFVUixLQUFWLEVBQW9CO0FBQzVCLHNDQUNFO0FBRUUsNkJBQVMsRUFBQyxxQkFGWjtBQUdFLHlCQUFLLEdBQ0ZaLE9BQU8sS0FBS1ksS0FBWixHQUNHO0FBQUVXLHNCQUFBQSxlQUFlLEVBQUUsTUFBbkI7QUFBMkJFLHNCQUFBQSxLQUFLLEVBQUU7QUFBbEMscUJBREgsR0FFRyxFQUZILEVBR0RWLGtCQUFrQixDQUFDSCxLQUFELENBQWxCLENBQTBCTSxXQUExQixNQUNBVCxrQkFBa0IsQ0FBQ0csS0FBRCxDQUFsQixDQUEwQk0sV0FBMUIsRUFEQSxHQUVJO0FBQUVLLHNCQUFBQSxlQUFlLEVBQUU7QUFBbkIscUJBRkosR0FHSTtBQUFFQSxzQkFBQUEsZUFBZSxFQUFFO0FBQW5CLHFCQVBELENBSFA7QUFZRSwyQkFBTyxFQUFFLG1CQUFNO0FBQ2J0QixzQkFBQUEsVUFBVSxDQUFDVyxLQUFELENBQVY7QUFDRCxxQkFkSDtBQUFBLDhCQWdCR0EsS0FBSyxHQUFHO0FBaEJYLHFCQUNPQSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREY7QUFvQkQsaUJBckJBLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFtRUU7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsMkJBQWY7QUFBQSx3Q0FDRTtBQUNFLDJCQUFTLEVBQUMsZUFEWjtBQUVFLHlCQUFPLEVBQUU7QUFBQSwyQkFBTU4sZUFBZSxFQUFyQjtBQUFBLG1CQUZYLENBR0U7QUFIRjtBQUlFLDBCQUFRLEVBQUVOLE9BQU8sS0FBSyxDQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVNFO0FBQ0UsMkJBQVMsRUFBQyxlQURaO0FBRUUseUJBQU8sRUFBRTtBQUFBLDJCQUFNSyxXQUFXLEVBQWpCO0FBQUEsbUJBRlgsQ0FHRTtBQUNBO0FBQ0E7QUFDQTtBQU5GO0FBT0UsMEJBQVEsRUFBRUwsT0FBTyxJQUFJUixJQUFJLENBQUNrQyxNQUFMLEdBQWMsQ0FQckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEYsZUFvQkU7QUFDRSwyQkFBUyxFQUFDLDhCQURaO0FBRUUseUJBQU8sRUFBRTtBQUFBLDJCQUFNdEMsdURBQUEsQ0FBWSxrQkFBWixDQUFOO0FBQUEsbUJBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFERjtBQTBHRCxHQXBIRCxDQW9IRSxPQUFPd0MsR0FBUCxFQUFZO0FBQ1p6QixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXdCLEdBQVo7QUFFQSx3QkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU14Qyx1REFBQSxDQUFZLGlCQUFaLENBQU47QUFBQSxTQUZYO0FBR0UsYUFBSyxFQUFFO0FBQUV5QyxVQUFBQSxNQUFNLEVBQUU7QUFBVixTQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFZRDtBQUNGLENBaEtEOztHQUFNdkM7O0FBa0tOLFNBQVN3QyxRQUFULENBQWtCQyxLQUFsQixFQUF5Qm5CLEtBQXpCLEVBQWdDb0IsT0FBaEMsRUFBeUM7QUFDdkMsa0pBQVdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLENBQVosRUFBZXJCLEtBQWYsQ0FBWCxJQUFrQ29CLE9BQWxDLGtJQUE4Q0QsS0FBSyxDQUFDRSxLQUFOLENBQVlyQixLQUFaLENBQTlDO0FBQ0Q7O0FBRUQsSUFBTXNCLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUFPO0FBQ0wxQyxJQUFBQSxTQUFTLEVBQUUwQyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJDLFNBRDNCO0FBRUxDLElBQUFBLGNBQWMsRUFBRUgsS0FBSyxDQUFDQyxjQUFOLENBQXFCRyxJQUFyQixDQUEwQnpDO0FBRnJDLEdBQVA7QUFJRCxDQUxEOztBQU1BLCtEQUFlWixvREFBTyxDQUFDZ0QsSUFBRCxDQUFQLENBQWM1QyxXQUFkLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC9yZXN1bHRfcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvcEJhclwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwiLi4vYXBpL215cGF0aHNcIjtcclxuLy8vLy8vXHJcbi8vICBtYWtlIGFuIGFycmF5IG9mIGNvcnJlY3QgYW5zd2VycyAqXHJcbi8vICBwb2ludGVyIGV2ZW50cyByZW1vdmUgZnJvbSBvcHRpb25zICpcclxuLy8gIHF1ZXN0aW9uIG5hdmlnYXRpb24gYm94IGNvbG9yIChyZWQgZm9yIHdyb25nKVxyXG4vLyAgZGlzcGxheSBjb3JyZWN0IGFuc3dlciBpbiBncmVlbiAqXHJcbi8vICBkaXNwbGF5IG1hcmtlZCBhbnN3ZXIgaW4gZ3JlZW4gYm9yZGVyIGlmIGNvcnJlY3QgYW5kIHJlZCBib3JkZXIgaWYgaW5jb3JyZWN0XHJcblxyXG5jb25zdCByZXN1bHRfcGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5xdWVzdEJhbms7XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2coY29ycmVjdEFuc3dlckFycmF5KTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSlcclxuICAgICAgICA6IHt9XHJcbiAgICAgIDoge31cclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVRLCBzZXRBY3RpdmVRXSA9IHVzZVN0YXRlKDApO1xyXG4gIC8vIGNvbnN0IFtjbGlja2VkT3B0aW9uLCBzZXRDbGlja2VkT3B0aW9uXSA9IHVzZVN0YXRlKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuICB0cnkge1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2Fubm9udCByZWFkIHF1ZXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25OZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgKyAxKTtcclxuICAgIC8vIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUHJldmlvdXNDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSAtIDEpO1xyXG4gICAgLy8gc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGxldCBjdXJyZW50UXVlc3Rpb24gPSBkYXRhW2FjdGl2ZVFdLnF1ZXN0aW9uO1xyXG4gICAgY29uc3QgY2xpY2tlZEFuc3dlckFycmF5ID0gZGF0YS5tYXAoKHF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gcXVlc3QucXVlc3Rpb24ub3B0aW9uc1twcm9ncmVzcy5jbGlja2VkQW5zTGlzdFtpbmRleF1dO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29ycmVjdEFuc3dlckFycmF5ID0gZGF0YS5tYXAoKHF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gcXVlc3QucXVlc3Rpb24uY29ycmVjdF9hbnM7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBjb3JyZWN0QW5zd2VyQXJyYXlbYWN0aXZlUV0udG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRvcEJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRlc3QtcGFnZSBneC0wIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3gtMCBtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zbS04IG14LWF1dG8gcXVlc3QtYm94XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcXVlc3QtdG9wcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPiBRdWVzdGlvbiBOby4ge2FjdGl2ZVEgKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGV4dC1jZW50ZXJcIj5NYXJrcyA6IDU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHF1ZXN0LXF1ZXN0aW9uIG10LTIgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5vcHRpb25zLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbk9wdGlvbkNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRvTG93ZXJDYXNlKCkgPT0gY29ycmVjdEFuc3dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVueWVsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgbXgtYXV0byBuYXZpLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBRdWVzdGlvbnMgOiB7cHJvZ3Jlc3MudG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24tbnVtYmVyLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlUSA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlckFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpID09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZEFuc3dlckFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZWVueWVsbG93XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVRKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBmb290ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblByZXZpb3VzQ2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB2aXNpYmlsaXR5OiBhY3RpdmVRID09IDAgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OZXh0Q2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdmlzaWJpbGl0eTpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gYWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDEgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHByZXZpb3VzLW5leHQgZmluaXNoLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdGVzdC9zZWxlY3RUZXN0XCIpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRU5EIFRFU1RcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkVycm9yIG9jY3VyZWQ8L2gzPlxyXG4gICAgICAgIDxoNVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdGVzdC90ZXN0X3BhZ2VcIil9XHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR28gYmFja1xyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRBZnRlcihhcnJheSwgaW5kZXgsIG5ld0l0ZW0pIHtcclxuICByZXR1cm4gWy4uLmFycmF5LnNsaWNlKDAsIGluZGV4KSwgbmV3SXRlbSwgLi4uYXJyYXkuc2xpY2UoaW5kZXgpXTtcclxufVxyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdEJhbms6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnF1ZXN0aW9ucyxcclxuICAgIHN0dWRlbnRfcmVjb3JkOiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLnByb2dyZXNzLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkocmVzdWx0X3BhZ2UpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJUb3BCYXIiLCJyb3V0ZXIiLCJwYXRoIiwicmVzdWx0X3BhZ2UiLCJwcm9wcyIsImRhdGEiLCJxdWVzdEJhbmsiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImFjdGl2ZVEiLCJzZXRBY3RpdmVRIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbk5leHRDbGljayIsIm9uUHJldmlvdXNDbGljayIsImN1cnJlbnRRdWVzdGlvbiIsInF1ZXN0aW9uIiwiY2xpY2tlZEFuc3dlckFycmF5IiwibWFwIiwicXVlc3QiLCJpbmRleCIsIm9wdGlvbnMiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnN3ZXJBcnJheSIsImNvcnJlY3RfYW5zIiwiY29ycmVjdEFuc3dlciIsInRvTG93ZXJDYXNlIiwicG9pbnRlckV2ZW50cyIsImVsZW1lbnQiLCJvbk9wdGlvbkNsaWNrIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidG90YWwiLCJjb2xvciIsImxlbmd0aCIsInB1c2giLCJlcnIiLCJjdXJzb3IiLCJhZGRBZnRlciIsImFycmF5IiwibmV3SXRlbSIsInNsaWNlIiwibXN0cCIsInN0YXRlIiwic3R1ZGVudFJlZHVjZXIiLCJxdWVzdGlvbnMiLCJzdHVkZW50X3JlY29yZCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9