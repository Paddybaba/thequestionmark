"use strict";
self["webpackHotUpdate_N_E"]("pages/question/addQuestion",{

/***/ "./pages/question/addQuestion.js":
/*!***************************************!*\
  !*** ./pages/question/addQuestion.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\question\\addQuestion.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var addQuestion = function addQuestion(props) {
  _s();

  // const [teacher, setTeacher] = useState("Anup");
  var initialValues = {
    subject: "",
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
    difficulty: "" //easy, medium ,hard

  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    initialValues.author = JSON.parse(localStorage.getItem("teacher")).teacher_name; // setTeacher(JSON.parse(localStorage.getItem("teacher")).teacher_name);
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValues),
      newQuestion = _useState[0],
      setQuestion = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); //   function validateForm() {
  //     return email.length > 0 && password.length > 0 && teacherName.length > 0;
  //   }

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setQuestion(_objectSpread(_objectSpread({}, newQuestion), {}, (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));
  }; //   async function handleSubmit() {
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


  console.log(newQuestion);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "row gx-0" // style={{ height: "100vh", backgroundColor: "honeydew" }}
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "col-7 mt-5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
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
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "text-center text-uppercase fs-3 fw-bold my-5",
        children: "Add New Question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
          size: "lg",
          controlId: "teacherName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Label, {
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
            name: "subject",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Science",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "Mathematics",
              children: "Mathematics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "General Knowledge",
              children: "General Knowledge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "Science",
              children: "Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "English",
              children: "English"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "author",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Label, {
            children: "Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Control, {
            type: "text",
            defaultValue: teacher,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "model",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Label, {
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Control, {
            type: "text",
            value: newQuestion.model,
            onChange: handleInputChange,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "year",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Label, {
            children: "Year"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Control, {
            type: "number",
            value: newQuestion.year,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
          className: "mt-4",
          size: "lg",
          controlId: "difficulty",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default.Label, {
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
            name: "difficulty",
            className: "form-select",
            "aria-label": "Default select example",
            onChange: handleInputChange,
            defaultValue: "Easy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "Easy",
              children: "Easy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "Medium",
              children: "Medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "Hard",
              children: "Hard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "Scholar",
              children: "Scholar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
          block: "true",
          className: "mt-4" // type="submit" (This is not allowing action to work properly)
          // disabled={!validateForm()}
          ,
          onClick: function onClick() {},
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        className: "mt-4 simple-link ",
        onClick: function onClick() {
          return router.push("/login/loginTeacher");
        },
        children: "Already registered, go to Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, _this);
}; // const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });


_s(addQuestion, "sTJX+B7wMaraxFytLPPwUHA+07U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24uOTQ2NDRiZjZiYzYyOGM2MDFhYzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0I7QUFFQSxNQUFNQyxhQUFhLEdBQUc7QUFDcEJDLElBQUFBLE9BQU8sRUFBRSxFQURXO0FBRXBCQyxJQUFBQSxNQUFNLEVBQUUsRUFGWTtBQUdwQkMsSUFBQUEsS0FBSyxFQUFFLE1BSGE7QUFHTDtBQUNmQyxJQUFBQSxRQUFRLEVBQUU7QUFDUkMsTUFBQUEsS0FBSyxFQUFFLEVBREM7QUFFUkMsTUFBQUEsT0FBTyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixDQUZEO0FBR1JDLE1BQUFBLFdBQVcsRUFBRSxFQUhMO0FBSVJDLE1BQUFBLEtBQUssRUFBRTtBQUpDLEtBSlU7QUFVcEJDLElBQUFBLElBQUksRUFBRSxJQVZjO0FBV3BCQyxJQUFBQSxVQUFVLEVBQUUsRUFYUSxDQVdKOztBQVhJLEdBQXRCO0FBYUFuQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFMsSUFBQUEsYUFBYSxDQUFDRSxNQUFkLEdBQXVCUyxJQUFJLENBQUNDLEtBQUwsQ0FDckJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQURxQixFQUVyQkMsWUFGRixDQURjLENBSWQ7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU1BLGtCQUFtQ3ZCLCtDQUFRLENBQUNRLGFBQUQsQ0FBM0M7QUFBQSxNQUFPZ0IsV0FBUDtBQUFBLE1BQW9CQyxXQUFwQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdyQixzREFBUyxFQUF4QixDQXhCNkIsQ0EwQjdCO0FBQ0E7QUFDQTs7QUFDQSxNQUFNc0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFDbkMsd0JBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsUUFBUUMsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFFBQWNDLEtBQWQsaUJBQWNBLEtBQWQ7QUFDQU4sSUFBQUEsV0FBVyxpQ0FDTkQsV0FETSx1SUFFUk0sSUFGUSxFQUVEQyxLQUZDLEdBQVg7QUFJRCxHQU5ELENBN0I2QixDQW9DN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFdBQVo7QUFDQSxzQkFDRTtBQUNFLGFBQVMsRUFBQyxVQURaLENBRUU7QUFGRjtBQUFBLDRCQUlFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFPRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVVLFVBQUFBLFFBQVEsRUFBRSxVQUFaO0FBQXdCQyxVQUFBQSxHQUFHLEVBQUUsQ0FBN0I7QUFBZ0NDLFVBQUFBLEtBQUssRUFBRSxFQUF2QztBQUEyQ0MsVUFBQUEsTUFBTSxFQUFFO0FBQW5ELFNBRlQ7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVgsTUFBTSxDQUFDWSxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFXRSw4REFBQyx5REFBRDtBQUFBLGdDQUNFLDhEQUFDLCtEQUFEO0FBQVksY0FBSSxFQUFDLElBQWpCO0FBQXNCLG1CQUFTLEVBQUMsYUFBaEM7QUFBQSxrQ0FDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxTQURQO0FBRUUscUJBQVMsRUFBQyxhQUZaO0FBR0UsMEJBQVcsd0JBSGI7QUFJRSxvQkFBUSxFQUFFWCxpQkFKWjtBQUtFLHdCQUFZLEVBQUMsU0FMZjtBQUFBLG9DQU9FO0FBQVEsbUJBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBUUU7QUFBUSxtQkFBSyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBUSxtQkFBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUFRLG1CQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBZ0JFLDhEQUFDLCtEQUFEO0FBQVksbUJBQVMsRUFBQyxNQUF0QjtBQUE2QixjQUFJLEVBQUMsSUFBbEM7QUFBdUMsbUJBQVMsRUFBQyxRQUFqRDtBQUFBLGtDQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFBYyxnQkFBSSxFQUFDLE1BQW5CO0FBQTBCLHdCQUFZLEVBQUVZLE9BQXhDO0FBQWlELG9CQUFRO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQW9CRSw4REFBQywrREFBRDtBQUFZLG1CQUFTLEVBQUMsTUFBdEI7QUFBNkIsY0FBSSxFQUFDLElBQWxDO0FBQXVDLG1CQUFTLEVBQUMsT0FBakQ7QUFBQSxrQ0FDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLGlFQUFEO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsaUJBQUssRUFBRWYsV0FBVyxDQUFDYixLQUZyQjtBQUdFLG9CQUFRLEVBQUVnQixpQkFIWjtBQUlFLG9CQUFRO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJGLGVBNkJFLDhEQUFDLCtEQUFEO0FBQVksbUJBQVMsRUFBQyxNQUF0QjtBQUE2QixjQUFJLEVBQUMsSUFBbEM7QUFBdUMsbUJBQVMsRUFBQyxNQUFqRDtBQUFBLGtDQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxpQkFBSyxFQUFFSCxXQUFXLENBQUNQLElBRnJCO0FBR0Usb0JBQVEsRUFBRVU7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkYsZUFxQ0UsOERBQUMsK0RBQUQ7QUFBWSxtQkFBUyxFQUFDLE1BQXRCO0FBQTZCLGNBQUksRUFBQyxJQUFsQztBQUF1QyxtQkFBUyxFQUFDLFlBQWpEO0FBQUEsa0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsWUFEUDtBQUVFLHFCQUFTLEVBQUMsYUFGWjtBQUdFLDBCQUFXLHdCQUhiO0FBSUUsb0JBQVEsRUFBRUEsaUJBSlo7QUFLRSx3QkFBWSxFQUFDLE1BTGY7QUFBQSxvQ0FPRTtBQUFRLG1CQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQVEsbUJBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBUSxtQkFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUFRLG1CQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRixlQW9ERSw4REFBQywyREFBRDtBQUNFLGVBQUssRUFBQyxNQURSO0FBRUUsbUJBQVMsRUFBQyxNQUZaLENBR0U7QUFDQTtBQUpGO0FBS0UsaUJBQU8sRUFBRSxtQkFBTSxDQUFFLENBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQXlFRTtBQUNFLGlCQUFTLEVBQUMsbUJBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUQsTUFBTSxDQUFDWSxJQUFQLENBQVkscUJBQVosQ0FBTjtBQUFBLFNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwRkQsQ0EzSkQsRUE0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FqS01oQztVQXdCV0Q7OztBQTBJakIsK0RBQWVDLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3Rpb24vYWRkUXVlc3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgYWRkUXVlc3Rpb24gPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zdCBbdGVhY2hlciwgc2V0VGVhY2hlcl0gPSB1c2VTdGF0ZShcIkFudXBcIik7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICBzdWJqZWN0OiBcIlwiLFxyXG4gICAgYXV0aG9yOiBcIlwiLFxyXG4gICAgbW9kZWw6IFwidGV4dFwiLCAvL090aGVyIGltYWdlc1xyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgcXVlc3Q6IFwiXCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcclxuICAgICAgY29ycmVjdF9hbnM6IFwiXCIsXHJcbiAgICAgIG1hcmtzOiAwLFxyXG4gICAgfSxcclxuICAgIHllYXI6IDIwMjEsXHJcbiAgICBkaWZmaWN1bHR5OiBcIlwiLCAvL2Vhc3ksIG1lZGl1bSAsaGFyZFxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxWYWx1ZXMuYXV0aG9yID0gSlNPTi5wYXJzZShcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyXCIpXHJcbiAgICApLnRlYWNoZXJfbmFtZTtcclxuICAgIC8vIHNldFRlYWNoZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJcIikpLnRlYWNoZXJfbmFtZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IFtuZXdRdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAvLyAgICAgcmV0dXJuIGVtYWlsLmxlbmd0aCA+IDAgJiYgcGFzc3dvcmQubGVuZ3RoID4gMCAmJiB0ZWFjaGVyTmFtZS5sZW5ndGggPiAwO1xyXG4gIC8vICAgfVxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBzZXRRdWVzdGlvbih7XHJcbiAgICAgIC4uLm5ld1F1ZXN0aW9uLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAvLyAgICAgdHJ5IHtcclxuICAvLyAgICAgICBjb25zdCByZXNwb3NuZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgLy8gICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RlclRlYWNoZXJcIixcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgdGVhY2hlcl9pZDogZW1haWwsXHJcbiAgLy8gICAgICAgICAgIHRlYWNoZXJfbmFtZTogdGVhY2hlck5hbWUsXHJcbiAgLy8gICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICApO1xyXG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb3NuZS5kYXRhOyAvLyByZWNlaXZlIDogUmVnaXN0ZXJlZCBTdWNjZXNmdWxseVxyXG5cclxuICAvLyAgICAgICBpZiAocmVzcG9zbmUuc3RhdHVzID09PSA0MDAgfHwgIWRhdGEpIHtcclxuICAvLyAgICAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyByZWdpc3RyYXRpb24gISEhXCIpO1xyXG4gIC8vICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICBjb25zdCB0ZWFjaGVyID0ge1xyXG4gIC8vICAgICAgICAgICB0ZWFjaGVyX2lkOiBlbWFpbCxcclxuICAvLyAgICAgICAgICAgdGVhY2hlcl9uYW1lOiB0ZWFjaGVyTmFtZSxcclxuICAvLyAgICAgICAgIH07XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlRlYWNoZXIgUmVnaXN0ZXJlZFwiLCB0ZWFjaGVyKTtcclxuICAvLyAgICAgICAgIC8vIHByb3BzLnVzZXJMb2dpbkhhbmRsZXIoc3R1ZGVudCk7ICAgICAgICoqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gICAgICAgICAvLyByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIik7ICAgICAgICAqKioqKioqKioqKioqKioqKlxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgLy8gICAgICAgYWxlcnQoXCJmZXRjaCBlcnJvclwiKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICBjb25zb2xlLmxvZyhuZXdRdWVzdGlvbik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicm93IGd4LTBcIlxyXG4gICAgICAvLyBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgYmFja2dyb3VuZENvbG9yOiBcImhvbmV5ZGV3XCIgfX1cclxuICAgID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5ldyBRdWVzdGlvbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBtdC01IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGUtbGlua1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDUsIHJpZ2h0OiAxMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIGZzLTMgZnctYm9sZCBteS01XCI+XHJcbiAgICAgICAgICBBZGQgTmV3IFF1ZXN0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ0ZWFjaGVyTmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5TdWJqZWN0PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNjaWVuY2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hdGhlbWF0aWNzXCI+TWF0aGVtYXRpY3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBLbm93bGVkZ2VcIj5HZW5lcmFsIEtub3dsZWRnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2llbmNlXCI+U2NpZW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXV0aG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXt0ZWFjaGVyfSByZWFkT25seSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNFwiIHNpemU9XCJsZ1wiIGNvbnRyb2xJZD1cIm1vZGVsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPk1vZGVsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdRdWVzdGlvbi5tb2RlbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm10LTRcIiBzaXplPVwibGdcIiBjb250cm9sSWQ9XCJ5ZWFyXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlllYXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UXVlc3Rpb24ueWVhcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC00XCIgc2l6ZT1cImxnXCIgY29udHJvbElkPVwiZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5EaWZmaWN1bHR5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImRpZmZpY3VsdHlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkVhc3lcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVhc3lcIj5FYXN5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIYXJkXCI+SGFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTY2hvbGFyXCI+U2Nob2xhcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgIC8vIHR5cGU9XCJzdWJtaXRcIiAoVGhpcyBpcyBub3QgYWxsb3dpbmcgYWN0aW9uIHRvIHdvcmsgcHJvcGVybHkpXHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkPXshdmFsaWRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHNpbXBsZS1saW5rIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpbi9sb2dpblRlYWNoZXJcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWxyZWFkeSByZWdpc3RlcmVkLCBnbyB0byBMb2dpblxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4vLyBjb25zdCBtZHRwID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgIHRlYWNoZXJMb2dpbkhhbmRsZXI6IChkYXRhKSA9PiBkaXNwYXRjaCh1c2VyTG9naW4oZGF0YSkpLFxyXG4vLyB9KTtcclxuLy8gY29uc3QgbXN0cCA9IChzdGF0ZSkgPT4gKHtcclxuLy8gICBzdHVkZW50OiBzdGF0ZS5zdHVkZW50UmVkdWNlcixcclxuLy8gfSk7XHJcbmV4cG9ydCBkZWZhdWx0IGFkZFF1ZXN0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJhZGRRdWVzdGlvbiIsInByb3BzIiwiaW5pdGlhbFZhbHVlcyIsInN1YmplY3QiLCJhdXRob3IiLCJtb2RlbCIsInF1ZXN0aW9uIiwicXVlc3QiLCJvcHRpb25zIiwiY29ycmVjdF9hbnMiLCJtYXJrcyIsInllYXIiLCJkaWZmaWN1bHR5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRlYWNoZXJfbmFtZSIsIm5ld1F1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJyb3V0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjdXJzb3IiLCJwdXNoIiwidGVhY2hlciJdLCJzb3VyY2VSb290IjoiIn0=