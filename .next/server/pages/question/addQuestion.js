"use strict";
(() => {
var exports = {};
exports.id = "pages/question/addQuestion";
exports.ids = ["pages/question/addQuestion"];
exports.modules = {

/***/ "./pages/question/addQuestion.js":
/*!***************************************!*\
  !*** ./pages/question/addQuestion.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\question\\addQuestion.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";



const addQuestion = props => {
  const initialValues = {
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
  const {
    0: newQuestion,
    1: setQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const stored_teacher = JSON.parse(localStorage.getItem("teacher")).teacher_name;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      author: stored_teacher
    }));
  }, []);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function validateForm() {
    return newQuestion.question.quest.length > 0 && newQuestion.question.correct_ans.length > 0;
  }

  const handleInputChange = event => {
    const {
      name,
      value
    } = event.target; // console.log("name of field :", name);

    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      [name]: value
    }));
  };

  const addOptions = (e, index) => {
    const tempArray = newQuestion.question.options;
    tempArray[index] = e.target.value;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
        options: tempArray
      })
    }));
  };

  async function onSubmitQuestion() {
    try {
      const resposne = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:8080/addQuestion", newQuestion);
      const message = await resposne.data;
      console.log("message", message);
    } catch (err) {
      console.log(err.message);
    }
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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "row gx-0" // style={{ height: "100vh", backgroundColor: "honeydew" }}
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "col-7 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "simple-link",
        style: {
          position: "absolute",
          top: 5,
          right: 10,
          cursor: "pointer"
        },
        onClick: () => router.push("/"),
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            name: "subject",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Science",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "Mathematics",
              children: "Mathematics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            defaultValue: newQuestion.author,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            name: "model",
            type: "text",
            value: newQuestion.model,
            onChange: handleInputChange // readOnly

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "number",
            name: "year",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            name: "difficulty",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Easy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "Easy",
              children: "Easy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "quest",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Question"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.quest,
            onChange: e => {
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
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[0],
            onChange: e => addOptions(e, 0)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[1],
            onChange: e => addOptions(e, 1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[2],
            onChange: e => addOptions(e, 2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[3],
            onChange: e => addOptions(e, 3)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "correct_ans",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Correct Answer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            className: "form-select",
            "aria-label": "Default select example",
            onChange: e => {
              setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
                question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
                  correct_ans: e.target.value
                })
              }));
            },
            defaultValue: newQuestion.question.options[0],
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: newQuestion.question.options[0],
              children: newQuestion.question.options[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: newQuestion.question.options[1],
              children: newQuestion.question.options[1]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: newQuestion.question.options[2],
              children: newQuestion.question.options[2]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: newQuestion.question.options[3],
              children: newQuestion.question.options[3]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: () => router.push("/login/loginTeacher"),
        children: "Already registered, go to Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, undefined);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addQuestion);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/question/addQuestion.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWVzdGlvbi5qcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IHJlc3BvbnNpdmVQcm9wVHlwZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL2NyZWF0ZVV0aWxpdHlDbGFzc2VzXCI7XHJcblxyXG5jb25zdCBhZGRRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICBzdWJqZWN0OiBcIlNjaWVuY2VcIixcclxuICAgIGF1dGhvcjogXCJcIixcclxuICAgIG1vZGVsOiBcInRleHRcIiwgLy9PdGhlciBpbWFnZXNcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgIHF1ZXN0OiBcIlwiLFxyXG4gICAgICBvcHRpb25zOiBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXHJcbiAgICAgIGNvcnJlY3RfYW5zOiBcIlwiLFxyXG4gICAgICBtYXJrczogMCxcclxuICAgIH0sXHJcbiAgICB5ZWFyOiAyMDIxLFxyXG4gICAgZGlmZmljdWx0eTogXCJFYXN5XCIsIC8vZWFzeSwgbWVkaXVtICxoYXJkXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW25ld1F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWVzKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkX3RlYWNoZXIgPSBKU09OLnBhcnNlKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJcIilcclxuICAgICkudGVhY2hlcl9uYW1lO1xyXG4gICAgc2V0UXVlc3Rpb24oeyAuLi5uZXdRdWVzdGlvbiwgYXV0aG9yOiBzdG9yZWRfdGVhY2hlciB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBuZXdRdWVzdGlvbi5xdWVzdGlvbi5xdWVzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgIG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLmNvcnJlY3RfYW5zLmxlbmd0aCA+IDBcclxuICAgICk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5hbWUgb2YgZmllbGQgOlwiLCBuYW1lKTtcclxuICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRPcHRpb25zID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zO1xyXG4gICAgdGVtcEFycmF5W2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAuLi5uZXdRdWVzdGlvbixcclxuICAgICAgcXVlc3Rpb246IHsgLi4ubmV3UXVlc3Rpb24ucXVlc3Rpb24sIG9wdGlvbnM6IHRlbXBBcnJheSB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRRdWVzdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGRRdWVzdGlvblwiLFxyXG4gICAgICAgIG5ld1F1ZXN0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXNwb3NuZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAvLyAgICAgdHJ5IHtcclxuICAvLyAgICAgICBjb25zdCByZXNwb3NuZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgLy8gICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RlclRlYWNoZXJcIixcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgdGVhY2hlcl9pZDogZW1haWwsXHJcbiAgLy8gICAgICAgICAgIHRlYWNoZXJfbmFtZTogdGVhY2hlck5hbWUsXHJcbiAgLy8gICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICApO1xyXG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb3NuZS5kYXRhOyAvLyByZWNlaXZlIDogUmVnaXN0ZXJlZCBTdWNjZXNmdWxseVxyXG5cclxuICAvLyAgICAgICBpZiAocmVzcG9zbmUuc3RhdHVzID09PSA0MDAgfHwgIWRhdGEpIHtcclxuICAvLyAgICAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyByZWdpc3RyYXRpb24gISEhXCIpO1xyXG4gIC8vICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICBjb25zdCB0ZWFjaGVyID0ge1xyXG4gIC8vICAgICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAvLyAgICAgICAgICAgdGVhY2hlcl9uYW1lOiB0ZWFjaGVyTmFtZSxcclxuICAvLyAgICAgICAgIH07XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlRlYWNoZXIgUmVnaXN0ZXJlZFwiLCB0ZWFjaGVyKTtcclxuICAvLyAgICAgICAgIC8vIHByb3BzLnVzZXJMb2dpbkhhbmRsZXIoc3R1ZGVudCk7ICAgICAgICoqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gICAgICAgICAvLyByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIik7ICAgICAgICAqKioqKioqKioqKioqKioqKlxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgLy8gICAgICAgYWxlcnQoXCJmZXRjaCBlcnJvclwiKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyBjb25zb2xlLmxvZyhuZXdRdWVzdGlvbik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicm93IGd4LTBcIlxyXG4gICAgICAvLyBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIgfX1cclxuICAgID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5ldyBRdWVzdGlvbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBtdC01IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGUtbGlua1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDUsIHJpZ2h0OiAxMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIGZzLTMgZnctYm9sZCBteS01XCI+XHJcbiAgICAgICAgICBBZGQgTmV3IFF1ZXN0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ0ZWFjaGVyTmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5TdWJqZWN0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5HZW5lcmFsIEtub3dsZWRnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2llbmNlXCI+U2NpZW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3UXVlc3Rpb24uYXV0aG9yfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwibW9kZWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TW9kZWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICBuYW1lPVwibW9kZWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ubW9kZWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8vIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwieWVhclwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5ZZWFyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInllYXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJkaWZmaWN1bHR5XCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkRpZmZpY3VsdHk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiZGlmZmljdWx0eVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiRWFzeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRWFzeVwiPkVhc3k8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhcmRcIj5IYXJkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjaG9sYXJcIj5TY2hvbGFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cInF1ZXN0XCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlF1ZXN0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5xdWVzdH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7IC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLCBxdWVzdDogZS50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBBPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAwKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1syXX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBEPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzNdfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJjb3JyZWN0X2Fuc1wiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5Db3JyZWN0IEFuc3dlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RfYW5zOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXX0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzFdfT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzFdfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl19PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl19XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXX0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCIgKFRoaXMgaXMgbm90IGFsbG93aW5nIGFjdGlvbiB0byB3b3JrIHByb3Blcmx5KVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbGlkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdFF1ZXN0aW9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXQgUXVlc3Rpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBzaW1wbGUtbGluayBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW4vbG9naW5UZWFjaGVyXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFscmVhZHkgcmVnaXN0ZXJlZCwgZ28gdG8gTG9naW5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8gY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuLy8gICB0ZWFjaGVyTG9naW5IYW5kbGVyOiAoZGF0YSkgPT4gZGlzcGF0Y2godXNlckxvZ2luKGRhdGEpKSxcclxuLy8gfSk7XHJcbi8vIGNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbi8vIH0pO1xyXG5leHBvcnQgZGVmYXVsdCBhZGRRdWVzdGlvbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkZvcm0iLCJCdXR0b24iLCJheGlvcyIsInVzZVJvdXRlciIsImFkZFF1ZXN0aW9uIiwicHJvcHMiLCJpbml0aWFsVmFsdWVzIiwic3ViamVjdCIsImF1dGhvciIsIm1vZGVsIiwicXVlc3Rpb24iLCJxdWVzdCIsIm9wdGlvbnMiLCJjb3JyZWN0X2FucyIsIm1hcmtzIiwieWVhciIsImRpZmZpY3VsdHkiLCJuZXdRdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwic3RvcmVkX3RlYWNoZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGVhY2hlcl9uYW1lIiwicm91dGVyIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImFkZE9wdGlvbnMiLCJlIiwiaW5kZXgiLCJ0ZW1wQXJyYXkiLCJvblN1Ym1pdFF1ZXN0aW9uIiwicmVzcG9zbmUiLCJwb3N0IiwibWVzc2FnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImN1cnNvciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9