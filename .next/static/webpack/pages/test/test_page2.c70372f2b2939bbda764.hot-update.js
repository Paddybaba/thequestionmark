"use strict";
self["webpackHotUpdate_N_E"]("pages/test/test_page2",{

/***/ "./pages/test/test_page2.js":
/*!**********************************!*\
  !*** ./pages/test/test_page2.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/TopBar */ "./src/components/TopBar.js");
/* harmony import */ var _src_components_PopModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/PopModal */ "./src/components/PopModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\test_page2.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // const myQuestions = [
//   {
//       subject: "General Knowledge",
//       author: "Anup Kumar",
//       model: "question-with-image",
//       question: {
//         quest: {
//           image:
//             "https://images.unsplash.com/photo-1610361418971-50cb8d1f8339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
//           que: "Where is this famous monument located?",
//         },
//         options: [
//           { image: "", option: "Delhi" },
//           { image: "", option: "Mumbai" },
//           { image: "", option: "Agra" },
//           { image: "", option: "Jaipur" },
//         ],
//         correct_ans: "Agra",
//         marks: 5,
//     },
//     difficulty: "medium",
//   },
//   {
//     subject: "General Knowledge",
//     author: "Anup Kumar",
//     model: "question-with-image",
//     question: {
//       quest: {
//         image:
//           "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
//         que: "Where is this famous monument located?",
//       },
//       options: [
//         { image: "", option: "Delhi" },
//         { image: "", option: "Mumbai" },
//         { image: "", option: "Agra" },
//         { image: "", option: "Jaipur" },
//       ],
//       correct_ans: "Delhi",
//       marks: 5,
//     },
//     difficulty: "medium",
//   },
//   {
//     subject: "General Knowledge",
//     author: "Anup Kumar",
//     model: "all-text",
//     question: {
//       quest: { image: "", que: "Where is Red Fort  located?" },
//       options: [
//         { image: "", option: "Delhi" },
//         { image: "", option: "Mumbai" },
//         { image: "", option: "Agra" },
//         { image: "", option: "Jaipur" },
//       ],
//       correct_ans: "Delhi",
//       marks: 5,
//     },
//     difficulty: "medium",
//   },
//   {
//     subject: "General Knowledge",
//     author: "Anup Kumar",
//     model: "options-with-image",
//     question: {
//       quest: { image: "", que: "Which of this is located in Hyderabad?" },
//       options: [
//         {
//           image:
//             "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
//           option: "a",
//         },
//         {
//           image:
//             "https://media.istockphoto.com/photos/high-wide-angle-view-of-charminar-in-the-night-picture-id1215274990",
//           option: "b",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//           option: "c",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//           option: "d",
//         },
//       ],
//       correct_ans: "b",
//       marks: 5,
//     },
//     difficulty: "medium",
//   },
// ];




function saveProgress(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

var test_page2 = function test_page2(props) {
  _s();

  console.log("props from test page-2:", props.questBank);
  var data = props.questBank; // const data = myQuestions;

  var arrayofNulls = new Array(data.length).fill("x");
  var score = {
    total: data.length,
    answered: [],
    unanswered: [],
    marked: [],
    correct: [],
    incorrect: [],
    clickedAnsList: arrayofNulls,
    correctAnsList: []
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)( true ? localStorage.getItem("score") ? JSON.parse(localStorage.getItem("score")) : score : 0),
      progress = _useState[0],
      setProgress = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      activeQ = _useState2[0],
      setActiveQ = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(progress.clickedAnsList),
      clickedOption = _useState3[0],
      setClickedOption = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      modalShow = _useState4[0],
      setModalShow = _useState4[1];

  function addToAnswered() {
    var answeredQuest = progress.answered;
    answeredQuest.indexOf(activeQ) === -1 ? answeredQuest.push(activeQ) : console.log("already answered"); // console.log(activeQ, " is present in ", answeredQuest);

    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      answered: answeredQuest
    }));
    console.log("progress", progress);
  }

  function addToClicked(value) {
    var clickedList = progress.clickedAnsList;
    clickedList[activeQ] = value;
    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      clickedAnsList: clickedList
    }));
    console.log(progress.correctAnsList);
  }

  function addToResult(clicked, correct) {
    var correctArray = progress.correct;
    var incorrectArray = progress.incorrect;

    if (clicked === correct) {
      correctArray.indexOf(activeQ) === -1 ? correctArray.push(activeQ) : {};
      incorrectArray.indexOf(activeQ) !== -1 ? incorrectArray.splice(incorrectArray.indexOf(activeQ), 1) : {};
      setProgress(_objectSpread(_objectSpread({}, progress), {}, {
        correct: correctArray
      }));
    } else {
      incorrectArray.indexOf(activeQ) === -1 ? incorrectArray.push(activeQ) : {};
      correctArray.indexOf(activeQ) !== -1 ? correctArray.splice(correctArray.indexOf(activeQ), 1) : {};
      setProgress(_objectSpread(_objectSpread({}, progress), {}, {
        incorrect: incorrectArray
      }));
    }
  } // console.log(clickedOption);


  var onOptionClick = function onOptionClick(e) {
    addToClicked(e.target.getAttribute("position"));
    addToAnswered();
    var clickedAnswer = e.target.getAttribute("content").toLowerCase();
    console.log(clickedAnswer);
    var correctAns = data[activeQ].question.correct_ans.toLowerCase();
    console.log("corrrect answer ", correctAns);
    addToResult(clickedAnswer, correctAns);
    saveProgress(progress);
  };

  var onNextClick = function onNextClick() {
    setActiveQ(activeQ + 1);
    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      clickedAnsList: clickedOption
    }));
  };

  var onPreviousClick = function onPreviousClick() {
    setActiveQ(activeQ - 1);
    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      clickedAnsList: clickedOption
    }));
  };

  var onFinishClick = function onFinishClick() {
    var numberOfCorrects = progress.correct.length;
    alert("Finish", numberOfCorrects);
  };

  try {
    var currentQuestion = data[activeQ].question;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_TopBar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
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
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "row quest-toprow",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-6",
                    children: [" Question No. ", activeQ + 1]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-6 text-center",
                    children: "Marks : 5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
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
                      lineNumber: 211,
                      columnNumber: 25
                    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      className: "text-bottom fw-bold",
                      children: currentQuestion.quest.que
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ol", {
                    children: currentQuestion.options.map(function (element, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                        onClick: function onClick(e) {
                          return onOptionClick(e);
                        } // style={{
                        //   border:
                        //     index == progress.clickedAnsList[activeQ]
                        //       ? "1px solid green"
                        //       : "none",
                        // }}
                        ,
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
                            lineNumber: 249,
                            columnNumber: 33
                          }, _this) : null, element.option.length > 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                            style: {
                              verticalAlign: "center",
                              margin: 3
                            },
                            children: element.option
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 33
                          }, _this) : null]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 234,
                          columnNumber: 29
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 27
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "col-sm-4 mx-auto navi-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: ["Total Questions : ", progress.total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 19
                }, _this), data.map(function (element, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "question-number-box",
                    style: (activeQ === index ? {
                      backgroundColor: "grey",
                      color: "white"
                    } : {}, progress.answered.includes(index) ? {
                      backgroundColor: "rgb(128, 192, 33)"
                    } : {}),
                    onClick: function onClick() {
                      setActiveQ(index);
                      setProgress(_objectSpread(_objectSpread({}, progress), {}, {
                        clickedAnsList: clickedOption
                      }));
                    },
                    children: index + 1
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
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
                  lineNumber: 302,
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
                  lineNumber: 310,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return setModalShow(true);
                  },
                  children: "Finish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_PopModal__WEBPACK_IMPORTED_MODULE_5__.default, {
                  show: modalShow,
                  onHide: function onHide() {
                    return setModalShow(false);
                  },
                  progress: progress
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  } catch (err) {
    console.log(err);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "Error occured"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 12
    }, _this);
  }
};

_s(test_page2, "qzAUHMZG2vwlgTlf7DObLmoPL4s=");

function addAfter(array, index, newItem) {
  return [].concat((0,E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(0, index)), [newItem], (0,E_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(index)));
}

var mstp = function mstp(state) {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mstp)(test_page2));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLmM3MDM3MmYyYjI5MzliYmRhNzY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBLFNBQVNNLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCQyxFQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQTlCO0FBQ0Q7O0FBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUFzQ0YsS0FBSyxDQUFDRyxTQUE1QztBQUNFLE1BQU1DLElBQUksR0FBR0osS0FBSyxDQUFDRyxT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c3QvdGVzdF9wYWdlMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvcEJhclwiO1xyXG5pbXBvcnQgUG9wTW9kYWwgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1BvcE1vZGFsXCI7XHJcblxyXG4vLyBjb25zdCBteVF1ZXN0aW9ucyA9IFtcclxuLy8gICB7XHJcbi8vICAgICAgIHN1YmplY3Q6IFwiR2VuZXJhbCBLbm93bGVkZ2VcIixcclxuLy8gICAgICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuLy8gICAgICAgbW9kZWw6IFwicXVlc3Rpb24td2l0aC1pbWFnZVwiLFxyXG4vLyAgICAgICBxdWVzdGlvbjoge1xyXG4vLyAgICAgICAgIHF1ZXN0OiB7XHJcbi8vICAgICAgICAgICBpbWFnZTpcclxuLy8gICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxMDM2MTQxODk3MS01MGNiOGQxZjgzMzk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQzNiZxPTgwXCIsXHJcbi8vICAgICAgICAgICBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG9wdGlvbnM6IFtcclxuLy8gICAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbi8vICAgICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuLy8gICAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJBZ3JhXCIgfSxcclxuLy8gICAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgY29ycmVjdF9hbnM6IFwiQWdyYVwiLFxyXG4vLyAgICAgICAgIG1hcmtzOiA1LFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbi8vICAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4vLyAgICAgbW9kZWw6IFwicXVlc3Rpb24td2l0aC1pbWFnZVwiLFxyXG4vLyAgICAgcXVlc3Rpb246IHtcclxuLy8gICAgICAgcXVlc3Q6IHtcclxuLy8gICAgICAgICBpbWFnZTpcclxuLy8gICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4MjgwNjg5NzAtN2I3NTA4MjQ4NWNkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MTMmcT04MFwiLFxyXG4vLyAgICAgICAgIHF1ZTogXCJXaGVyZSBpcyB0aGlzIGZhbW91cyBtb251bWVudCBsb2NhdGVkP1wiLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBvcHRpb25zOiBbXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuLy8gICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuLy8gICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbi8vICAgICAgIF0sXHJcbi8vICAgICAgIGNvcnJlY3RfYW5zOiBcIkRlbGhpXCIsXHJcbi8vICAgICAgIG1hcmtzOiA1LFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbi8vICAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4vLyAgICAgbW9kZWw6IFwiYWxsLXRleHRcIixcclxuLy8gICAgIHF1ZXN0aW9uOiB7XHJcbi8vICAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiV2hlcmUgaXMgUmVkIEZvcnQgIGxvY2F0ZWQ/XCIgfSxcclxuLy8gICAgICAgb3B0aW9uczogW1xyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgICBjb3JyZWN0X2FuczogXCJEZWxoaVwiLFxyXG4vLyAgICAgICBtYXJrczogNSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4vLyAgICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuLy8gICAgIG1vZGVsOiBcIm9wdGlvbnMtd2l0aC1pbWFnZVwiLFxyXG4vLyAgICAgcXVlc3Rpb246IHtcclxuLy8gICAgICAgcXVlc3Q6IHsgaW1hZ2U6IFwiXCIsIHF1ZTogXCJXaGljaCBvZiB0aGlzIGlzIGxvY2F0ZWQgaW4gSHlkZXJhYmFkP1wiIH0sXHJcbi8vICAgICAgIG9wdGlvbnM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBpbWFnZTpcclxuLy8gICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NTgyODA2ODk3MC03Yjc1MDgyNDg1Y2Q/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUxMyZxPTgwXCIsXHJcbi8vICAgICAgICAgICBvcHRpb246IFwiYVwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vcGhvdG9zL2hpZ2gtd2lkZS1hbmdsZS12aWV3LW9mLWNoYXJtaW5hci1pbi10aGUtbmlnaHQtcGljdHVyZS1pZDEyMTUyNzQ5OTBcIixcclxuLy8gICAgICAgICAgIG9wdGlvbjogXCJiXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBpbWFnZTpcclxuLy8gICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNDQ5MjQxMjkzNy1iMjgwNzRhNWQ3ZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MSZxPTgwXCIsXHJcbi8vICAgICAgICAgICBvcHRpb246IFwiY1wiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjQ0OTI0MTI5MzctYjI4MDc0YTVkN2RhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NzEmcT04MFwiLFxyXG4vLyAgICAgICAgICAgb3B0aW9uOiBcImRcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG5cclxuLy8gICAgICAgY29ycmVjdF9hbnM6IFwiYlwiLFxyXG4vLyAgICAgICBtYXJrczogNSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcbmZ1bmN0aW9uIHNhdmVQcm9ncmVzcyhzY29yZSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NvcmVcIiwgSlNPTi5zdHJpbmdpZnkoc2NvcmUpKTtcclxufVxyXG5cclxuY29uc3QgdGVzdF9wYWdlMiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicHJvcHMgZnJvbSB0ZXN0IHBhZ2UtMjpcIixwcm9wcy5xdWVzdEJhbmspO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICAvLyBjb25zdCBkYXRhID0gbXlRdWVzdGlvbnM7XHJcbiAgY29uc3QgYXJyYXlvZk51bGxzID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKFwieFwiKTtcclxuICBjb25zdCBzY29yZSA9IHtcclxuICAgIHRvdGFsOiBkYXRhLmxlbmd0aCxcclxuICAgIGFuc3dlcmVkOiBbXSxcclxuICAgIHVuYW5zd2VyZWQ6IFtdLFxyXG4gICAgbWFya2VkOiBbXSxcclxuICAgIGNvcnJlY3Q6IFtdLFxyXG4gICAgaW5jb3JyZWN0OiBbXSxcclxuICAgIGNsaWNrZWRBbnNMaXN0OiBhcnJheW9mTnVsbHMsXHJcbiAgICBjb3JyZWN0QW5zTGlzdDogW10sXHJcbiAgfTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSlcclxuICAgICAgICA6IHNjb3JlXHJcbiAgICAgIDogc2NvcmVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVRLCBzZXRBY3RpdmVRXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjbGlja2VkT3B0aW9uLCBzZXRDbGlja2VkT3B0aW9uXSA9IHVzZVN0YXRlKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuXHJcbiAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBhZGRUb0Fuc3dlcmVkKCkge1xyXG4gICAgdmFyIGFuc3dlcmVkUXVlc3QgPSBwcm9ncmVzcy5hbnN3ZXJlZDtcclxuICAgIGFuc3dlcmVkUXVlc3QuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgPyBhbnN3ZXJlZFF1ZXN0LnB1c2goYWN0aXZlUSlcclxuICAgICAgOiBjb25zb2xlLmxvZyhcImFscmVhZHkgYW5zd2VyZWRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVRLCBcIiBpcyBwcmVzZW50IGluIFwiLCBhbnN3ZXJlZFF1ZXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGFuc3dlcmVkOiBhbnN3ZXJlZFF1ZXN0IH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9ncmVzc1wiLHByb2dyZXNzKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9DbGlja2VkKHZhbHVlKSB7XHJcbiAgICB2YXIgY2xpY2tlZExpc3QgPSBwcm9ncmVzcy5jbGlja2VkQW5zTGlzdDtcclxuICAgIGNsaWNrZWRMaXN0W2FjdGl2ZVFdID0gdmFsdWU7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZExpc3QgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9ncmVzcy5jb3JyZWN0QW5zTGlzdCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZFRvUmVzdWx0KGNsaWNrZWQsIGNvcnJlY3QpIHtcclxuICAgIHZhciBjb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5jb3JyZWN0O1xyXG4gICAgdmFyIGluY29ycmVjdEFycmF5ID0gcHJvZ3Jlc3MuaW5jb3JyZWN0O1xyXG4gICAgaWYgKGNsaWNrZWQgPT09IGNvcnJlY3QpIHtcclxuICAgICAgY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xID8gY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSkgOiB7fTtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnNwbGljZShpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpLCAxKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNvcnJlY3Q6IGNvcnJlY3RBcnJheSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xXHJcbiAgICAgICAgPyBpbmNvcnJlY3RBcnJheS5wdXNoKGFjdGl2ZVEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgIT09IC0xXHJcbiAgICAgICAgPyBjb3JyZWN0QXJyYXkuc3BsaWNlKGNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpLCAxKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGluY29ycmVjdDogaW5jb3JyZWN0QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhjbGlja2VkT3B0aW9uKTtcclxuXHJcbiAgY29uc3Qgb25PcHRpb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBhZGRUb0NsaWNrZWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIikpO1xyXG4gICAgYWRkVG9BbnN3ZXJlZCgpO1xyXG4gICAgY29uc3QgY2xpY2tlZEFuc3dlciA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKGNsaWNrZWRBbnN3ZXIpO1xyXG4gICAgY29uc3QgY29ycmVjdEFucyA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb24uY29ycmVjdF9hbnMudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY29ycnJlY3QgYW5zd2VyIFwiLCBjb3JyZWN0QW5zKVxyXG4gICAgYWRkVG9SZXN1bHQoY2xpY2tlZEFuc3dlciwgY29ycmVjdEFucyk7XHJcbiAgICBzYXZlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRICsgMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgLSAxKTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB2YXIgbnVtYmVyT2ZDb3JyZWN0cyA9IHByb2dyZXNzLmNvcnJlY3QubGVuZ3RoO1xyXG4gICAgYWxlcnQoXCJGaW5pc2hcIiwgbnVtYmVyT2ZDb3JyZWN0cyk7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgbGV0IGN1cnJlbnRRdWVzdGlvbiA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXN0LXBhZ2UgZ3gtMCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTAgbWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBteC1hdXRvIHF1ZXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBxdWVzdC10b3Byb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+IFF1ZXN0aW9uIE5vLiB7YWN0aXZlUSArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPk1hcmtzIDogNTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHF1ZXN0LXF1ZXN0aW9uIG10LTIgbXItMyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LmltYWdlICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50UXVlc3Rpb24ucXVlc3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ib3R0b20gZnctYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5vcHRpb25zLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25PcHRpb25DbGljayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGJvcmRlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpbmRleCA9PSBwcm9ncmVzcy5jbGlja2VkQW5zTGlzdFthY3RpdmVRXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBcIjFweCBzb2xpZCBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2VsZW1lbnQub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5pbWFnZSAhPSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQub3B0aW9uLmxlbmd0aCA+IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgbXgtYXV0byBuYXZpLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBRdWVzdGlvbnMgOiB7cHJvZ3Jlc3MudG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24tbnVtYmVyLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlUSA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MuYW5zd2VyZWQuaW5jbHVkZXMoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcInJnYigxMjgsIDE5MiwgMzMpXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBmb290ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblByZXZpb3VzQ2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB2aXNpYmlsaXR5OiBhY3RpdmVRID09IDAgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OZXh0Q2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdmlzaWJpbGl0eTpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gYWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDEgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHByZXZpb3VzLW5leHQgZmluaXNoLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxTaG93KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UG9wTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PkVycm9yIG9jY3VyZWQ8L2Rpdj47XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkQWZ0ZXIoYXJyYXksIGluZGV4LCBuZXdJdGVtKSB7XHJcbiAgcmV0dXJuIFsuLi5hcnJheS5zbGljZSgwLCBpbmRleCksIG5ld0l0ZW0sIC4uLmFycmF5LnNsaWNlKGluZGV4KV07XHJcbn1cclxuXHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcXVlc3RCYW5rOiBzdGF0ZS5zdHVkZW50UmVkdWNlci5xdWVzdGlvbnMsXHJcbiAgICBzdHVkZW50X3JlY29yZDogc3RhdGUuc3R1ZGVudFJlZHVjZXIudXNlci5wcm9ncmVzcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtc3RwKSh0ZXN0X3BhZ2UyKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJUb3BCYXIiLCJQb3BNb2RhbCIsInNhdmVQcm9ncmVzcyIsInNjb3JlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0X3BhZ2UyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicXVlc3RCYW5rIiwiZGF0YSIsImFycmF5b2ZOdWxscyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsInRvdGFsIiwiYW5zd2VyZWQiLCJ1bmFuc3dlcmVkIiwibWFya2VkIiwiY29ycmVjdCIsImluY29ycmVjdCIsImNsaWNrZWRBbnNMaXN0IiwiY29ycmVjdEFuc0xpc3QiLCJnZXRJdGVtIiwicGFyc2UiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiYWN0aXZlUSIsInNldEFjdGl2ZVEiLCJjbGlja2VkT3B0aW9uIiwic2V0Q2xpY2tlZE9wdGlvbiIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImFkZFRvQW5zd2VyZWQiLCJhbnN3ZXJlZFF1ZXN0IiwiaW5kZXhPZiIsInB1c2giLCJhZGRUb0NsaWNrZWQiLCJ2YWx1ZSIsImNsaWNrZWRMaXN0IiwiYWRkVG9SZXN1bHQiLCJjbGlja2VkIiwiY29ycmVjdEFycmF5IiwiaW5jb3JyZWN0QXJyYXkiLCJzcGxpY2UiLCJvbk9wdGlvbkNsaWNrIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNsaWNrZWRBbnN3ZXIiLCJ0b0xvd2VyQ2FzZSIsImNvcnJlY3RBbnMiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJvbkZpbmlzaENsaWNrIiwibnVtYmVyT2ZDb3JyZWN0cyIsImFsZXJ0IiwiY3VycmVudFF1ZXN0aW9uIiwicXVlc3QiLCJpbWFnZSIsInF1ZSIsIm9wdGlvbnMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImJvcmRlciIsIm9wdGlvbiIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImluY2x1ZGVzIiwiZXJyIiwiYWRkQWZ0ZXIiLCJhcnJheSIsIm5ld0l0ZW0iLCJzbGljZSIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwicXVlc3Rpb25zIiwic3R1ZGVudF9yZWNvcmQiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==