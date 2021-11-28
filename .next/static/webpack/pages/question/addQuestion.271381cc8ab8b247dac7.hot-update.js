"use strict";
self["webpackHotUpdate_N_E"]("pages/question/addQuestion",{

/***/ "./pages/question/addQuestion.js":
/*!***************************************!*\
  !*** ./pages/question/addQuestion.js ***!
  \***************************************/
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
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\question\\addQuestion.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";



var addQuestion = function addQuestion(props) {
  _s();

  var initialValues = {
    subject: "Science",
    author: "",
    model: "text",
    //Other images
    question: {
      quest: "",
      options: ["", "", "", ""],
      correct_ans: "",
      marks: 0
    },
    year: 2021,
    difficulty: "Easy" //easy, medium ,hard

  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialValues),
      newQuestion = _useState[0],
      setQuestion = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var stored_teacher = JSON.parse(localStorage.getItem("teacher")).teacher_name;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      author: stored_teacher
    }));
  }, []);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  function validateForm() {
    return newQuestion.question.quest.length > 0 && newQuestion.question.correct_ans.length > 0;
  }

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value; // console.log("name of field :", name);

    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  };

  var addOptions = function addOptions(e, index) {
    var tempArray = newQuestion.question.options;
    tempArray[index] = e.target.value;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
        options: tempArray
      })
    }));
  };

  function onSubmitQuestion() {
    return _onSubmitQuestion.apply(this, arguments);
  } //   async function handleSubmit() {
  //     try {
  //       const resposne = await axios.post(
  //         "http://localhost:8080/registerTeacher",
  //         {
  //           teacher_id: email,
  //           teacher_name: teacherName,
  //           password: password,
  //         }
  //       );
  //       const data = await resposne.data; // receive : Registered Succesfully
  //       if (resposne.status === 400 || !data) {
  //         window.alert("Something went wrong during registration !!!");
  //       } else {
  //         const teacher = {
  //           teacher_id: email,
  //           teacher_name: teacherName,
  //         };
  //         console.log("Teacher Registered", teacher);
  //         // props.userLoginHandler(student);       ********************
  //         // router.push("/test/selectTest");        *****************
  //       }
  //     } catch (err) {
  //       alert("fetch error");
  //       console.log(err.message);
  //     }
  //   }
  // console.log(newQuestion);


  function _onSubmitQuestion() {
    _onSubmitQuestion = (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var resposne, message;
      return D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("http://localhost:8080/addQuestion", newQuestion);

            case 3:
              resposne = _context.sent;
              _context.next = 6;
              return resposne.data;

            case 6:
              message = _context.sent;
              console.log("message", message);
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
    return _onSubmitQuestion.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "row gx-0" // style={{ height: "100vh", backgroundColor: "honeydew" }}
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
        children: "New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "col-7 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
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
        lineNumber: 108,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
            name: "subject",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Science",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "Mathematics",
              children: "Mathematics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            type: "text",
            defaultValue: newQuestion.author,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            name: "model",
            type: "text",
            value: newQuestion.model,
            onChange: handleInputChange // readOnly

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            type: "number",
            name: "year",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
            name: "difficulty",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Easy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "Easy",
              children: "Easy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "quest",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Question"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            type: "text",
            value: newQuestion.question.quest,
            onChange: function onChange(e) {
              setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
                question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
                  quest: e.target.value
                })
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Option A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            type: "text",
            value: newQuestion.question.options[0],
            onChange: function onChange(e) {
              return addOptions(e, 0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Option B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            type: "text",
            value: newQuestion.question.options[1],
            onChange: function onChange(e) {
              return addOptions(e, 1);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Option C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            type: "text",
            value: newQuestion.question.options[2],
            onChange: function onChange(e) {
              return addOptions(e, 2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Option D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
            type: "text",
            value: newQuestion.question.options[3],
            onChange: function onChange(e) {
              return addOptions(e, 3);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "correct_ans",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Correct Answer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
            className: "form-select",
            "aria-label": "Default select example",
            onChange: function onChange(e) {
              setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
                question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
                  correct_ans: e.target.value
                })
              }));
            },
            defaultValue: newQuestion.question.options[0],
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: newQuestion.question.options[0],
              children: newQuestion.question.options[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: newQuestion.question.options[1],
              children: newQuestion.question.options[1]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: newQuestion.question.options[2],
              children: newQuestion.question.options[2]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
              value: newQuestion.question.options[3],
              children: newQuestion.question.options[3]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
          block: "true",
          className: "mt-4" // type="submit" (This is not allowing action to work properly)
          ,
          disabled: !validateForm(),
          onClick: onSubmitQuestion,
          children: "Submit Question"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: function onClick() {
          return router.push("/login/loginTeacher");
        },
        children: "Already registered, go to Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, _this);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


_s(addQuestion, "EYnj4a8B0pJqQhdKAFKimgWsr9A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (addQuestion);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24uMjcxMzgxY2M4YWI4YjI0N2RhYzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOzs7O0FBRUEsSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzdCLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsSUFBQUEsT0FBTyxFQUFFLFNBRFc7QUFFcEJDLElBQUFBLE1BQU0sRUFBRSxFQUZZO0FBR3BCQyxJQUFBQSxLQUFLLEVBQUUsTUFIYTtBQUdMO0FBQ2ZDLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxLQUFLLEVBQUUsRUFEQztBQUVSQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBRkQ7QUFHUkMsTUFBQUEsV0FBVyxFQUFFLEVBSEw7QUFJUkMsTUFBQUEsS0FBSyxFQUFFO0FBSkMsS0FKVTtBQVVwQkMsSUFBQUEsSUFBSSxFQUFFLElBVmM7QUFXcEJDLElBQUFBLFVBQVUsRUFBRSxNQVhRLENBV0E7O0FBWEEsR0FBdEI7O0FBY0Esa0JBQW1DbEIsK0NBQVEsQ0FBQ1EsYUFBRCxDQUEzQztBQUFBLE1BQU9XLFdBQVA7QUFBQSxNQUFvQkMsV0FBcEI7O0FBQ0FyQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNc0IsY0FBYyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDckJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQURxQixFQUVyQkMsWUFGRjtBQUdBTixJQUFBQSxXQUFXLGlDQUFNRCxXQUFOO0FBQW1CVCxNQUFBQSxNQUFNLEVBQUVXO0FBQTNCLE9BQVg7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0EsTUFBTU0sTUFBTSxHQUFH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WSxxQkFBWixDQUFOO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJLRCxDQXJRRCxFQXNRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTNRTTVDO1VBdUJXRDs7O0FBcVBqQiwrREFBZUMsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWVzdGlvbi9hZGRRdWVzdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IHJlc3BvbnNpdmVQcm9wVHlwZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL2NyZWF0ZVV0aWxpdHlDbGFzc2VzXCI7XHJcblxyXG5jb25zdCBhZGRRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICBzdWJqZWN0OiBcIlNjaWVuY2VcIixcclxuICAgIGF1dGhvcjogXCJcIixcclxuICAgIG1vZGVsOiBcInRleHRcIiwgLy9PdGhlciBpbWFnZXNcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiBcIlwiLFxyXG4gICAgICBvcHRpb25zOiBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIlwiLFxyXG4gICAgICBtYXJrczogMCxcclxuICAgIH0sXHJcbiAgICB5ZWFyOiAyMDIxLFxyXG4gICAgZGlmZmljdWx0eTogXCJFYXN5XCIsIC8vZWFzeSwgbWVkaXVtICxoYXJkXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW25ld1F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWVzKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkX3RlYWNoZXIgPSBKU09OLnBhcnNlKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJcIilcclxuICAgICkudGVhY2hlcl9uYW1lO1xyXG4gICAgc2V0UXVlc3Rpb24oeyAuLi5uZXdRdWVzdGlvbiwgYXV0aG9yOiBzdG9yZWRfdGVhY2hlciB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBuZXdRdWVzdGlvbi5xdWVzdGlvbi5xdWVzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgIG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLmNvcnJlY3RfYW5zLmxlbmd0aCA+IDBcclxuICAgICk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5hbWUgb2YgZmllbGQgOlwiLCBuYW1lKTtcclxuICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRPcHRpb25zID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zO1xyXG4gICAgdGVtcEFycmF5W2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgcXVlc3Rpb246IHsgLi4ubmV3UXVlc3Rpb24ucXVlc3Rpb24sIG9wdGlvbnM6IHRlbXBBcnJheSB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRRdWVzdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGRRdWVzdGlvblwiLFxyXG4gICAgICAgIG5ld1F1ZXN0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXNwb3NuZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAvLyAgICAgdHJ5IHtcclxuICAvLyAgICAgICBjb25zdCByZXNwb3NuZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgLy8gICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RlclRlYWNoZXJcIixcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgdGVhY2hlcl9pZDogZW1haWwsXHJcbiAgLy8gICAgICAgICAgIHRlYWNoZXJfbmFtZTogdGVhY2hlck5hbWUsXHJcbiAgLy8gICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICApO1xyXG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb3NuZS5kYXRhOyAvLyByZWNlaXZlIDogUmVnaXN0ZXJlZCBTdWNjZXNmdWxseVxyXG5cclxuICAvLyAgICAgICBpZiAocmVzcG9zbmUuc3RhdHVzID09PSA0MDAgfHwgIWRhdGEpIHtcclxuICAvLyAgICAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyByZWdpc3RyYXRpb24gISEhXCIpO1xyXG4gIC8vICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICBjb25zdCB0ZWFjaGVyID0ge1xyXG4gIC8vICAgICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAvLyAgICAgICAgICAgdGVhY2hlcl9uYW1lOiB0ZWFjaGVyTmFtZSxcclxuICAvLyAgICAgICAgIH07XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlRlYWNoZXIgUmVnaXN0ZXJlZFwiLCB0ZWFjaGVyKTtcclxuICAvLyAgICAgICAgIC8vIHByb3BzLnVzZXJMb2dpbkhhbmRsZXIoc3R1ZGVudCk7ICAgICAgICoqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gICAgICAgICAvLyByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIik7ICAgICAgICAqKioqKioqKioqKioqKioqKlxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgLy8gICAgICAgYWxlcnQoXCJmZXRjaCBlcnJvclwiKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyBjb25zb2xlLmxvZyhuZXdRdWVzdGlvbik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicm93IGd4LTBcIlxyXG4gICAgICAvLyBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIgfX1cclxuICAgID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5ldyBRdWVzdGlvbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBtdC01IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGUtbGlua1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDUsIHJpZ2h0OiAxMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIGZzLTMgZnctYm9sZCBteS01XCI+XHJcbiAgICAgICAgICBBZGQgTmV3IFF1ZXN0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ0ZWFjaGVyTmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5TdWJqZWN0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5HZW5lcmFsIEtub3dsZWRnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2llbmNlXCI+U2NpZW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3UXVlc3Rpb24uYXV0aG9yfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwibW9kZWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TW9kZWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICBuYW1lPVwibW9kZWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ubW9kZWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8vIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwieWVhclwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5ZZWFyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInllYXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJkaWZmaWN1bHR5XCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkRpZmZpY3VsdHk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiZGlmZmljdWx0eVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiRWFzeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRWFzeVwiPkVhc3k8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhcmRcIj5IYXJkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjaG9sYXJcIj5TY2hvbGFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInF1ZXN0XCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlF1ZXN0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5xdWVzdH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7IC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLCBxdWVzdDogZS50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAwKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1syXX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBEPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzNdfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJjb3JyZWN0X2Fuc1wiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5Db3JyZWN0IEFuc3dlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RfYW5zOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXX0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzFdfT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzFdfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl19PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl19XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXX0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdFF1ZXN0aW9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXQgUXVlc3Rpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBzaW1wbGUtbGluayBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW4vbG9naW5UZWFjaGVyXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFscmVhZHkgcmVnaXN0ZXJlZCwgZ28gdG8gTG9naW5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8gY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuLy8gICB0ZWFjaGVyTG9naW5IYW5kbGVyOiAoZGF0YSkgPT4gZGlzcGF0Y2godXNlckxvZ2luKGRhdGEpKSxcclxuLy8gfSk7XHJcbi8vIGNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbi8vIH0pO1xyXG5leHBvcnQgZGVmYXVsdCBhZGRRdWVzdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRm9ybSIsIkJ1dHRvbiIsImF4aW9zIiwidXNlUm91dGVyIiwiYWRkUXVlc3Rpb24iLCJwcm9wcyIsImluaXRpYWxWYWx1ZXMiLCJzdWJqZWN0IiwiYXV0aG9yIiwibW9kZWwiLCJxdWVzdGlvbiIsInF1ZXN0Iiwib3B0aW9ucyIsImNvcnJlY3RfYW5zIiwibWFya3MiLCJ5ZWFyIiwiZGlmZmljdWx0eSIsIm5ld1F1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJzdG9yZWRfdGVhY2hlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0ZWFjaGVyX25hbWUiLCJyb3V0ZXIiLCJ2YWxpZGF0ZUZvcm0iLCJsZW5ndGgiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYWRkT3B0aW9ucyIsImUiLCJpbmRleCIsInRlbXBBcnJheSIsIm9uU3VibWl0UXVlc3Rpb24iLCJwb3N0IiwicmVzcG9zbmUiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY3Vyc29yIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=