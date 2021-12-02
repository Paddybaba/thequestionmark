"use strict";
(() => {
var exports = {};
exports.id = "pages/question/addQuestion2";
exports.ids = ["pages/question/addQuestion2"];
exports.modules = {

/***/ "./pages/api/mypaths.js":
/*!******************************!*\
  !*** ./pages/api/mypaths.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const path = "https://quiz-server-paddy.herokuapp.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);

/***/ }),

/***/ "./pages/question/addQuestion2.js":
/*!****************************************!*\
  !*** ./pages/question/addQuestion2.js ***!
  \****************************************/
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
/* harmony import */ var _api_mypaths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/mypaths */ "./pages/api/mypaths.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-file-resizer */ "react-image-file-resizer");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\DEV\\MCQ\\thequestionmark\\pages\\question\\addQuestion2.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //// Resize image before uploading



const resizeFile = file => new Promise((resolve, reject) => {
  react_image_file_resizer__WEBPACK_IMPORTED_MODULE_7___default().imageFileResizer(file, 600, 400, ".JPEG", 100, 0, uri => {
    resolve(uri);
  }, "file");
});

const addQuestion2 = props => {
  console.log("path", _api_mypaths__WEBPACK_IMPORTED_MODULE_6__.default);
  var stored_teacher;
  const initialValues = {
    subject: "Science",
    author: "",
    class: [],
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
  const empty_image_array = [];
  const {
    0: newQuestion,
    1: setQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues);
  const {
    0: questImage,
    1: setQuestImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: allImage,
    1: setAllImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    quest_image: null,
    optionA: null,
    optionB: null,
    optionC: null,
    optionD: null
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    stored_teacher = JSON.parse(localStorage.getItem("teacher")).teacher_name;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      author: stored_teacher
    }));
  }, []);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(); ///// Get Image file from input, resize it and add to images State

  const getQuestImage = async event => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages(_objectSpread(_objectSpread({}, allImage), {}, {
        quest_image: resizedImage
      }));
      console.log("All images : ", allImage);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getOptionImageA = async event => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages(_objectSpread(_objectSpread({}, allImage), {}, {
        optionA: resizedImage
      }));
      console.log(allImage);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getOptionImageB = async event => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages(_objectSpread(_objectSpread({}, allImage), {}, {
        optionB: resizedImage
      }));
      console.log(allImage);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getOptionImageC = async event => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages(_objectSpread(_objectSpread({}, allImage), {}, {
        optionC: resizedImage
      }));
      console.log(allImage);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getOptionImageD = async event => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages(_objectSpread(_objectSpread({}, allImage), {}, {
        optionD: resizedImage
      }));
      console.log(allImage);
    } catch (err) {
      console.log(err.message);
    }
  }; //   function validateForm() {
  //     return (
  //       newQuestion.question.quest.length > 0 &&
  //       newQuestion.question.correct_ans.length > 0
  //     );
  //   }


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
    tempArray[index].option = e.target.value;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
      question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
        options: tempArray
      })
    }));
  };

  async function onSubmitQuestion() {
    try {
      // console.log("Images", allImage)
      // console.log("question", newQuestion)
      const resposne = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${_api_mypaths__WEBPACK_IMPORTED_MODULE_6__.default}/addQuestion`, {
        newQuestion,
        allImage
      });
      const message = await resposne.data;
      console.log("message", message);
      setQuestion(_objectSpread(_objectSpread({}, initialValues), {}, {
        subject: newQuestion.subject,
        author: newQuestion.author
      }));
    } catch (err) {
      console.log(err.message);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "row gx-0",
    style: {
      backgroundColor: "#d1d1d1"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "col-10 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
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
        lineNumber: 161,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold mb-3",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
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
              lineNumber: 181,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            defaultValue: newQuestion.author,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
            name: "model",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "All-Text",
              children: "All-Text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Image-Question-Text-Options",
              children: "Image-Question-Text-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Text-Question-Image-Options",
              children: "Text-Question-Image-Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Combined",
              children: "Combined"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "number",
            name: "year",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
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
              lineNumber: 231,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          style: {
            backgroundColor: "honeydew",
            padding: "5px",
            borderRadius: 4
          },
          size: "lg",
          controlId: "quest",
          children: [newQuestion.model == "Image-Question-Text-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: [!allImage.quest_image ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
              children: "Question Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 42
            }, undefined) : null, !allImage.quest_image ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              style: {
                height: 100,
                width: 120,
                padding: 2,
                borderRadius: 5
              },
              src: URL.createObjectURL(allImage.quest_image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              id: "quest-image",
              accept: "image/*",
              onChange: e => getQuestImage(e),
              className: "image-input",
              name: "quest-image",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 15
          }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Question Text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            style: {
              maxHeight: 300
            },
            contentEditable: true,
            type: "text",
            value: newQuestion.question.quest.que,
            onChange: e => {
              setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
                question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
                  quest: e.target.value
                })
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: [allImage.optionA == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
              children: "Option A Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 46
            }, undefined) : null, !allImage.optionA ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              style: {
                height: 100,
                width: 120,
                padding: 2,
                borderRadius: 5
              },
              src: URL.createObjectURL(allImage.optionA)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              id: "optionA-image",
              accept: "image/*",
              onChange: e => getOptionImageA(e),
              className: "image-input",
              name: "quest-image",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 15
          }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[0].option,
            onChange: e => addOptions(e, 0)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          size: "lg",
          controlId: "option",
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: [allImage.optionB == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
              children: "Option B Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 46
            }, undefined) : null, !allImage.optionB ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              style: {
                height: 100,
                width: 120,
                padding: 2,
                borderRadius: 5
              },
              src: URL.createObjectURL(allImage.optionB)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              id: "optionB-image",
              accept: "image/*",
              onChange: e => getOptionImageB(e),
              className: "image-input",
              name: "quest-image",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 15
          }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[1].option,
            onChange: e => addOptions(e, 1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: [allImage.optionC == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
              children: "Option C Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 46
            }, undefined) : null, !allImage.optionC ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              style: {
                height: 100,
                width: 120,
                padding: 2,
                borderRadius: 5
              },
              src: URL.createObjectURL(allImage.optionC)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              id: "optionC-image",
              accept: "image/*",
              onChange: e => getOptionImageC(e),
              className: "image-input",
              name: "quest-image",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 394,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 15
          }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[2].option,
            onChange: e => addOptions(e, 2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "option",
          style: {
            backgroundColor: "#ffe3fb",
            padding: "5px",
            borderRadius: 4
          },
          children: [newQuestion.model == "Text-Question-Image-Options" || newQuestion.model == "Combined" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: [allImage.optionD == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
              children: "Option D Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 46
            }, undefined) : null, !allImage.optionD ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              style: {
                height: 100,
                width: 120,
                padding: 2,
                borderRadius: 5
              },
              src: URL.createObjectURL(allImage.optionD)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              id: "optionD-image",
              accept: "image/*",
              onChange: e => getOptionImageD(e),
              className: "image-input",
              name: "quest-image",
              type: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 15
          }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Option D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
            type: "text",
            value: newQuestion.question.options[3].option,
            onChange: e => addOptions(e, 3)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          className: "mt-4",
          size: "lg",
          controlId: "correct_ans",
          style: {
            color: "#32a852"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
            children: "Correct Answer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
            className: "form-select",
            style: {
              backgroundColor: "honeydew"
            },
            "aria-label": "Default select example",
            onChange: e => {
              setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, {
                question: _objectSpread(_objectSpread({}, newQuestion.question), {}, {
                  correct_ans: e.target.value
                })
              }));
            } // defaultValue={newQuestion.question.options[0]}
            ,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[0].option,
              children: newQuestion.question.options[0].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[1].option,
              children: newQuestion.question.options[1].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[2].option,
              children: newQuestion.question.options[2].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
              value: newQuestion.question.options[3].option,
              children: newQuestion.question.options[3].option
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 458,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
          block: "true",
          className: "mt-4 mb-5" // type="submit" (This is not allowing action to work properly)
          // disabled={!validateForm()}
          ,
          onClick: onSubmitQuestion,
          children: "Submit Question"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 5
  }, undefined);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addQuestion2);

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

/***/ "react-image-file-resizer":
/*!*******************************************!*\
  !*** external "react-image-file-resizer" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("react-image-file-resizer");

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
var __webpack_exports__ = (__webpack_exec__("./pages/question/addQuestion2.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxDQUFDWCxRQUFaLENBQXFCSSxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0M7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFyQkYsZUF3QkU7QUFBUSxtQkFBSyxFQUFFTSxXQUFXLENBQUNYLFFBQVosQ0FBcUJJLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQyxNQUEvQztBQUFBLHdCQUNHTSxXQUFXLENBQUNYLFFBQVosQ0FBcUJJLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhSRixlQTRURSw4REFBQywrREFBRDtBQUNFLGVBQUssRUFBQyxNQURSO0FBRUUsbUJBQVMsRUFBQyxXQUZaLENBR0U7QUFDQTtBQUpGO0FBS0UsaUJBQU8sRUFBRXlDLGdCQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTVURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBK1ZELENBL2RELEVBZ2VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsaUVBQWV4RCxZQUFmOzs7Ozs7Ozs7O0FDaGdCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvYXBpL215cGF0aHMuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24yLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSBcImh0dHBzOi8vcXVpei1zZXJ2ZXItcGFkZHkuaGVyb2t1YXBwLmNvbVwiO1xyXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCIuLi9hcGkvbXlwYXRoc1wiO1xyXG5pbXBvcnQgUmVzaXplciBmcm9tIFwicmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyXCI7XHJcblxyXG4vLy8vIFJlc2l6ZSBpbWFnZSBiZWZvcmUgdXBsb2FkaW5nXHJcbmNvbnN0IHJlc2l6ZUZpbGUgPSAoZmlsZSkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBSZXNpemVyLmltYWdlRmlsZVJlc2l6ZXIoXHJcbiAgICAgIGZpbGUsXHJcbiAgICAgIDYwMCxcclxuICAgICAgNDAwLFxyXG4gICAgICBcIi5KUEVHXCIsXHJcbiAgICAgIDEwMCxcclxuICAgICAgMCxcclxuICAgICAgKHVyaSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodXJpKTtcclxuICAgICAgfSxcclxuICAgICAgXCJmaWxlXCJcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBhZGRRdWVzdGlvbjIgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInBhdGhcIiwgcGF0aCk7XHJcbiAgdmFyIHN0b3JlZF90ZWFjaGVyO1xyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbiAgICBhdXRob3I6IFwiXCIsXHJcbiAgICBjbGFzczogW10sXHJcbiAgICBtb2RlbDogXCJBbGwtVGV4dFwiLCAvL090aGVyIGltYWdlc1xyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IHsgaW1hZ2U6IFwiXCIsIHF1ZTogXCJcIiB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkFcIiB9LFxyXG4gICAgICAgIHsgaW1hZ2U6IFwiXCIsIG9wdGlvbjogXCJCXCIgfSxcclxuICAgICAgICB7IGltYWdlOiBcIlwiLCBvcHRpb246IFwiQ1wiIH0sXHJcbiAgICAgICAgeyBpbWFnZTogXCJcIiwgb3B0aW9uOiBcIkRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb3JyZWN0X2FuczogXCJBXCIsXHJcbiAgICAgIG1hcmtzOiAwLFxyXG4gICAgfSxcclxuICAgIHllYXI6IDIwMjEsXHJcbiAgICBkaWZmaWN1bHR5OiBcIkVhc3lcIiwgLy9lYXN5LCBtZWRpdW0gLGhhcmRcclxuICB9O1xyXG5cclxuICBjb25zdCBlbXB0eV9pbWFnZV9hcnJheSA9IFtdO1xyXG4gIGNvbnN0IFtuZXdRdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcbiAgY29uc3QgW3F1ZXN0SW1hZ2UsIHNldFF1ZXN0SW1hZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYWxsSW1hZ2UsIHNldEFsbEltYWdlc10gPSB1c2VTdGF0ZSh7cXVlc3RfaW1hZ2UgOiBudWxsICwgb3B0aW9uQSA6IG51bGwsIG9wdGlvbkI6IG51bGwsIG9wdGlvbkM6IG51bGwsIG9wdGlvbkQ6IG51bGx9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdG9yZWRfdGVhY2hlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyXCIpKS50ZWFjaGVyX25hbWU7XHJcbiAgICBzZXRRdWVzdGlvbih7IC4uLm5ld1F1ZXN0aW9uLCBhdXRob3I6IHN0b3JlZF90ZWFjaGVyIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vLy8vIEdldCBJbWFnZSBmaWxlIGZyb20gaW5wdXQsIHJlc2l6ZSBpdCBhbmQgYWRkIHRvIGltYWdlcyBTdGF0ZVxyXG4gIGNvbnN0IGdldFF1ZXN0SW1hZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICBjb25zdCByZXNpemVkSW1hZ2UgPSBhd2FpdCByZXNpemVGaWxlKGltYWdlKTtcclxuICAgICAgc2V0QWxsSW1hZ2VzKHsuLi5hbGxJbWFnZSwgcXVlc3RfaW1hZ2UgOiByZXNpemVkSW1hZ2V9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBpbWFnZXMgOiBcIiwgYWxsSW1hZ2UpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE9wdGlvbkltYWdlQSA9IGFzeW5jKGV2ZW50KSA9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IHJlc2l6ZWRJbWFnZSA9IGF3YWl0IHJlc2l6ZUZpbGUoaW1hZ2UpO1xyXG4gICAgIHNldEFsbEltYWdlcyh7Li4uYWxsSW1hZ2UsIG9wdGlvbkEgOiByZXNpemVkSW1hZ2V9KVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxJbWFnZSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZ2V0T3B0aW9uSW1hZ2VCID0gYXN5bmMoZXZlbnQpID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgY29uc3QgcmVzaXplZEltYWdlID0gYXdhaXQgcmVzaXplRmlsZShpbWFnZSk7XHJcbiAgICAgc2V0QWxsSW1hZ2VzKHsuLi5hbGxJbWFnZSwgb3B0aW9uQiA6IHJlc2l6ZWRJbWFnZX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbEltYWdlKVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBnZXRPcHRpb25JbWFnZUMgPSBhc3luYyhldmVudCkgPT57XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICBjb25zdCByZXNpemVkSW1hZ2UgPSBhd2FpdCByZXNpemVGaWxlKGltYWdlKTtcclxuICAgICBzZXRBbGxJbWFnZXMoey4uLmFsbEltYWdlLCBvcHRpb25DIDogcmVzaXplZEltYWdlfSlcclxuICAgICAgY29uc29sZS5sb2coYWxsSW1hZ2UpXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGdldE9wdGlvbkltYWdlRCA9IGFzeW5jKGV2ZW50KSA9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IHJlc2l6ZWRJbWFnZSA9IGF3YWl0IHJlc2l6ZUZpbGUoaW1hZ2UpO1xyXG4gICAgIHNldEFsbEltYWdlcyh7Li4uYWxsSW1hZ2UsIG9wdGlvbkQgOiByZXNpemVkSW1hZ2V9KVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxJbWFnZSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcbiAgLy8gICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgLy8gICAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgbmV3UXVlc3Rpb24ucXVlc3Rpb24ucXVlc3QubGVuZ3RoID4gMCAmJlxyXG4gIC8vICAgICAgIG5ld1F1ZXN0aW9uLnF1ZXN0aW9uLmNvcnJlY3RfYW5zLmxlbmd0aCA+IDBcclxuICAvLyAgICAgKTtcclxuICAvLyAgIH1cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJuYW1lIG9mIGZpZWxkIDpcIiwgbmFtZSk7XHJcbiAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkT3B0aW9ucyA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgdGVtcEFycmF5ID0gbmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9ucztcclxuICAgIHRlbXBBcnJheVtpbmRleF0ub3B0aW9uID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICBxdWVzdGlvbjogeyAuLi5uZXdRdWVzdGlvbi5xdWVzdGlvbiwgb3B0aW9uczogdGVtcEFycmF5IH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdFF1ZXN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJJbWFnZXNcIiwgYWxsSW1hZ2UpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVlc3Rpb25cIiwgbmV3UXVlc3Rpb24pXHJcbiAgICAgIGNvbnN0IHJlc3Bvc25lID0gYXdhaXQgYXhpb3MucG9zdChgJHtwYXRofS9hZGRRdWVzdGlvbmAsIHtuZXdRdWVzdGlvbiwgYWxsSW1hZ2V9KTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3Bvc25lLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgc2V0UXVlc3Rpb24oe1xyXG4gICAgICAgIC4uLmluaXRpYWxWYWx1ZXMsXHJcbiAgICAgICAgc3ViamVjdDogbmV3UXVlc3Rpb24uc3ViamVjdCxcclxuICAgICAgICBhdXRob3I6IG5ld1F1ZXN0aW9uLmF1dGhvcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd4LTBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2QxZDFkMVwiIH19PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmV3IFF1ZXN0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBtdC01IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGUtbGlua1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDUsIHJpZ2h0OiAxMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIGZzLTMgZnctYm9sZCBtYi0zXCI+XHJcbiAgICAgICAgICBBZGQgTmV3IFF1ZXN0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ0ZWFjaGVyTmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5TdWJqZWN0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5HZW5lcmFsIEtub3dsZWRnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2llbmNlXCI+U2NpZW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3UXVlc3Rpb24uYXV0aG9yfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwibW9kZWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+TW9kZWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwibW9kZWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbC1UZXh0XCI+QWxsLVRleHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW1hZ2UtUXVlc3Rpb24tVGV4dC1PcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICBJbWFnZS1RdWVzdGlvbi1UZXh0LU9wdGlvbnNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICBUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29tYmluZWRcIj5Db21iaW5lZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ5ZWFyXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlllYXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnllYXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cImRpZmZpY3VsdHlcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+RGlmZmljdWx0eTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkaWZmaWN1bHR5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJFYXN5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFYXN5XCI+RWFzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFyZFwiPkhhcmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2Nob2xhclwiPlNjaG9sYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiaG9uZXlkZXdcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwicXVlc3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJJbWFnZS1RdWVzdGlvbi1UZXh0LU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHshYWxsSW1hZ2UucXVlc3RfaW1hZ2UgPyA8Rm9ybS5MYWJlbD5RdWVzdGlvbiBJbWFnZTwvRm9ybS5MYWJlbD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgeyFhbGxJbWFnZS5xdWVzdF9pbWFnZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChhbGxJbWFnZS5xdWVzdF9pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicXVlc3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBnZXRRdWVzdEltYWdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5RdWVzdGlvbiBUZXh0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMDAgfX1cclxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLnF1ZXN0LnF1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3UXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7IC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLCBxdWVzdDogZS50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZTNmYlwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJUZXh0LVF1ZXN0aW9uLUltYWdlLU9wdGlvbnNcIiB8fFxyXG4gICAgICAgICAgICBuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIkNvbWJpbmVkXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICB7YWxsSW1hZ2Uub3B0aW9uQSA9PSBudWxsID8gPEZvcm0uTGFiZWw+T3B0aW9uIEEgSW1hZ2U8L0Zvcm0uTGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHshYWxsSW1hZ2Uub3B0aW9uQSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChhbGxJbWFnZS5vcHRpb25BKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvcHRpb25BLWltYWdlXCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBnZXRPcHRpb25JbWFnZUEoZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmUzZmJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwib3B0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ld1F1ZXN0aW9uLm1vZGVsID09IFwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCIgfHxcclxuICAgICAgICAgICAgbmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJDb21iaW5lZFwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAge2FsbEltYWdlLm9wdGlvbkIgPT0gbnVsbCA/IDxGb3JtLkxhYmVsPk9wdGlvbiBCIEltYWdlPC9Gb3JtLkxhYmVsPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7IWFsbEltYWdlLm9wdGlvbkIgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYWxsSW1hZ2Uub3B0aW9uQil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgIGlkPVwib3B0aW9uQi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0T3B0aW9uSW1hZ2VCKGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5PcHRpb24gQjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1sxXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBhZGRPcHRpb25zKGUsIDEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cIm9wdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmUzZmJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ld1F1ZXN0aW9uLm1vZGVsID09IFwiVGV4dC1RdWVzdGlvbi1JbWFnZS1PcHRpb25zXCIgfHxcclxuICAgICAgICAgICAgbmV3UXVlc3Rpb24ubW9kZWwgPT0gXCJDb21iaW5lZFwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAge2FsbEltYWdlLm9wdGlvbkMgPT0gbnVsbCA/IDxGb3JtLkxhYmVsPk9wdGlvbiBDIEltYWdlPC9Gb3JtLkxhYmVsPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7IWFsbEltYWdlLm9wdGlvbkMgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYWxsSW1hZ2Uub3B0aW9uQyl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgIGlkPVwib3B0aW9uQy1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0T3B0aW9uSW1hZ2VDKGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T3B0aW9uIEM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMl0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gYWRkT3B0aW9ucyhlLCAyKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJvcHRpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZlM2ZiXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5tb2RlbCA9PSBcIlRleHQtUXVlc3Rpb24tSW1hZ2UtT3B0aW9uc1wiIHx8XHJcbiAgICAgICAgICAgIG5ld1F1ZXN0aW9uLm1vZGVsID09IFwiQ29tYmluZWRcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgIHthbGxJbWFnZS5vcHRpb25EID09IG51bGwgPyA8Rm9ybS5MYWJlbD5PcHRpb24gRCBJbWFnZTwvRm9ybS5MYWJlbD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgeyFhbGxJbWFnZS5vcHRpb25EID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGFsbEltYWdlLm9wdGlvbkQpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgXHJcbiAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbkQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldE9wdGlvbkltYWdlRChlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk9wdGlvbiBEPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzNdLm9wdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGFkZE9wdGlvbnMoZSwgMyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgY29udHJvbElkPVwiY29ycmVjdF9hbnNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMzJhODUyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+Q29ycmVjdCBBbnN3ZXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIgfX1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLm5ld1F1ZXN0aW9uLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RfYW5zOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1swXS5vcHRpb259PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMF0ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbMV0ub3B0aW9ufT5cclxuICAgICAgICAgICAgICAgIHtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzFdLm9wdGlvbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdRdWVzdGlvbi5xdWVzdGlvbi5vcHRpb25zWzJdLm9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1syXS5vcHRpb259XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3UXVlc3Rpb24ucXVlc3Rpb24ub3B0aW9uc1szXS5vcHRpb259PlxyXG4gICAgICAgICAgICAgICAge25ld1F1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvbnNbM10ub3B0aW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBtYi01XCJcclxuICAgICAgICAgICAgLy8gdHlwZT1cInN1Ym1pdFwiIChUaGlzIGlzIG5vdCBhbGxvd2luZyBhY3Rpb24gdG8gd29yayBwcm9wZXJseSlcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQ9eyF2YWxpZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXRRdWVzdGlvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0IFF1ZXN0aW9uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgey8qIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHNpbXBsZS1saW5rIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpbi9sb2dpblRlYWNoZXJcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWxyZWFkeSByZWdpc3RlcmVkLCBnbyB0byBMb2dpblxyXG4gICAgICAgIDwvcD4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8gY29uc3QgbWR0cCA9IChkaXNwYXRjaCkgPT4gKHtcclxuLy8gICB0ZWFjaGVyTG9naW5IYW5kbGVyOiAoZGF0YSkgPT4gZGlzcGF0Y2godXNlckxvZ2luKGRhdGEpKSxcclxuLy8gfSk7XHJcbi8vIGNvbnN0IG1zdHAgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgc3R1ZGVudDogc3RhdGUuc3R1ZGVudFJlZHVjZXIsXHJcbi8vIH0pO1xyXG5leHBvcnQgZGVmYXVsdCBhZGRRdWVzdGlvbjI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInBhdGgiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkZvcm0iLCJCdXR0b24iLCJheGlvcyIsInVzZVJvdXRlciIsIlJlc2l6ZXIiLCJyZXNpemVGaWxlIiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2VGaWxlUmVzaXplciIsInVyaSIsImFkZFF1ZXN0aW9uMiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0b3JlZF90ZWFjaGVyIiwiaW5pdGlhbFZhbHVlcyIsInN1YmplY3QiLCJhdXRob3IiLCJjbGFzcyIsIm1vZGVsIiwicXVlc3Rpb24iLCJxdWVzdCIsImltYWdlIiwicXVlIiwib3B0aW9ucyIsIm9wdGlvbiIsImNvcnJlY3RfYW5zIiwibWFya3MiLCJ5ZWFyIiwiZGlmZmljdWx0eSIsImVtcHR5X2ltYWdlX2FycmF5IiwibmV3UXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsInF1ZXN0SW1hZ2UiLCJzZXRRdWVzdEltYWdlIiwiYWxsSW1hZ2UiLCJzZXRBbGxJbWFnZXMiLCJxdWVzdF9pbWFnZSIsIm9wdGlvbkEiLCJvcHRpb25CIiwib3B0aW9uQyIsIm9wdGlvbkQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGVhY2hlcl9uYW1lIiwicm91dGVyIiwiZ2V0UXVlc3RJbWFnZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJyZXNpemVkSW1hZ2UiLCJlcnIiLCJtZXNzYWdlIiwiZ2V0T3B0aW9uSW1hZ2VBIiwiZ2V0T3B0aW9uSW1hZ2VCIiwiZ2V0T3B0aW9uSW1hZ2VDIiwiZ2V0T3B0aW9uSW1hZ2VEIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJhZGRPcHRpb25zIiwiZSIsImluZGV4IiwidGVtcEFycmF5Iiwib25TdWJtaXRRdWVzdGlvbiIsInJlc3Bvc25lIiwicG9zdCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY3Vyc29yIiwicHVzaCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ3aWR0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1heEhlaWdodCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==