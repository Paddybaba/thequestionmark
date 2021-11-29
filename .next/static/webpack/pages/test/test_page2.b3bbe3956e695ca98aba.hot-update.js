"use strict";
self["webpackHotUpdate_N_E"]("pages/test/test_page2",{

/***/ "./pages/test/test_page2.js":
/*!**********************************!*\
  !*** ./pages/test/test_page2.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/TopBar */ "./src/components/TopBar.js");
/* harmony import */ var _src_components_PopModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/PopModal */ "./src/components/PopModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\test\\test_page2.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var myQuestions = [{
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "question-with-image",
  question: {
    quest: {
      image: "https://images.unsplash.com/photo-1610361418971-50cb8d1f8339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      que: "Where is this famous monument located?"
    },
    options: [{
      image: "",
      option: "Delhi"
    }, {
      image: "",
      option: "Mumbai"
    }, {
      image: "",
      option: "Agra"
    }, {
      image: "",
      option: "Jaipur"
    }],
    correct_ans: "Agra",
    marks: 5
  },
  difficulty: "medium"
}, {
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "question-with-image",
  question: {
    quest: {
      image: "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
      que: "Where is this famous monument located?"
    },
    options: [{
      image: "",
      option: "Delhi"
    }, {
      image: "",
      option: "Mumbai"
    }, {
      image: "",
      option: "Agra"
    }, {
      image: "",
      option: "Jaipur"
    }],
    correct_ans: "Delhi",
    marks: 5
  },
  difficulty: "medium"
}, {
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "all-text",
  question: {
    quest: {
      image: "",
      que: "Where is this famous monument located?"
    },
    options: [{
      image: "",
      option: "Delhi"
    }, {
      image: "",
      option: "Mumbai"
    }, {
      image: "",
      option: "Agra"
    }, {
      image: "",
      option: "Jaipur"
    }],
    correct_ans: "Delhi",
    marks: 5
  },
  difficulty: "medium"
}, {
  subject: "General Knowledge",
  author: "Anup Kumar",
  model: "options-with-image",
  question: {
    quest: {
      image: "",
      que: "Which of this is located in Hyderabad?"
    },
    options: [{
      image: "https://images.unsplash.com/photo-1585828068970-7b75082485cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=513&q=80",
      option: "a"
    }, {
      image: "https://media.istockphoto.com/photos/high-wide-angle-view-of-charminar-in-the-night-picture-id1215274990",
      option: "b"
    }, {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      option: "c"
    }, {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      option: "d"
    }],
    correct_ans: "b",
    marks: 5
  },
  difficulty: "medium"
}];

function saveProgress(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

var test_page2 = function test_page2(props) {
  _s();

  // console.log(props.student_record);
  //   const data = props.questBank;
  var data = myQuestions;
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
        lineNumber: 196,
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
                    lineNumber: 203,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "col-6 text-center",
                    children: "Marks : 5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
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
                      lineNumber: 210,
                      columnNumber: 25
                    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      className: "text-bottom fw-bold",
                      children: currentQuestion.quest.que
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
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
                          border: index == progress.clickedAnsList[activeQ] ? "1px solid green" : "none"
                        },
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                          style: {
                            display: "flex",
                            alignItems: "center"
                          },
                          content: element.option,
                          children: [element.image != "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                            className: "option-image",
                            src: element.image
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 240,
                            columnNumber: 33
                          }, _this) : null, element.option.length > 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                            children: element.option
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 246,
                            columnNumber: 33
                          }, _this) : null]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                          columnNumber: 29
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 27
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "col-sm-4 mx-auto navi-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: ["Total Questions : ", progress.total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
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
                    lineNumber: 259,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
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
                  lineNumber: 286,
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
                  lineNumber: 294,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return setModalShow(true);
                  },
                  children: "Finish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_PopModal__WEBPACK_IMPORTED_MODULE_5__.default, {
                  show: modalShow,
                  onHide: function onHide() {
                    return setModalShow(false);
                  },
                  progress: progress
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  } catch (err) {
    console.log(err);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "Error occured"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 12
    }, _this);
  }
};

_s(test_page2, "qzAUHMZG2vwlgTlf7DObLmoPL4s=");

function addAfter(array, index, newItem) {
  return [].concat((0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(0, index)), [newItem], (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(array.slice(index)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLmIzYmJlMzk1NmU2OTVjYTk4YWJhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxXQUFXLEdBQUcsQ0FDbEI7QUFDRUMsRUFBQUEsT0FBTyxFQUFFLG1CQURYO0FBRUVDLEVBQUFBLE1BQU0sRUFBRSxZQUZWO0FBR0VDLEVBQUFBLEtBQUssRUFBRSxxQkFIVDtBQUlFQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLEtBQUssRUFDSCwrSkFGRztBQUdMQyxNQUFBQSxHQUFHLEVBQUU7QUFIQSxLQURDO0FBTVJDLElBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQURPLEVBRVA7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLEtBRk8sRUFHUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FITyxFQUlQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQUpPLENBTkQ7QUFZUkMsSUFBQUEsV0FBVyxFQUFFLE1BWkw7QUFhUkMsSUFBQUEsS0FBSyxFQUFFO0FBYkMsR0FKWjtBQW1CRUMsRUFBQUEsVUFBVSxFQUFFO0FBbkJkLENBRGtCLEVBc0JsQjtBQUNFWCxFQUFBQSxPQUFPLEVBQUUsbUJBRFg7QUFFRUMsRUFBQUEsTUFBTSxFQUFFLFlBRlY7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLHFCQUhUO0FBSUVDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEs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O0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBREY7QUFpSUQsR0FuSUQsQ0FtSUUsT0FBTzRDLEdBQVAsRUFBWTtBQUNaaEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkrQixHQUFaO0FBRUEsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEO0FBQ0YsQ0EvTkQ7O0dBQU03RDs7QUFpT04sU0FBUzhELFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCVCxLQUF6QixFQUFnQ1UsT0FBaEMsRUFBeUM7QUFDdkMsa0pBQVdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLENBQVosRUFBZVgsS0FBZixDQUFYLElBQWtDVSxPQUFsQyxrSUFBOENELEtBQUssQ0FBQ0UsS0FBTixDQUFZWCxLQUFaLENBQTlDO0FBQ0Q7O0FBRUQsSUFBTVksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQU87QUFDTEMsSUFBQUEsU0FBUyxFQUFFRCxLQUFLLENBQUNFLGNBQU4sQ0FBcUJDLFNBRDNCO0FBRUxDLElBQUFBLGNBQWMsRUFBRUosS0FBSyxDQUFDRSxjQUFOLENBQXFCRyxJQUFyQixDQUEwQnZEO0FBRnJDLEdBQVA7QUFJRCxDQUxEOztBQU9BLCtEQUFldkMsb0RBQU8sQ0FBQ3dGLElBQUQsQ0FBUCxDQUFjbEUsVUFBZCxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3QvdGVzdF9wYWdlMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvcEJhclwiO1xyXG5pbXBvcnQgUG9wTW9kYWwgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1BvcE1vZGFsXCI7XHJcblxyXG5jb25zdCBteVF1ZXN0aW9ucyA9IFtcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwicXVlc3Rpb24td2l0aC1pbWFnZVwiLFxyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHtcclxuICAgICAgICBpbWFnZTpcclxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTAzNjE0MTg5NzEtNTBjYjhkMWY4MzM5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MzYmcT04MFwiLFxyXG4gICAgICAgIHF1ZTogXCJXaGVyZSBpcyB0aGlzIGZhbW91cyBtb251bWVudCBsb2NhdGVkP1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkFncmFcIixcclxuICAgICAgbWFya3M6IDUsXHJcbiAgICB9LFxyXG4gICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHN1YmplY3Q6IFwiR2VuZXJhbCBLbm93bGVkZ2VcIixcclxuICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbiAgICBtb2RlbDogXCJxdWVzdGlvbi13aXRoLWltYWdlXCIsXHJcbiAgICBxdWVzdGlvbjoge1xyXG4gICAgICBxdWVzdDoge1xyXG4gICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NTgyODA2ODk3MC03Yjc1MDgyNDg1Y2Q/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUxMyZxPTgwXCIsXHJcbiAgICAgICAgcXVlOiBcIldoZXJlIGlzIHRoaXMgZmFtb3VzIG1vbnVtZW50IGxvY2F0ZWQ/XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRGVsaGlcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJNdW1iYWlcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJBZ3JhXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiSmFpcHVyXCIgfSxcclxuICAgICAgXSxcclxuICAgICAgY29ycmVjdF9hbnM6IFwiRGVsaGlcIixcclxuICAgICAgbWFya3M6IDUsXHJcbiAgICB9LFxyXG4gICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHN1YmplY3Q6IFwiR2VuZXJhbCBLbm93bGVkZ2VcIixcclxuICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbiAgICBtb2RlbDogXCJhbGwtdGV4dFwiLFxyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHsgaW1hZ2U6IFwiXCIsIHF1ZTogXCJXaGVyZSBpcyB0aGlzIGZhbW91cyBtb251bWVudCBsb2NhdGVkP1wiIH0sXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRGVsaGlcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJNdW1iYWlcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJBZ3JhXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiSmFpcHVyXCIgfSxcclxuICAgICAgXSxcclxuICAgICAgY29ycmVjdF9hbnM6IFwiRGVsaGlcIixcclxuICAgICAgbWFya3M6IDUsXHJcbiAgICB9LFxyXG4gICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHN1YmplY3Q6IFwiR2VuZXJhbCBLbm93bGVkZ2VcIixcclxuICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbiAgICBtb2RlbDogXCJvcHRpb25zLXdpdGgtaW1hZ2VcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiV2hpY2ggb2YgdGhpcyBpcyBsb2NhdGVkIGluIEh5ZGVyYWJhZD9cIiB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4MjgwNjg5NzAtN2I3NTA4MjQ4NWNkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MTMmcT04MFwiLFxyXG4gICAgICAgICAgb3B0aW9uOiBcImFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9oaWdoLXdpZGUtYW5nbGUtdmlldy1vZi1jaGFybWluYXItaW4tdGhlLW5pZ2h0LXBpY3R1cmUtaWQxMjE1Mjc0OTkwXCIsXHJcbiAgICAgICAgICBvcHRpb246IFwiYlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjQ0OTI0MTI5MzctYjI4MDc0YTVkN2RhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NzEmcT04MFwiLFxyXG4gICAgICAgICAgb3B0aW9uOiBcImNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI0NDkyNDEyOTM3LWIyODA3NGE1ZDdkYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcxJnE9ODBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJkXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcImJcIixcclxuICAgICAgbWFya3M6IDUsXHJcbiAgICB9LFxyXG4gICAgZGlmZmljdWx0eTogXCJtZWRpdW1cIixcclxuICB9LFxyXG5dO1xyXG5mdW5jdGlvbiBzYXZlUHJvZ3Jlc3Moc2NvcmUpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3JlXCIsIEpTT04uc3RyaW5naWZ5KHNjb3JlKSk7XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RfcGFnZTIgPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5zdHVkZW50X3JlY29yZCk7XHJcbiAgLy8gICBjb25zdCBkYXRhID0gcHJvcHMucXVlc3RCYW5rO1xyXG4gIGNvbnN0IGRhdGEgPSBteVF1ZXN0aW9ucztcclxuICBjb25zdCBhcnJheW9mTnVsbHMgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpLmZpbGwoXCJ4XCIpO1xyXG4gIGNvbnN0IHNjb3JlID0ge1xyXG4gICAgdG90YWw6IGRhdGEubGVuZ3RoLFxyXG4gICAgYW5zd2VyZWQ6IFtdLFxyXG4gICAgdW5hbnN3ZXJlZDogW10sXHJcbiAgICBtYXJrZWQ6IFtdLFxyXG4gICAgY29ycmVjdDogW10sXHJcbiAgICBpbmNvcnJlY3Q6IFtdLFxyXG4gICAgY2xpY2tlZEFuc0xpc3Q6IGFycmF5b2ZOdWxscyxcclxuICAgIGNvcnJlY3RBbnNMaXN0OiBbXSxcclxuICB9O1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoXHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKVxyXG4gICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpKVxyXG4gICAgICAgIDogc2NvcmVcclxuICAgICAgOiBzY29yZVxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZVEsIHNldEFjdGl2ZVFdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NsaWNrZWRPcHRpb24sIHNldENsaWNrZWRPcHRpb25dID0gdXNlU3RhdGUocHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3QpO1xyXG5cclxuICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGFkZFRvQW5zd2VyZWQoKSB7XHJcbiAgICB2YXIgYW5zd2VyZWRRdWVzdCA9IHByb2dyZXNzLmFuc3dlcmVkO1xyXG4gICAgYW5zd2VyZWRRdWVzdC5pbmRleE9mKGFjdGl2ZVEpID09PSAtMVxyXG4gICAgICA/IGFuc3dlcmVkUXVlc3QucHVzaChhY3RpdmVRKVxyXG4gICAgICA6IGNvbnNvbGUubG9nKFwiYWxyZWFkeSBhbnN3ZXJlZFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVEsIFwiIGlzIHByZXNlbnQgaW4gXCIsIGFuc3dlcmVkUXVlc3QpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgYW5zd2VyZWQ6IGFuc3dlcmVkUXVlc3QgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZFRvQ2xpY2tlZCh2YWx1ZSkge1xyXG4gICAgdmFyIGNsaWNrZWRMaXN0ID0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3Q7XHJcbiAgICBjbGlja2VkTGlzdFthY3RpdmVRXSA9IHZhbHVlO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJuZXcgQXJyYXlcIiwgY2xpY2tlZExpc3QpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRMaXN0IH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUb1Jlc3VsdChjbGlja2VkLCBjb3JyZWN0KSB7XHJcbiAgICB2YXIgY29ycmVjdEFycmF5ID0gcHJvZ3Jlc3MuY29ycmVjdDtcclxuICAgIHZhciBpbmNvcnJlY3RBcnJheSA9IHByb2dyZXNzLmluY29ycmVjdDtcclxuICAgIGlmIChjbGlja2VkID09PSBjb3JyZWN0KSB7XHJcbiAgICAgIGNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpID09PSAtMSA/IGNvcnJlY3RBcnJheS5wdXNoKGFjdGl2ZVEpIDoge307XHJcbiAgICAgIGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgIT09IC0xXHJcbiAgICAgICAgPyBpbmNvcnJlY3RBcnJheS5zcGxpY2UoaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSwgMSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjb3JyZWN0OiBjb3JyZWN0QXJyYXkgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpID09PSAtMVxyXG4gICAgICAgID8gaW5jb3JyZWN0QXJyYXkucHVzaChhY3RpdmVRKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIGNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpICE9PSAtMVxyXG4gICAgICAgID8gY29ycmVjdEFycmF5LnNwbGljZShjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSwgMSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBpbmNvcnJlY3Q6IGluY29ycmVjdEFycmF5IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc29sZS5sb2coY2xpY2tlZE9wdGlvbik7XHJcblxyXG4gIGNvbnN0IG9uT3B0aW9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgYWRkVG9DbGlja2VkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpKTtcclxuICAgIGFkZFRvQW5zd2VyZWQoKTtcclxuICAgIGNvbnN0IGNsaWNrZWRBbnN3ZXIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xyXG4gICAgY29uc29sZS5sb2coY2xpY2tlZEFuc3dlcik7XHJcbiAgICBjb25zdCBjb3JyZWN0QW5zID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbi5jb3JyZWN0X2Fucy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgYWRkVG9SZXN1bHQoY2xpY2tlZEFuc3dlciwgY29ycmVjdEFucyk7XHJcbiAgICBzYXZlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRICsgMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgLSAxKTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB2YXIgbnVtYmVyT2ZDb3JyZWN0cyA9IHByb2dyZXNzLmNvcnJlY3QubGVuZ3RoO1xyXG4gICAgYWxlcnQoXCJGaW5pc2hcIiwgbnVtYmVyT2ZDb3JyZWN0cyk7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgbGV0IGN1cnJlbnRRdWVzdGlvbiA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXN0LXBhZ2UgZ3gtMCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTAgbWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBteC1hdXRvIHF1ZXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBxdWVzdC10b3Byb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+IFF1ZXN0aW9uIE5vLiB7YWN0aXZlUSArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPk1hcmtzIDogNTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHF1ZXN0LXF1ZXN0aW9uIG10LTIgbXItMyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LmltYWdlICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50UXVlc3Rpb24ucXVlc3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ib3R0b20gZnctYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5vcHRpb25zLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbk9wdGlvbkNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZWxlbWVudC5vcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmltYWdlICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3B0aW9uLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5vcHRpb24ubGVuZ3RoID4gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZWxlbWVudC5vcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBteC1hdXRvIG5hdmktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFF1ZXN0aW9ucyA6IHtwcm9ncmVzcy50b3RhbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1udW1iZXItYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVRID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIGNvbG9yOiBcIndoaXRlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcy5hbnN3ZXJlZC5pbmNsdWRlcyhpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDEyOCwgMTkyLCAzMylcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVRKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvIGZvb3Rlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJldmlvdXNDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHZpc2liaWxpdHk6IGFjdGl2ZVEgPT0gMCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5leHRDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2aXNpYmlsaXR5OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBhY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcHJldmlvdXMtbmV4dCBmaW5pc2gtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3BNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldE1vZGFsU2hvdyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3Igb2NjdXJlZDwvZGl2PjtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRBZnRlcihhcnJheSwgaW5kZXgsIG5ld0l0ZW0pIHtcclxuICByZXR1cm4gWy4uLmFycmF5LnNsaWNlKDAsIGluZGV4KSwgbmV3SXRlbSwgLi4uYXJyYXkuc2xpY2UoaW5kZXgpXTtcclxufVxyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdEJhbms6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnF1ZXN0aW9ucyxcclxuICAgIHN0dWRlbnRfcmVjb3JkOiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLnByb2dyZXNzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHApKHRlc3RfcGFnZTIpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJUb3BCYXIiLCJQb3BNb2RhbCIsIm15UXVlc3Rpb25zIiwic3ViamVjdCIsImF1dGhvciIsIm1vZGVsIiwicXVlc3Rpb24iLCJxdWVzdCIsImltYWdlIiwicXVlIiwib3B0aW9ucyIsIm9wdGlvbiIsImNvcnJlY3RfYW5zIiwibWFya3MiLCJkaWZmaWN1bHR5Iiwic2F2ZVByb2dyZXNzIiwic2NvcmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3RfcGFnZTIiLCJwcm9wcyIsImRhdGEiLCJhcnJheW9mTnVsbHMiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJ0b3RhbCIsImFuc3dlcmVkIiwidW5hbnN3ZXJlZCIsIm1hcmtlZCIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJjbGlja2VkQW5zTGlzdCIsImNvcnJlY3RBbnNMaXN0IiwiZ2V0SXRlbSIsInBhcnNlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImFjdGl2ZVEiLCJzZXRBY3RpdmVRIiwiY2xpY2tlZE9wdGlvbiIsInNldENsaWNrZWRPcHRpb24iLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJhZGRUb0Fuc3dlcmVkIiwiYW5zd2VyZWRRdWVzdCIsImluZGV4T2YiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZFRvQ2xpY2tlZCIsInZhbHVlIiwiY2xpY2tlZExpc3QiLCJhZGRUb1Jlc3VsdCIsImNsaWNrZWQiLCJjb3JyZWN0QXJyYXkiLCJpbmNvcnJlY3RBcnJheSIsInNwbGljZSIsIm9uT3B0aW9uQ2xpY2siLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY2xpY2tlZEFuc3dlciIsImNvcnJlY3RBbnMiLCJ0b0xvd2VyQ2FzZSIsIm9uTmV4dENsaWNrIiwib25QcmV2aW91c0NsaWNrIiwib25GaW5pc2hDbGljayIsIm51bWJlck9mQ29ycmVjdHMiLCJhbGVydCIsImN1cnJlbnRRdWVzdGlvbiIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImJvcmRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJpbmNsdWRlcyIsImVyciIsImFkZEFmdGVyIiwiYXJyYXkiLCJuZXdJdGVtIiwic2xpY2UiLCJtc3RwIiwic3RhdGUiLCJxdWVzdEJhbmsiLCJzdHVkZW50UmVkdWNlciIsInF1ZXN0aW9ucyIsInN0dWRlbnRfcmVjb3JkIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=