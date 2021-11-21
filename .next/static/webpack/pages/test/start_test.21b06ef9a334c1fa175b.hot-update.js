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
        children: [hh, ":", mm]
      }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9zdGFydF90ZXN0LjIxYjA2ZWY5YTMzNGMxZmExNzViLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUNBLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsa0JBQThCRiwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPRyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFvQkosK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT0ssRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQW9CTiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUI7QUFBQSxNQUFPTyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBb0JSLCtDQUFRLENBQUMsSUFBRCxDQUE1QjtBQUFBLE1BQU9TLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUVBWCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWSxHQUFHLEdBQUdWLDZDQUFNLEVBQWhCO0FBQ0EsUUFBSVcsR0FBRyxHQUFHWCw2Q0FBTSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWhCO0FBRUEsUUFBSVksQ0FBQyxHQUFHRCxHQUFHLENBQUNFLElBQUosQ0FBU0gsR0FBVCxFQUFjLE9BQWQsQ0FBUjtBQUNBLFFBQUlJLENBQUMsR0FBR0gsR0FBRyxDQUFDRSxJQUFKLENBQVNILEdBQVQsRUFBYyxTQUFkLElBQTJCLEtBQUtFLENBQXhDO0FBQ0EsUUFBSUcsQ0FBQyxHQUFHSixHQUFHLENBQUNFLElBQUosQ0FBU0gsR0FBVCxFQUFjLFNBQWQsSUFBMkIsS0FBSyxFQUFMLEdBQVVFLENBQXJDLEdBQXlDLEtBQUtFLENBQXREO0FBRUEsUUFBSUUsRUFBRSxHQUFHLENBQUMsTUFBTUosQ0FBUCxFQUFVSyxLQUFWLENBQWdCLENBQUMsQ0FBakIsQ0FBVDtBQUNBLFFBQUlDLEVBQUUsR0FBRyxDQUFDLE1BQU1KLENBQVAsRUFBVUcsS0FBVixDQUFnQixDQUFDLENBQWpCLENBQVQ7QUFDQSxRQUFJRSxFQUFFLEdBQUcsQ0FBQyxNQUFNSixDQUFQLEVBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBRUFHLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZmLE1BQUFBLEtBQUssQ0FBQ1csRUFBRCxDQUFMO0FBQ0FULE1BQUFBLEtBQUssQ0FBQ1csRUFBRCxDQUFMO0FBQ0FULE1BQUFBLEtBQUssQ0FBQ1UsRUFBRCxDQUFMO0FBQ0QsS0FKUyxFQUlQLElBSk8sQ0FBVixDQVpjLENBaUJkO0FBQ0E7QUFDQTtBQUNELEdBcEJRLEVBb0JOLENBQUNYLEVBQUQsQ0FwQk0sQ0FBVDtBQXFCQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFBLG1CQUNHUSxFQURILE9BQ1FFLEVBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBU0QsQ0FwQ0Q7O0dBQU1qQjs7S0FBQUE7QUFzQ04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMTIwKTtcclxuICBjb25zdCBbSEgsIHNldEhIXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtNTSwgc2V0TU1dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW1NTLCBzZXRTU10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgIGxldCBlbmQgPSBtb21lbnQoXCIwMTowMFwiLCBcImhoOm1tXCIpO1xyXG5cclxuICAgIGxldCBoID0gZW5kLmRpZmYobm93LCBcImhvdXJzXCIpO1xyXG4gICAgbGV0IG0gPSBlbmQuZGlmZihub3csIFwibWludXRlc1wiKSAtIDYwICogaDtcclxuICAgIGxldCBzID0gZW5kLmRpZmYobm93LCBcInNlY29uZHNcIikgLSA2MCAqIDYwICogaCAtIDYwICogbTtcclxuXHJcbiAgICBsZXQgaGggPSAoXCIwXCIgKyBoKS5zbGljZSgtMik7XHJcbiAgICBsZXQgbW0gPSAoXCIwXCIgKyBtKS5zbGljZSgtMik7XHJcbiAgICBsZXQgc3MgPSAoXCIwXCIgKyBzKS5zbGljZSgtMik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEhIKGhoKTtcclxuICAgICAgc2V0TU0obW0pO1xyXG4gICAgICBzZXRTUyhzcyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIC8vIGNvbnN0IHRpbWVyID1cclxuICAgIC8vICAgY291bnRlciA+IDAgJiYgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q291bnRlcihjb3VudGVyIC0gMSksIDEwMDApO1xyXG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtTU10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIHtoaH06e21tfVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb21lbnQiLCJDb3VudGRvd24iLCJjb3VudGVyIiwic2V0Q291bnRlciIsIkhIIiwic2V0SEgiLCJNTSIsInNldE1NIiwiU1MiLCJzZXRTUyIsIm5vdyIsImVuZCIsImgiLCJkaWZmIiwibSIsInMiLCJoaCIsInNsaWNlIiwibW0iLCJzcyIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9