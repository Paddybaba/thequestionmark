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
      qimg: "",
      q: "Which of this is located in Hyderabad?"
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
    var clickedAnswer = e.target.innerHTML.toLowerCase();
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
                        children: [element.image != "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                          className: "option-image",
                          src: element.image
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 236,
                          columnNumber: 31
                        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                          children: element.option
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 241,
                          columnNumber: 29
                        }, _this)]
                      }, index, true, {
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
                  lineNumber: 249,
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
                    lineNumber: 252,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
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
                  lineNumber: 279,
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
                  lineNumber: 287,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return setModalShow(true);
                  },
                  children: "Finish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_PopModal__WEBPACK_IMPORTED_MODULE_5__.default, {
                  show: modalShow,
                  onHide: function onHide() {
                    return setModalShow(false);
                  },
                  progress: progress
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
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
      lineNumber: 319,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLmYwOGMyMThhODk2Y2NmYTg1ZDczLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxXQUFXLEdBQUcsQ0FDbEI7QUFDRUMsRUFBQUEsT0FBTyxFQUFFLG1CQURYO0FBRUVDLEVBQUFBLE1BQU0sRUFBRSxZQUZWO0FBR0VDLEVBQUFBLEtBQUssRUFBRSxxQkFIVDtBQUlFQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLEtBQUssRUFDSCwrSkFGRztBQUdMQyxNQUFBQSxHQUFHLEVBQUU7QUFIQSxLQURDO0FBTVJDLElBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQURPLEVBRVA7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLEtBRk8sRUFHUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FITyxFQUlQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQUpPLENBTkQ7QUFZUkMsSUFBQUEsV0FBVyxFQUFFLE1BWkw7QUFhUkMsSUFBQUEsS0FBSyxFQUFFO0FBYkMsR0FKWjtBQW1CRUMsRUFBQUEsVUFBVSxFQUFFO0FBbkJkLENBRGtCLEVBc0JsQjtBQUNFWCxFQUFBQSxPQUFPLEVBQUUsbUJBRFg7QUFFRUMsRUFBQUEsTUFBTSxFQUFFLFlBRlY7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLHFCQUhUO0FBSUVDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsS0FBSyxFQUNILCtKQUZHO0FBR0xDLE1BQUFBLEdBQUcsRUFBRTtBQUhBLEtBREM7QUFNUkMsSUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLEtBRE8sRUFFUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FGTyxFQUdQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQUhPLEVBSVA7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLEtBSk8sQ0FORDtBQVlSQyxJQUFBQSxXQUFXLEVBQUUsT0FaTDtBQWFSQyxJQUFBQSxLQUFLLEVBQUU7QUFiQyxHQUpaO0FBbUJFQyxFQUFBQSxVQUFVLEVBQUU7QUFuQmQsQ0F0QmtCLEVBMkNsQjtBQUNFWCxFQUFBQSxPQUFPLEVBQUUsbUJBRFg7QUFFRUMsRUFBQUEsTUFBTSxFQUFFLFlBRlY7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLFVBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxNQUFBQSxHQUFHLEVBQUU7QUFBbEIsS0FEQztBQUVSQyxJQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUFFRixNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FETyxFQUVQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQUZPLEVBR1A7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLEtBSE8sRUFJUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FKTyxDQUZEO0FBUVJDLElBQUFBLFdBQVcsRUFBRSxPQVJMO0FBU1JDLElBQUFBLEtBQUssRUFBRTtBQVRDLEdBSlo7QUFlRUMsRUFBQUEsVUFBVSxFQUFFO0FBZmQsQ0EzQ2tCLEVBNERsQjtBQUNFWCxFQUFBQSxPQUFPLEVBQUUsbUJBRFg7QUFFRUMsRUFBQUEsTUFBTSxFQUFFLFlBRlY7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLG9CQUhUO0FBSUVDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFBRVEsTUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsTUFBQUEsQ0FBQyxFQUFFO0FBQWYsS0FEQztBQUVSTixJQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFRixNQUFBQSxLQUFLLEVBQ0gsK0pBRko7QUFHRUcsTUFBQUEsTUFBTSxFQUFFO0FBSFYsS0FETyxFQU1QO0FBQ0VILE1BQUFBLEtBQUssRUFDSCwwR0FGSjtBQUdFRyxNQUFBQSxNQUFNLEVBQUU7QUFIVixLQU5PLEVBV1A7QUFDRUgsTUFBQUEsS0FBSyxFQUNILCtKQUZKO0FBR0VHLE1BQUFBLE1BQU0sRUFBRTtBQUhWLEtBWE8sRUFnQlA7QUFDRUgsTUFBQUEsS0FBSyxFQUNILCtKQUZKO0FBR0VHLE1BQUFBLE1BQU0sRUFBRTtBQUhWLEtBaEJPLENBRkQ7QUF5QlJDLElBQUFBLFdBQVcsRUFBRSxHQXpCTDtBQTBCUkMsSUFBQUEsS0FBSyxFQUFFO0FBMUJDLEdBSlo7QUFnQ0VDLEVBQUFBLFVBQVUsRUFBRTtBQWhDZCxDQTVEa0IsQ0FBcEI7O0FBK0ZBLFNBQVNHLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCQyxFQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQTlCO0FBQ0Q7O0FBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCO0FBQ0E7QUFDQSxNQUFNQyxJQUFJLEdBQUd2QixXQUFiO0FBQ0EsTUFBTXdCLFlBQVksR0FBRyxJQUFJQyxLQUFKLENBQVVGLElBQUksQ0FBQ0csTUFBZixFQUF1QkMsSUFBdkIsQ0FBNEIsR0FBNUIsQ0FBckI7QUFDQSxNQUFNWCxLQUFLLEdBQUc7QUFDWlksSUFBQUEsS0FBSyxFQUFFTCxJQUFJLENBQUNHLE1BREE7QUFFWkcsSUFBQUEsUUFBUSxFQUFFLEVBRkU7QUFHWkMsSUFBQUEsVUFBVSxFQUFFLEVBSEE7QUFJWkMsSUFBQUEsTUFBTSxFQUFFLEVBSkk7QUFLWkMsSUFBQUEsT0FBTyxFQUFFLEVBTEc7QUFNWkMsSUFBQUEsU0FBUyxFQUFFLEVBTkM7QUFPWkMsSUFBQUEsY0FBYyxFQUFFVixZQVBKO0FBUVpXLElBQUFBLGNBQWMsRUFBRTtBQVJKLEdBQWQ7O0FBVUEsa0JBQWdDdkMsK0NBQVEsQ0FDdEMsUUFDSXFCLFlBQVksQ0FBQ21CLE9BQWIsQ0FBcUIsT0FBckIsSUFDRWpCLElBQUksQ0FBQ2tCLEtBQUwsQ0FBV3BCLFlBQVksQ0FBQ21CLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWCxDQURGLEdBRUVwQixLQUhOLEdBSUlBLENBTGtDLENBQXhDO0FBQUEsTUFBT3NCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBT0EsbUJBQThCM0MsK0NBQVEsQ0FBQyxDQUFELENBQXRDO0FBQUEsTUFBTzRDLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTBDN0MsK0NBQVEsQ0FBQzBDLFFBQVEsQ0FBQ0osY0FBVixDQUFsRDtBQUFBLE1BQU9RLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVBLG1CQUFrQy9DLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9nRCxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLFdBQVNDLGFBQVQsR0FBeUI7QUFDdkIsUUFBSUMsYUFBYSxHQUFHVCxRQUFRLENBQUNULFFBQTdCO0FBQ0FrQixJQUFBQSxhQUFhLENBQUNDLE9BQWQsQ0FBc0JSLE9BQXRCLE1BQW1DLENBQUMsQ0FBcEMsR0FDSU8sYUFBYSxDQUFDRSxJQUFkLENBQW1CVCxPQUFuQixDQURKLEdBRUlVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLENBRkosQ0FGdUIsQ0FLdkI7O0FBQ0FaLElBQUFBLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JULE1BQUFBLFFBQVEsRUFBRWtCO0FBQTFCLE9BQVgsQ0FOdUIsQ0FPdkI7QUFDRDs7QUFDRCxXQUFTSyxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixRQUFJQyxXQUFXLEdBQUdoQixRQUFRLENBQUNKLGNBQTNCO0FBQ0FvQixJQUFBQSxXQUFXLENBQUNkLE9BQUQsQ0FBWCxHQUF1QmEsS0FBdkIsQ0FGMkIsQ0FHM0I7O0FBQ0FkLElBQUFBLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JKLE1BQUFBLGNBQWMsRUFBRW9CO0FBQWhDLE9BQVg7QUFDRDs7QUFDRCxXQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QnhCLE9BQTlCLEVBQXVDO0FBQ3JDLFFBQUl5QixZQUFZLEdBQUduQixRQUFRLENBQUNOLE9BQTVCO0FBQ0EsUUFBSTBCLGNBQWMsR0FBR3BCLFFBQVEsQ0FBQ0wsU0FBOUI7O0FBQ0EsUUFBSXVCLE9BQU8sS0FBS3hCLE9BQWhCLEVBQXlCO0FBQ3ZCeUIsTUFBQUEsWUFBWSxDQUFDVCxPQUFiLENBQXFCUixPQUFyQixNQUFrQyxDQUFDLENBQW5DLEdBQXVDaUIsWUFBWSxDQUFDUixJQUFiLENBQWtCVCxPQUFsQixDQUF2QyxHQUFvRSxFQUFwRTtBQUNBa0IsTUFBQUEsY0FBYyxDQUFDVixPQUFmLENBQXVCUixPQUF2QixNQUFvQyxDQUFDLENBQXJDLEdBQ0lrQixjQUFjLENBQUNDLE1BQWYsQ0FBc0JELGNBQWMsQ0FBQ1YsT0FBZixDQUF1QlIsT0FBdkIsQ0FBdEIsRUFBdUQsQ0FBdkQsQ0FESixHQUVJLEVBRko7QUFHQUQsTUFBQUEsV0FBVyxpQ0FBTUQsUUFBTjtBQUFnQk4sUUFBQUEsT0FBTyxFQUFFeUI7QUFBekIsU0FBWDtBQUNELEtBTkQsTUFNTztBQUNMQyxNQUFBQSxjQUFjLENBQUNWLE9BQWYsQ0FBdUJSLE9BQXZCLE1BQW9DLENBQUMsQ0FBckMsR0FDSWtCLGNBQWMsQ0FBQ1QsSUFBZixDQUFvQlQsT0FBcEIsQ0FESixHQUVJLEVBRko7QUFHQWlCLE1BQUFBLFlBQVksQ0FBQ1QsT0FBYixDQUFxQlIsT0FBckIsTUFBa0MsQ0FBQyxDQUFuQyxHQUNJaUIsWUFBWSxDQUFDRSxNQUFiLENBQW9CRixZQUFZLENBQUNULE9BQWIsQ0FBcUJSLE9BQXJCLENBQXBCLEVBQW1ELENBQW5ELENBREosR0FFSSxFQUZKO0FBR0FELE1BQUFBLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JMLFFBQUFBLFNBQVMsRUFBRXlCO0FBQTNCLFNBQVg7QUFDRDtBQUNGLEdBM0QyQixDQTZENUI7OztBQUVBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCVCxJQUFBQSxZQUFZLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxZQUFULENBQXNCLFVBQXRCLENBQUQsQ0FBWjtBQUNBakIsSUFBQUEsYUFBYTtBQUNiLFFBQU1rQixhQUFhLEdBQUdILENBQUMsQ0FBQ0MsTUFBRixDQUFTRyxTQUFULENBQW1CQyxXQUFuQixFQUF0QjtBQUNBaEIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlhLGFBQVo7QUFDQSxRQUFNRyxVQUFVLEdBQUc1QyxJQUFJLENBQUNpQixPQUFELENBQUosQ0FBY3BDLFFBQWQsQ0FBdUJNLFdBQXZCLENBQW1Dd0QsV0FBbkMsRUFBbkI7QUFDQVgsSUFBQUEsV0FBVyxDQUFDUyxhQUFELEVBQWdCRyxVQUFoQixDQUFYO0FBQ0FwRCxJQUFBQSxZQUFZLENBQUN1QixRQUFELENBQVo7QUFDRCxHQVJEOztBQVVBLE1BQU04QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCM0IsSUFBQUEsVUFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBWCxDQUFWO0FBQ0FELElBQUFBLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JKLE1BQUFBLGNBQWMsRUFBRVE7QUFBaEMsT0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTTJCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QjVCLElBQUFBLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVjtBQUNBRCxJQUFBQSxXQUFXLGlDQUFNRCxRQUFOO0FBQWdCSixNQUFBQSxjQUFjLEVBQUVRO0FBQWhDLE9BQVg7QUFDRCxHQUhEOztBQUtBLE1BQU00QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsUUFBSUMsZ0JBQWdCLEdBQUdqQyxRQUFRLENBQUNOLE9BQVQsQ0FBaUJOLE1BQXhDO0FBQ0E4QyxJQUFBQSxLQUFLLENBQUMsUUFBRCxFQUFXRCxnQkFBWCxDQUFMO0FBQ0QsR0FIRDs7QUFJQSxNQUFJO0FBQ0YsUUFBSUUsZUFBZSxHQUFHbEQsSUFBSSxDQUFDaUIsT0FBRCxDQUFKLENBQWNwQyxRQUFwQztBQUNBLHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsNEJBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsa0JBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsT0FBZjtBQUFBLGlEQUFzQ29DLE9BQU8sR0FBRyxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFLLDZCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBTUU7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsc0NBQWY7QUFBQSwrQkFDR2lDLGVBQWUsQ0FBQ3BFLEtBQWhCLENBQXNCQyxLQUF0QixJQUErQixFQUEvQixnQkFDQztBQUNFLCtCQUFTLEVBQUMsZ0JBRFo7QUFFRSx5QkFBRyxFQUFFbUUsZUFBZSxDQUFDcEUsS0FBaEIsQ0FBc0JDO0FBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsR0FLRyxJQU5OLGVBT0U7QUFBRywrQkFBUyxFQUFDLHFCQUFiO0FBQUEsZ0NBQ0dtRSxlQUFlLENBQUNwRSxLQUFoQixDQUFzQkU7QUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFhRTtBQUFBLDhCQUNHa0UsZUFBZSxDQUFDakUsT0FBaEIsQ0FBd0JrRSxHQUF4QixDQUE0QixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDL0MsMENBQ0U7QUFFRSxnQ0FBUSxFQUFFQSxLQUZaO0FBR0UsaUNBQVMsRUFBQyxTQUhaO0FBSUUsK0JBQU8sRUFBRSxpQkFBQ2YsQ0FBRDtBQUFBLGlDQUFPRCxhQUFhLENBQUNDLENBQUQsQ0FBcEI7QUFBQSx5QkFKWDtBQUtFLDZCQUFLLEVBQUU7QUFDTGdCLDBCQUFBQSxNQUFNLEVBQ0pELEtBQUssSUFBSXRDLFFBQVEsQ0FBQ0osY0FBVCxDQUF3Qk0sT0FBeEIsQ0FBVCxHQUNJLGlCQURKLEdBRUk7QUFKRCx5QkFMVDtBQUFBLG1DQVlHbUMsT0FBTyxDQUFDckUsS0FBUixJQUFpQixFQUFqQixnQkFDQztBQUNFLG1DQUFTLEVBQUMsY0FEWjtBQUVFLDZCQUFHLEVBQUVxRSxPQUFPLENBQUNyRTtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREQsR0FLRyxJQWpCTixlQWtCRTtBQUFBLG9DQUFJcUUsT0FBTyxDQUFDbEU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWxCRjtBQUFBLHlCQUNPbUUsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGO0FBc0JELHFCQXZCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQWdERTtBQUFLLHlCQUFTLEVBQUMsMkJBQWY7QUFBQSx3Q0FDRTtBQUFBLG1EQUFzQnRDLFFBQVEsQ0FBQ1YsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUdMLElBQUksQ0FBQ21ELEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDNUIsc0NBQ0U7QUFFRSw2QkFBUyxFQUFDLHFCQUZaO0FBR0UseUJBQUssR0FDRnBDLE9BQU8sS0FBS29DLEtBQVosR0FDRztBQUFFRSxzQkFBQUEsZUFBZSxFQUFFLE1BQW5CO0FBQTJCQyxzQkFBQUEsS0FBSyxFQUFFO0FBQWxDLHFCQURILEdBRUcsRUFGSCxFQUdEekMsUUFBUSxDQUFDVCxRQUFULENBQWtCbUQsUUFBbEIsQ0FBMkJKLEtBQTNCLElBQ0k7QUFBRUUsc0JBQUFBLGVBQWUsRUFBRTtBQUFuQixxQkFESixHQUVJLEVBTkQsQ0FIUDtBQVdFLDJCQUFPLEVBQUUsbUJBQU07QUFDYnJDLHNCQUFBQSxVQUFVLENBQUNtQyxLQUFELENBQVY7QUFDQXJDLHNCQUFBQSxXQUFXLGlDQUNORCxRQURNO0FBRVRKLHdCQUFBQSxjQUFjLEVBQUVRO0FBRlAseUJBQVg7QUFJRCxxQkFqQkg7QUFBQSw4QkFtQkdrQyxLQUFLLEdBQUc7QUFuQlgscUJBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERjtBQXVCRCxpQkF4QkEsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQThFRTtBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQywyQkFBZjtBQUFBLHdDQUNFO0FBQ0UsMkJBQVMsRUFBQyxlQURaO0FBRUUseUJBQU8sRUFBRTtBQUFBLDJCQUFNUCxlQUFlLEVBQXJCO0FBQUEsbUJBRlgsQ0FHRTtBQUhGO0FBSUUsMEJBQVEsRUFBRTdCLE9BQU8sS0FBSyxDQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVNFO0FBQ0UsMkJBQVMsRUFBQyxlQURaO0FBRUUseUJBQU8sRUFBRTtBQUFBLDJCQUFNNEIsV0FBVyxFQUFqQjtBQUFBLG1CQUZYLENBR0U7QUFDQTtBQUNBO0FBQ0E7QUFORjtBQU9FLDBCQUFRLEVBQUU1QixPQUFPLElBQUlqQixJQUFJLENBQUNHLE1BQUwsR0FBYyxDQVByQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURixlQW9CRTtBQUNFLDJCQUFTLEVBQUMsOEJBRFo7QUFFRSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1tQixZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLG1CQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXBCRixlQTBCRSw4REFBQyw2REFBRDtBQUNFLHNCQUFJLEVBQUVELFNBRFI7QUFFRSx3QkFBTSxFQUFFO0FBQUEsMkJBQU1DLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsbUJBRlY7QUFHRSwwQkFBUSxFQUFFUDtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFERjtBQTBIRCxHQTVIRCxDQTRIRSxPQUFPMkMsR0FBUCxFQUFZO0FBQ1ovQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWThCLEdBQVo7QUFFQSx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7QUFDRixDQXhORDs7R0FBTTVEOztBQTBOTixTQUFTNkQsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJQLEtBQXpCLEVBQWdDUSxPQUFoQyxFQUF5QztBQUN2QyxrSkFBV0QsS0FBSyxDQUFDRSxLQUFOLENBQVksQ0FBWixFQUFlVCxLQUFmLENBQVgsSUFBa0NRLE9BQWxDLGtJQUE4Q0QsS0FBSyxDQUFDRSxLQUFOLENBQVlULEtBQVosQ0FBOUM7QUFDRDs7QUFFRCxJQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsU0FBTztBQUNMQyxJQUFBQSxTQUFTLEVBQUVELEtBQUssQ0FBQ0UsY0FBTixDQUFxQkMsU0FEM0I7QUFFTEMsSUFBQUEsY0FBYyxFQUFFSixLQUFLLENBQUNFLGNBQU4sQ0FBcUJHLElBQXJCLENBQTBCdEQ7QUFGckMsR0FBUDtBQUlELENBTEQ7O0FBT0EsK0RBQWV6QyxvREFBTyxDQUFDeUYsSUFBRCxDQUFQLENBQWNqRSxVQUFkLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvVG9wQmFyXCI7XHJcbmltcG9ydCBQb3BNb2RhbCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9wTW9kYWxcIjtcclxuXHJcbmNvbnN0IG15UXVlc3Rpb25zID0gW1xyXG4gIHtcclxuICAgIHN1YmplY3Q6IFwiR2VuZXJhbCBLbm93bGVkZ2VcIixcclxuICAgIGF1dGhvcjogXCJBbnVwIEt1bWFyXCIsXHJcbiAgICBtb2RlbDogXCJxdWVzdGlvbi13aXRoLWltYWdlXCIsXHJcbiAgICBxdWVzdGlvbjoge1xyXG4gICAgICBxdWVzdDoge1xyXG4gICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxMDM2MTQxODk3MS01MGNiOGQxZjgzMzk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQzNiZxPTgwXCIsXHJcbiAgICAgICAgcXVlOiBcIldoZXJlIGlzIHRoaXMgZmFtb3VzIG1vbnVtZW50IGxvY2F0ZWQ/XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRGVsaGlcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJNdW1iYWlcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJBZ3JhXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiSmFpcHVyXCIgfSxcclxuICAgICAgXSxcclxuICAgICAgY29ycmVjdF9hbnM6IFwiQWdyYVwiLFxyXG4gICAgICBtYXJrczogNSxcclxuICAgIH0sXHJcbiAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4gICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7XHJcbiAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg1ODI4MDY4OTcwLTdiNzUwODI0ODVjZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTEzJnE9ODBcIixcclxuICAgICAgICBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIixcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJEZWxoaVwiLFxyXG4gICAgICBtYXJrczogNSxcclxuICAgIH0sXHJcbiAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4gICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuICAgIG1vZGVsOiBcImFsbC10ZXh0XCIsXHJcbiAgICBxdWVzdGlvbjoge1xyXG4gICAgICBxdWVzdDogeyBpbWFnZTogXCJcIiwgcXVlOiBcIldoZXJlIGlzIHRoaXMgZmFtb3VzIG1vbnVtZW50IGxvY2F0ZWQ/XCIgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJEZWxoaVwiLFxyXG4gICAgICBtYXJrczogNSxcclxuICAgIH0sXHJcbiAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4gICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuICAgIG1vZGVsOiBcIm9wdGlvbnMtd2l0aC1pbWFnZVwiLFxyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHsgcWltZzogXCJcIiwgcTogXCJXaGljaCBvZiB0aGlzIGlzIGxvY2F0ZWQgaW4gSHlkZXJhYmFkP1wiIH0sXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NTgyODA2ODk3MC03Yjc1MDgyNDg1Y2Q/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUxMyZxPTgwXCIsXHJcbiAgICAgICAgICBvcHRpb246IFwiYVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vcGhvdG9zL2hpZ2gtd2lkZS1hbmdsZS12aWV3LW9mLWNoYXJtaW5hci1pbi10aGUtbmlnaHQtcGljdHVyZS1pZDEyMTUyNzQ5OTBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNDQ5MjQxMjkzNy1iMjgwNzRhNWQ3ZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MSZxPTgwXCIsXHJcbiAgICAgICAgICBvcHRpb246IFwiY1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjQ0OTI0MTI5MzctYjI4MDc0YTVkN2RhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NzEmcT04MFwiLFxyXG4gICAgICAgICAgb3B0aW9uOiBcImRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgY29ycmVjdF9hbnM6IFwiYlwiLFxyXG4gICAgICBtYXJrczogNSxcclxuICAgIH0sXHJcbiAgICBkaWZmaWN1bHR5OiBcIm1lZGl1bVwiLFxyXG4gIH0sXHJcbl07XHJcbmZ1bmN0aW9uIHNhdmVQcm9ncmVzcyhzY29yZSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NvcmVcIiwgSlNPTi5zdHJpbmdpZnkoc2NvcmUpKTtcclxufVxyXG5cclxuY29uc3QgdGVzdF9wYWdlMiA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLnN0dWRlbnRfcmVjb3JkKTtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSBwcm9wcy5xdWVzdEJhbms7XHJcbiAgY29uc3QgZGF0YSA9IG15UXVlc3Rpb25zO1xyXG4gIGNvbnN0IGFycmF5b2ZOdWxscyA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCkuZmlsbChcInhcIik7XHJcbiAgY29uc3Qgc2NvcmUgPSB7XHJcbiAgICB0b3RhbDogZGF0YS5sZW5ndGgsXHJcbiAgICBhbnN3ZXJlZDogW10sXHJcbiAgICB1bmFuc3dlcmVkOiBbXSxcclxuICAgIG1hcmtlZDogW10sXHJcbiAgICBjb3JyZWN0OiBbXSxcclxuICAgIGluY29ycmVjdDogW10sXHJcbiAgICBjbGlja2VkQW5zTGlzdDogYXJyYXlvZk51bGxzLFxyXG4gICAgY29ycmVjdEFuc0xpc3Q6IFtdLFxyXG4gIH07XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpXHJcbiAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIikpXHJcbiAgICAgICAgOiBzY29yZVxyXG4gICAgICA6IHNjb3JlXHJcbiAgKTtcclxuICBjb25zdCBbYWN0aXZlUSwgc2V0QWN0aXZlUV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2xpY2tlZE9wdGlvbiwgc2V0Q2xpY2tlZE9wdGlvbl0gPSB1c2VTdGF0ZShwcm9ncmVzcy5jbGlja2VkQW5zTGlzdCk7XHJcblxyXG4gIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gYWRkVG9BbnN3ZXJlZCgpIHtcclxuICAgIHZhciBhbnN3ZXJlZFF1ZXN0ID0gcHJvZ3Jlc3MuYW5zd2VyZWQ7XHJcbiAgICBhbnN3ZXJlZFF1ZXN0LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xXHJcbiAgICAgID8gYW5zd2VyZWRRdWVzdC5wdXNoKGFjdGl2ZVEpXHJcbiAgICAgIDogY29uc29sZS5sb2coXCJhbHJlYWR5IGFuc3dlcmVkXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYWN0aXZlUSwgXCIgaXMgcHJlc2VudCBpbiBcIiwgYW5zd2VyZWRRdWVzdCk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBhbnN3ZXJlZDogYW5zd2VyZWRRdWVzdCB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9DbGlja2VkKHZhbHVlKSB7XHJcbiAgICB2YXIgY2xpY2tlZExpc3QgPSBwcm9ncmVzcy5jbGlja2VkQW5zTGlzdDtcclxuICAgIGNsaWNrZWRMaXN0W2FjdGl2ZVFdID0gdmFsdWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5ldyBBcnJheVwiLCBjbGlja2VkTGlzdCk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZExpc3QgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZFRvUmVzdWx0KGNsaWNrZWQsIGNvcnJlY3QpIHtcclxuICAgIHZhciBjb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5jb3JyZWN0O1xyXG4gICAgdmFyIGluY29ycmVjdEFycmF5ID0gcHJvZ3Jlc3MuaW5jb3JyZWN0O1xyXG4gICAgaWYgKGNsaWNrZWQgPT09IGNvcnJlY3QpIHtcclxuICAgICAgY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xID8gY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSkgOiB7fTtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnNwbGljZShpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpLCAxKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNvcnJlY3Q6IGNvcnJlY3RBcnJheSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgPT09IC0xXHJcbiAgICAgICAgPyBpbmNvcnJlY3RBcnJheS5wdXNoKGFjdGl2ZVEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSkgIT09IC0xXHJcbiAgICAgICAgPyBjb3JyZWN0QXJyYXkuc3BsaWNlKGNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpLCAxKVxyXG4gICAgICAgIDoge307XHJcbiAgICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGluY29ycmVjdDogaW5jb3JyZWN0QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhjbGlja2VkT3B0aW9uKTtcclxuXHJcbiAgY29uc3Qgb25PcHRpb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBhZGRUb0NsaWNrZWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIikpO1xyXG4gICAgYWRkVG9BbnN3ZXJlZCgpO1xyXG4gICAgY29uc3QgY2xpY2tlZEFuc3dlciA9IGUudGFyZ2V0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc29sZS5sb2coY2xpY2tlZEFuc3dlcik7XHJcbiAgICBjb25zdCBjb3JyZWN0QW5zID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbi5jb3JyZWN0X2Fucy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgYWRkVG9SZXN1bHQoY2xpY2tlZEFuc3dlciwgY29ycmVjdEFucyk7XHJcbiAgICBzYXZlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlUShhY3RpdmVRICsgMSk7XHJcbiAgICBzZXRQcm9ncmVzcyh7IC4uLnByb2dyZXNzLCBjbGlja2VkQW5zTGlzdDogY2xpY2tlZE9wdGlvbiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgLSAxKTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB2YXIgbnVtYmVyT2ZDb3JyZWN0cyA9IHByb2dyZXNzLmNvcnJlY3QubGVuZ3RoO1xyXG4gICAgYWxlcnQoXCJGaW5pc2hcIiwgbnVtYmVyT2ZDb3JyZWN0cyk7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgbGV0IGN1cnJlbnRRdWVzdGlvbiA9IGRhdGFbYWN0aXZlUV0ucXVlc3Rpb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXN0LXBhZ2UgZ3gtMCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTAgbWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBteC1hdXRvIHF1ZXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBxdWVzdC10b3Byb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+IFF1ZXN0aW9uIE5vLiB7YWN0aXZlUSArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPk1hcmtzIDogNTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHF1ZXN0LXF1ZXN0aW9uIG10LTIgbXItMyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LmltYWdlICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50UXVlc3Rpb24ucXVlc3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ib3R0b20gZnctYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbi5vcHRpb25zLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbk9wdGlvbkNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0W2FjdGl2ZVFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmltYWdlICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHRpb24taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZWxlbWVudC5vcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBteC1hdXRvIG5hdmktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFF1ZXN0aW9ucyA6IHtwcm9ncmVzcy50b3RhbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbi1udW1iZXItYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVRID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIGNvbG9yOiBcIndoaXRlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcy5hbnN3ZXJlZC5pbmNsdWRlcyhpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDEyOCwgMTkyLCAzMylcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVRKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvIGZvb3Rlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJldmlvdXNDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHZpc2liaWxpdHk6IGFjdGl2ZVEgPT0gMCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aW91cy1uZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5leHRDbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2aXNpYmlsaXR5OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBhY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVRID09IGRhdGEubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcHJldmlvdXMtbmV4dCBmaW5pc2gtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3BNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldE1vZGFsU2hvdyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3Igb2NjdXJlZDwvZGl2PjtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRBZnRlcihhcnJheSwgaW5kZXgsIG5ld0l0ZW0pIHtcclxuICByZXR1cm4gWy4uLmFycmF5LnNsaWNlKDAsIGluZGV4KSwgbmV3SXRlbSwgLi4uYXJyYXkuc2xpY2UoaW5kZXgpXTtcclxufVxyXG5cclxuY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBxdWVzdEJhbms6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnF1ZXN0aW9ucyxcclxuICAgIHN0dWRlbnRfcmVjb3JkOiBzdGF0ZS5zdHVkZW50UmVkdWNlci51c2VyLnByb2dyZXNzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1zdHApKHRlc3RfcGFnZTIpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJUb3BCYXIiLCJQb3BNb2RhbCIsIm15UXVlc3Rpb25zIiwic3ViamVjdCIsImF1dGhvciIsIm1vZGVsIiwicXVlc3Rpb24iLCJxdWVzdCIsImltYWdlIiwicXVlIiwib3B0aW9ucyIsIm9wdGlvbiIsImNvcnJlY3RfYW5zIiwibWFya3MiLCJkaWZmaWN1bHR5IiwicWltZyIsInEiLCJzYXZlUHJvZ3Jlc3MiLCJzY29yZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidGVzdF9wYWdlMiIsInByb3BzIiwiZGF0YSIsImFycmF5b2ZOdWxscyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsInRvdGFsIiwiYW5zd2VyZWQiLCJ1bmFuc3dlcmVkIiwibWFya2VkIiwiY29ycmVjdCIsImluY29ycmVjdCIsImNsaWNrZWRBbnNMaXN0IiwiY29ycmVjdEFuc0xpc3QiLCJnZXRJdGVtIiwicGFyc2UiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiYWN0aXZlUSIsInNldEFjdGl2ZVEiLCJjbGlja2VkT3B0aW9uIiwic2V0Q2xpY2tlZE9wdGlvbiIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImFkZFRvQW5zd2VyZWQiLCJhbnN3ZXJlZFF1ZXN0IiwiaW5kZXhPZiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWRkVG9DbGlja2VkIiwidmFsdWUiLCJjbGlja2VkTGlzdCIsImFkZFRvUmVzdWx0IiwiY2xpY2tlZCIsImNvcnJlY3RBcnJheSIsImluY29ycmVjdEFycmF5Iiwic3BsaWNlIiwib25PcHRpb25DbGljayIsImUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjbGlja2VkQW5zd2VyIiwiaW5uZXJIVE1MIiwidG9Mb3dlckNhc2UiLCJjb3JyZWN0QW5zIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJvbkZpbmlzaENsaWNrIiwibnVtYmVyT2ZDb3JyZWN0cyIsImFsZXJ0IiwiY3VycmVudFF1ZXN0aW9uIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJpbmNsdWRlcyIsImVyciIsImFkZEFmdGVyIiwiYXJyYXkiLCJuZXdJdGVtIiwic2xpY2UiLCJtc3RwIiwic3RhdGUiLCJxdWVzdEJhbmsiLCJzdHVkZW50UmVkdWNlciIsInF1ZXN0aW9ucyIsInN0dWRlbnRfcmVjb3JkIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=