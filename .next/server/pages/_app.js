(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_mycss_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/mycss.css */ "./src/components/mycss.css");
/* harmony import */ var _src_components_mycss_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_mycss_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // console.warn("store from app", store);



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./redux/StateLoader.js":
/*!******************************!*\
  !*** ./redux/StateLoader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateLoader)
/* harmony export */ });
class StateLoader {
  loadState() {
    try {
      let serializedState = localStorage.getItem("my-state");

      if (serializedState === null) {
        return this.initializeState();
      } // console.log("from stateLoader", serializedState);


      return JSON.parse(serializedState);
    } catch (err) {
      return this.initializeState();
    }
  }

  saveState(state) {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("my-state", serializedState);
    } catch (err) {}
  }

  initializeState() {
    return {//state object
    };
  }

}

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _myReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myReducer */ "./redux/reducers/myReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);


const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  studentReducer: _myReducer__WEBPACK_IMPORTED_MODULE_0__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./redux/reducers/myReducer.js":
/*!*************************************!*\
  !*** ./redux/reducers/myReducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  user: {
    student: "",
    username: "",
    options: {
      subject: "",
      author: "",
      year: ""
    },
    progress: {
      total: "",
      answered: [],
      unanswered: [],
      marked: [],
      correct: [],
      incorrect: []
    }
  },
  questions: [{}]
};

function studentReducer(state = initialState, action) {
  // console.log("action received in reducer", action);
  switch (action.type) {
    case "USER_LOGIN":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          user: _objectSpread(_objectSpread({}, state.user), {}, {
            student: action.payload.student,
            username: action.payload.username
          })
        });
      }

    case "USER_LOGOUT":
      {}

    case "SELECT_OPTIONS":
      {
        console.log("options added");
        return _objectSpread(_objectSpread({}, state), {}, {
          user: _objectSpread(_objectSpread({}, state.user), {}, {
            options: action.payload
          })
        });
      }

    case "SET_QUESTIONS":
      {
        console.log("questions added to state");
        return _objectSpread(_objectSpread({}, state), {}, {
          questions: action.payload
        });
      }

    case "SET_TOTAL_QUESTIONS":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          user: _objectSpread(_objectSpread({}, state.user), {}, {
            progress: _objectSpread(_objectSpread({}, state.user.progress), {}, {
              total: action.payload
            })
          })
        });
      }

    default:
      return _objectSpread({}, state);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (studentReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/index */ "./redux/reducers/index.js");
/* harmony import */ var _redux_StateLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/StateLoader */ "./redux/StateLoader.js");



const stateLoader = new _redux_StateLoader__WEBPACK_IMPORTED_MODULE_2__.default();
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.default, stateLoader.loadState());
store.subscribe(() => {
  stateLoader.saveState(store.getState());
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/mycss.css":
/*!**********************************!*\
  !*** ./src/components/mycss.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcmVkdXgvU3RhdGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vcmVkdXgvcmVkdWNlcnMvbXlSZWR1Y2VyLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrLy4vc3JjL2NvbXBvbmVudHMvbXljc3MuY3NzIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly90aGVxdWVzdGlvbm1hcmsvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RoZXF1ZXN0aW9ubWFyay9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdGhlcXVlc3Rpb25tYXJrL2V4dGVybmFsIFwicmVkdXhcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9teWNzcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuLy8gY29uc29sZS53YXJuKFwic3RvcmUgZnJvbSBhcHBcIiwgc3RvcmUpO1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlTG9hZGVyIHtcclxuICBsb2FkU3RhdGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgc2VyaWFsaXplZFN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteS1zdGF0ZVwiKTtcclxuXHJcbiAgICAgIGlmIChzZXJpYWxpemVkU3RhdGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplU3RhdGUoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gc3RhdGVMb2FkZXJcIiwgc2VyaWFsaXplZFN0YXRlKTtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZFN0YXRlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplU3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVTdGF0ZShzdGF0ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHNlcmlhbGl6ZWRTdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteS1zdGF0ZVwiLCBzZXJpYWxpemVkU3RhdGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZVN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy9zdGF0ZSBvYmplY3RcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzdHVkZW50UmVkdWNlciBmcm9tIFwiLi9teVJlZHVjZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IHN0dWRlbnRSZWR1Y2VyIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7XHJcbiAgICBzdHVkZW50OiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgIGF1dGhvcjogXCJcIixcclxuICAgICAgeWVhcjogXCJcIixcclxuICAgIH0sXHJcbiAgICBwcm9ncmVzczoge1xyXG4gICAgICB0b3RhbDogXCJcIixcclxuICAgICAgYW5zd2VyZWQ6IFtdLFxyXG4gICAgICB1bmFuc3dlcmVkOiBbXSxcclxuICAgICAgbWFya2VkOiBbXSxcclxuICAgICAgY29ycmVjdDogW10sXHJcbiAgICAgIGluY29ycmVjdDogW10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcXVlc3Rpb25zOiBbe31dLFxyXG59O1xyXG5mdW5jdGlvbiBzdHVkZW50UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJhY3Rpb24gcmVjZWl2ZWQgaW4gcmVkdWNlclwiLCBhY3Rpb24pO1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJVU0VSX0xPR0lOXCI6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgc3R1ZGVudDogYWN0aW9uLnBheWxvYWQuc3R1ZGVudCxcclxuICAgICAgICAgIHVzZXJuYW1lOiBhY3Rpb24ucGF5bG9hZC51c2VybmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6IHtcclxuICAgIH1cclxuICAgIGNhc2UgXCJTRUxFQ1RfT1BUSU9OU1wiOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib3B0aW9ucyBhZGRlZFwiKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7IC4uLnN0YXRlLnVzZXIsIG9wdGlvbnM6IGFjdGlvbi5wYXlsb2FkIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBcIlNFVF9RVUVTVElPTlNcIjoge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInF1ZXN0aW9ucyBhZGRlZCB0byBzdGF0ZVwiKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgXCJTRVRfVE9UQUxfUVVFU1RJT05TXCI6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHsgLi4uc3RhdGUudXNlci5wcm9ncmVzcywgdG90YWw6IGFjdGlvbi5wYXlsb2FkIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHVkZW50UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCBTdGF0ZUxvYWRlciBmcm9tIFwiLi4vcmVkdXgvU3RhdGVMb2FkZXJcIjtcclxuXHJcbmNvbnN0IHN0YXRlTG9hZGVyID0gbmV3IFN0YXRlTG9hZGVyKCk7XHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHN0YXRlTG9hZGVyLmxvYWRTdGF0ZSgpKTtcclxuXHJcbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgc3RhdGVMb2FkZXIuc2F2ZVN0YXRlKHN0b3JlLmdldFN0YXRlKCkpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCIiLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiU3RhdGVMb2FkZXIiLCJsb2FkU3RhdGUiLCJzZXJpYWxpemVkU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5pdGlhbGl6ZVN0YXRlIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwic2F2ZVN0YXRlIiwic3RhdGUiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwic3R1ZGVudFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290UmVkdWNlciIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJzdHVkZW50IiwidXNlcm5hbWUiLCJvcHRpb25zIiwic3ViamVjdCIsImF1dGhvciIsInllYXIiLCJwcm9ncmVzcyIsInRvdGFsIiwiYW5zd2VyZWQiLCJ1bmFuc3dlcmVkIiwibWFya2VkIiwiY29ycmVjdCIsImluY29ycmVjdCIsInF1ZXN0aW9ucyIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVN0b3JlIiwic3RhdGVMb2FkZXIiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=