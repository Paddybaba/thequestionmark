"use strict";
self["webpackHotUpdate_N_E"]("pages/test/test_page",{

/***/ "./src/components/Countdown.js":
/*!*************************************!*\
  !*** ./src/components/Countdown.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\Countdown.js",
    _this = undefined,
    _s = $RefreshSig$();






var Countdown = function Countdown() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(120),
      counter = _useState[0],
      setCounter = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      HH = _useState2[0],
      setHH = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      MM = _useState3[0],
      setMM = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      SS = _useState4[0],
      setSS = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var now = moment__WEBPACK_IMPORTED_MODULE_1___default()();
    var end = moment__WEBPACK_IMPORTED_MODULE_1___default()("01:00", "hh:mm");
    var h = end.diff(now, "hours");
    var m = end.diff(now, "minutes") - 60 * h;
    var s = end.diff(now, "seconds") - 60 * 60 * h - 60 * m;
    var hh = ("0" + h).slice(-2);
    var mm = ("0" + m).slice(-2);
    var ss = ("0" + s).slice(-2);
    setTimeout(function () {
      setHH(hh);
      setMM(mm);
      setSS(ss);
    }, 1000); // const timer =
    //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    // return () => clearInterval(timer);
  }, [SS]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "countdown",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: "".concat(HH, ":").concat(MM, ":").concat(SS)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Countdown, "byaqQOx2EvCXl+8RYrJanskj2jc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UuY2QxYjFiZmQwYjA0YmY1N2EzODEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBQ0EsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixrQkFBOEJGLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQW9CSiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUI7QUFBQSxNQUFPSyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBb0JOLCtDQUFRLENBQUMsSUFBRCxDQUE1QjtBQUFBLE1BQU9PLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUNBLG1CQUFvQlIsK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT1MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBRUFYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlZLEdBQUcsR0FBR1YsNkNBQU0sRUFBaEI7QUFDQSxRQUFJVyxHQUFHLEdBQUdYLDZDQUFNLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBaEI7QUFFQSxRQUFJWSxDQUFDLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTSCxHQUFULEVBQWMsT0FBZCxDQUFSO0FBQ0EsUUFBSUksQ0FBQyxHQUFHSCxHQUFHLENBQUNFLElBQUosQ0FBU0gsR0FBVCxFQUFjLFNBQWQsSUFBMkIsS0FBS0UsQ0FBeEM7QUFDQSxRQUFJRyxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0UsSUFBSixDQUFTSCxHQUFULEVBQWMsU0FBZCxJQUEyQixLQUFLLEVBQUwsR0FBVUUsQ0FBckMsR0FBeUMsS0FBS0UsQ0FBdEQ7QUFFQSxRQUFJRSxFQUFFLEdBQUcsQ0FBQyxNQUFNSixDQUFQLEVBQVVLLEtBQVYsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLENBQUMsTUFBTUosQ0FBUCxFQUFVRyxLQUFWLENBQWdCLENBQUMsQ0FBakIsQ0FBVDtBQUNBLFFBQUlFLEVBQUUsR0FBRyxDQUFDLE1BQU1KLENBQVAsRUFBVUUsS0FBVixDQUFnQixDQUFDLENBQWpCLENBQVQ7QUFFQUcsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmYsTUFBQUEsS0FBSyxDQUFDVyxFQUFELENBQUw7QUFDQVQsTUFBQUEsS0FBSyxDQUFDVyxFQUFELENBQUw7QUFDQVQsTUFBQUEsS0FBSyxDQUFDVSxFQUFELENBQUw7QUFDRCxLQUpTLEVBSVAsSUFKTyxDQUFWLENBWmMsQ0FpQmQ7QUFDQTtBQUNBO0FBQ0QsR0FwQlEsRUFvQk4sQ0FBQ1gsRUFBRCxDQXBCTSxDQUFUO0FBcUJBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUEsNEJBQVFKLEVBQVIsY0FBY0UsRUFBZCxjQUFvQkUsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQ0FsQ0Q7O0dBQU1QOztLQUFBQTtBQW9DTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmNvbnN0IENvdW50ZG93biA9ICgpID0+IHtcclxuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgxMjApO1xyXG4gIGNvbnN0IFtISCwgc2V0SEhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW01NLCBzZXRNTV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbU1MsIHNldFNTXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgbGV0IGVuZCA9IG1vbWVudChcIjAxOjAwXCIsIFwiaGg6bW1cIik7XHJcblxyXG4gICAgbGV0IGggPSBlbmQuZGlmZihub3csIFwiaG91cnNcIik7XHJcbiAgICBsZXQgbSA9IGVuZC5kaWZmKG5vdywgXCJtaW51dGVzXCIpIC0gNjAgKiBoO1xyXG4gICAgbGV0IHMgPSBlbmQuZGlmZihub3csIFwic2Vjb25kc1wiKSAtIDYwICogNjAgKiBoIC0gNjAgKiBtO1xyXG5cclxuICAgIGxldCBoaCA9IChcIjBcIiArIGgpLnNsaWNlKC0yKTtcclxuICAgIGxldCBtbSA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcclxuICAgIGxldCBzcyA9IChcIjBcIiArIHMpLnNsaWNlKC0yKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SEgoaGgpO1xyXG4gICAgICBzZXRNTShtbSk7XHJcbiAgICAgIHNldFNTKHNzKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgLy8gY29uc3QgdGltZXIgPVxyXG4gICAgLy8gICBjb3VudGVyID4gMCAmJiBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDb3VudGVyKGNvdW50ZXIgLSAxKSwgMTAwMCk7XHJcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSwgW1NTXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duXCI+XHJcbiAgICAgICAgPGgzPntgJHtISH06JHtNTX06JHtTU31gfTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb21lbnQiLCJDb3VudGRvd24iLCJjb3VudGVyIiwic2V0Q291bnRlciIsIkhIIiwic2V0SEgiLCJNTSIsInNldE1NIiwiU1MiLCJzZXRTUyIsIm5vdyIsImVuZCIsImgiLCJkaWZmIiwibSIsInMiLCJoaCIsInNsaWNlIiwibW0iLCJzcyIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9