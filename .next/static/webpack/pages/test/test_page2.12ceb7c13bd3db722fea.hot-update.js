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
                        value: element.option,
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
                          lineNumber: 237,
                          columnNumber: 31
                        }, _this) : null, element.option.length > 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                          children: element.option
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 243,
                          columnNumber: 31
                        }, _this) : null]
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
                  lineNumber: 252,
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
                    lineNumber: 255,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 251,
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
                  lineNumber: 282,
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
                  lineNumber: 290,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: " previous-next finish-button",
                  onClick: function onClick() {
                    return setModalShow(true);
                  },
                  children: "Finish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_src_components_PopModal__WEBPACK_IMPORTED_MODULE_5__.default, {
                  show: modalShow,
                  onHide: function onHide() {
                    return setModalShow(false);
                  },
                  progress: progress
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
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
      lineNumber: 322,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UyLjEyY2ViN2MxM2JkM2RiNzIyZmVhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxXQUFXLEdBQUcsQ0FDbEI7QUFDRUMsRUFBQUEsT0FBTyxFQUFFLG1CQURYO0FBRUVDLEVBQUFBLE1BQU0sRUFBRSxZQUZWO0FBR0VDLEVBQUFBLEtBQUssRUFBRSxxQkFIVDtBQUlFQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLEtBQUssRUFDSCwrSkFGRztBQUdMQyxNQUFBQSxHQUFHLEVBQUU7QUFIQSxLQURDO0FBTVJDLElBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQURPLEVBRVA7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLEtBRk8sRUFHUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FITyxFQUlQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixLQUpPLENBTkQ7QUFZUkMsSUFBQUEsV0FBVyxFQUFFLE1BWkw7QUFhUkMsSUFBQUEsS0FBSyxFQUFFO0FBYkMsR0FKWjtBQW1CRUMsRUFBQUEsVUFBVSxFQUFFO0FBbkJkLENBRGtCLEVBc0JsQjtBQUNFWCxFQUFBQSxPQUFPLEVBQUUsbUJBRFg7QUFFRUMsRUFBQUEsTUFBTSxFQUFFLFlBRlY7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLHFCQUhUO0FBSUVDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEs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QUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDtBQUNGLENBM05EOztHQUFNNUQ7O0FBNk5OLFNBQVM2RCxRQUFULENBQWtCQyxLQUFsQixFQUF5QlAsS0FBekIsRUFBZ0NRLE9BQWhDLEVBQXlDO0FBQ3ZDLGtKQUFXRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxDQUFaLEVBQWVULEtBQWYsQ0FBWCxJQUFrQ1EsT0FBbEMsa0lBQThDRCxLQUFLLENBQUNFLEtBQU4sQ0FBWVQsS0FBWixDQUE5QztBQUNEOztBQUVELElBQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUFPO0FBQ0xDLElBQUFBLFNBQVMsRUFBRUQsS0FBSyxDQUFDRSxjQUFOLENBQXFCQyxTQUQzQjtBQUVMQyxJQUFBQSxjQUFjLEVBQUVKLEtBQUssQ0FBQ0UsY0FBTixDQUFxQkcsSUFBckIsQ0FBMEJ0RDtBQUZyQyxHQUFQO0FBSUQsQ0FMRDs7QUFPQSwrREFBZXZDLG9EQUFPLENBQUN1RixJQUFELENBQVAsQ0FBY2pFLFVBQWQsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0L3Rlc3RfcGFnZTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ub3BCYXJcIjtcclxuaW1wb3J0IFBvcE1vZGFsIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbFwiO1xyXG5cclxuY29uc3QgbXlRdWVzdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgc3ViamVjdDogXCJHZW5lcmFsIEtub3dsZWRnZVwiLFxyXG4gICAgYXV0aG9yOiBcIkFudXAgS3VtYXJcIixcclxuICAgIG1vZGVsOiBcInF1ZXN0aW9uLXdpdGgtaW1hZ2VcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7XHJcbiAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjEwMzYxNDE4OTcxLTUwY2I4ZDFmODMzOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDM2JnE9ODBcIixcclxuICAgICAgICBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIixcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEZWxoaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIk11bWJhaVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFncmFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJKYWlwdXJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJBZ3JhXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwicXVlc3Rpb24td2l0aC1pbWFnZVwiLFxyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHtcclxuICAgICAgICBpbWFnZTpcclxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4MjgwNjg5NzAtN2I3NTA4MjQ4NWNkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MTMmcT04MFwiLFxyXG4gICAgICAgIHF1ZTogXCJXaGVyZSBpcyB0aGlzIGZhbW91cyBtb251bWVudCBsb2NhdGVkP1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkRlbGhpXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwiYWxsLXRleHRcIixcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiV2hlcmUgaXMgdGhpcyBmYW1vdXMgbW9udW1lbnQgbG9jYXRlZD9cIiB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRlbGhpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiTXVtYmFpXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQWdyYVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkphaXB1clwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkRlbGhpXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdWJqZWN0OiBcIkdlbmVyYWwgS25vd2xlZGdlXCIsXHJcbiAgICBhdXRob3I6IFwiQW51cCBLdW1hclwiLFxyXG4gICAgbW9kZWw6IFwib3B0aW9ucy13aXRoLWltYWdlXCIsXHJcbiAgICBxdWVzdGlvbjoge1xyXG4gICAgICBxdWVzdDogeyBpbWFnZTogXCJcIiwgcXVlOiBcIldoaWNoIG9mIHRoaXMgaXMgbG9jYXRlZCBpbiBIeWRlcmFiYWQ/XCIgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg1ODI4MDY4OTcwLTdiNzUwODI0ODVjZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTEzJnE9ODBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvaGlnaC13aWRlLWFuZ2xlLXZpZXctb2YtY2hhcm1pbmFyLWluLXRoZS1uaWdodC1waWN0dXJlLWlkMTIxNTI3NDk5MFwiLFxyXG4gICAgICAgICAgb3B0aW9uOiBcImJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI0NDkyNDEyOTM3LWIyODA3NGE1ZDdkYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcxJnE9ODBcIixcclxuICAgICAgICAgIG9wdGlvbjogXCJjXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNDQ5MjQxMjkzNy1iMjgwNzRhNWQ3ZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MSZxPTgwXCIsXHJcbiAgICAgICAgICBvcHRpb246IFwiZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBjb3JyZWN0X2FuczogXCJiXCIsXHJcbiAgICAgIG1hcmtzOiA1LFxyXG4gICAgfSxcclxuICAgIGRpZmZpY3VsdHk6IFwibWVkaXVtXCIsXHJcbiAgfSxcclxuXTtcclxuZnVuY3Rpb24gc2F2ZVByb2dyZXNzKHNjb3JlKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZVwiLCBKU09OLnN0cmluZ2lmeShzY29yZSkpO1xyXG59XHJcblxyXG5jb25zdCB0ZXN0X3BhZ2UyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuc3R1ZGVudF9yZWNvcmQpO1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHByb3BzLnF1ZXN0QmFuaztcclxuICBjb25zdCBkYXRhID0gbXlRdWVzdGlvbnM7XHJcbiAgY29uc3QgYXJyYXlvZk51bGxzID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKFwieFwiKTtcclxuICBjb25zdCBzY29yZSA9IHtcclxuICAgIHRvdGFsOiBkYXRhLmxlbmd0aCxcclxuICAgIGFuc3dlcmVkOiBbXSxcclxuICAgIHVuYW5zd2VyZWQ6IFtdLFxyXG4gICAgbWFya2VkOiBbXSxcclxuICAgIGNvcnJlY3Q6IFtdLFxyXG4gICAgaW5jb3JyZWN0OiBbXSxcclxuICAgIGNsaWNrZWRBbnNMaXN0OiBhcnJheW9mTnVsbHMsXHJcbiAgICBjb3JyZWN0QW5zTGlzdDogW10sXHJcbiAgfTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSlcclxuICAgICAgICA6IHNjb3JlXHJcbiAgICAgIDogc2NvcmVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVRLCBzZXRBY3RpdmVRXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjbGlja2VkT3B0aW9uLCBzZXRDbGlja2VkT3B0aW9uXSA9IHVzZVN0YXRlKHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0KTtcclxuXHJcbiAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBhZGRUb0Fuc3dlcmVkKCkge1xyXG4gICAgdmFyIGFuc3dlcmVkUXVlc3QgPSBwcm9ncmVzcy5hbnN3ZXJlZDtcclxuICAgIGFuc3dlcmVkUXVlc3QuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgPyBhbnN3ZXJlZFF1ZXN0LnB1c2goYWN0aXZlUSlcclxuICAgICAgOiBjb25zb2xlLmxvZyhcImFscmVhZHkgYW5zd2VyZWRcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVRLCBcIiBpcyBwcmVzZW50IGluIFwiLCBhbnN3ZXJlZFF1ZXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGFuc3dlcmVkOiBhbnN3ZXJlZFF1ZXN0IH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUb0NsaWNrZWQodmFsdWUpIHtcclxuICAgIHZhciBjbGlja2VkTGlzdCA9IHByb2dyZXNzLmNsaWNrZWRBbnNMaXN0O1xyXG4gICAgY2xpY2tlZExpc3RbYWN0aXZlUV0gPSB2YWx1ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmV3IEFycmF5XCIsIGNsaWNrZWRMaXN0KTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkTGlzdCB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVG9SZXN1bHQoY2xpY2tlZCwgY29ycmVjdCkge1xyXG4gICAgdmFyIGNvcnJlY3RBcnJheSA9IHByb2dyZXNzLmNvcnJlY3Q7XHJcbiAgICB2YXIgaW5jb3JyZWN0QXJyYXkgPSBwcm9ncmVzcy5pbmNvcnJlY3Q7XHJcbiAgICBpZiAoY2xpY2tlZCA9PT0gY29ycmVjdCkge1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTEgPyBjb3JyZWN0QXJyYXkucHVzaChhY3RpdmVRKSA6IHt9O1xyXG4gICAgICBpbmNvcnJlY3RBcnJheS5pbmRleE9mKGFjdGl2ZVEpICE9PSAtMVxyXG4gICAgICAgID8gaW5jb3JyZWN0QXJyYXkuc3BsaWNlKGluY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY29ycmVjdDogY29ycmVjdEFycmF5IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5jb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSA9PT0gLTFcclxuICAgICAgICA/IGluY29ycmVjdEFycmF5LnB1c2goYWN0aXZlUSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgICBjb3JyZWN0QXJyYXkuaW5kZXhPZihhY3RpdmVRKSAhPT0gLTFcclxuICAgICAgICA/IGNvcnJlY3RBcnJheS5zcGxpY2UoY29ycmVjdEFycmF5LmluZGV4T2YoYWN0aXZlUSksIDEpXHJcbiAgICAgICAgOiB7fTtcclxuICAgICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgaW5jb3JyZWN0OiBpbmNvcnJlY3RBcnJheSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRPcHRpb24pO1xyXG5cclxuICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGFkZFRvQ2xpY2tlZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSk7XHJcbiAgICBhZGRUb0Fuc3dlcmVkKCk7XHJcbiAgICBjb25zdCBjbGlja2VkQW5zd2VyID0gZS50YXJnZXQuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjbGlja2VkQW5zd2VyKTtcclxuICAgIGNvbnN0IGNvcnJlY3RBbnMgPSBkYXRhW2FjdGl2ZVFdLnF1ZXN0aW9uLmNvcnJlY3RfYW5zLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBhZGRUb1Jlc3VsdChjbGlja2VkQW5zd2VyLCBjb3JyZWN0QW5zKTtcclxuICAgIHNhdmVQcm9ncmVzcyhwcm9ncmVzcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25OZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVRKGFjdGl2ZVEgKyAxKTtcclxuICAgIHNldFByb2dyZXNzKHsgLi4ucHJvZ3Jlc3MsIGNsaWNrZWRBbnNMaXN0OiBjbGlja2VkT3B0aW9uIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUHJldmlvdXNDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVEoYWN0aXZlUSAtIDEpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoeyAuLi5wcm9ncmVzcywgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hDbGljayA9ICgpID0+IHtcclxuICAgIHZhciBudW1iZXJPZkNvcnJlY3RzID0gcHJvZ3Jlc3MuY29ycmVjdC5sZW5ndGg7XHJcbiAgICBhbGVydChcIkZpbmlzaFwiLCBudW1iZXJPZkNvcnJlY3RzKTtcclxuICB9O1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY3VycmVudFF1ZXN0aW9uID0gZGF0YVthY3RpdmVRXS5xdWVzdGlvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRvcEJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRlc3QtcGFnZSBneC0wIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3gtMCBtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG14LWF1dG8gcXVlc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHF1ZXN0LXRvcHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj4gUXVlc3Rpb24gTm8uIHthY3RpdmVRICsgMX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRleHQtY2VudGVyXCI+TWFya3MgOiA1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcXVlc3QtcXVlc3Rpb24gbXQtMiBtci0zIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ucXVlc3QuaW1hZ2UgIT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRRdWVzdGlvbi5xdWVzdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJvdHRvbSBmdy1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24ucXVlc3QucXVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uLm9wdGlvbnMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVtZW50Lm9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uT3B0aW9uQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gcHJvZ3Jlc3MuY2xpY2tlZEFuc0xpc3RbYWN0aXZlUV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaW1hZ2UgIT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm9wdGlvbi5sZW5ndGggPiAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZWxlbWVudC5vcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IG14LWF1dG8gbmF2aS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgUXVlc3Rpb25zIDoge3Byb2dyZXNzLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uLW51bWJlci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZVEgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLmFuc3dlcmVkLmluY2x1ZGVzKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTI4LCAxOTIsIDMzKVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZEFuc0xpc3Q6IGNsaWNrZWRPcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG8gZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlvdXMtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmV2aW91c0NsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgdmlzaWJpbGl0eTogYWN0aXZlUSA9PSAwID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpb3VzLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmV4dENsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHZpc2liaWxpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGFjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVEgPT0gZGF0YS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBwcmV2aW91cy1uZXh0IGZpbmlzaC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsU2hvdyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFBvcE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5FcnJvciBvY2N1cmVkPC9kaXY+O1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZEFmdGVyKGFycmF5LCBpbmRleCwgbmV3SXRlbSkge1xyXG4gIHJldHVybiBbLi4uYXJyYXkuc2xpY2UoMCwgaW5kZXgpLCBuZXdJdGVtLCAuLi5hcnJheS5zbGljZShpbmRleCldO1xyXG59XHJcblxyXG5jb25zdCBtc3RwID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHF1ZXN0QmFuazogc3RhdGUuc3R1ZGVudFJlZHVjZXIucXVlc3Rpb25zLFxyXG4gICAgc3R1ZGVudF9yZWNvcmQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLnVzZXIucHJvZ3Jlc3MsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobXN0cCkodGVzdF9wYWdlMik7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29ubmVjdCIsIlRvcEJhciIsIlBvcE1vZGFsIiwibXlRdWVzdGlvbnMiLCJzdWJqZWN0IiwiYXV0aG9yIiwibW9kZWwiLCJxdWVzdGlvbiIsInF1ZXN0IiwiaW1hZ2UiLCJxdWUiLCJvcHRpb25zIiwib3B0aW9uIiwiY29ycmVjdF9hbnMiLCJtYXJrcyIsImRpZmZpY3VsdHkiLCJzYXZlUHJvZ3Jlc3MiLCJzY29yZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidGVzdF9wYWdlMiIsInByb3BzIiwiZGF0YSIsImFycmF5b2ZOdWxscyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsInRvdGFsIiwiYW5zd2VyZWQiLCJ1bmFuc3dlcmVkIiwibWFya2VkIiwiY29ycmVjdCIsImluY29ycmVjdCIsImNsaWNrZWRBbnNMaXN0IiwiY29ycmVjdEFuc0xpc3QiLCJnZXRJdGVtIiwicGFyc2UiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiYWN0aXZlUSIsInNldEFjdGl2ZVEiLCJjbGlja2VkT3B0aW9uIiwic2V0Q2xpY2tlZE9wdGlvbiIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImFkZFRvQW5zd2VyZWQiLCJhbnN3ZXJlZFF1ZXN0IiwiaW5kZXhPZiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWRkVG9DbGlja2VkIiwidmFsdWUiLCJjbGlja2VkTGlzdCIsImFkZFRvUmVzdWx0IiwiY2xpY2tlZCIsImNvcnJlY3RBcnJheSIsImluY29ycmVjdEFycmF5Iiwic3BsaWNlIiwib25PcHRpb25DbGljayIsImUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjbGlja2VkQW5zd2VyIiwiaW5uZXJIVE1MIiwidG9Mb3dlckNhc2UiLCJjb3JyZWN0QW5zIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJvbkZpbmlzaENsaWNrIiwibnVtYmVyT2ZDb3JyZWN0cyIsImFsZXJ0IiwiY3VycmVudFF1ZXN0aW9uIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJpbmNsdWRlcyIsImVyciIsImFkZEFmdGVyIiwiYXJyYXkiLCJuZXdJdGVtIiwic2xpY2UiLCJtc3RwIiwic3RhdGUiLCJxdWVzdEJhbmsiLCJzdHVkZW50UmVkdWNlciIsInF1ZXN0aW9ucyIsInN0dWRlbnRfcmVjb3JkIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=