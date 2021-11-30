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
      return quest.question.options.option[progress.clickedAnsList[index]];
    });
    console.log(clickedAnswerArray);
    var correctAnswerArray = data.map(function (quest, index) {
      return quest.question.correct_ans;
    });
    var correctAnswer = correctAnswerArray[activeQ].toLowerCase();
    console.log("clickedAnswerArray", clickedAnswerArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9yZXN1bHRfcGFnZS5hZWU5MjYxNmU2YmVhMTk0MGI0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM3QixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsU0FBbkIsQ0FENkIsQ0FFN0I7QUFDQTs7QUFDQSxrQkFBZ0NSLCtDQUFRLENBQ3RDLFFBQ0lTLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUNFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FERixHQUVFLEVBSE4sR0FJSSxDQUxrQyxDQUF4QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakIsZ0JBSjZCLENBVzdCOzs7QUFDQSxtQkFBOEJkLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9lLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEIsaUJBWjZCLENBYTdCOzs7QUFDQSxNQUFJLENBQ0gsQ0FERCxDQUNFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNEOztBQUVELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJKLElBQUFBLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVixDQUR3QixDQUV4QjtBQUNELEdBSEQ7O0FBS0EsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCTCxJQUFBQSxVQUFVLENBQUNELE9BQU8sR0FBRyxDQUFYLENBQVYsQ0FENEIsQ0FFNUI7QUFDRCxHQUhEOztBQUtBLE1BQUk7QUFDRixRQUFJ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QUFDRSxLQUFOLENBQVksQ0FBWixFQUFldkIsS0FBZixDQUFYLElBQWtDc0IsT0FBbEMsa0lBQThDRCxLQUFLLENBQUNFLEtBQU4sQ0FBWXZCLEtBQVosQ0FBOUM7QUFDRDs7QUFFRCxJQUFNd0IsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQU87QUFDTDVDLElBQUFBLFNBQVMsRUFBRTRDLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkMsU0FEM0I7QUFFTEMsSUFBQUEsY0FBYyxFQUFFSCxLQUFLLENBQUNDLGNBQU4sQ0FBcUJHLElBQXJCLENBQTBCM0M7QUFGckMsR0FBUDtBQUlELENBTEQ7O0FBTUEsK0RBQWVaLG9EQUFPLENBQUNrRCxJQUFELENBQVAsQ0FBYzlDLFdBQWQsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0L3Jlc3VsdF9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvVG9wQmFyXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCIuLi9hcGkvbXlwYXRoc1wiO1xyXG4vLy8vLy9cclxuLy8gIG1ha2UgYW4gYXJyYXkgb2YgY29ycmVjdCBhbnN3ZXJzICpcclxuLy8gIHBvaW50ZXIgZXZlbnRzIHJlbW92ZSBmcm9tIG9wdGlvbnMgKlxyXG4vLyAgcXVlc3Rpb24gbmF2aWdhdGlvbiBib3ggY29sb3IgKHJlZCBmb3Igd3JvbmcpXHJcbi8vICBkaXNwbGF5IGNvcnJlY3QgYW5zd2VyIGluIGdyZWVuICpcclxuLy8gIGRpc3BsYXkgbWFya2VkIGFuc3dlciBpbiBncmVlbiBib3JkZXIgaWYgY29ycmVjdCBhbmQgcmVkIGJvcmRlciBpZiBpbmNvcnJlY3RcclxuXHJcbmNvbnN0IHJlc3VsdF9wYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gcmVzdWx0X3BhZ2VcIiwgZGF0YSlcclxuICAvLyAgIGNvbnNvbGUubG9nKGNvcnJlY3RBbnN3ZXJBcnJheSk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpXHJcbiAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIikpXHJcbiAgICAgICAgOiB7fVxyXG4gICAgICA6IHt9XHJcbiAgKTtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb2dyZXNzIGZyb20gcmVzdWx0IHBhZ2UgOlwiLCBwcm9ncmVzcylcclxuICBjb25zdCBbYWN0aXZlUSwgc2V0QWN0aXZlUV0gPSB1c2VTdGF0ZSgwKTtcclxuICAvLyBjb25zdCBbY2xpY2tlZE9wdGlvbiwgc2V0Q2xpY2tlZE9wdGlvbl0gPSB1c2VTdGF0ZShwcm9ncmVzcy5jbGlja2VkQW5zTGlzdCk7XHJcbiAgdHJ5IHtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbm5vbnQgcmVhZCBxdWVzdFwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRICsgMSk7XHJcbiAgICAvLyBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgLSAxKTtcclxuICAgIC8vIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsZXQgY3VycmVudFF1ZXN0aW9uID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbjtcclxuICAgIGNvbnN0IGNsaWNrZWRBbnN3ZXJBcnJheSA9IGRhdGEubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXN0LnF1ZXN0aW9uLm9wdGlvbnMub3B0aW9uW3Byb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2luZGV4XV07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGNsaWNrZWRBbnN3ZXJBcnJheSlcclxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJBcnJheSA9IGRhdGEubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXN0LnF1ZXN0aW9uLmNvcnJlY3RfYW5zO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VyID0gY29ycmVjdEFuc3dlckFycmF5W2FjdGl2ZVFdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkQW5zd2VyQXJyYXlcIiwgY2xpY2tlZEFuc3dlckFycmF5KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGVzdC1wYWdlIGd4LTAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneC0wIG1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNtLTggbXgtYXV0byBxdWVzdC1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBxdWVzdC10b3Byb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+IFF1ZXN0aW9uIE5vLiB7YWN0aXZlUSArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPk1hcmtzIDogNTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcXVlc3QtcXVlc3Rpb24gbXQtMiBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5vcHRpb25zLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbk9wdGlvbkNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbi50b0xvd2VyQ2FzZSgpID09IGNvcnJlY3RBbnN3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmVlbnllbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBteC1hdXRvIG5hdmktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFF1ZXN0aW9ucyA6IHtwcm9ncmVzcy50b3RhbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1udW1iZXItYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVRID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIGNvbG9yOiBcIndoaXRlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VyQXJyYXlbaW5kZXhdLnRvTG93ZXJDYXNlKCkgPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkQW5zd2VyQXJyYXlbaW5kZXhdLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW55ZWxsb3dcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvIGZvb3Rlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJldmlvdXNDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHZpc2liaWxpdHk6IGFjdGl2ZVEgPT0gMCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5leHRDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2aXNpYmlsaXR5OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBhY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcHJldmlvdXMtbmV4dCBmaW5pc2gtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIil9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFTkQgVEVTVFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTVcIj5NYXJrIEFsbCB0aGUgcXVlc3Rpb25zIEZpcnN0ISEhPC9oMz5cclxuICAgICAgICA8aDVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rlc3QvdGVzdF9wYWdlXCIpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICA8L2g1PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkQWZ0ZXIoYXJyYXksIGluZGV4LCBuZXdJdGVtKSB7XHJcbiAgcmV0dXJuIFsuLi5hcnJheS5zbGljZSgwLCBpbmRleCksIG5ld0l0ZW0sIC4uLmFycmF5LnNsaWNlKGluZGV4KV07XHJcbn1cclxuXHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcXVlc3RCYW5rOiBzdGF0ZS5zdHVkZW50UmVkdWNlci5xdWVzdGlvbnMsXHJcbiAgICBzdHVkZW50X3JlY29yZDogc3RhdGUuc3R1ZGVudFJlZHVjZXIudXNlci5wcm9ncmVzcyxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHApKHJlc3VsdF9wYWdlKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiVG9wQmFyIiwicm91dGVyIiwicGF0aCIsInJlc3VsdF9wYWdlIiwicHJvcHMiLCJkYXRhIiwicXVlc3RCYW5rIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhY3RpdmVRIiwic2V0QWN0aXZlUSIsImUiLCJjb25zb2xlIiwibG9nIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJjdXJyZW50UXVlc3Rpb24iLCJxdWVzdGlvbiIsImNsaWNrZWRBbnN3ZXJBcnJheSIsIm1hcCIsInF1ZXN0IiwiaW5kZXgiLCJvcHRpb25zIiwib3B0aW9uIiwiY2xpY2tlZEFuc0xpc3QiLCJjb3JyZWN0QW5zd2VyQXJyYXkiLCJjb3JyZWN0X2FucyIsImNvcnJlY3RBbnN3ZXIiLCJ0b0xvd2VyQ2FzZSIsInBvaW50ZXJFdmVudHMiLCJxdWUiLCJlbGVtZW50Iiwib25PcHRpb25DbGljayIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInRvdGFsIiwiY29sb3IiLCJsZW5ndGgiLCJwdXNoIiwiZXJyIiwiY3Vyc29yIiwiYWRkQWZ0ZXIiLCJhcnJheSIsIm5ld0l0ZW0iLCJzbGljZSIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwicXVlc3Rpb25zIiwic3R1ZGVudF9yZWNvcmQiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==