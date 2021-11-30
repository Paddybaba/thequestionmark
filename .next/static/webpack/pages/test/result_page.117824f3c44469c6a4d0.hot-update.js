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
      return quest.question.options[progress.clickedAnsList[index]].option;
    });
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
                    className: "col-12 quest-question mt-2 mr-3 mb-2",
                    children: [currentQuestion.quest.image != "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      className: "question-image",
                      src: currentQuestion.quest.image
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 25
                    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      className: "text-bottom fw-bold",
                      children: currentQuestion.quest.que
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ol", {
                    children: currentQuestion.options.map(function (element, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                        position: index,
                        className: "options",
                        onClick: function onClick(e) {
                          return onOptionClick(e);
                        },
                        style: {
                          backgroundColor: element.option.toLowerCase() == correctAnswer ? "greenyellow" : "transparent"
                        },
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                          className: "options",
                          position: index,
                          style: {
                            display: "flex",
                            alignItems: "center",
                            alignContent: "center",
                            border: index == progress.clickedAnsList[activeQ] ? "1px solid green" : "none"
                          },
                          content: element.option,
                          children: [element.image != "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                            className: "option-image",
                            src: element.image
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 33
                          }, _this) : null, element.option.length > 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                            style: {
                              verticalAlign: "center",
                              margin: 3
                            },
                            children: element.option
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 119,
                            columnNumber: 33
                          }, _this) : null]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 29
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 27
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
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
                  lineNumber: 136,
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
                    lineNumber: 139,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
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
                  lineNumber: 163,
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
                  lineNumber: 171,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/test/selectTest");
                  },
                  children: "END TEST"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
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
        lineNumber: 200,
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
        lineNumber: 201,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 199,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9yZXN1bHRfcGFnZS4xMTc4MjRmM2M0NDQ2OWM2YTRkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM3QixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsU0FBbkIsQ0FENkIsQ0FFN0I7QUFDQTs7QUFDQSxrQkFBZ0NSLCtDQUFRLENBQ3RDLFFBQ0lTLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUNFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FERixHQUVFLEVBSE4sR0FJSSxDQUxrQyxDQUF4QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakIsZ0JBSjZCLENBVzdCOzs7QUFDQSxtQkFBOEJkLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9lLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEIsaUJBWjZCLENBYTdCOzs7QUFDQSxNQUFJLENBQ0gsQ0FERCxDQUNFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNEOztBQUVELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJKLElBQUFBLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVixDQUR3QixDQUV4QjtBQUNELEdBSEQ7O0FBS0EsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCTCxJQUFBQSxVQUFVLENBQUNELE9BQU8sR0FBRyxDQUFYLENBQVYsQ0FENEIsQ0FFNUI7QUFDRCxHQUhEOztBQUtBLE1BQUk7QUFDRixRQUFJ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QU4sQ0FBcUJHLElBQXJCLENBQTBCakQ7QUFGckMsR0FBUDtBQUlELENBTEQ7O0FBTUEsK0RBQWVaLG9EQUFPLENBQUN3RCxJQUFELENBQVAsQ0FBY3BELFdBQWQsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0L3Jlc3VsdF9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvVG9wQmFyXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCIuLi9hcGkvbXlwYXRoc1wiO1xyXG4vLy8vLy9cclxuLy8gIG1ha2UgYW4gYXJyYXkgb2YgY29ycmVjdCBhbnN3ZXJzICpcclxuLy8gIHBvaW50ZXIgZXZlbnRzIHJlbW92ZSBmcm9tIG9wdGlvbnMgKlxyXG4vLyAgcXVlc3Rpb24gbmF2aWdhdGlvbiBib3ggY29sb3IgKHJlZCBmb3Igd3JvbmcpXHJcbi8vICBkaXNwbGF5IGNvcnJlY3QgYW5zd2VyIGluIGdyZWVuICpcclxuLy8gIGRpc3BsYXkgbWFya2VkIGFuc3dlciBpbiBncmVlbiBib3JkZXIgaWYgY29ycmVjdCBhbmQgcmVkIGJvcmRlciBpZiBpbmNvcnJlY3RcclxuXHJcbmNvbnN0IHJlc3VsdF9wYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gcmVzdWx0X3BhZ2VcIiwgZGF0YSlcclxuICAvLyAgIGNvbnNvbGUubG9nKGNvcnJlY3RBbnN3ZXJBcnJheSk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpXHJcbiAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIikpXHJcbiAgICAgICAgOiB7fVxyXG4gICAgICA6IHt9XHJcbiAgKTtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb2dyZXNzIGZyb20gcmVzdWx0IHBhZ2UgOlwiLCBwcm9ncmVzcylcclxuICBjb25zdCBbYWN0aXZlUSwgc2V0QWN0aXZlUV0gPSB1c2VTdGF0ZSgwKTtcclxuICAvLyBjb25zdCBbY2xpY2tlZE9wdGlvbiwgc2V0Q2xpY2tlZE9wdGlvbl0gPSB1c2VTdGF0ZShwcm9ncmVzcy5jbGlja2VkQW5zTGlzdCk7XHJcbiAgdHJ5IHtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbm5vbnQgcmVhZCBxdWVzdFwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRICsgMSk7XHJcbiAgICAvLyBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgLSAxKTtcclxuICAgIC8vIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsZXQgY3VycmVudFF1ZXN0aW9uID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbjtcclxuICAgIGNvbnN0IGNsaWNrZWRBbnN3ZXJBcnJheSA9IGRhdGEubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXN0LnF1ZXN0aW9uLm9wdGlvbnNbcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbaW5kZXhdXS5vcHRpb247XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VyQXJyYXkgPSBkYXRhLm1hcCgocXVlc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiBxdWVzdC5xdWVzdGlvbi5jb3JyZWN0X2FucztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29ycmVjdEFuc3dlciA9IGNvcnJlY3RBbnN3ZXJBcnJheVthY3RpdmVRXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGVzdC1wYWdlIGd4LTAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneC0wIG1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNtLTggbXgtYXV0byBxdWVzdC1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBxdWVzdC10b3Byb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+IFF1ZXN0aW9uIE5vLiB7YWN0aXZlUSArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPk1hcmtzIDogNTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHF1ZXN0LXF1ZXN0aW9uIG10LTIgbXItMyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LmltYWdlICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50UXVlc3Rpb24ucXVlc3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ib3R0b20gZnctYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5vcHRpb25zLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbk9wdGlvbkNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uLnRvTG93ZXJDYXNlKCkgPT0gY29ycmVjdEFuc3dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVueWVsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2VsZW1lbnQub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5pbWFnZSAhPSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQub3B0aW9uLmxlbmd0aCA+IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgbXgtYXV0byBuYXZpLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBRdWVzdGlvbnMgOiB7cHJvZ3Jlc3MudG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24tbnVtYmVyLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlUSA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlckFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpID09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZEFuc3dlckFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZWVueWVsbG93XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVRKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBmb290ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblByZXZpb3VzQ2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB2aXNpYmlsaXR5OiBhY3RpdmVRID09IDAgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OZXh0Q2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdmlzaWJpbGl0eTpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gYWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDEgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHByZXZpb3VzLW5leHQgZmluaXNoLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdGVzdC9zZWxlY3RUZXN0XCIpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRU5EIFRFU1RcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01XCI+TWFyayBBbGwgdGhlIHF1ZXN0aW9ucyBGaXJzdCEhITwvaDM+XHJcbiAgICAgICAgPGg1XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi90ZXN0L3Rlc3RfcGFnZVwiKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBHbyBiYWNrXHJcbiAgICAgICAgPC9oNT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZEFmdGVyKGFycmF5LCBpbmRleCwgbmV3SXRlbSkge1xyXG4gIHJldHVybiBbLi4uYXJyYXkuc2xpY2UoMCwgaW5kZXgpLCBuZXdJdGVtLCAuLi5hcnJheS5zbGljZShpbmRleCldO1xyXG59XHJcblxyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHF1ZXN0QmFuazogc3RhdGUuc3R1ZGVudFJlZHVjZXIucXVlc3Rpb25zLFxyXG4gICAgc3R1ZGVudF9yZWNvcmQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnVzZXIucHJvZ3Jlc3MsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtc3RwKShyZXN1bHRfcGFnZSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29ubmVjdCIsIlRvcEJhciIsInJvdXRlciIsInBhdGgiLCJyZXN1bHRfcGFnZSIsInByb3BzIiwiZGF0YSIsInF1ZXN0QmFuayIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiYWN0aXZlUSIsInNldEFjdGl2ZVEiLCJlIiwiY29uc29sZSIsImxvZyIsIm9uTmV4dENsaWNrIiwib25QcmV2aW91c0NsaWNrIiwiY3VycmVudFF1ZXN0aW9uIiwicXVlc3Rpb24iLCJjbGlja2VkQW5zd2VyQXJyYXkiLCJtYXAiLCJxdWVzdCIsImluZGV4Iiwib3B0aW9ucyIsImNsaWNrZWRBbnNMaXN0Iiwib3B0aW9uIiwiY29ycmVjdEFuc3dlckFycmF5IiwiY29ycmVjdF9hbnMiLCJjb3JyZWN0QW5zd2VyIiwidG9Mb3dlckNhc2UiLCJwb2ludGVyRXZlbnRzIiwiaW1hZ2UiLCJxdWUiLCJlbGVtZW50Iiwib25PcHRpb25DbGljayIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwiYm9yZGVyIiwibGVuZ3RoIiwidmVydGljYWxBbGlnbiIsIm1hcmdpbiIsInRvdGFsIiwiY29sb3IiLCJwdXNoIiwiZXJyIiwiY3Vyc29yIiwiYWRkQWZ0ZXIiLCJhcnJheSIsIm5ld0l0ZW0iLCJzbGljZSIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwicXVlc3Rpb25zIiwic3R1ZGVudF9yZWNvcmQiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==