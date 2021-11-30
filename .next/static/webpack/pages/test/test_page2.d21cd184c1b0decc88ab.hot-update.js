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
    })); // console.log(progress);
  }

  function addToClicked(value) {
    var clickedList = progress.clickedAnsList;
    clickedList[activeQ] = value; // console.log("new Array", clickedList);

    setProgress(_objectSpread(_objectSpread({}, progress), {}, {
      clickedAnsList: clickedList
    }));
    console.log(progress.clickedAnsList);
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
    var clickedAnswer = e.target.getAttribute("content");
    console.log(clickedAnswer);
    var correctAns = data[activeQ].question.correct_ans.toLowerCase();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLmQyMWNkMTg0YzFiMGRlY2M4OGFiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBLFNBQVNNLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCQyxFQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQTlCO0FBQ0Q7O0FBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUFzQ0YsS0FBSyxDQUFDRyxTQUE1QztBQUNFLE1BQU1DLElBQUksR0FBR0osS0FBSyxDQUFDRyxT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LDBCQUFRLEVBQUVQO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURGO0FBZ0pELEdBbEpELENBa0pFLE9BQU9vRCxHQUFQLEVBQVk7QUFDWnRFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUUsR0FBWjtBQUVBLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDtBQUNGLENBL09EOztHQUFNeEU7O0FBaVBOLFNBQVN5RSxRQUFULENBQWtCQyxLQUFsQixFQUF5QmIsS0FBekIsRUFBZ0NjLE9BQWhDLEVBQXlDO0FBQ3ZDLGtKQUFXRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxDQUFaLEVBQWVmLEtBQWYsQ0FBWCxJQUFrQ2MsT0FBbEMsa0lBQThDRCxLQUFLLENBQUNFLEtBQU4sQ0FBWWYsS0FBWixDQUE5QztBQUNEOztBQUVELElBQU1nQixJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsU0FBTztBQUNMMUUsSUFBQUEsU0FBUyxFQUFFMEUsS0FBSyxDQUFDQyxjQUFOLENBQXFCQyxTQUQzQjtBQUVMQyxJQUFBQSxjQUFjLEVBQUVILEtBQUssQ0FBQ0MsY0FBTixDQUFxQkcsSUFBckIsQ0FBMEI5RDtBQUZyQyxHQUFQO0FBSUQsQ0FMRDs7QUFPQSwrREFBZTdCLG9EQUFPLENBQUNzRixJQUFELENBQVAsQ0FBYzdFLFVBQWQsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0L3Rlc3RfcGFnZTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IFBvcE1vZGFsIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbFwiO1xyXG5cclxuLy8gY29uc3QgbXlRdWVzdGlvbnMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbi8vICAgICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbi8vICAgICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuLy8gICAgICAgcXVlc3Rpb246IHtcclxuLy8gICAgICAgICBxdWVzdDoge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTAzNjE0MTg5NzEtNTBjYjhkMWY4MzM5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MzYmcT04MFwiLFxyXG4vLyAgICAgICAgICAgcXVlOiBcIldoZXJlIGlzIHRoaXMgZmFtb3VzIG1vbnVtZW50IGxvY2F0ZWQ/XCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBvcHRpb25zOiBbXHJcbi8vICAgICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRGVsaGlcIiB9LFxyXG4vLyAgICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbi8vICAgICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbi8vICAgICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiSmFpcHVyXCIgfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGNvcnJlY3RfYW5zOiBcIkFncmFcIixcclxuLy8gICAgICAgICBtYXJrczogNSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4vLyAgICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuLy8gICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuLy8gICAgIHF1ZXN0aW9uOiB7XHJcbi8vICAgICAgIHF1ZXN0OiB7XHJcbi8vICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg1ODI4MDY4OTcwLTdiNzUwODI0ODVjZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTEzJnE9ODBcIixcclxuLy8gICAgICAgICBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgb3B0aW9uczogW1xyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgICBjb3JyZWN0X2FuczogXCJEZWxoaVwiLFxyXG4vLyAgICAgICBtYXJrczogNSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4vLyAgICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuLy8gICAgIG1vZGVsOiBcImFsbC10ZXh0XCIsXHJcbi8vICAgICBxdWVzdGlvbjoge1xyXG4vLyAgICAgICBxdWVzdDogeyBpbWFnZTogXCJcIiwgcXVlOiBcIldoZXJlIGlzIFJlZCBGb3J0ICBsb2NhdGVkP1wiIH0sXHJcbi8vICAgICAgIG9wdGlvbnM6IFtcclxuLy8gICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRGVsaGlcIiB9LFxyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJNdW1iYWlcIiB9LFxyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJBZ3JhXCIgfSxcclxuLy8gICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiSmFpcHVyXCIgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgICAgY29ycmVjdF9hbnM6IFwiRGVsaGlcIixcclxuLy8gICAgICAgbWFya3M6IDUsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIHN1YmplY3Q6IFwiR2VuZXJhbCBLbm93bGVkZ2VcIixcclxuLy8gICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbi8vICAgICBtb2RlbDogXCJvcHRpb25zLXdpdGgtaW1hZ2VcIixcclxuLy8gICAgIHF1ZXN0aW9uOiB7XHJcbi8vICAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiV2hpY2ggb2YgdGhpcyBpcyBsb2NhdGVkIGluIEh5ZGVyYWJhZD9cIiB9LFxyXG4vLyAgICAgICBvcHRpb25zOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4MjgwNjg5NzAtN2I3NTA4MjQ4NWNkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MTMmcT04MFwiLFxyXG4vLyAgICAgICAgICAgb3B0aW9uOiBcImFcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIGltYWdlOlxyXG4vLyAgICAgICAgICAgICBcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9oaWdoLXdpZGUtYW5nbGUtdmlldy1vZi1jaGFybWluYXItaW4tdGhlLW5pZ2h0LXBpY3R1cmUtaWQxMjE1Mjc0OTkwXCIsXHJcbi8vICAgICAgICAgICBvcHRpb246IFwiYlwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjQ0OTI0MTI5MzctYjI4MDc0YTVkN2RhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NzEmcT04MFwiLFxyXG4vLyAgICAgICAgICAgb3B0aW9uOiBcImNcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIGltYWdlOlxyXG4vLyAgICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI0NDkyNDEyOTM3LWIyODA3NGE1ZDdkYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcxJnE9ODBcIixcclxuLy8gICAgICAgICAgIG9wdGlvbjogXCJkXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuXHJcbi8vICAgICAgIGNvcnJlY3RfYW5zOiBcImJcIixcclxuLy8gICAgICAgbWFya3M6IDUsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5mdW5jdGlvbiBzYXZlUHJvZ3Jlc3Moc2NvcmUpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3JlXCIsIEpTT04uc3RyaW5naWZ5KHNjb3JlKSk7XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RfcGFnZTIgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gdGVzdCBwYWdlLTI6XCIscHJvcHMucXVlc3RCYW5rKTtcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5xdWVzdEJhbms7XHJcbiAgLy8gY29uc3QgZGF0YSA9IG15UXVlc3Rpb25zO1xyXG4gIGNvbnN0IGFycmF5b2ZOdWxscyA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCkuZmlsbChcInhcIik7XHJcbiAgY29uc3Qgc2NvcmUgPSB7XHJcbiAgICB0b3RhbDogZGF0YS5sZW5ndGgsXHJcbiAgICBhbnN3ZXJlZDogW10sXHJcbiAgICB1bmFuc3dlcmVkOiBbXSxcclxuICAgIG1hcmtlZDogW10sXHJcbiAgICBjb3JyZWN0OiBbXSxcclxuICAgIGluY29ycmVjdDogW10sXHJcbiAgICBjbGlja2VkQW5zTGlzdDogYXJyYXlvZk51bGxzLFxyXG4gICAgY29ycmVjdEFuc0xpc3Q6IFtdLFxyXG4gIH07XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpXHJcbiAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIikpXHJcbiAgICAgICAgOiBzY29yZVxyXG4gICAgICA6IHNjb3JlXHJcbiAgKTtcclxuICBjb25zdCBbYWN0aXZlUSwgc2V0QWN0aXZlUV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2xpY2tlZE9wdGlvbiwgc2V0Q2xpY2tlZE9wdGlvbl0gPSB1c2VTdGF0ZShwcm9ncmVzcy5jbGlja2VkQW5zTGlzdCk7XHJcblxyXG4gIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gYWRkVG9BbnN3ZXJlZCgpIHtcclxuICAgIHZhciBhbnN3ZXJlZFF1ZXN0ID0gcHJvZ3Jlc3MuYW5zd2VyZWQ7XHJcbiAgICBhbnN3ZXJlZFF1ZXN0LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xXHJcbiAgICAgID8gYW5zd2VyZWRRdWVzdC5wdXNoKGFjdGl2ZVEpXHJcbiAgICAgIDogY29uc29sZS5sb2coXCJhbHJlYWR5IGFuc3dlcmVkXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYWN0aXZlUSwgXCIgaXMgcHJlc2VudCBpbiBcIiwgYW5zd2VyZWRRdWVzdCk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBhbnN3ZXJlZDogYW5zd2VyZWRRdWVzdCB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9DbGlja2VkKHZhbHVlKSB7XHJcbiAgICB2YXIgY2xpY2tlZExpc3QgPSBwcm9ncmVzcy5jbGlja2VkQW5zTGlzdDtcclxuICAgIGNsaWNrZWRMaXN0W2FjdGl2ZVFdID0gdmFsdWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5ldyBBcnJheVwiLCBjbGlja2VkTGlzdCk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZExpc3QgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9ncmVzcy5jbGlja2VkQW5zTGlzdCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZFRvUmVzdWx0KGNsaWNrZWQsIGNvcnJlY3QpIHtcclxuICAgIHZhciBjb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5jb3JyZWN0O1xyXG4gICAgdmFyIGluY29ycmVjdEFycmF5ID0gcHJvZ3Jlc3MuaW5jb3JyZWN0O1xyXG4gICAgaWYgKGNsaWNrZWQgPT09IGNvcnJlY3QpIHtcclxuICAgICAgY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xID8gY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSkgOiB7fTtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnNwbGljZShpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpLCAxKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNvcnJlY3Q6IGNvcnJlY3RBcnJheSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xXHJcbiAgICAgICAgPyBpbmNvcnJlY3RBcnJheS5wdXNoKGFjdGl2ZVEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgIT09IC0xXHJcbiAgICAgICAgPyBjb3JyZWN0QXJyYXkuc3BsaWNlKGNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpLCAxKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGluY29ycmVjdDogaW5jb3JyZWN0QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhjbGlja2VkT3B0aW9uKTtcclxuXHJcbiAgY29uc3Qgb25PcHRpb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBhZGRUb0NsaWNrZWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIikpO1xyXG4gICAgYWRkVG9BbnN3ZXJlZCgpO1xyXG4gICAgY29uc3QgY2xpY2tlZEFuc3dlciA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhjbGlja2VkQW5zd2VyKTtcclxuICAgIGNvbnN0IGNvcnJlY3RBbnMgPSBkYXRhW2FjdGl2ZVFdLnF1ZXN0aW9uLmNvcnJlY3RfYW5zLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBhZGRUb1Jlc3VsdChjbGlja2VkQW5zd2VyLCBjb3JyZWN0QW5zKTtcclxuICAgIHNhdmVQcm9ncmVzcyhwcm9ncmVzcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25OZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgKyAxKTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUHJldmlvdXNDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSAtIDEpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hDbGljayA9ICgpID0+IHtcclxuICAgIHZhciBudW1iZXJPZkNvcnJlY3RzID0gcHJvZ3Jlc3MuY29ycmVjdC5sZW5ndGg7XHJcbiAgICBhbGVydChcIkZpbmlzaFwiLCBudW1iZXJPZkNvcnJlY3RzKTtcclxuICB9O1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY3VycmVudFF1ZXN0aW9uID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRvcEJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRlc3QtcGFnZSBneC0wIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3gtMCBtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG14LWF1dG8gcXVlc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHF1ZXN0LXRvcHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj4gUXVlc3Rpb24gTm8uIHthY3RpdmVRICsgMX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRleHQtY2VudGVyXCI+TWFya3MgOiA1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcXVlc3QtcXVlc3Rpb24gbXQtMiBtci0zIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ucXVlc3QuaW1hZ2UgIT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJvdHRvbSBmdy1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ucXVlc3QucXVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLm9wdGlvbnMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbk9wdGlvbkNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA/IFwiMXB4IHNvbGlkIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PSBwcm9ncmVzcy5jbGlja2VkQW5zTGlzdFthY3RpdmVRXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZWxlbWVudC5vcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmltYWdlICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3B0aW9uLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5vcHRpb24ubGVuZ3RoID4gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5vcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBteC1hdXRvIG5hdmktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFF1ZXN0aW9ucyA6IHtwcm9ncmVzcy50b3RhbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1udW1iZXItYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVRID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIGNvbG9yOiBcIndoaXRlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcy5hbnN3ZXJlZC5pbmNsdWRlcyhpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDEyOCwgMTkyLCAzMylcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVRKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvIGZvb3Rlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJldmlvdXNDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHZpc2liaWxpdHk6IGFjdGl2ZVEgPT0gMCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5leHRDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2aXNpYmlsaXR5OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBhY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcHJldmlvdXMtbmV4dCBmaW5pc2gtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3BNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldE1vZGFsU2hvdyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3Igb2NjdXJlZDwvZGl2PjtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRBZnRlcihhcnJheSwgaW5kZXgsIG5ld0l0ZW0pIHtcclxuICByZXR1cm4gWy4uLmFycmF5LnNsaWNlKDAsIGluZGV4KSwgbmV3SXRlbSwgLi4uYXJyYXkuc2xpY2UoaW5kZXgpXTtcclxufVxyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdEJhbms6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnF1ZXN0aW9ucyxcclxuICAgIHN0dWRlbnRfcmVjb3JkOiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLnByb2dyZXNzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHApKHRlc3RfcGFnZTIpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29ubmVjdCIsIlRvcEJhciIsIlBvcE1vZGFsIiwic2F2ZVByb2dyZXNzIiwic2NvcmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3RfcGFnZTIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVzdEJhbmsiLCJkYXRhIiwiYXJyYXlvZk51bGxzIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwidG90YWwiLCJhbnN3ZXJlZCIsInVuYW5zd2VyZWQiLCJtYXJrZWQiLCJjb3JyZWN0IiwiaW5jb3JyZWN0IiwiY2xpY2tlZEFuc0xpc3QiLCJjb3JyZWN0QW5zTGlzdCIsImdldEl0ZW0iLCJwYXJzZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhY3RpdmVRIiwic2V0QWN0aXZlUSIsImNsaWNrZWRPcHRpb24iLCJzZXRDbGlja2VkT3B0aW9uIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiYWRkVG9BbnN3ZXJlZCIsImFuc3dlcmVkUXVlc3QiLCJpbmRleE9mIiwicHVzaCIsImFkZFRvQ2xpY2tlZCIsInZhbHVlIiwiY2xpY2tlZExpc3QiLCJhZGRUb1Jlc3VsdCIsImNsaWNrZWQiLCJjb3JyZWN0QXJyYXkiLCJpbmNvcnJlY3RBcnJheSIsInNwbGljZSIsIm9uT3B0aW9uQ2xpY2siLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY2xpY2tlZEFuc3dlciIsImNvcnJlY3RBbnMiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zIiwidG9Mb3dlckNhc2UiLCJvbk5leHRDbGljayIsIm9uUHJldmlvdXNDbGljayIsIm9uRmluaXNoQ2xpY2siLCJudW1iZXJPZkNvcnJlY3RzIiwiYWxlcnQiLCJjdXJyZW50UXVlc3Rpb24iLCJxdWVzdCIsImltYWdlIiwicXVlIiwib3B0aW9ucyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwiYm9yZGVyIiwib3B0aW9uIiwidmVydGljYWxBbGlnbiIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW5jbHVkZXMiLCJlcnIiLCJhZGRBZnRlciIsImFycmF5IiwibmV3SXRlbSIsInNsaWNlIiwibXN0cCIsInN0YXRlIiwic3R1ZGVudFJlZHVjZXIiLCJxdWVzdGlvbnMiLCJzdHVkZW50X3JlY29yZCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9