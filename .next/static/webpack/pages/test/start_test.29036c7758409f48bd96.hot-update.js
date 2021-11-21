"use strict";
self["webpackHotUpdate_N_E"]("pages/test/start_test",{

/***/ "./src/components/Countdown.js":
/*!*************************************!*\
  !*** ./src/components/Countdown.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\Countdown.js",
    _this = undefined,
    _s = $RefreshSig$();





var Countdown = function Countdown() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(120),
      counter = _useState[0],
      setCounter = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      MM = _useState2[0],
      setMM = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      SS = _useState3[0],
      setSS = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = counter > 0 && setInterval(function () {
      return setCounter(counter - 1);
    }, 1000);
    var m = Math.round(counter / 60 - counter % 60 / 60);
    var s = counter % 60;
    var mm = ("0" + m).slice(-2);
    var ss = ("0" + s).slice(-2);
    setMM(mm);
    setSS(ss);
    return function () {
      return clearInterval(timer);
    };
  }, [counter]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "countdown",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: [MM, ":", SS]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Countdown, "VyUTF/SnhU0Ve/tn095HnI3NsMw=");

_c = Countdown;
/* harmony default export */ __webpack_exports__["default"] = (Countdown);

var _c;

$RefreshReg$(_c, "Countdown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9zdGFydF90ZXN0LjI5MDM2Yzc3NTg0MDlmNDhiZDk2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixrQkFBOEJELCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9FLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQW9CSCwrQ0FBUSxDQUFDLENBQUQsQ0FBNUI7QUFBQSxNQUFPSSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBb0JMLCtDQUFRLENBQUMsQ0FBRCxDQUE1QjtBQUFBLE1BQU9NLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUVBUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNUyxLQUFLLEdBQ1ROLE9BQU8sR0FBRyxDQUFWLElBQWVPLFdBQVcsQ0FBQztBQUFBLGFBQU1OLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBaEI7QUFBQSxLQUFELEVBQWdDLElBQWhDLENBRDVCO0FBR0EsUUFBSVEsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsT0FBTyxHQUFHLEVBQVYsR0FBZ0JBLE9BQU8sR0FBRyxFQUFYLEdBQWlCLEVBQTNDLENBQVI7QUFDQSxRQUFJVyxDQUFDLEdBQUdYLE9BQU8sR0FBRyxFQUFsQjtBQUVBLFFBQUlZLEVBQUUsR0FBRyxDQUFDLE1BQU1KLENBQVAsRUFBVUssS0FBVixDQUFnQixDQUFDLENBQWpCLENBQVQ7QUFDQSxRQUFJQyxFQUFFLEdBQUcsQ0FBQyxNQUFNSCxDQUFQLEVBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBRUFWLElBQUFBLEtBQUssQ0FBQ1MsRUFBRCxDQUFMO0FBQ0FQLElBQUFBLEtBQUssQ0FBQ1MsRUFBRCxDQUFMO0FBQ0EsV0FBTztBQUFBLGFBQU1DLGFBQWEsQ0FBQ1QsS0FBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQWJRLEVBYU4sQ0FBQ04sT0FBRCxDQWJNLENBQVQ7QUFjQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFBLG1CQUNHRSxFQURILE9BQ1FFLEVBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBU0QsQ0E1QkQ7O0dBQU1MOztLQUFBQTtBQThCTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvdW50ZG93biA9ICgpID0+IHtcclxuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgxMjApO1xyXG4gIGNvbnN0IFtNTSwgc2V0TU1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW1NTLCBzZXRTU10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID1cclxuICAgICAgY291bnRlciA+IDAgJiYgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q291bnRlcihjb3VudGVyIC0gMSksIDEwMDApO1xyXG5cclxuICAgIGxldCBtID0gTWF0aC5yb3VuZChjb3VudGVyIC8gNjAgLSAoY291bnRlciAlIDYwKSAvIDYwKTtcclxuICAgIGxldCBzID0gY291bnRlciAlIDYwO1xyXG5cclxuICAgIGxldCBtbSA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcclxuICAgIGxldCBzcyA9IChcIjBcIiArIHMpLnNsaWNlKC0yKTtcclxuXHJcbiAgICBzZXRNTShtbSk7XHJcbiAgICBzZXRTUyhzcyk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSwgW2NvdW50ZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICB7TU19OntTU31cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ291bnRkb3duIiwiY291bnRlciIsInNldENvdW50ZXIiLCJNTSIsInNldE1NIiwiU1MiLCJzZXRTUyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJtIiwiTWF0aCIsInJvdW5kIiwicyIsIm1tIiwic2xpY2UiLCJzcyIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9