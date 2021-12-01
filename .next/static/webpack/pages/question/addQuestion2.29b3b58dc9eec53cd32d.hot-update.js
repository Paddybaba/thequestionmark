self["webpackHotUpdate_N_E"]("pages/question/addQuestion2",{

/***/ "./pages/question/addQuestion2.js":
/*!****************************************!*\
  !*** ./pages/question/addQuestion2.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-file-resizer */ "./node_modules/react-image-file-resizer/build/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\question\\addQuestion2.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








 //// Resize image before uploading



var resizeFile = function resizeFile(file) {
  return new Promise(function (resolve, reject) {
    react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8___default().imageFileResizer(file, 600, 400, "JPEG", 100, 0, function (uri) {
      resolve(uri);
    }, "file");
  });
};

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "row gx-0",
    style: {
      backgroundColor: "#d1d1d1"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {
        children: "New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "col-10 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
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
        lineNumber: 103,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold mb-3",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
            name: "subject",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Science",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Mathematics",
              children: "Mathematics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            defaultValue: newQuestion.author,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
            name: "model",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "All-Text",
              children: "All-Text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Image-Question-Text-Options",
              children: "Image-Question-Text-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Text-Question-Image-Options",
              children: "Text-Question-Image-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Combined",
              children: "Combined"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "number",
            name: "year",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
            name: "difficulty",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Easy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Easy",
              children: "Easy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          style: {
            backgroundColor: "honeydew",
            padding: "5px",
            borderRadius: 4
          },
          size: "lg",
          controlId: "quest",
          children: [newQuestion.model == "Image-Question-Text-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
              children: "Question Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Question Text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
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
            lineNumber: 197,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
              children: "Option A Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[0].option,
            onChange: function onChange(e) {
              return addOptions(e, 0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          size: "lg",
          controlId: "option",
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
              children: "Option A Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[1].option,
            onChange: function onChange(e) {
              return addOptions(e, 1);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
              children: "Option A Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[2].option,
            onChange: function onChange(e) {
              return addOptions(e, 2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
              children: "Option A Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[3].option,
            onChange: function onChange(e) {
              return addOptions(e, 3);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "correct_ans",
          style: {
            color: "#32a852"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Correct Answer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[0].option,
              children: newQuestion.question.options[0].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[1].option,
              children: newQuestion.question.options[1].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[2].option,
              children: newQuestion.question.options[2].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[3].option,
              children: newQuestion.question.options[3].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
          block: "true",
          className: "mt-4 mb-5" // type="submit" (This is not allowing action to work properly)
          // disabled={!validateForm()}
          ,
          onClick: onSubmitQuestion,
          children: "Submit Question"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
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


/***/ }),

/***/ "./node_modules/react-image-file-resizer/build/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-image-file-resizer/build/index.js ***!
  \**************************************************************/
/***/ (function(module) {

(()=>{"use strict";var e={d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.r(t),e.d(t,{default:()=>n});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,r=[{key:"changeHeightWidth",value:function(e,t,a,r,n,o){return a>r&&(e=Math.round(e*r/a),a=r),e>t&&(a=Math.round(a*t/e),e=t),n&&a<n&&(e=Math.round(e*n/a),a=n),o&&e<o&&(a=Math.round(a*o/e),e=o),{height:e,width:a}}},{key:"resizeAndRotateImage",value:function(e,t,a,r,n){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,h=i/100,g=document.createElement("canvas"),u=e.width,d=e.height,c=this.changeHeightWidth(d,a,u,t,r,n);!l||90!==l&&270!==l?(g.width=c.width,g.height=c.height):(g.width=c.height,g.height=c.width),u=c.width,d=c.height;var s=g.getContext("2d");return s.fillStyle="rgba(0, 0, 0, 0)",s.fillRect(0,0,u,d),l&&(s.rotate(l*Math.PI/180),90===l?s.translate(0,-g.width):180===l?s.translate(-g.width,-g.height):270===l?s.translate(-g.height,0):0!==l&&360!==l||s.translate(0,0)),s.drawImage(e,0,0,u,d),g.toDataURL("image/".concat(o),h)}},{key:"b64toByteArrays",value:function(e,t){t=t||"image/jpeg";for(var a=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],n=0;n<a.length;n+=512){for(var o=a.slice(n,n+512),i=new Array(o.length),l=0;l<o.length;l++)i[l]=o.charCodeAt(l);var h=new Uint8Array(i);r.push(h)}return r}},{key:"b64toBlob",value:function(e,t){var a=this.b64toByteArrays(e,t);return new Blob(a,{type:t,lastModified:new Date})}},{key:"b64toFile",value:function(e,t,a){var r=this.b64toByteArrays(e,a);return new File(r,t,{type:a,lastModified:new Date})}},{key:"createResizedImage",value:function(t,a,r,n,o,i,l){var h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,d=new FileReader;if(!t)throw Error("File Not Found!");if(t.type&&!t.type.includes("image"))throw Error("File Is NOT Image!");d.readAsDataURL(t),d.onload=function(){var c=new Image;c.src=d.result,c.onload=function(){var d=e.resizeAndRotateImage(c,a,r,g,u,n,o,i),s="image/".concat(n);switch(h){case"blob":var f=e.b64toBlob(d,s);l(f);break;case"base64":l(d);break;case"file":var b=t.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(n.toString()),v=e.b64toFile(d,b,s);l(v);break;default:l(d)}}},d.onerror=function(e){throw Error(e)}}}],null&&0,r&&a(t,r),e}();const n={imageFileResizer:function(e,t,a,n,o,i,l,h,g,u){return r.createResizedImage(e,t,a,n,o,i,l,h,g,u)}};module.exports=t})();

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24yLjI5YjNiNThkYzllZWM1M2NkMzJkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFEO0FBQUEsU0FDakIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkwsSUFBQUEsZ0ZBQUEsQ0FDRUUsSUFERixFQUVFLEdBRkYsRUFHRSxHQUhGLEVBSUUsTUFKRixFQUtFLEdBTEYsRUFNRSxDQU5GLEVBT0UsVUFBQ0ssR0FBRCxFQUFTO0FBQ1BILE1BQUFBLE9BQU8sQ0FBQ0csR0FBRCxDQUFQO0FBQ0QsS0FUSCxFQVVFLE1BVkY7QUFZRCxHQWJELENBRGlCO0FBQUEsQ0FBbkI7O0FBZ0JBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM5QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlosaURBQXBCO0FBQ0EsTUFBSWEsY0FBSjtBQUNBLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsSUFBQUEsT0FBTyxFQUFFLFNBRFc7QUFFcEJDLElBQUFBLE1BQU0sRUFBRSxFQUZZO0FBR3BCLGFBQU8sRUFIYTtBQUlwQkMsSUFBQUEsS0FBSyxFQUFFLFVBSmE7QUFJRDtBQUNuQkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLEtBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxRQUFBQSxHQUFHLEVBQUU7QUFBbEIsT0FEQztBQUVSQyxNQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUFFRixRQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxRQUFBQSxNQUFNLEVBQUU7QUFBckIsT0FETyxFQUVQO0FBQUVILFFBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFHLFFBQUFBLE1BQU0sRUFBRTtBQUFyQixPQUZPLEVBR1A7QUFBRUgsUUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUcsUUFBQUEsTUFBTSxFQUFFO0FBQXJCLE9BSE8sRUFJUDtBQUFFSCxRQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxRQUFBQSxNQUFNLEVBQUU7QUFBckIsT0FKTyxDQUZEO0FBUVJDLE1BQUFBLFdBQVcsRUFBRSxHQVJMO0FBU1JDLE1BQUFBLEtBQUssRUFBRTtBQVRDLEtBTFU7QUFnQnBCQyxJQUFBQSxJQUFJLEVBQUUsSUFoQmM7QUFpQnBCQyxJQUFBQSxVQUFVLEVBQUUsTUFqQlEsQ0FpQkE7O0FBakJBLEdBQXRCOztBQW9CQSxrQkFBbUNqQywrQ0FBUSxDQUFDb0IsYUFBRCxDQUEzQztBQUFBLE1BQU9jLFdBQVA7QUFBQSxNQUFvQkMsV0FBcEI7O0FBQ0FwQyxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZG9CLElBQUFBLGNBQWMsR0FBR2lCLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWCxFQUE0Q0MsWUFBN0Q7QUFDQUwsSUFBQUEsV0FBVyxpQ0FBTUQsV0FBTjtBQUFtQlosTUFBQUEsTUFBTSxFQUFFSDtBQUEzQixPQUFYO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLE1BQU1zQixNQUFNLEdBQUdwQyxzREFBUyxFQUF4QixDQTdCOEIsQ0ErQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNcUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFDbkMsd0JBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsUUFBUUMsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFFBQWNDLEtBQWQsaUJBQWNBLEtBQWQsQ0FEbUMsQ0FFbkM7O0FBQ0FYLElBQUFBLFdBQVcsaUNBQ05ELFdBRE0sdUlBRVJXLElBRlEsRUFFREMsS0FGQyxHQUFYO0FBSUQsR0FQRDs7QUFTQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUMvQixRQUFNQyxTQUFTLEdBQUdoQixXQUFXLENBQUNWLFFBQVosQ0FBcUJJLE9BQXZDO0FBQ0FzQixJQUFBQSxTQUFTLENBQUNELEtBQUQsQ0FBVCxDQUFpQnBCLE1BQWpCLEdBQTBCbUIsQ0FBQyxDQUFDSixNQUFGLENBQVNFLEtBQW5DO0FBQ0FYLElBQUFBLFdBQVcsaUNBQ05ELFdBRE07QUFFVFYsTUFBQUEsUUFBUSxrQ0FBT1UsV0FBVyxDQUFDVixRQUFuQjtBQUE2QkksUUFBQUEsT0FBTyxFQUFFc0I7QUFBdEM7QUFGQyxPQUFYO0FBSUQsR0FQRDs7QUE5QzhCLFdBdURmQyxnQkF2RGU7QUFBQTtBQUFBOztBQUFBO0FBQUEsb1JBdUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRTJCL0MsaURBQUEsV0FBY0UsaURBQWQsbUJBQWtDNEIsV0FBbEMsQ0FGM0I7O0FBQUE7QUFFVW1CLGNBQUFBLFFBRlY7QUFBQTtBQUFBLHFCQUcwQkEsUUFBUSxDQUFDQyxJQUhuQzs7QUFBQTtBQUdVQyxjQUFBQSxPQUhWO0FBSUl0QyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCcUMsT0FBdkI7QUFDQXBCLGNBQUFBLFdBQVcsaUNBQ05mLGFBRE07QUFFVEMsZ0JBQUFBLE9BQU8sRUFBRWEsV0FBVyxDQUFDYixPQUZaO0FBR1RDLGdCQUFBQSxNQUFNLEVBQUVZLFdBQVcsQ0FBQ1o7QUFIWCxpQkFBWDtBQUxKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV0lMLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQUlxQyxPQUFoQjs7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXZEOEI7QUFBQTtBQUFBOztBQXNFOUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFO0FBQW5CLEtBQWpDO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFDLGFBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsUUFBUSxFQUFFLFVBQVo7QUFBd0JDLFVBQUFBLEdBQUcsRUFBRSxDQUE3QjtBQUFnQ0MsVUFBQUEsS0FBSyxFQUFFLEVBQXZDO0FBQTJDQyxVQUFBQSxNQUFNLEVBQUU7QUFBbkQsU0FGVDtBQUdFLGVBQU8sRUFBRTtBQUFBLGlCQUFNbkIsTUFBTSxDQUFDb0IsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFO0FBQUssaUJBQVMsRUFBQyw4Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBV0UsOERBQUMsMERBQUQ7QUFBQSxnQ0FDRSw4REFBQyxnRUFBRDtBQUFZLGNBQUksRUFBQyxJQUFqQjtBQUFzQixtQkFBUyxFQUFDLGFBQWhDO0FBQUEsa0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsU0FEUDtBQUVFLHFCQUFTLEVBQUMsYUFGWjtBQUdFLDBCQUFXLHdCQUhiO0FBSUUsb0JBQVEsRUFBRW5CLGlCQUpaO0FBS0Usd0JBQVksRUFBQyxTQUxmO0FBQUEsb0NBT0U7QUFBUSxtQkFBSyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRTtBQUFRLG1CQUFLLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFRLG1CQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQVVFO0FBQVEsbUJBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFnQkUsOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDLE1BQXRCO0FBQTZCLGNBQUksRUFBQyxJQUFsQztBQUF1QyxtQkFBUyxFQUFDLFFBQWpEO0FBQUEsa0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxrRUFBRDtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLHdCQUFZLEVBQUVSLFdBQVcsQ0FBQ1osTUFGNUI7QUFHRSxvQkFBUTtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQXdCRSw4REFBQyxnRUFBRDtBQUFZLG1CQUFTLEVBQUMsTUFBdEI7QUFBNkIsY0FBSSxFQUFDLElBQWxDO0FBQXVDLG1CQUFTLEVBQUMsT0FBakQ7QUFBQSxrQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxPQURQO0FBRUUscUJBQVMsRUFBQyxhQUZaO0FBR0UsMEJBQVcsd0JBSGI7QUFJRSxvQkFBUSxFQUFFb0IsaUJBSlo7QUFBQSxvQ0FNRTtBQUFRLG1CQUFLLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQVEsbUJBQUssRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVVFO0FBQVEsbUJBQUssRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQWFFO0FBQVEsbUJBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGLGVBMENFLDhEQUFDLGdFQUFEO0FBQVksbUJBQVMsRUFBQyxNQUF0QjtBQUE2QixjQUFJLEVBQUMsSUFBbEM7QUFBdUMsbUJBQVMsRUFBQyxNQUFqRDtBQUFBLGtDQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsa0VBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBSyxFQUFFUixXQUFXLENBQUNGLElBSHJCO0FBSUUsb0JBQVEsRUFBRVU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0YsZUFtREUsOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDLE1BQXRCO0FBQTZCLGNBQUksRUFBQyxJQUFsQztBQUF1QyxtQkFBUyxFQUFDLFlBQWpEO0FBQUEsa0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsWUFEUDtBQUVFLHFCQUFTLEVBQUMsYUFGWjtBQUdFLDBCQUFXLHdCQUhiO0FBSUUsb0JBQVEsRUFBRUEsaUJBSlo7QUFLRSx3QkFBWSxFQUFDLE1BTGY7QUFBQSxvQ0FPRTtBQUFRLG1CQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQVEsbUJBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBUSxtQkFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUFRLG1CQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5ERixlQWtFRSw4REFBQyxnRUFBRDtBQUNFLG1CQUFTLEVBQUMsTUFEWjtBQUVFLGVBQUssRUFBRTtBQUNMYyxZQUFBQSxlQUFlLEVBQUUsVUFEWjtBQUVMTSxZQUFBQSxPQUFPLEVBQUUsS0FGSjtBQUdMQyxZQUFBQSxZQUFZLEVBQUU7QUFIVCxXQUZUO0FBT0UsY0FBSSxFQUFDLElBUFA7QUFRRSxtQkFBUyxFQUFDLE9BUlo7QUFBQSxxQkFVRzdCLFdBQVcsQ0FBQ1gsS0FBWixJQUFxQiw2QkFBckIsSUFDRFcsV0FBVyxDQUFDWCxLQUFaLElBQXFCLFVBRHBCLGdCQUVDO0FBQUEsb0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFPLHVCQUFTLEVBQUMsYUFBakI7QUFBK0Isa0JBQUksRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxHQU1HLElBaEJOLGVBaUJFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRixlQWtCRSw4REFBQyxrRUFBRDtBQUNFLGlCQUFLLEVBQUU7QUFBRXlDLGNBQUFBLFNBQVMsRUFBRTtBQUFiLGFBRFQ7QUFFRSwyQkFBZSxNQUZqQjtBQUdFLGdCQUFJLEVBQUMsTUFIUDtBQUlFLGlCQUFLLEVBQUU5QixXQUFXLENBQUNWLFFBQVosQ0FBcUJDLEtBQXJCLENBQTJCRSxHQUpwQztBQUtFLG9CQUFRLEVBQUUsa0JBQUNxQixDQUFELEVBQU87QUFDZmIsY0FBQUEsV0FBVyxpQ0FDTkQsV0FETTtBQUVUVixnQkFBQUEsUUFBUSxrQ0FBT1UsV0FBVyxDQUFDVixRQUFuQjtBQUE2QkMsa0JBQUFBLEtBQUssRUFBRXVCLENBQUMsQ0FBQ0osTUFBRixDQUFTRTtBQUE3QztBQUZDLGlCQUFYO0FBSUQ7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEVGLGVBaUdFLDhEQUFDLGdFQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLElBRlA7QUFHRSxtQkFBUyxFQUFDLFFBSFo7QUFJRSxlQUFLLEVBQUU7QUFDTFUsWUFBQUEsZUFBZSxFQUFFLFNBRFo7QUFFTE0sWUFBQUEsT0FBTyxFQUFFLEtBRko7QUFHTEMsWUFBQUEsWUFBWSxFQUFFO0FBSFQsV0FKVDtBQUFBLHFCQVVHN0IsV0FBVyxDQUFDWCxLQUFaLElBQXFCLDZCQUFyQixJQUNEVyxXQUFXLENBQUNYLEtBQVosSUFBcUIsVUFEcEIsZ0JBRUM7QUFBQSxvQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU8sdUJBQVMsRUFBQyxhQUFqQjtBQUErQixrQkFBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELEdBTUcsSUFoQk4sZUFpQkUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBa0JFLDhEQUFDLGtFQUFEO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsaUJBQUssRUFBRVcsV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFGekM7QUFHRSxvQkFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLHFCQUFPRCxVQUFVLENBQUNDLENBQUQsRUFBSSxDQUFKLENBQWpCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakdGLGVBeUhFLDhEQUFDLGdFQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsZUFBSyxFQUFFO0FBQ0xRLFlBQUFBLGVBQWUsRUFBRSxTQURaO0FBRUxNLFlBQUFBLE9BQU8sRUFBRSxLQUZKO0FBR0xDLFlBQUFBLFlBQVksRUFBRTtBQUhULFdBRlQ7QUFPRSxjQUFJLEVBQUMsSUFQUDtBQVFFLG1CQUFTLEVBQUMsUUFSWjtBQUFBLHFCQVVHN0IsV0FBVyxDQUFDWCxLQUFaLElBQXFCLDZCQUFyQixJQUNEVyxXQUFXLENBQUNYLEtBQVosSUFBcUIsVUFEcEIsZ0JBRUM7QUFBQSxvQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU8sdUJBQVMsRUFBQyxhQUFqQjtBQUErQixrQkFBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELEdBTUcsSUFoQk4sZUFpQkUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBa0JFLDhEQUFDLGtFQUFEO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsaUJBQUssRUFBRVcsV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFGekM7QUFHRSxvQkFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLHFCQUFPRCxVQUFVLENBQUNDLENBQUQsRUFBSSxDQUFKLENBQWpCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekhGLGVBaUpFLDhEQUFDLGdFQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLElBRlA7QUFHRSxtQkFBUyxFQUFDLFFBSFo7QUFJRSxlQUFLLEVBQUU7QUFDTFEsWUFBQUEsZUFBZSxFQUFFLFNBRFo7QUFFTE0sWUFBQUEsT0FBTyxFQUFFLEtBRko7QUFHTEMsWUFBQUEsWUFBWSxFQUFFO0FBSFQsV0FKVDtBQUFBLHFCQVVHN0IsV0FBVyxDQUFDWCxLQUFaLElBQXFCLDZCQUFyQixJQUNEVyxXQUFXLENBQUNYLEtBQVosSUFBcUIsVUFEcEIsZ0JBRUM7QUFBQSxvQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU8sdUJBQVMsRUFBQyxhQUFqQjtBQUErQixrQkFBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELEdBTUcsSUFoQk4sZUFpQkUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBa0JFLDhEQUFDLGtFQUFEO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsaUJBQUssRUFBRVcsV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFGekM7QUFHRSxvQkFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLHFCQUFPRCxVQUFVLENBQUNDLENBQUQsRUFBSSxDQUFKLENBQWpCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakpGLGVBeUtFLDhEQUFDLGdFQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLElBRlA7QUFHRSxtQkFBUyxFQUFDLFFBSFo7QUFJRSxlQUFLLEVBQUU7QUFDTFEsWUFBQUEsZUFBZSxFQUFFLFNBRFo7QUFFTE0sWUFBQUEsT0FBTyxFQUFFLEtBRko7QUFHTEMsWUFBQUEsWUFBWSxFQUFFO0FBSFQsV0FKVDtBQUFBLHFCQVVHN0IsV0FBVyxDQUFDWCxLQUFaLElBQXFCLDZCQUFyQixJQUNEVyxXQUFXLENBQUNYLEtBQVosSUFBcUIsVUFEcEIsZ0JBRUM7QUFBQSxvQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU8sdUJBQVMsRUFBQyxhQUFqQjtBQUErQixrQkFBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELEdBTUcsSUFoQk4sZUFpQkUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBa0JFLDhEQUFDLGtFQUFEO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsaUJBQUssRUFBRVcsV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFGekM7QUFHRSxvQkFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLHFCQUFPRCxVQUFVLENBQUNDLENBQUQsRUFBSSxDQUFKLENBQWpCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBektGLGVBaU1FLDhEQUFDLGdFQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLElBRlA7QUFHRSxtQkFBUyxFQUFDLGFBSFo7QUFJRSxlQUFLLEVBQUU7QUFBRWlCLFlBQUFBLEtBQUssRUFBRTtBQUFULFdBSlQ7QUFBQSxrQ0FNRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQ0UscUJBQVMsRUFBQyxhQURaO0FBRUUsaUJBQUssRUFBRTtBQUFFVCxjQUFBQSxlQUFlLEVBQUU7QUFBbkIsYUFGVDtBQUdFLDBCQUFXLHdCQUhiO0FBSUUsb0JBQVEsRUFBRSxrQkFBQ1IsQ0FBRCxFQUFPO0FBQ2ZiLGNBQUFBLFdBQVcsaUNBQ05ELFdBRE07QUFFVFYsZ0JBQUFBLFFBQVEsa0NBQ0hVLFdBQVcsQ0FBQ1YsUUFEVDtBQUVOTSxrQkFBQUEsV0FBVyxFQUFFa0IsQ0FBQyxDQUFDSixNQUFGLENBQVNFO0FBRmhCO0FBRkMsaUJBQVg7QUFPRCxhQVpIO0FBYUUsd0JBQVksRUFBRVosV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixDQWJoQjtBQUFBLG9DQWVFO0FBQVEsbUJBQUssRUFBRU0sV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFBL0M7QUFBQSx3QkFDR0ssV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0M7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRixlQWtCRTtBQUFRLG1CQUFLLEVBQUVLLFdBQVcsQ0FBQ1YsUUFBWixDQUFxQkksT0FBckIsQ0FBNkIsQ0FBN0IsRUFBZ0NDLE1BQS9DO0FBQUEsd0JBQ0dLLFdBQVcsQ0FBQ1YsUUFBWixDQUFxQkksT0FBckIsQ0FBNkIsQ0FBN0IsRUFBZ0NDO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEJGLGVBcUJFO0FBQVEsbUJBQUssRUFBRUssV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFBL0M7QUFBQSx3QkFDR0ssV0FBVyxDQUFDVixRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0M7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkYsZUF3QkU7QUFBUSxtQkFBSyxFQUFFSyxXQUFXLENBQUNWLFFBQVosQ0FBcUJJLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQyxNQUEvQztBQUFBLHdCQUNHSyxXQUFXLENBQUNWLFFBQVosQ0FBcUJJLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpNRixlQXFPRSw4REFBQyw0REFBRDtBQUNFLGVBQUssRUFBQyxNQURSO0FBRUUsbUJBQVMsRUFBQyxXQUZaLENBR0U7QUFDQTtBQUpGO0FBS0UsaUJBQU8sRUFBRXNCLGdCQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJPRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdRRCxDQTlVRCxFQStVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXBWTXBDO1VBNkJXVjs7O0FBd1RqQiwrREFBZVUsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1dBLE1BQU0sYUFBYSxPQUFPLFVBQVUsK0RBQStELHVCQUF1QixFQUFFLDBEQUEwRCw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxHQUFHLE1BQU0sZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLGNBQWMsY0FBYyxFQUFFLGlCQUFpQixhQUFhLGVBQWUsOEVBQThFLFNBQVMsUUFBUSxlQUFlLG9EQUFvRCwwSUFBMEksbUJBQW1CLEVBQUUscURBQXFELGtTQUFrUyxpSEFBaUgseUJBQXlCLDBSQUEwUixFQUFFLDBDQUEwQyxrQkFBa0Isc0VBQXNFLHVCQUF1QixXQUFXLFFBQVEscURBQXFELFdBQVcseUJBQXlCLHdCQUF3QixVQUFVLFVBQVUsRUFBRSxvQ0FBb0MsZ0NBQWdDLG1CQUFtQiw2QkFBNkIsR0FBRyxFQUFFLHNDQUFzQyxnQ0FBZ0MscUJBQXFCLDZCQUE2QixHQUFHLEVBQUUsdURBQXVELG1OQUFtTixxQ0FBcUMsdUVBQXVFLHVDQUF1QyxnQkFBZ0IsbUNBQW1DLG1FQUFtRSxVQUFVLGtDQUFrQyxLQUFLLE1BQU0sa0JBQWtCLE1BQU0saUhBQWlILEtBQUssTUFBTSxlQUFlLHVCQUF1QixpQkFBaUIsUUFBUSxDQUFtQixhQUFhLEdBQUcsU0FBUywrQ0FBK0MsbURBQW1ELGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWVzdGlvbi9hZGRRdWVzdGlvbjIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXIvYnVpbGQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwiLi4vYXBpL215cGF0aHNcIjtcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiO1xyXG5cclxuLy8vLyBSZXNpemUgaW1hZ2UgYmVmb3JlIHVwbG9hZGluZ1xyXG5jb25zdCByZXNpemVGaWxlID0gKGZpbGUpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxyXG4gICAgICBmaWxlLFxyXG4gICAgICA2MDAsXHJcbiAgICAgIDQwMCxcclxuICAgICAgXCJKUEVHXCIsXHJcbiAgICAgIDEwMCxcclxuICAgICAgMCxcclxuICAgICAgKHVyaSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodXJpKTtcclxuICAgICAgfSxcclxuICAgICAgXCJmaWxlXCJcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBhZGRRdWVzdGlvbjIgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInBhdGhcIiwgcGF0aCk7XHJcbiAgdmFyIHN0b3JlZF90ZWFjaGVyO1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICBzdWJqZWN0OiBcIlNjaWVuY2VcIixcclxuICAgIGF1dGhvcjogXCJcIixcclxuICAgIGNsYXNzOiBbXSxcclxuICAgIG1vZGVsOiBcIkFsbC1UZXh0XCIsIC8vT3RoZXIgaW1hZ2VzXHJcbiAgICBxdWVzdGlvbjoge1xyXG4gICAgICBxdWVzdDogeyBpbWFnZTogXCJcIiwgcXVlOiBcIlwiIH0sXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQVwiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkJcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJDXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiRFwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIkFcIixcclxuICAgICAgbWFya3M6IDAsXHJcbiAgICB9LFxyXG4gICAgeWVhcjogMjAyMSxcclxuICAgIGRpZmZpY3VsdHk6IFwiRWFzeVwiLCAvL2Vhc3ksIG1lZGl1bSAsaGFyZFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtuZXdRdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN0b3JlZF90ZWFjaGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJcIikpLnRlYWNoZXJfbmFtZTtcclxuICAgIHNldFF1ZXN0aW9uKHsgLi4ubmV3UXVlc3Rpb24sIGF1dGhvcjogc3RvcmVkX3RlYWNoZXIgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgLy8gICAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgbmV3UXVlc3Rpb24ucXVlc3Rpb24ucXVlc3QubGVuZ3RoID4gMCAmJlxyXG4gIC8vICAgICAgIG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLmNvcnJlY3RfYW5zLmxlbmd0aCA+IDBcclxuICAvLyAgICAgKTtcclxuICAvLyAgIH1cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJuYW1lIG9mIGZpZWxkIDpcIiwgbmFtZSk7XHJcbiAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkT3B0aW9ucyA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgdGVtcEFycmF5ID0gbmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9ucztcclxuICAgIHRlbXBBcnJheVtpbmRleF0ub3B0aW9uID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICBxdWVzdGlvbjogeyAuLi5uZXdRdWVzdGlvbi5xdWVzdGlvbiwgb3B0aW9uczogdGVtcEFycmF5IH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdFF1ZXN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9zbmUgPSBhd2FpdCBheGlvcy5wb3N0KGAke3BhdGh9L2FkZFF1ZXN0aW9uYCwgbmV3UXVlc3Rpb24pO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzcG9zbmUuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgICAgLi4uaW5pdGlhbFZhbHVlcyxcclxuICAgICAgICBzdWJqZWN0OiBuZXdRdWVzdGlvbi5zdWJqZWN0LFxyXG4gICAgICAgIGF1dGhvcjogbmV3UXVlc3Rpb24uYXV0aG9yLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3gtMFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZDFkMWQxXCIgfX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXcgUXVlc3Rpb248L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG10LTUgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZS1saW5rXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogNSwgcmlnaHQ6IDEwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSG9tZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2UgZnMtMyBmdy1ib2xkIG1iLTNcIj5cclxuICAgICAgICAgIEFkZCBOZXcgUXVlc3Rpb25cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInRlYWNoZXJOYW1lXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlN1YmplY3Q8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiU2NpZW5jZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWF0aGVtYXRpY3NcIj5NYXRoZW1hdGljczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHZW5lcmFsIEtub3dsZWRnZVwiPkdlbmVyYWwgS25vd2xlZGdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjaWVuY2VcIj5TY2llbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVuZ2xpc2hcIj5FbmdsaXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5BdXRob3I8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXdRdWVzdGlvbi5hdXRob3J9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJtb2RlbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5Nb2RlbDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtb2RlbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxsLVRleHRcIj5BbGwtVGV4dDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbWFnZS1RdWVzdGlvbi1UZXh0LU9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIEltYWdlLVF1ZXN0aW9uLVRleHQtT3B0aW9uc1xyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIFRleHQtUXVlc3Rpb24tSW1hZ2UtT3B0aW9uc1xyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb21iaW5lZFwiPkNvbWJpbmVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInllYXJcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+WWVhcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ5ZWFyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ueWVhcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5EaWZmaWN1bHR5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImRpZmZpY3VsdHlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkVhc3lcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVhc3lcIj5FYXN5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIYXJkXCI+SGFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2hvbGFyXCI+U2Nob2xhcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJob25leWRld1wiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJxdWVzdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkltYWdlLVF1ZXN0aW9uLVRleHQtT3B0aW9uc1wiIHx8XHJcbiAgICAgICAgICAgIG5ld1F1ZXN0aW9uLm1vZGVsID09IFwiQ29tYmluZWRcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UXVlc3Rpb24gSW1hZ2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIiB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5RdWVzdGlvbiBUZXh0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMDAgfX1cclxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7IC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLCBxdWVzdDogZS50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZTNmYlwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImltYWdlLWlucHV0XCIgdHlwZT1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEE8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMF0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAwKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZlM2ZiXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cIm9wdGlvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIlRleHQtUXVlc3Rpb24tSW1hZ2UtT3B0aW9uc1wiIHx8XHJcbiAgICAgICAgICAgIG5ld1F1ZXN0aW9uLm1vZGVsID09IFwiQ29tYmluZWRcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEEgSW1hZ2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIiB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1sxXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cIm9wdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmUzZmJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ld1F1ZXN0aW9uLm1vZGVsID09IFwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCIgfHxcclxuICAgICAgICAgICAgbmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJDb21iaW5lZFwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQSBJbWFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBDPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzJdLm9wdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZTNmYlwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImltYWdlLWlucHV0XCIgdHlwZT1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbM10ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJjb3JyZWN0X2Fuc1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMzMmE4NTJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5Db3JyZWN0IEFuc3dlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiB9fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24ucXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdF9hbnM6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdLm9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1sxXS5vcHRpb259PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl0ub3B0aW9ufT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzJdLm9wdGlvbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzNdLm9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IG1iLTVcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdFF1ZXN0aW9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXQgUXVlc3Rpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICB7LyogPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgc2ltcGxlLWxpbmsgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL2xvZ2luVGVhY2hlclwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbHJlYWR5IHJlZ2lzdGVyZWQsIGdvIHRvIExvZ2luXHJcbiAgICAgICAgPC9wPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4vLyBjb25zdCBtZHRwID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgIHRlYWNoZXJMb2dpbkhhbmRsZXI6IChkYXRhKSA9PiBkaXNwYXRjaCh1c2VyTG9naW4oZGF0YSkpLFxyXG4vLyB9KTtcclxuLy8gY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4gKHtcclxuLy8gICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlcixcclxuLy8gfSk7XHJcbmV4cG9ydCBkZWZhdWx0IGFkZFF1ZXN0aW9uMjtcclxuIiwiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KHQsYSk9Pntmb3IodmFyIHIgaW4gYSllLm8oYSxyKSYmIWUubyh0LHIpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLHtlbnVtZXJhYmxlOiEwLGdldDphW3JdfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSx0PXt9O2Z1bmN0aW9uIGEoZSx0KXtmb3IodmFyIGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIHI9dFthXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fWUucih0KSxlLmQodCx7ZGVmYXVsdDooKT0+bn0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSl9dmFyIHQscjtyZXR1cm4gdD1lLHI9W3trZXk6XCJjaGFuZ2VIZWlnaHRXaWR0aFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxhLHIsbixvKXtyZXR1cm4gYT5yJiYoZT1NYXRoLnJvdW5kKGUqci9hKSxhPXIpLGU+dCYmKGE9TWF0aC5yb3VuZChhKnQvZSksZT10KSxuJiZhPG4mJihlPU1hdGgucm91bmQoZSpuL2EpLGE9biksbyYmZTxvJiYoYT1NYXRoLnJvdW5kKGEqby9lKSxlPW8pLHtoZWlnaHQ6ZSx3aWR0aDphfX19LHtrZXk6XCJyZXNpemVBbmRSb3RhdGVJbWFnZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxhLHIsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOlwianBlZ1wiLGk9YXJndW1lbnRzLmxlbmd0aD42JiZ2b2lkIDAhPT1hcmd1bWVudHNbNl0/YXJndW1lbnRzWzZdOjEwMCxsPWFyZ3VtZW50cy5sZW5ndGg+NyYmdm9pZCAwIT09YXJndW1lbnRzWzddP2FyZ3VtZW50c1s3XTowLGg9aS8xMDAsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLHU9ZS53aWR0aCxkPWUuaGVpZ2h0LGM9dGhpcy5jaGFuZ2VIZWlnaHRXaWR0aChkLGEsdSx0LHIsbik7IWx8fDkwIT09bCYmMjcwIT09bD8oZy53aWR0aD1jLndpZHRoLGcuaGVpZ2h0PWMuaGVpZ2h0KTooZy53aWR0aD1jLmhlaWdodCxnLmhlaWdodD1jLndpZHRoKSx1PWMud2lkdGgsZD1jLmhlaWdodDt2YXIgcz1nLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gcy5maWxsU3R5bGU9XCJyZ2JhKDAsIDAsIDAsIDApXCIscy5maWxsUmVjdCgwLDAsdSxkKSxsJiYocy5yb3RhdGUobCpNYXRoLlBJLzE4MCksOTA9PT1sP3MudHJhbnNsYXRlKDAsLWcud2lkdGgpOjE4MD09PWw/cy50cmFuc2xhdGUoLWcud2lkdGgsLWcuaGVpZ2h0KToyNzA9PT1sP3MudHJhbnNsYXRlKC1nLmhlaWdodCwwKTowIT09bCYmMzYwIT09bHx8cy50cmFuc2xhdGUoMCwwKSkscy5kcmF3SW1hZ2UoZSwwLDAsdSxkKSxnLnRvRGF0YVVSTChcImltYWdlL1wiLmNvbmNhdChvKSxoKX19LHtrZXk6XCJiNjR0b0J5dGVBcnJheXNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJpbWFnZS9qcGVnXCI7Zm9yKHZhciBhPWF0b2IoZS50b1N0cmluZygpLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvKHBuZ3xqcGVnfGpwZ3x3ZWJwKTtiYXNlNjQsLyxcIlwiKSkscj1bXSxuPTA7bjxhLmxlbmd0aDtuKz01MTIpe2Zvcih2YXIgbz1hLnNsaWNlKG4sbis1MTIpLGk9bmV3IEFycmF5KG8ubGVuZ3RoKSxsPTA7bDxvLmxlbmd0aDtsKyspaVtsXT1vLmNoYXJDb2RlQXQobCk7dmFyIGg9bmV3IFVpbnQ4QXJyYXkoaSk7ci5wdXNoKGgpfXJldHVybiByfX0se2tleTpcImI2NHRvQmxvYlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGE9dGhpcy5iNjR0b0J5dGVBcnJheXMoZSx0KTtyZXR1cm4gbmV3IEJsb2IoYSx7dHlwZTp0LGxhc3RNb2RpZmllZDpuZXcgRGF0ZX0pfX0se2tleTpcImI2NHRvRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxhKXt2YXIgcj10aGlzLmI2NHRvQnl0ZUFycmF5cyhlLGEpO3JldHVybiBuZXcgRmlsZShyLHQse3R5cGU6YSxsYXN0TW9kaWZpZWQ6bmV3IERhdGV9KX19LHtrZXk6XCJjcmVhdGVSZXNpemVkSW1hZ2VcIix2YWx1ZTpmdW5jdGlvbih0LGEscixuLG8saSxsKXt2YXIgaD1hcmd1bWVudHMubGVuZ3RoPjcmJnZvaWQgMCE9PWFyZ3VtZW50c1s3XT9hcmd1bWVudHNbN106XCJiYXNlNjRcIixnPWFyZ3VtZW50cy5sZW5ndGg+OCYmdm9pZCAwIT09YXJndW1lbnRzWzhdP2FyZ3VtZW50c1s4XTpudWxsLHU9YXJndW1lbnRzLmxlbmd0aD45JiZ2b2lkIDAhPT1hcmd1bWVudHNbOV0/YXJndW1lbnRzWzldOm51bGwsZD1uZXcgRmlsZVJlYWRlcjtpZighdCl0aHJvdyBFcnJvcihcIkZpbGUgTm90IEZvdW5kIVwiKTtpZih0LnR5cGUmJiF0LnR5cGUuaW5jbHVkZXMoXCJpbWFnZVwiKSl0aHJvdyBFcnJvcihcIkZpbGUgSXMgTk9UIEltYWdlIVwiKTtkLnJlYWRBc0RhdGFVUkwodCksZC5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgYz1uZXcgSW1hZ2U7Yy5zcmM9ZC5yZXN1bHQsYy5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZD1lLnJlc2l6ZUFuZFJvdGF0ZUltYWdlKGMsYSxyLGcsdSxuLG8saSkscz1cImltYWdlL1wiLmNvbmNhdChuKTtzd2l0Y2goaCl7Y2FzZVwiYmxvYlwiOnZhciBmPWUuYjY0dG9CbG9iKGQscyk7bChmKTticmVhaztjYXNlXCJiYXNlNjRcIjpsKGQpO2JyZWFrO2Nhc2VcImZpbGVcIjp2YXIgYj10Lm5hbWUudG9TdHJpbmcoKS5yZXBsYWNlKC8ocG5nfGpwZWd8anBnfHdlYnApJC9pLFwiXCIpLmNvbmNhdChuLnRvU3RyaW5nKCkpLHY9ZS5iNjR0b0ZpbGUoZCxiLHMpO2wodik7YnJlYWs7ZGVmYXVsdDpsKGQpfX19LGQub25lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBFcnJvcihlKX19fV0sbnVsbCYmYSh0LnByb3RvdHlwZSxudWxsKSxyJiZhKHQsciksZX0oKTtjb25zdCBuPXtpbWFnZUZpbGVSZXNpemVyOmZ1bmN0aW9uKGUsdCxhLG4sbyxpLGwsaCxnLHUpe3JldHVybiByLmNyZWF0ZVJlc2l6ZWRJbWFnZShlLHQsYSxuLG8saSxsLGgsZyx1KX19O21vZHVsZS5leHBvcnRzPXR9KSgpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkZvcm0iLCJCdXR0b24iLCJheGlvcyIsInVzZVJvdXRlciIsInBhdGgiLCJSZXNpemVyIiwicmVzaXplRmlsZSIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlRmlsZVJlc2l6ZXIiLCJ1cmkiLCJhZGRRdWVzdGlvbjIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRfdGVhY2hlciIsImluaXRpYWxWYWx1ZXMiLCJzdWJqZWN0IiwiYXV0aG9yIiwibW9kZWwiLCJxdWVzdGlvbiIsInF1ZXN0IiwiaW1hZ2UiLCJxdWUiLCJvcHRpb25zIiwib3B0aW9uIiwiY29ycmVjdF9hbnMiLCJtYXJrcyIsInllYXIiLCJkaWZmaWN1bHR5IiwibmV3UXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0ZWFjaGVyX25hbWUiLCJyb3V0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYWRkT3B0aW9ucyIsImUiLCJpbmRleCIsInRlbXBBcnJheSIsIm9uU3VibWl0UXVlc3Rpb24iLCJwb3N0IiwicmVzcG9zbmUiLCJkYXRhIiwibWVzc2FnZSIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjdXJzb3IiLCJwdXNoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1heEhlaWdodCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==