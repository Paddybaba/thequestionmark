"use strict";
self["webpackHotUpdate_N_E"]("pages/question/addQuestion2",{

/***/ "./pages/question/addQuestion2.js":
/*!****************************************!*\
  !*** ./pages/question/addQuestion2.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









 //// Resize image before uploading



var resizeFile = function resizeFile(file) {
  return new Promise(function (resolve, reject) {
    react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8___default().imageFileResizer(file, 600, 400, "JPEG", 100, 0, function (uri) {
      resolve(uri);
    }, "file");
  });
}; ///// Get Image file from input, resize it and add to images State


var getImage = /*#__PURE__*/function () {
  var _ref = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
    var file;
    return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              file = event.target.files;
              console.log(file);
            } catch (err) {
              console.log(err.message);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getImage(_x) {
    return _ref.apply(this, arguments);
  };
}();

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

    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));
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
    _onSubmitQuestion = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
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
        lineNumber: 108,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
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
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold mb-3",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            defaultValue: newQuestion.author,
            readOnly: true
          }, void 0, false, {
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
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
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
              lineNumber: 153,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Image-Question-Text-Options",
              children: "Image-Question-Text-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Text-Question-Image-Options",
              children: "Text-Question-Image-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Combined",
              children: "Combined"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "number",
            name: "year",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
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
              lineNumber: 181,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
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
              lineNumber: 200,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              id: "quest-image",
              accept: "image/*",
              onChange: e = getImage(e),
              className: "image-input",
              name: "quest-image",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Question Text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
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
            lineNumber: 212,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
              lineNumber: 238,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
              className: "image-input",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Option A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[0].option,
            onChange: function onChange(e) {
              return addOptions(e, 0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
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
            children: "Option B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[1].option,
            onChange: function onChange(e) {
              return addOptions(e, 1);
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
            children: "Option C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[2].option,
            onChange: function onChange(e) {
              return addOptions(e, 2);
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
            children: "Option D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Control, {
            type: "text",
            value: newQuestion.question.options[3].option,
            onChange: function onChange(e) {
              return addOptions(e, 3);
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
          controlId: "correct_ans",
          style: {
            color: "#32a852"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default.Label, {
            children: "Correct Answer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
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
              lineNumber: 343,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[1].option,
              children: newQuestion.question.options[1].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[2].option,
              children: newQuestion.question.options[2].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
              value: newQuestion.question.options[3].option,
              children: newQuestion.question.options[3].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
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
          lineNumber: 357,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24yLjgzODRlZmNkNDk4ZDExYzU1ZGYxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUNBLElBQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxTQUNqQixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQy9CTCxJQUFBQSxnRkFBQSxDQUNFRSxJQURGLEVBRUUsR0FGRixFQUdFLEdBSEYsRUFJRSxNQUpGLEVBS0UsR0FMRixFQU1FLENBTkYsRUFPRSxVQUFDSyxHQUFELEVBQVM7QUFDUEgsTUFBQUEsT0FBTyxDQUFDRyxHQUFELENBQVA7QUFDRCxLQVRILEVBVUUsTUFWRjtBQVlELEdBYkQsQ0FEaUI7QUFBQSxDQUFuQixFQWVBOzs7QUFDQSxJQUFNQyxRQUFRO0FBQUEseVFBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2YsZ0JBQUk7QUFDSVAsY0FBQUEsSUFESixHQUNXTyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FEeEI7QUFFRkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLElBQVo7QUFDRCxhQUhELENBR0UsT0FBT1ksR0FBUCxFQUFZO0FBQ1pGLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFHLENBQUNDLE9BQWhCO0FBQ0Q7O0FBTmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUlAsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkOztBQVFBLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM5QkwsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENB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SyxXQUFXLENBQUNWLFFBQVosQ0FBcUJJLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCRixlQXdCRTtBQUFRLG1CQUFLLEVBQUVLLFdBQVcsQ0FBQ1YsUUFBWixDQUFxQkksT0FBckIsQ0FBNkIsQ0FBN0IsRUFBZ0NDLE1BQS9DO0FBQUEsd0JBQ0dLLFdBQVcsQ0FBQ1YsUUFBWixDQUFxQkksT0FBckIsQ0FBNkIsQ0FBN0IsRUFBZ0NDO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeE1GLGVBNE9FLDhEQUFDLDREQUFEO0FBQ0UsZUFBSyxFQUFDLE1BRFI7QUFFRSxtQkFBUyxFQUFDLFdBRlosQ0FHRTtBQUNBO0FBSkY7QUFLRSxpQkFBTyxFQUFFb0IsZ0JBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNU9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK1FELENBclZELEVBc1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBM1ZNaEM7VUE2QldsQjs7O0FBK1RqQiwrREFBZWtCLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIi4uL2FwaS9teXBhdGhzXCI7XHJcbmltcG9ydCBSZXNpemVyIGZyb20gXCJyZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXJcIjtcclxuXHJcbi8vLy8gUmVzaXplIGltYWdlIGJlZm9yZSB1cGxvYWRpbmdcclxuY29uc3QgcmVzaXplRmlsZSA9IChmaWxlKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIFJlc2l6ZXIuaW1hZ2VGaWxlUmVzaXplcihcclxuICAgICAgZmlsZSxcclxuICAgICAgNjAwLFxyXG4gICAgICA0MDAsXHJcbiAgICAgIFwiSlBFR1wiLFxyXG4gICAgICAxMDAsXHJcbiAgICAgIDAsXHJcbiAgICAgICh1cmkpID0+IHtcclxuICAgICAgICByZXNvbHZlKHVyaSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZmlsZVwiXHJcbiAgICApO1xyXG4gIH0pO1xyXG4vLy8vLyBHZXQgSW1hZ2UgZmlsZSBmcm9tIGlucHV0LCByZXNpemUgaXQgYW5kIGFkZCB0byBpbWFnZXMgU3RhdGVcclxuY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuY29uc3QgYWRkUXVlc3Rpb24yID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJwYXRoXCIsIHBhdGgpO1xyXG4gIHZhciBzdG9yZWRfdGVhY2hlcjtcclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbiAgICBhdXRob3I6IFwiXCIsXHJcbiAgICBjbGFzczogW10sXHJcbiAgICBtb2RlbDogXCJBbGwtVGV4dFwiLCAvL090aGVyIGltYWdlc1xyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHsgaW1hZ2U6IFwiXCIsIHF1ZTogXCJcIiB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJCXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQ1wiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJBXCIsXHJcbiAgICAgIG1hcmtzOiAwLFxyXG4gICAgfSxcclxuICAgIHllYXI6IDIwMjEsXHJcbiAgICBkaWZmaWN1bHR5OiBcIkVhc3lcIiwgLy9lYXN5LCBtZWRpdW0gLGhhcmRcclxuICB9O1xyXG5cclxuICBjb25zdCBbbmV3UXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZXMpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdG9yZWRfdGVhY2hlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyXCIpKS50ZWFjaGVyX25hbWU7XHJcbiAgICBzZXRRdWVzdGlvbih7IC4uLm5ld1F1ZXN0aW9uLCBhdXRob3I6IHN0b3JlZF90ZWFjaGVyIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gIC8vICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgIG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLnF1ZXN0Lmxlbmd0aCA+IDAgJiZcclxuICAvLyAgICAgICBuZXdRdWVzdGlvbi5xdWVzdGlvbi5jb3JyZWN0X2Fucy5sZW5ndGggPiAwXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9XHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmFtZSBvZiBmaWVsZCA6XCIsIG5hbWUpO1xyXG4gICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE9wdGlvbnMgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHRlbXBBcnJheSA9IG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnM7XHJcbiAgICB0ZW1wQXJyYXlbaW5kZXhdLm9wdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgcXVlc3Rpb246IHsgLi4ubmV3UXVlc3Rpb24ucXVlc3Rpb24sIG9wdGlvbnM6IHRlbXBBcnJheSB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRRdWVzdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChgJHtwYXRofS9hZGRRdWVzdGlvbmAsIG5ld1F1ZXN0aW9uKTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3Bvc25lLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAgIC4uLmluaXRpYWxWYWx1ZXMsXHJcbiAgICAgICAgc3ViamVjdDogbmV3UXVlc3Rpb24uc3ViamVjdCxcclxuICAgICAgICBhdXRob3I6IG5ld1F1ZXN0aW9uLmF1dGhvcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2QxZDFkMVwiIH19PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmV3IFF1ZXN0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBtdC01IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGUtbGlua1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDUsIHJpZ2h0OiAxMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIGZzLTMgZnctYm9sZCBtYi0zXCI+XHJcbiAgICAgICAgICBBZGQgTmV3IFF1ZXN0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ0ZWFjaGVyTmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5TdWJqZWN0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5HZW5lcmFsIEtub3dsZWRnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2llbmNlXCI+U2NpZW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3UXVlc3Rpb24uYXV0aG9yfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwibW9kZWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TW9kZWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwibW9kZWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbC1UZXh0XCI+QWxsLVRleHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW1hZ2UtUXVlc3Rpb24tVGV4dC1PcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICBJbWFnZS1RdWVzdGlvbi1UZXh0LU9wdGlvbnNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICBUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29tYmluZWRcIj5Db21iaW5lZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ5ZWFyXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlllYXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnllYXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImRpZmZpY3VsdHlcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+RGlmZmljdWx0eTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkaWZmaWN1bHR5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJFYXN5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFYXN5XCI+RWFzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFyZFwiPkhhcmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2Nob2xhclwiPlNjaG9sYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwicXVlc3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJJbWFnZS1RdWVzdGlvbi1UZXh0LU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlF1ZXN0aW9uIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicXVlc3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlID0gZ2V0SW1hZ2UoZSkpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5RdWVzdGlvbiBUZXh0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMDAgfX1cclxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7IC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLCBxdWVzdDogZS50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZTNmYlwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImltYWdlLWlucHV0XCIgdHlwZT1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEE8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMF0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAwKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZlM2ZiXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cIm9wdGlvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIlRleHQtUXVlc3Rpb24tSW1hZ2UtT3B0aW9uc1wiIHx8XHJcbiAgICAgICAgICAgIG5ld1F1ZXN0aW9uLm1vZGVsID09IFwiQ29tYmluZWRcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEEgSW1hZ2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIiB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1sxXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cIm9wdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmUzZmJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ld1F1ZXN0aW9uLm1vZGVsID09IFwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCIgfHxcclxuICAgICAgICAgICAgbmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJDb21iaW5lZFwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQSBJbWFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBDPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzJdLm9wdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZTNmYlwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImltYWdlLWlucHV0XCIgdHlwZT1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbM10ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJjb3JyZWN0X2Fuc1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMzMmE4NTJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5Db3JyZWN0IEFuc3dlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIiB9fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24ucXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdF9hbnM6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdLm9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1sxXS5vcHRpb259PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl0ub3B0aW9ufT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzJdLm9wdGlvbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzNdLm9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IG1iLTVcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdFF1ZXN0aW9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXQgUXVlc3Rpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICB7LyogPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgc2ltcGxlLWxpbmsgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luL2xvZ2luVGVhY2hlclwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbHJlYWR5IHJlZ2lzdGVyZWQsIGdvIHRvIExvZ2luXHJcbiAgICAgICAgPC9wPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4vLyBjb25zdCBtZHRwID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgIHRlYWNoZXJMb2dpbkhhbmRsZXI6IChkYXRhKSA9PiBkaXNwYXRjaCh1c2VyTG9naW4oZGF0YSkpLFxyXG4vLyB9KTtcclxuLy8gY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4gKHtcclxuLy8gICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlcixcclxuLy8gfSk7XHJcbmV4cG9ydCBkZWZhdWx0IGFkZFF1ZXN0aW9uMjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRm9ybSIsIkJ1dHRvbiIsImF4aW9zIiwidXNlUm91dGVyIiwicGF0aCIsIlJlc2l6ZXIiLCJyZXNpemVGaWxlIiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2VGaWxlUmVzaXplciIsInVyaSIsImdldEltYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJtZXNzYWdlIiwiYWRkUXVlc3Rpb24yIiwicHJvcHMiLCJzdG9yZWRfdGVhY2hlciIsImluaXRpYWxWYWx1ZXMiLCJzdWJqZWN0IiwiYXV0aG9yIiwibW9kZWwiLCJxdWVzdGlvbiIsInF1ZXN0IiwiaW1hZ2UiLCJxdWUiLCJvcHRpb25zIiwib3B0aW9uIiwiY29ycmVjdF9hbnMiLCJtYXJrcyIsInllYXIiLCJkaWZmaWN1bHR5IiwibmV3UXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0ZWFjaGVyX25hbWUiLCJyb3V0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsImFkZE9wdGlvbnMiLCJlIiwiaW5kZXgiLCJ0ZW1wQXJyYXkiLCJvblN1Ym1pdFF1ZXN0aW9uIiwicG9zdCIsInJlc3Bvc25lIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjdXJzb3IiLCJwdXNoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1heEhlaWdodCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==