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
  var empty_image_array = {
    quest_image: null,
    optionA: null,
    optionB: null,
    optionC: null,
    optionD: null
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialValues),
      newQuestion = _useState[0],
      setQuestion = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      questImage = _useState2[0],
      setQuestImage = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    stored_teacher = JSON.parse(localStorage.getItem("teacher")).teacher_name;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      author: stored_teacher
    }));
  }, []);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(); ///// Get Image file from input, resize it and add to images State

  var getQuestImage = /*#__PURE__*/function () {
    var _ref = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
      var image, resizedImage;
      return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              image = event.target.files[0];
              _context.next = 4;
              return resizeFile(image);

            case 4:
              resizedImage = _context.sent;
              console.log("original", image);
              console.log("resized", resizedImage);
              setQuestImage(resizedImage);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function getQuestImage(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //   function validateForm() {
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
    _onSubmitQuestion = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var resposne, message;
      return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("".concat(_api_mypaths__WEBPACK_IMPORTED_MODULE_7__.default, "/addQuestion"), newQuestion);

            case 3:
              resposne = _context2.sent;
              _context2.next = 6;
              return resposne.data;

            case 6:
              message = _context2.sent;
              console.log("message", message);
              setQuestion(_objectSpread(_objectSpread({}, initialValues), {}, {
                subject: newQuestion.subject,
                author: newQuestion.author
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.message);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
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
        lineNumber: 121,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
        lineNumber: 124,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold mb-3",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
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
              lineNumber: 144,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            defaultValue: newQuestion.author,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
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
              lineNumber: 166,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Image-Question-Text-Options",
              children: "Image-Question-Text-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Text-Question-Image-Options",
              children: "Text-Question-Image-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Combined",
              children: "Combined"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "number",
            name: "year",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
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
              lineNumber: 194,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
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
              lineNumber: 213,
              columnNumber: 17
            }, _this), !questImage ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
              style: {
                height: 100,
                width: 120,
                padding: 2,
                borderRadius: 2
              },
              src: URL.createObjectURL(questImage)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              id: "quest-image",
              accept: "image/*",
              onChange: function onChange(e) {
                return getQuestImage(e);
              },
              className: "image-input",
              name: "quest-image",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Question Text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
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
            lineNumber: 236,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
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
              lineNumber: 262,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[0].option,
            onChange: function onChange(e) {
              return addOptions(e, 0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
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
              lineNumber: 286,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[1].option,
            onChange: function onChange(e) {
              return addOptions(e, 1);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
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
              lineNumber: 310,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[2].option,
            onChange: function onChange(e) {
              return addOptions(e, 2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 297,
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
              lineNumber: 334,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[3].option,
            onChange: function onChange(e) {
              return addOptions(e, 3);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
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
            lineNumber: 351,
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
              lineNumber: 367,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[1].option,
              children: newQuestion.question.options[1].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[2].option,
              children: newQuestion.question.options[2].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[3].option,
              children: newQuestion.question.options[3].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 345,
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
          lineNumber: 381,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, _this);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


_s(addQuestion2, "V2xRppUpb7VG6uphgKLPrIprGRI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24yLmYzM2Q5YjJiM2FhMDZmMGZkMzBhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFEO0FBQUEsU0FDakIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkwsSUFBQUEsZ0ZBQUEsQ0FDRUUsSUFERixFQUVFLEdBRkYsRUFHRSxHQUhGLEVBSUUsTUFKRixFQUtFLEdBTEYsRUFNRSxDQU5GLEVBT0UsVUFBQ0ssR0FBRCxFQUFTO0FBQ1BILE1BQUFBLE9BQU8sQ0FBQ0csR0FBRCxDQUFQO0FBQ0QsS0FUSCxFQVVFLE1BVkY7QUFZRCxHQWJELENBRGlCO0FBQUEsQ0FBbkI7O0FBZ0JBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM5QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlosaURBQXBCO0FBQ0EsTUFBSWEsY0FBSjtBQUVBLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsSUFBQUEsT0FBTyxFQUFFLFNBRFc7QUFFcEJDLElBQUFBLE1BQU0sRUFBRSxFQUZZO0FBR3BCLGFBQU8sRUFIYTtBQUlwQkMsSUFBQUEsS0FBSyxFQUFFLFVBSmE7QUFJRDtBQUNuQkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLEtBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxRQUFBQSxHQUFHLEVBQUU7QUFBbEIsT0FEQztBQUVSQyxNQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUFFRixRQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhRyxRQUFBQSxN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QVcsQ0FBQ2hCLFFBQVosQ0FBcUJJLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5ORixlQXVQRSw4REFBQyw0REFBRDtBQUNFLGVBQUssRUFBQyxNQURSO0FBRUUsbUJBQVMsRUFBQyxXQUZaLENBR0U7QUFDQTtBQUpGO0FBS0UsaUJBQU8sRUFBRWtDLGdCQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBSRCxDQXJYRCxFQXNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTNYTWhEO1VBc0NXVjs7O0FBc1ZqQiwrREFBZVUsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWVzdGlvbi9hZGRRdWVzdGlvbjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwiLi4vYXBpL215cGF0aHNcIjtcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiO1xyXG5cclxuLy8vLyBSZXNpemUgaW1hZ2UgYmVmb3JlIHVwbG9hZGluZ1xyXG5jb25zdCByZXNpemVGaWxlID0gKGZpbGUpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxyXG4gICAgICBmaWxlLFxyXG4gICAgICA2MDAsXHJcbiAgICAgIDQwMCxcclxuICAgICAgXCJKUEVHXCIsXHJcbiAgICAgIDEwMCxcclxuICAgICAgMCxcclxuICAgICAgKHVyaSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodXJpKTtcclxuICAgICAgfSxcclxuICAgICAgXCJmaWxlXCJcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBhZGRRdWVzdGlvbjIgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInBhdGhcIiwgcGF0aCk7XHJcbiAgdmFyIHN0b3JlZF90ZWFjaGVyO1xyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbiAgICBhdXRob3I6IFwiXCIsXHJcbiAgICBjbGFzczogW10sXHJcbiAgICBtb2RlbDogXCJBbGwtVGV4dFwiLCAvL090aGVyIGltYWdlc1xyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHsgaW1hZ2U6IFwiXCIsIHF1ZTogXCJcIiB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJCXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQ1wiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJBXCIsXHJcbiAgICAgIG1hcmtzOiAwLFxyXG4gICAgfSxcclxuICAgIHllYXI6IDIwMjEsXHJcbiAgICBkaWZmaWN1bHR5OiBcIkVhc3lcIiwgLy9lYXN5LCBtZWRpdW0gLGhhcmRcclxuICB9O1xyXG5cclxuICBjb25zdCBlbXB0eV9pbWFnZV9hcnJheSA9IHtcclxuICAgIHF1ZXN0X2ltYWdlOiBudWxsLFxyXG4gICAgb3B0aW9uQTogbnVsbCxcclxuICAgIG9wdGlvbkI6IG51bGwsXHJcbiAgICBvcHRpb25DOiBudWxsLFxyXG4gICAgb3B0aW9uRDogbnVsbCxcclxuICB9O1xyXG4gIGNvbnN0IFtuZXdRdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcbiAgY29uc3QgW3F1ZXN0SW1hZ2UsIHNldFF1ZXN0SW1hZ2VdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3RvcmVkX3RlYWNoZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlclwiKSkudGVhY2hlcl9uYW1lO1xyXG4gICAgc2V0UXVlc3Rpb24oeyAuLi5uZXdRdWVzdGlvbiwgYXV0aG9yOiBzdG9yZWRfdGVhY2hlciB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLy8vLyBHZXQgSW1hZ2UgZmlsZSBmcm9tIGlucHV0LCByZXNpemUgaXQgYW5kIGFkZCB0byBpbWFnZXMgU3RhdGVcclxuICBjb25zdCBnZXRRdWVzdEltYWdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgY29uc3QgcmVzaXplZEltYWdlID0gYXdhaXQgcmVzaXplRmlsZShpbWFnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib3JpZ2luYWxcIiwgaW1hZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc2l6ZWRcIiwgcmVzaXplZEltYWdlKTtcclxuICAgICAgc2V0UXVlc3RJbWFnZShyZXNpemVkSW1hZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gIC8vICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgIG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLnF1ZXN0Lmxlbmd0aCA+IDAgJiZcclxuICAvLyAgICAgICBuZXdRdWVzdGlvbi5xdWVzdGlvbi5jb3JyZWN0X2Fucy5sZW5ndGggPiAwXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9XHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmFtZSBvZiBmaWVsZCA6XCIsIG5hbWUpO1xyXG4gICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE9wdGlvbnMgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHRlbXBBcnJheSA9IG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnM7XHJcbiAgICB0ZW1wQXJyYXlbaW5kZXhdLm9wdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgcXVlc3Rpb246IHsgLi4ubmV3UXVlc3Rpb24ucXVlc3Rpb24sIG9wdGlvbnM6IHRlbXBBcnJheSB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRRdWVzdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChgJHtwYXRofS9hZGRRdWVzdGlvbmAsIG5ld1F1ZXN0aW9uKTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3Bvc25lLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAgIC4uLmluaXRpYWxWYWx1ZXMsXHJcbiAgICAgICAgc3ViamVjdDogbmV3UXVlc3Rpb24uc3ViamVjdCxcclxuICAgICAgICBhdXRob3I6IG5ld1F1ZXN0aW9uLmF1dGhvcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2QxZDFkMVwiIH19PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmV3IFF1ZXN0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBtdC01IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGUtbGlua1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDUsIHJpZ2h0OiAxMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIGZzLTMgZnctYm9sZCBtYi0zXCI+XHJcbiAgICAgICAgICBBZGQgTmV3IFF1ZXN0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ0ZWFjaGVyTmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5TdWJqZWN0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5HZW5lcmFsIEtub3dsZWRnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2llbmNlXCI+U2NpZW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3UXVlc3Rpb24uYXV0aG9yfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwibW9kZWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TW9kZWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwibW9kZWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbC1UZXh0XCI+QWxsLVRleHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW1hZ2UtUXVlc3Rpb24tVGV4dC1PcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICBJbWFnZS1RdWVzdGlvbi1UZXh0LU9wdGlvbnNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICBUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29tYmluZWRcIj5Db21iaW5lZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ5ZWFyXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlllYXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnllYXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImRpZmZpY3VsdHlcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+RGlmZmljdWx0eTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkaWZmaWN1bHR5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJFYXN5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFYXN5XCI+RWFzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFyZFwiPkhhcmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2Nob2xhclwiPlNjaG9sYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwicXVlc3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJJbWFnZS1RdWVzdGlvbi1UZXh0LU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlF1ZXN0aW9uIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgeyFxdWVzdEltYWdlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKHF1ZXN0SW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cInF1ZXN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0UXVlc3RJbWFnZShlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+UXVlc3Rpb24gVGV4dDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogMzAwIH19XHJcbiAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5xdWVzdC5xdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbjogeyAuLi5uZXdRdWVzdGlvbi5xdWVzdGlvbiwgcXVlc3Q6IGUudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cIm9wdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmUzZmJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ld1F1ZXN0aW9uLm1vZGVsID09IFwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCIgfHxcclxuICAgICAgICAgICAgbmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJDb21iaW5lZFwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQSBJbWFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdLm9wdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZTNmYlwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJvcHRpb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImltYWdlLWlucHV0XCIgdHlwZT1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAxKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJvcHRpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZlM2ZiXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIlRleHQtUXVlc3Rpb24tSW1hZ2UtT3B0aW9uc1wiIHx8XHJcbiAgICAgICAgICAgIG5ld1F1ZXN0aW9uLm1vZGVsID09IFwiQ29tYmluZWRcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEEgSW1hZ2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIiB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1syXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cIm9wdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmUzZmJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ld1F1ZXN0aW9uLm1vZGVsID09IFwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCIgfHxcclxuICAgICAgICAgICAgbmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJDb21iaW5lZFwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQSBJbWFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBEPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzNdLm9wdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwiY29ycmVjdF9hbnNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMzJhODUyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+Q29ycmVjdCBBbnN3ZXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIgfX1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RfYW5zOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXS5vcHRpb259PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMF0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV0ub3B0aW9ufT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzFdLm9wdGlvbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzJdLm9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1syXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXS5vcHRpb259PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbM10ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBtYi01XCJcclxuICAgICAgICAgICAgLy8gdHlwZT1cInN1Ym1pdFwiIChUaGlzIGlzIG5vdCBhbGxvd2luZyBhY3Rpb24gdG8gd29yayBwcm9wZXJseSlcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQ9eyF2YWxpZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXRRdWVzdGlvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0IFF1ZXN0aW9uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgey8qIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHNpbXBsZS1saW5rIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpbi9sb2dpblRlYWNoZXJcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWxyZWFkeSByZWdpc3RlcmVkLCBnbyB0byBMb2dpblxyXG4gICAgICAgIDwvcD4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8gY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuLy8gICB0ZWFjaGVyTG9naW5IYW5kbGVyOiAoZGF0YSkgPT4gZGlzcGF0Y2godXNlckxvZ2luKGRhdGEpKSxcclxuLy8gfSk7XHJcbi8vIGNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbi8vIH0pO1xyXG5leHBvcnQgZGVmYXVsdCBhZGRRdWVzdGlvbjI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkZvcm0iLCJCdXR0b24iLCJheGlvcyIsInVzZVJvdXRlciIsInBhdGgiLCJSZXNpemVyIiwicmVzaXplRmlsZSIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlRmlsZVJlc2l6ZXIiLCJ1cmkiLCJhZGRRdWVzdGlvbjIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRfdGVhY2hlciIsImluaXRpYWxWYWx1ZXMiLCJzdWJqZWN0IiwiYXV0aG9yIiwibW9kZWwiLCJxdWVzdGlvbiIsInF1ZXN0IiwiaW1hZ2UiLCJxdWUiLCJvcHRpb25zIiwib3B0aW9uIiwiY29ycmVjdF9hbnMiLCJtYXJrcyIsInllYXIiLCJkaWZmaWN1bHR5IiwiZW1wdHlfaW1hZ2VfYXJyYXkiLCJxdWVzdF9pbWFnZSIsIm9wdGlvbkEiLCJvcHRpb25CIiwib3B0aW9uQyIsIm9wdGlvbkQiLCJuZXdRdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwicXVlc3RJbWFnZSIsInNldFF1ZXN0SW1hZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGVhY2hlcl9uYW1lIiwicm91dGVyIiwiZ2V0UXVlc3RJbWFnZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJyZXNpemVkSW1hZ2UiLCJtZXNzYWdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJhZGRPcHRpb25zIiwiZSIsImluZGV4IiwidGVtcEFycmF5Iiwib25TdWJtaXRRdWVzdGlvbiIsInBvc3QiLCJyZXNwb3NuZSIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY3Vyc29yIiwicHVzaCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ3aWR0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1heEhlaWdodCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==