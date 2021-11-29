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
                        position: index,
                        className: "options",
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
                            children: element.option
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 33
                          }, _this) : null]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 236,
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
                  lineNumber: 265,
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
                    lineNumber: 268,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 264,
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
                  lineNumber: 295,
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
                  lineNumber: 303,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return setModalShow(true);
                  },
                  children: "Finish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_PopModal__WEBPACK_IMPORTED_MODULE_5__.default, {
                  show: modalShow,
                  onHide: function onHide() {
                    return setModalShow(false);
                  },
                  progress: progress
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
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
      lineNumber: 335,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLmJlOWY2NGZhOWI2Mjk5Njg2NTM1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxXQUFXLEdBQUcsQ0FDbEI7QUFDRUMsRUFBQUEsT0FBTyxFQUFFLG1CQURYO0FBRUVDLEVBQUFBLE1BQU0sRUFBRSxZQUZWO0FBR0VDLEVBQUFBLEtBQUssRUFBRSxxQkFIVDtBQUlFQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLEtBQUssRUFDSCwrSkFGRztBQUdMQyxNQUFBQSxHQUFHLEVBQUU7QUFIQSxLQURDO0FBTVJDLElBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQURPLEVBRVA7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLEtBRk8sRUFHUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FITyxFQUlQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQUpPLENBTkQ7QUFZUkMsSUFBQUEsV0FBVyxFQUFFLE1BWkw7QUFhUkMsSUFBQUEsS0FBSyxFQUFFO0FBYkMsR0FKWjtBQW1CRUMsRUFBQUEsVUFBVSxFQUFFO0FBbkJkLENBRGtCLEVBc0JsQjtBQUNFWCxFQUFBQSxPQUFPLEVBQUUsbUJBRFg7QUFFRUMsRUFBQUEsTUFBTSxFQUFFLFlBRlY7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLHFCQUhUO0FBSUVDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEs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REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURGO0FBeUlELEdBM0lELENBMklFLE9BQU82QyxHQUFQLEVBQVk7QUFDWmpDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0MsR0FBWjtBQUVBLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDtBQUNGLENBeE9EOztHQUFNOUQ7O0FBME9OLFNBQVMrRCxRQUFULENBQWtCQyxLQUFsQixFQUF5QlYsS0FBekIsRUFBZ0NXLE9BQWhDLEVBQXlDO0FBQ3ZDLGtKQUFXRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxDQUFaLEVBQWVaLEtBQWYsQ0FBWCxJQUFrQ1csT0FBbEMsa0lBQThDRCxLQUFLLENBQUNFLEtBQU4sQ0FBWVosS0FBWixDQUE5QztBQUNEOztBQUVELElBQU1hLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUFPO0FBQ0xDLElBQUFBLFNBQVMsRUFBRUQsS0FBSyxDQUFDRSxjQUFOLENBQXFCQyxTQUQzQjtBQUVMQyxJQUFBQSxjQUFjLEVBQUVKLEtBQUssQ0FBQ0UsY0FBTixDQUFxQkcsSUFBckIsQ0FBMEJ4RDtBQUZyQyxHQUFQO0FBSUQsQ0FMRDs7QUFPQSwrREFBZXZDLG9EQUFPLENBQUN5RixJQUFELENBQVAsQ0FBY25FLFVBQWQsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0L3Rlc3RfcGFnZTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IFBvcE1vZGFsIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbFwiO1xyXG5cclxuY29uc3QgbXlRdWVzdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4gICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7XHJcbiAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjEwMzYxNDE4OTcxLTUwY2I4ZDFmODMzOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDM2JnE9ODBcIixcclxuICAgICAgICBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIixcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJBZ3JhXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwicXVlc3Rpb24td2l0aC1pbWFnZVwiLFxyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHtcclxuICAgICAgICBpbWFnZTpcclxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4MjgwNjg5NzAtN2I3NTA4MjQ4NWNkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MTMmcT04MFwiLFxyXG4gICAgICAgIHF1ZTogXCJXaGVyZSBpcyB0aGlzIGZhbW91cyBtb251bWVudCBsb2NhdGVkP1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkRlbGhpXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwiYWxsLXRleHRcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIiB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkRlbGhpXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwib3B0aW9ucy13aXRoLWltYWdlXCIsXHJcbiAgICBxdWVzdGlvbjoge1xyXG4gICAgICBxdWVzdDogeyBpbWFnZTogXCJcIiwgcXVlOiBcIldoaWNoIG9mIHRoaXMgaXMgbG9jYXRlZCBpbiBIeWRlcmFiYWQ/XCIgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg1ODI4MDY4OTcwLTdiNzUwODI0ODVjZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTEzJnE9ODBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvaGlnaC13aWRlLWFuZ2xlLXZpZXctb2YtY2hhcm1pbmFyLWluLXRoZS1uaWdodC1waWN0dXJlLWlkMTIxNTI3NDk5MFwiLFxyXG4gICAgICAgICAgb3B0aW9uOiBcImJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI0NDkyNDEyOTM3LWIyODA3NGE1ZDdkYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcxJnE9ODBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJjXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNDQ5MjQxMjkzNy1iMjgwNzRhNWQ3ZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MSZxPTgwXCIsXHJcbiAgICAgICAgICBvcHRpb246IFwiZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBjb3JyZWN0X2FuczogXCJiXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuXTtcclxuZnVuY3Rpb24gc2F2ZVByb2dyZXNzKHNjb3JlKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZVwiLCBKU09OLnN0cmluZ2lmeShzY29yZSkpO1xyXG59XHJcblxyXG5jb25zdCB0ZXN0X3BhZ2UyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuc3R1ZGVudF9yZWNvcmQpO1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICBjb25zdCBkYXRhID0gbXlRdWVzdGlvbnM7XHJcbiAgY29uc3QgYXJyYXlvZk51bGxzID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKFwieFwiKTtcclxuICBjb25zdCBzY29yZSA9IHtcclxuICAgIHRvdGFsOiBkYXRhLmxlbmd0aCxcclxuICAgIGFuc3dlcmVkOiBbXSxcclxuICAgIHVuYW5zd2VyZWQ6IFtdLFxyXG4gICAgbWFya2VkOiBbXSxcclxuICAgIGNvcnJlY3Q6IFtdLFxyXG4gICAgaW5jb3JyZWN0OiBbXSxcclxuICAgIGNsaWNrZWRBbnNMaXN0OiBhcnJheW9mTnVsbHMsXHJcbiAgICBjb3JyZWN0QW5zTGlzdDogW10sXHJcbiAgfTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSlcclxuICAgICAgICA6IHNjb3JlXHJcbiAgICAgIDogc2NvcmVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVRLCBzZXRBY3RpdmVRXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjbGlja2VkT3B0aW9uLCBzZXRDbGlja2VkT3B0aW9uXSA9IHVzZVN0YXRlKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuXHJcbiAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBhZGRUb0Fuc3dlcmVkKCkge1xyXG4gICAgdmFyIGFuc3dlcmVkUXVlc3QgPSBwcm9ncmVzcy5hbnN3ZXJlZDtcclxuICAgIGFuc3dlcmVkUXVlc3QuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgPyBhbnN3ZXJlZFF1ZXN0LnB1c2goYWN0aXZlUSlcclxuICAgICAgOiBjb25zb2xlLmxvZyhcImFscmVhZHkgYW5zd2VyZWRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVRLCBcIiBpcyBwcmVzZW50IGluIFwiLCBhbnN3ZXJlZFF1ZXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGFuc3dlcmVkOiBhbnN3ZXJlZFF1ZXN0IH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUb0NsaWNrZWQodmFsdWUpIHtcclxuICAgIHZhciBjbGlja2VkTGlzdCA9IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0O1xyXG4gICAgY2xpY2tlZExpc3RbYWN0aXZlUV0gPSB2YWx1ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmV3IEFycmF5XCIsIGNsaWNrZWRMaXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkTGlzdCB9KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9SZXN1bHQoY2xpY2tlZCwgY29ycmVjdCkge1xyXG4gICAgdmFyIGNvcnJlY3RBcnJheSA9IHByb2dyZXNzLmNvcnJlY3Q7XHJcbiAgICB2YXIgaW5jb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5pbmNvcnJlY3Q7XHJcbiAgICBpZiAoY2xpY2tlZCA9PT0gY29ycmVjdCkge1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTEgPyBjb3JyZWN0QXJyYXkucHVzaChhY3RpdmVRKSA6IHt9O1xyXG4gICAgICBpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpICE9PSAtMVxyXG4gICAgICAgID8gaW5jb3JyZWN0QXJyYXkuc3BsaWNlKGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY29ycmVjdDogY29ycmVjdEFycmF5IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGNvcnJlY3RBcnJheS5zcGxpY2UoY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgaW5jb3JyZWN0OiBpbmNvcnJlY3RBcnJheSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRPcHRpb24pO1xyXG5cclxuICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGFkZFRvQ2xpY2tlZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSk7XHJcbiAgICBhZGRUb0Fuc3dlcmVkKCk7XHJcbiAgICBjb25zdCBjbGlja2VkQW5zd2VyID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGNsaWNrZWRBbnN3ZXIpO1xyXG4gICAgY29uc3QgY29ycmVjdEFucyA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb24uY29ycmVjdF9hbnMudG9Mb3dlckNhc2UoKTtcclxuICAgIGFkZFRvUmVzdWx0KGNsaWNrZWRBbnN3ZXIsIGNvcnJlY3RBbnMpO1xyXG4gICAgc2F2ZVByb2dyZXNzKHByb2dyZXNzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbk5leHRDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSArIDEpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QcmV2aW91c0NsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRIC0gMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaENsaWNrID0gKCkgPT4ge1xyXG4gICAgdmFyIG51bWJlck9mQ29ycmVjdHMgPSBwcm9ncmVzcy5jb3JyZWN0Lmxlbmd0aDtcclxuICAgIGFsZXJ0KFwiRmluaXNoXCIsIG51bWJlck9mQ29ycmVjdHMpO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjdXJyZW50UXVlc3Rpb24gPSBkYXRhW2FjdGl2ZVFdLnF1ZXN0aW9uO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGVzdC1wYWdlIGd4LTAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneC0wIG1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggbXgtYXV0byBxdWVzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcXVlc3QtdG9wcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPiBRdWVzdGlvbiBOby4ge2FjdGl2ZVEgKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGV4dC1jZW50ZXJcIj5NYXJrcyA6IDU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBxdWVzdC1xdWVzdGlvbiBtdC0yIG1yLTMgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5pbWFnZSAhPSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYm90dG9tIGZ3LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5xdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ub3B0aW9ucy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25PcHRpb25DbGljayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGJvcmRlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpbmRleCA9PSBwcm9ncmVzcy5jbGlja2VkQW5zTGlzdFthY3RpdmVRXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBcIjFweCBzb2xpZCBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2VsZW1lbnQub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5pbWFnZSAhPSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQub3B0aW9uLmxlbmd0aCA+IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsZW1lbnQub3B0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgbXgtYXV0byBuYXZpLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBRdWVzdGlvbnMgOiB7cHJvZ3Jlc3MudG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24tbnVtYmVyLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlUSA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MuYW5zd2VyZWQuaW5jbHVkZXMoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcInJnYigxMjgsIDE5MiwgMzMpXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBmb290ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblByZXZpb3VzQ2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB2aXNpYmlsaXR5OiBhY3RpdmVRID09IDAgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OZXh0Q2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdmlzaWJpbGl0eTpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gYWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDEgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlUSA9PSBkYXRhLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHByZXZpb3VzLW5leHQgZmluaXNoLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxTaG93KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UG9wTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PkVycm9yIG9jY3VyZWQ8L2Rpdj47XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkQWZ0ZXIoYXJyYXksIGluZGV4LCBuZXdJdGVtKSB7XHJcbiAgcmV0dXJuIFsuLi5hcnJheS5zbGljZSgwLCBpbmRleCksIG5ld0l0ZW0sIC4uLmFycmF5LnNsaWNlKGluZGV4KV07XHJcbn1cclxuXHJcbmNvbnN0IG1zdHAgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcXVlc3RCYW5rOiBzdGF0ZS5zdHVkZW50UmVkdWNlci5xdWVzdGlvbnMsXHJcbiAgICBzdHVkZW50X3JlY29yZDogc3RhdGUuc3R1ZGVudFJlZHVjZXIudXNlci5wcm9ncmVzcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtc3RwKSh0ZXN0X3BhZ2UyKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiVG9wQmFyIiwiUG9wTW9kYWwiLCJteVF1ZXN0aW9ucyIsInN1YmplY3QiLCJhdXRob3IiLCJtb2RlbCIsInF1ZXN0aW9uIiwicXVlc3QiLCJpbWFnZSIsInF1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJjb3JyZWN0X2FucyIsIm1hcmtzIiwiZGlmZmljdWx0eSIsInNhdmVQcm9ncmVzcyIsInNjb3JlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0X3BhZ2UyIiwicHJvcHMiLCJkYXRhIiwiYXJyYXlvZk51bGxzIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwidG90YWwiLCJhbnN3ZXJlZCIsInVuYW5zd2VyZWQiLCJtYXJrZWQiLCJjb3JyZWN0IiwiaW5jb3JyZWN0IiwiY2xpY2tlZEFuc0xpc3QiLCJjb3JyZWN0QW5zTGlzdCIsImdldEl0ZW0iLCJwYXJzZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhY3RpdmVRIiwic2V0QWN0aXZlUSIsImNsaWNrZWRPcHRpb24iLCJzZXRDbGlja2VkT3B0aW9uIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiYWRkVG9BbnN3ZXJlZCIsImFuc3dlcmVkUXVlc3QiLCJpbmRleE9mIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb0NsaWNrZWQiLCJ2YWx1ZSIsImNsaWNrZWRMaXN0IiwiYWRkVG9SZXN1bHQiLCJjbGlja2VkIiwiY29ycmVjdEFycmF5IiwiaW5jb3JyZWN0QXJyYXkiLCJzcGxpY2UiLCJvbk9wdGlvbkNsaWNrIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNsaWNrZWRBbnN3ZXIiLCJjb3JyZWN0QW5zIiwidG9Mb3dlckNhc2UiLCJvbk5leHRDbGljayIsIm9uUHJldmlvdXNDbGljayIsIm9uRmluaXNoQ2xpY2siLCJudW1iZXJPZkNvcnJlY3RzIiwiYWxlcnQiLCJjdXJyZW50UXVlc3Rpb24iLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW5jbHVkZXMiLCJlcnIiLCJhZGRBZnRlciIsImFycmF5IiwibmV3SXRlbSIsInNsaWNlIiwibXN0cCIsInN0YXRlIiwicXVlc3RCYW5rIiwic3R1ZGVudFJlZHVjZXIiLCJxdWVzdGlvbnMiLCJzdHVkZW50X3JlY29yZCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9