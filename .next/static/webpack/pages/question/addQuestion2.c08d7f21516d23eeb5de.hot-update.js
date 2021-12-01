"use strict";
self["webpackHotUpdate_N_E"]("pages/question/addQuestion2",{

/***/ "./pages/question/addQuestion2.js":
/*!****************************************!*\
  !*** ./pages/question/addQuestion2.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\question\\addQuestion2.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var addQuestion2 = function addQuestion2(props) {
  _s();

  console.log("path", _api_mypaths__WEBPACK_IMPORTED_MODULE_7__.default);
  var stored_teacher;
  var initialValues = {
    subject: "Science",
    author: "",
    "class": [],
    model: "All-Text",
    //Other images
    question: {
      quest: {
        image: "",
        que: ""
      },
      options: [{
        image: "",
        option: "A"
      }, {
        image: "",
        option: "B"
      }, {
        image: "",
        option: "C"
      }, {
        image: "",
        option: "D"
      }],
      correct_ans: "A",
      marks: 0
    },
    year: 2021,
    difficulty: "Easy" //easy, medium ,hard

  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialValues),
      newQuestion = _useState[0],
      setQuestion = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    stored_teacher = JSON.parse(localStorage.getItem("teacher")).teacher_name;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      author: stored_teacher
    }));
  }, []);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(); //   function validateForm() {
  //     return (
  //       newQuestion.question.quest.length > 0 &&
  //       newQuestion.question.correct_ans.length > 0
  //     );
  //   }

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value; // console.log("name of field :", name);

    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  };

  var addOptions = function addOptions(e, index) {
    var tempArray = newQuestion.question.options;
    tempArray[index].option = e.target.value;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
        options: tempArray
      })
    }));
  };

  function onSubmitQuestion() {
    return _onSubmitQuestion.apply(this, arguments);
  }

  function _onSubmitQuestion() {
    _onSubmitQuestion = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var resposne, message;
      return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("".concat(_api_mypaths__WEBPACK_IMPORTED_MODULE_7__.default, "/addQuestion"), newQuestion);

            case 3:
              resposne = _context.sent;
              _context.next = 6;
              return resposne.data;

            case 6:
              message = _context.sent;
              console.log("message", message);
              setQuestion(_objectSpread(_objectSpread({}, initialValues), {}, {
                subject: newQuestion.subject,
                author: newQuestion.author
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));
    return _onSubmitQuestion.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "row gx-0",
    style: {
      backgroundColor: "#d1d1d1"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "col-10 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "simple-link",
        style: {
          position: "absolute",
          top: 5,
          right: 10,
          cursor: "pointer"
        },
        onClick: function onClick() {
          return router.push("/");
        },
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold mb-3",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
            name: "subject",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Science",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Mathematics",
              children: "Mathematics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "text",
            defaultValue: newQuestion.author,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
            name: "model",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "All-Text",
              children: "All-Text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Image-Question-Text-Options",
              children: "Image-Question-Text-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Text-Question-Image-Options",
              children: "Text-Question-Image-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Combined",
              children: "Combined"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "number",
            name: "year",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
            name: "difficulty",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Easy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Easy",
              children: "Easy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          style: {
            backgroundColor: "honeydew",
            padding: "5px",
            borderRadius: 4
          },
          size: "lg",
          controlId: "quest",
          children: [newQuestion.model == "Image-Question-Text-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
              children: "Question Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Question Text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            style: {
              maxHeight: 300
            },
            contentEditable: true,
            type: "text",
            value: newQuestion.question.quest.que,
            onChange: function onChange(e) {
              setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
                question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
                  quest: e.target.value
                })
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
              children: "Option A Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Option A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "text",
            value: newQuestion.question.options[0].option,
            onChange: function onChange(e) {
              return addOptions(e, 0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Option B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "text",
            value: newQuestion.question.options[1].option,
            onChange: function onChange(e) {
              return addOptions(e, 1);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Option C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "text",
            value: newQuestion.question.options[2].option,
            onChange: function onChange(e) {
              return addOptions(e, 2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Option D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            type: "text",
            value: newQuestion.question.options[3].option,
            onChange: function onChange(e) {
              return addOptions(e, 3);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "correct_ans",
          style: {
            color: "#32a852"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Label, {
            children: "Correct Answer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
            className: "form-select",
            style: {
              backgroundColor: "honeydew"
            },
            "aria-label": "Default select example",
            onChange: function onChange(e) {
              setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
                question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
                  correct_ans: e.target.value
                })
              }));
            },
            defaultValue: newQuestion.question.options[0],
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[0].option,
              children: newQuestion.question.options[0].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[1].option,
              children: newQuestion.question.options[1].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[2].option,
              children: newQuestion.question.options[2].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[3].option,
              children: newQuestion.question.options[3].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
          block: "true",
          className: "mt-4 mb-5" // type="submit" (This is not allowing action to work properly)
          // disabled={!validateForm()}
          ,
          onClick: onSubmitQuestion,
          children: "Submit Question"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


_s(addQuestion2, "EYnj4a8B0pJqQhdKAFKimgWsr9A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (addQuestion2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24yLmMwOGQ3ZjIxNTE2ZDIzZWViNWRlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzlCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CSixpREFBcEI7QUFDQSxNQUFJSyxjQUFKO0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxJQUFBQSxPQUFPLEVBQUUsU0FEVztBQUVwQkMsSUFBQUEsTUFBTSxFQUFFLEVBRlk7QUFHcEIsYUFBTyxFQUhhO0FBSXBCQyxJQUFBQSxLQUFLLEVBQUUsVUFKYTtBQUlEO0FBQ25CQyxJQUFBQSxRQUFRLEVBQUU7QUFDUkMsTUFBQUEsS0FBSyxFQUFFO0FBQUVDLFFBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFFBQUFBLEdBQUcsRUFBRTtBQUFsQixPQURDO0FBRVJDLE1BQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUVGLFFBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLFFBQUFBLE1BQU0sRUFBRTtBQUFyQixPQURPLEVBRVA7QUFBRUgsUUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsUUFBQUEsTUFBTSxFQUFFO0FBQXJCLE9BRk8sRUFHUDtBQUFFSCxRQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxRQUFBQSxNQUFNLEVBQUU7QUFBckIsT0FITyxFQUlQO0FBQUVILFFBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLFFBQUFBLE1BQU0sRUFBRTtBQUFyQixPQUpPLENBRkQ7QUFRUkMsTUFBQUEsV0FBVyxFQUFFLEdBUkw7QUFTUkMsTUFBQUEsS0FBSyxFQUFFO0FBVEMsS0FMVTtBQWdCcEJDLElB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ZUUsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWVzdGlvbi9hZGRRdWVzdGlvbjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwiLi4vYXBpL215cGF0aHNcIjtcclxuXHJcbmNvbnN0IGFkZFF1ZXN0aW9uMiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicGF0aFwiLCBwYXRoKTtcclxuICB2YXIgc3RvcmVkX3RlYWNoZXI7XHJcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcclxuICAgIHN1YmplY3Q6IFwiU2NpZW5jZVwiLFxyXG4gICAgYXV0aG9yOiBcIlwiLFxyXG4gICAgY2xhc3M6IFtdLFxyXG4gICAgbW9kZWw6IFwiQWxsLVRleHRcIiwgLy9PdGhlciBpbWFnZXNcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiB7IGltYWdlOiBcIlwiLCBxdWU6IFwiXCIgfSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJBXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQlwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkNcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJEXCIgfSxcclxuICAgICAgXSxcclxuICAgICAgY29ycmVjdF9hbnM6IFwiQVwiLFxyXG4gICAgICBtYXJrczogMCxcclxuICAgIH0sXHJcbiAgICB5ZWFyOiAyMDIxLFxyXG4gICAgZGlmZmljdWx0eTogXCJFYXN5XCIsIC8vZWFzeSwgbWVkaXVtICxoYXJkXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW25ld1F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWVzKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3RvcmVkX3RlYWNoZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlclwiKSkudGVhY2hlcl9uYW1lO1xyXG4gICAgc2V0UXVlc3Rpb24oeyAuLi5uZXdRdWVzdGlvbiwgYXV0aG9yOiBzdG9yZWRfdGVhY2hlciB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAvLyAgICAgcmV0dXJuIChcclxuICAvLyAgICAgICBuZXdRdWVzdGlvbi5xdWVzdGlvbi5xdWVzdC5sZW5ndGggPiAwICYmXHJcbiAgLy8gICAgICAgbmV3UXVlc3Rpb24ucXVlc3Rpb24uY29ycmVjdF9hbnMubGVuZ3RoID4gMFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfVxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5hbWUgb2YgZmllbGQgOlwiLCBuYW1lKTtcclxuICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRPcHRpb25zID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zO1xyXG4gICAgdGVtcEFycmF5W2luZGV4XS5vcHRpb24gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgIHF1ZXN0aW9uOiB7IC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLCBvcHRpb25zOiB0ZW1wQXJyYXkgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0UXVlc3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb3NuZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cGF0aH0vYWRkUXVlc3Rpb25gLCBuZXdRdWVzdGlvbik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXNwb3NuZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAuLi5pbml0aWFsVmFsdWVzLFxyXG4gICAgICAgIHN1YmplY3Q6IG5ld1F1ZXN0aW9uLnN1YmplY3QsXHJcbiAgICAgICAgYXV0aG9yOiBuZXdRdWVzdGlvbi5hdXRob3IsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneC0wXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNkMWQxZDFcIiB9fT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5ldyBRdWVzdGlvbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXQtNSBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlLWxpbmtcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiA1LCByaWdodDogMTAsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBIb21lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSBmcy0zIGZ3LWJvbGQgbWItM1wiPlxyXG4gICAgICAgICAgQWRkIE5ldyBRdWVzdGlvblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgc2l6ZT1cImxnXCIgY29udHJvbElkPVwidGVhY2hlck5hbWVcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+U3ViamVjdDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJTY2llbmNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXRoZW1hdGljc1wiPk1hdGhlbWF0aWNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdlbmVyYWwgS25vd2xlZGdlXCI+R2VuZXJhbCBLbm93bGVkZ2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2NpZW5jZVwiPlNjaWVuY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRW5nbGlzaFwiPkVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF1dGhvcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25ld1F1ZXN0aW9uLmF1dGhvcn1cclxuICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cIm1vZGVsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk1vZGVsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1vZGVsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGwtVGV4dFwiPkFsbC1UZXh0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkltYWdlLVF1ZXN0aW9uLVRleHQtT3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgSW1hZ2UtUXVlc3Rpb24tVGV4dC1PcHRpb25zXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRleHQtUXVlc3Rpb24tSW1hZ2UtT3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNvbWJpbmVkXCI+Q29tYmluZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwieWVhclwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5ZZWFyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInllYXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJkaWZmaWN1bHR5XCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkRpZmZpY3VsdHk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiZGlmZmljdWx0eVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiRWFzeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRWFzeVwiPkVhc3k8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhcmRcIj5IYXJkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjaG9sYXJcIj5TY2hvbGFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cInF1ZXN0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ld1F1ZXN0aW9uLm1vZGVsID09IFwiSW1hZ2UtUXVlc3Rpb24tVGV4dC1PcHRpb25zXCIgfHxcclxuICAgICAgICAgICAgbmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJDb21iaW5lZFwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5RdWVzdGlvbiBJbWFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlF1ZXN0aW9uIFRleHQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDMwMCB9fVxyXG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ucXVlc3QucXVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IHsgLi4ubmV3UXVlc3Rpb24ucXVlc3Rpb24sIHF1ZXN0OiBlLnRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJvcHRpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZlM2ZiXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIlRleHQtUXVlc3Rpb24tSW1hZ2UtT3B0aW9uc1wiIHx8XHJcbiAgICAgICAgICAgIG5ld1F1ZXN0aW9uLm1vZGVsID09IFwiQ29tYmluZWRcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEEgSW1hZ2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIiB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmUzZmJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAxKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJvcHRpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZlM2ZiXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBDPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzJdLm9wdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZTNmYlwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gRDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDMpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cImNvcnJlY3RfYW5zXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMyYTg1MlwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkNvcnJlY3QgQW5zd2VyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJob25leWRld1wiIH19XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5uZXdRdWVzdGlvbi5xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0X2FuczogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMF0ub3B0aW9ufT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdLm9wdGlvbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzFdLm9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1sxXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1syXS5vcHRpb259PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbM10ub3B0aW9ufT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzNdLm9wdGlvbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgbWItNVwiXHJcbiAgICAgICAgICAgIC8vIHR5cGU9XCJzdWJtaXRcIiAoVGhpcyBpcyBub3QgYWxsb3dpbmcgYWN0aW9uIHRvIHdvcmsgcHJvcGVybHkpXHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkPXshdmFsaWRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0UXVlc3Rpb259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1Ym1pdCBRdWVzdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIHsvKiA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBzaW1wbGUtbGluayBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW4vbG9naW5UZWFjaGVyXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFscmVhZHkgcmVnaXN0ZXJlZCwgZ28gdG8gTG9naW5cclxuICAgICAgICA8L3A+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8vIGNvbnN0IG1kdHAgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbi8vICAgdGVhY2hlckxvZ2luSGFuZGxlcjogKGRhdGEpID0+IGRpc3BhdGNoKHVzZXJMb2dpbihkYXRhKSksXHJcbi8vIH0pO1xyXG4vLyBjb25zdCBtc3RwID0gKHN0YXRlKSA9PiAoe1xyXG4vLyAgIHN0dWRlbnQ6IHN0YXRlLnN0dWRlbnRSZWR1Y2VyLFxyXG4vLyB9KTtcclxuZXhwb3J0IGRlZmF1bHQgYWRkUXVlc3Rpb24yO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJwYXRoIiwiYWRkUXVlc3Rpb24yIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RvcmVkX3RlYWNoZXIiLCJpbml0aWFsVmFsdWVzIiwic3ViamVjdCIsImF1dGhvciIsIm1vZGVsIiwicXVlc3Rpb24iLCJxdWVzdCIsImltYWdlIiwicXVlIiwib3B0aW9ucyIsIm9wdGlvbiIsImNvcnJlY3RfYW5zIiwibWFya3MiLCJ5ZWFyIiwiZGlmZmljdWx0eSIsIm5ld1F1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGVhY2hlcl9uYW1lIiwicm91dGVyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImFkZE9wdGlvbnMiLCJlIiwiaW5kZXgiLCJ0ZW1wQXJyYXkiLCJvblN1Ym1pdFF1ZXN0aW9uIiwicG9zdCIsInJlc3Bvc25lIiwiZGF0YSIsIm1lc3NhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY3Vyc29yIiwicHVzaCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXhIZWlnaHQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=