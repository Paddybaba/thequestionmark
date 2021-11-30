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

  console.log("props from test page-2:", props.student_record);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLjcyMDRkZjBlZjUyZWE0NmYyMDcxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBLFNBQVNNLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCQyxFQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQTlCO0FBQ0Q7O0FBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUFzQ0YsS0FBSyxDQUFDRyxjQUE1QztBQUNFLE1BQU1DLElBQUksR0FBR0osS0FBSyxDQUFDSyxT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RSwwQkFBUSxFQUFFUDtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFERjtBQWdKRCxHQWxKRCxDQWtKRSxPQUFPb0QsR0FBUCxFQUFZO0FBQ1p2RSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXNFLEdBQVo7QUFFQSx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7QUFDRixDQS9PRDs7R0FBTXpFOztBQWlQTixTQUFTMEUsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJiLEtBQXpCLEVBQWdDYyxPQUFoQyxFQUF5QztBQUN2QyxrSkFBV0QsS0FBSyxDQUFDRSxLQUFOLENBQVksQ0FBWixFQUFlZixLQUFmLENBQVgsSUFBa0NjLE9BQWxDLGtJQUE4Q0QsS0FBSyxDQUFDRSxLQUFOLENBQVlmLEtBQVosQ0FBOUM7QUFDRDs7QUFFRCxJQUFNZ0IsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQU87QUFDTHpFLElBQUFBLFNBQVMsRUFBRXlFLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkMsU0FEM0I7QUFFTDdFLElBQUFBLGNBQWMsRUFBRTJFLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkUsSUFBckIsQ0FBMEI3RDtBQUZyQyxHQUFQO0FBSUQsQ0FMRDs7QUFPQSwrREFBZTlCLG9EQUFPLENBQUN1RixJQUFELENBQVAsQ0FBYzlFLFVBQWQsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0L3Rlc3RfcGFnZTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IFBvcE1vZGFsIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbFwiO1xyXG5cclxuLy8gY29uc3QgbXlRdWVzdGlvbnMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbi8vICAgICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbi8vICAgICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuLy8gICAgICAgcXVlc3Rpb246IHtcclxuLy8gICAgICAgICBxdWVzdDoge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTAzNjE0MTg5NzEtNTBjYjhkMWY4MzM5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MzYmcT04MFwiLFxyXG4vLyAgICAgICAgICAgcXVlOiBcIldoZXJlIGlzIHRoaXMgZmFtb3VzIG1vbnVtZW50IGxvY2F0ZWQ/XCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBvcHRpb25zOiBbXHJcbi8vICAgICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRGVsaGlcIiB9LFxyXG4vLyAgICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbi8vICAgICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbi8vICAgICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiSmFpcHVyXCIgfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGNvcnJlY3RfYW5zOiBcIkFncmFcIixcclxuLy8gICAgICAgICBtYXJrczogNSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4vLyAgICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuLy8gICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuLy8gICAgIHF1ZXN0aW9uOiB7XHJcbi8vICAgICAgIHF1ZXN0OiB7XHJcbi8vICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg1ODI4MDY4OTcwLTdiNzUwODI0ODVjZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTEzJnE9ODBcIixcclxuLy8gICAgICAgICBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgb3B0aW9uczogW1xyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbi8vICAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgICBjb3JyZWN0X2FuczogXCJEZWxoaVwiLFxyXG4vLyAgICAgICBtYXJrczogNSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4vLyAgICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuLy8gICAgIG1vZGVsOiBcImFsbC10ZXh0XCIsXHJcbi8vICAgICBxdWVzdGlvbjoge1xyXG4vLyAgICAgICBxdWVzdDogeyBpbWFnZTogXCJcIiwgcXVlOiBcIldoZXJlIGlzIFJlZCBGb3J0ICBsb2NhdGVkP1wiIH0sXHJcbi8vICAgICAgIG9wdGlvbnM6IFtcclxuLy8gICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRGVsaGlcIiB9LFxyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJNdW1iYWlcIiB9LFxyXG4vLyAgICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJBZ3JhXCIgfSxcclxuLy8gICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiSmFpcHVyXCIgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgICAgY29ycmVjdF9hbnM6IFwiRGVsaGlcIixcclxuLy8gICAgICAgbWFya3M6IDUsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIHN1YmplY3Q6IFwiR2VuZXJhbCBLbm93bGVkZ2VcIixcclxuLy8gICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbi8vICAgICBtb2RlbDogXCJvcHRpb25zLXdpdGgtaW1hZ2VcIixcclxuLy8gICAgIHF1ZXN0aW9uOiB7XHJcbi8vICAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiV2hpY2ggb2YgdGhpcyBpcyBsb2NhdGVkIGluIEh5ZGVyYWJhZD9cIiB9LFxyXG4vLyAgICAgICBvcHRpb25zOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4MjgwNjg5NzAtN2I3NTA4MjQ4NWNkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MTMmcT04MFwiLFxyXG4vLyAgICAgICAgICAgb3B0aW9uOiBcImFcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIGltYWdlOlxyXG4vLyAgICAgICAgICAgICBcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9oaWdoLXdpZGUtYW5nbGUtdmlldy1vZi1jaGFybWluYXItaW4tdGhlLW5pZ2h0LXBpY3R1cmUtaWQxMjE1Mjc0OTkwXCIsXHJcbi8vICAgICAgICAgICBvcHRpb246IFwiYlwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgaW1hZ2U6XHJcbi8vICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjQ0OTI0MTI5MzctYjI4MDc0YTVkN2RhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NzEmcT04MFwiLFxyXG4vLyAgICAgICAgICAgb3B0aW9uOiBcImNcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIGltYWdlOlxyXG4vLyAgICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI0NDkyNDEyOTM3LWIyODA3NGE1ZDdkYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcxJnE9ODBcIixcclxuLy8gICAgICAgICAgIG9wdGlvbjogXCJkXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuXHJcbi8vICAgICAgIGNvcnJlY3RfYW5zOiBcImJcIixcclxuLy8gICAgICAgbWFya3M6IDUsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5mdW5jdGlvbiBzYXZlUHJvZ3Jlc3Moc2NvcmUpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3JlXCIsIEpTT04uc3RyaW5naWZ5KHNjb3JlKSk7XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RfcGFnZTIgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gdGVzdCBwYWdlLTI6XCIscHJvcHMuc3R1ZGVudF9yZWNvcmQpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICAvLyBjb25zdCBkYXRhID0gbXlRdWVzdGlvbnM7XHJcbiAgY29uc3QgYXJyYXlvZk51bGxzID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKFwieFwiKTtcclxuICBjb25zdCBzY29yZSA9IHtcclxuICAgIHRvdGFsOiBkYXRhLmxlbmd0aCxcclxuICAgIGFuc3dlcmVkOiBbXSxcclxuICAgIHVuYW5zd2VyZWQ6IFtdLFxyXG4gICAgbWFya2VkOiBbXSxcclxuICAgIGNvcnJlY3Q6IFtdLFxyXG4gICAgaW5jb3JyZWN0OiBbXSxcclxuICAgIGNsaWNrZWRBbnNMaXN0OiBhcnJheW9mTnVsbHMsXHJcbiAgICBjb3JyZWN0QW5zTGlzdDogW10sXHJcbiAgfTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSlcclxuICAgICAgICA6IHNjb3JlXHJcbiAgICAgIDogc2NvcmVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVRLCBzZXRBY3RpdmVRXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjbGlja2VkT3B0aW9uLCBzZXRDbGlja2VkT3B0aW9uXSA9IHVzZVN0YXRlKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuXHJcbiAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBhZGRUb0Fuc3dlcmVkKCkge1xyXG4gICAgdmFyIGFuc3dlcmVkUXVlc3QgPSBwcm9ncmVzcy5hbnN3ZXJlZDtcclxuICAgIGFuc3dlcmVkUXVlc3QuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgPyBhbnN3ZXJlZFF1ZXN0LnB1c2goYWN0aXZlUSlcclxuICAgICAgOiBjb25zb2xlLmxvZyhcImFscmVhZHkgYW5zd2VyZWRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVRLCBcIiBpcyBwcmVzZW50IGluIFwiLCBhbnN3ZXJlZFF1ZXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGFuc3dlcmVkOiBhbnN3ZXJlZFF1ZXN0IH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUb0NsaWNrZWQodmFsdWUpIHtcclxuICAgIHZhciBjbGlja2VkTGlzdCA9IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0O1xyXG4gICAgY2xpY2tlZExpc3RbYWN0aXZlUV0gPSB2YWx1ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmV3IEFycmF5XCIsIGNsaWNrZWRMaXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkTGlzdCB9KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9SZXN1bHQoY2xpY2tlZCwgY29ycmVjdCkge1xyXG4gICAgdmFyIGNvcnJlY3RBcnJheSA9IHByb2dyZXNzLmNvcnJlY3Q7XHJcbiAgICB2YXIgaW5jb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5pbmNvcnJlY3Q7XHJcbiAgICBpZiAoY2xpY2tlZCA9PT0gY29ycmVjdCkge1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTEgPyBjb3JyZWN0QXJyYXkucHVzaChhY3RpdmVRKSA6IHt9O1xyXG4gICAgICBpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpICE9PSAtMVxyXG4gICAgICAgID8gaW5jb3JyZWN0QXJyYXkuc3BsaWNlKGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY29ycmVjdDogY29ycmVjdEFycmF5IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGNvcnJlY3RBcnJheS5zcGxpY2UoY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgaW5jb3JyZWN0OiBpbmNvcnJlY3RBcnJheSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRPcHRpb24pO1xyXG5cclxuICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGFkZFRvQ2xpY2tlZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSk7XHJcbiAgICBhZGRUb0Fuc3dlcmVkKCk7XHJcbiAgICBjb25zdCBjbGlja2VkQW5zd2VyID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGNsaWNrZWRBbnN3ZXIpO1xyXG4gICAgY29uc3QgY29ycmVjdEFucyA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb24uY29ycmVjdF9hbnMudG9Mb3dlckNhc2UoKTtcclxuICAgIGFkZFRvUmVzdWx0KGNsaWNrZWRBbnN3ZXIsIGNvcnJlY3RBbnMpO1xyXG4gICAgc2F2ZVByb2dyZXNzKHByb2dyZXNzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbk5leHRDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSArIDEpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QcmV2aW91c0NsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRIC0gMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaENsaWNrID0gKCkgPT4ge1xyXG4gICAgdmFyIG51bWJlck9mQ29ycmVjdHMgPSBwcm9ncmVzcy5jb3JyZWN0Lmxlbmd0aDtcclxuICAgIGFsZXJ0KFwiRmluaXNoXCIsIG51bWJlck9mQ29ycmVjdHMpO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjdXJyZW50UXVlc3Rpb24gPSBkYXRhW2FjdGl2ZVFdLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGVzdC1wYWdlIGd4LTAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneC0wIG1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggbXgtYXV0byBxdWVzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcXVlc3QtdG9wcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPiBRdWVzdGlvbiBOby4ge2FjdGl2ZVEgKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGV4dC1jZW50ZXJcIj5NYXJrcyA6IDU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBxdWVzdC1xdWVzdGlvbiBtdC0yIG1yLTMgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5pbWFnZSAhPSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYm90dG9tIGZ3LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5xdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ub3B0aW9ucy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uT3B0aW9uQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBib3JkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gXCIxcHggc29saWQgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtlbGVtZW50Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaW1hZ2UgIT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb24taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm9wdGlvbi5sZW5ndGggPiAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IG14LWF1dG8gbmF2aS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgUXVlc3Rpb25zIDoge3Byb2dyZXNzLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLW51bWJlci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZVEgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLmFuc3dlcmVkLmluY2x1ZGVzKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTI4LCAxOTIsIDMzKVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG8gZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmV2aW91c0NsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgdmlzaWJpbGl0eTogYWN0aXZlUSA9PSAwID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmV4dENsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHZpc2liaWxpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGFjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBwcmV2aW91cy1uZXh0IGZpbmlzaC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsU2hvdyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFBvcE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5FcnJvciBvY2N1cmVkPC9kaXY+O1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZEFmdGVyKGFycmF5LCBpbmRleCwgbmV3SXRlbSkge1xyXG4gIHJldHVybiBbLi4uYXJyYXkuc2xpY2UoMCwgaW5kZXgpLCBuZXdJdGVtLCAuLi5hcnJheS5zbGljZShpbmRleCldO1xyXG59XHJcblxyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHF1ZXN0QmFuazogc3RhdGUuc3R1ZGVudFJlZHVjZXIucXVlc3Rpb25zLFxyXG4gICAgc3R1ZGVudF9yZWNvcmQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnVzZXIucHJvZ3Jlc3MsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkodGVzdF9wYWdlMik7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiVG9wQmFyIiwiUG9wTW9kYWwiLCJzYXZlUHJvZ3Jlc3MiLCJzY29yZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidGVzdF9wYWdlMiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0dWRlbnRfcmVjb3JkIiwiZGF0YSIsInF1ZXN0QmFuayIsImFycmF5b2ZOdWxscyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsInRvdGFsIiwiYW5zd2VyZWQiLCJ1bmFuc3dlcmVkIiwibWFya2VkIiwiY29ycmVjdCIsImluY29ycmVjdCIsImNsaWNrZWRBbnNMaXN0IiwiY29ycmVjdEFuc0xpc3QiLCJnZXRJdGVtIiwicGFyc2UiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiYWN0aXZlUSIsInNldEFjdGl2ZVEiLCJjbGlja2VkT3B0aW9uIiwic2V0Q2xpY2tlZE9wdGlvbiIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImFkZFRvQW5zd2VyZWQiLCJhbnN3ZXJlZFF1ZXN0IiwiaW5kZXhPZiIsInB1c2giLCJhZGRUb0NsaWNrZWQiLCJ2YWx1ZSIsImNsaWNrZWRMaXN0IiwiYWRkVG9SZXN1bHQiLCJjbGlja2VkIiwiY29ycmVjdEFycmF5IiwiaW5jb3JyZWN0QXJyYXkiLCJzcGxpY2UiLCJvbk9wdGlvbkNsaWNrIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNsaWNrZWRBbnN3ZXIiLCJjb3JyZWN0QW5zIiwicXVlc3Rpb24iLCJjb3JyZWN0X2FucyIsInRvTG93ZXJDYXNlIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJvbkZpbmlzaENsaWNrIiwibnVtYmVyT2ZDb3JyZWN0cyIsImFsZXJ0IiwiY3VycmVudFF1ZXN0aW9uIiwicXVlc3QiLCJpbWFnZSIsInF1ZSIsIm9wdGlvbnMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImJvcmRlciIsIm9wdGlvbiIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImluY2x1ZGVzIiwiZXJyIiwiYWRkQWZ0ZXIiLCJhcnJheSIsIm5ld0l0ZW0iLCJzbGljZSIsIm1zdHAiLCJzdGF0ZSIsInN0dWRlbnRSZWR1Y2VyIiwicXVlc3Rpb25zIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=