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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(130),
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
    // let now = moment();
    // let end = moment("01:00", "hh:mm");
    // console.log("now", now.hour);
    // let h = end.diff(now, "hours");
    // let m = end.diff(now, "minutes") - 60 * h;
    // let s = end.diff(now, "seconds") - 60 * 60 * h - 60 * m;
    var h = counter / 3600 - counter % 3600 / 3600;
    var m = counter / 60 - counter % 60 / 60;
    var s = counter % 60;
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
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Countdown, "Fa+hnj9HgTVyNXO3Rk6Dj+uKbg0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9zdGFydF90ZXN0LmQ5ODc0MWFmY2UxNWEwNjQyMmM2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUNBLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsa0JBQThCRiwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPRyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFvQkosK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT0ssRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQW9CTiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUI7QUFBQSxNQUFPTyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBb0JSLCtDQUFRLENBQUMsSUFBRCxDQUE1QjtBQUFBLE1BQU9TLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUVBWCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxRQUFJWSxDQUFDLEdBQUdSLE9BQU8sR0FBRyxJQUFWLEdBQWtCQSxPQUFPLEdBQUcsSUFBWCxHQUFtQixJQUE1QztBQUNBLFFBQUlTLENBQUMsR0FBR1QsT0FBTyxHQUFHLEVBQVYsR0FBZ0JBLE9BQU8sR0FBRyxFQUFYLEdBQWlCLEVBQXhDO0FBQ0EsUUFBSVUsQ0FBQyxHQUFHVixPQUFPLEdBQUcsRUFBbEI7QUFFQSxRQUFJVyxFQUFFLEdBQUcsQ0FBQyxNQUFNSCxDQUFQLEVBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLENBQUMsTUFBTUosQ0FBUCxFQUFVRyxLQUFWLENBQWdCLENBQUMsQ0FBakIsQ0FBVDtBQUNBLFFBQUlFLEVBQUUsR0FBRyxDQUFDLE1BQU1KLENBQVAsRUFBVUUsS0FBVixDQUFnQixDQUFDLENBQWpCLENBQVQ7QUFFQUcsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZlosTUFBQUEsS0FBSyxDQUFDUSxFQUFELENBQUw7QUFDQU4sTUFBQUEsS0FBSyxDQUFDUSxFQUFELENBQUw7QUFDQU4sTUFBQUEsS0FBSyxDQUFDTyxFQUFELENBQUw7QUFDRCxLQUpTLEVBSVAsSUFKTyxDQUFWLENBakJjLENBc0JkO0FBQ0E7QUFDQTtBQUNELEdBekJRLEVBeUJOLENBQUNSLEVBQUQsQ0F6Qk0sQ0FBVDtBQTBCQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFBLDRCQUFRSixFQUFSLGNBQWNFLEVBQWQsY0FBb0JFLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBdkNEOztHQUFNUDs7S0FBQUE7QUF5Q04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMTMwKTtcclxuICBjb25zdCBbSEgsIHNldEhIXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtNTSwgc2V0TU1dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW1NTLCBzZXRTU10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgIC8vIGxldCBlbmQgPSBtb21lbnQoXCIwMTowMFwiLCBcImhoOm1tXCIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwibm93XCIsIG5vdy5ob3VyKTtcclxuICAgIC8vIGxldCBoID0gZW5kLmRpZmYobm93LCBcImhvdXJzXCIpO1xyXG4gICAgLy8gbGV0IG0gPSBlbmQuZGlmZihub3csIFwibWludXRlc1wiKSAtIDYwICogaDtcclxuICAgIC8vIGxldCBzID0gZW5kLmRpZmYobm93LCBcInNlY29uZHNcIikgLSA2MCAqIDYwICogaCAtIDYwICogbTtcclxuXHJcbiAgICBsZXQgaCA9IGNvdW50ZXIgLyAzNjAwIC0gKGNvdW50ZXIgJSAzNjAwKSAvIDM2MDA7XHJcbiAgICBsZXQgbSA9IGNvdW50ZXIgLyA2MCAtIChjb3VudGVyICUgNjApIC8gNjA7XHJcbiAgICBsZXQgcyA9IGNvdW50ZXIgJSA2MDtcclxuXHJcbiAgICBsZXQgaGggPSAoXCIwXCIgKyBoKS5zbGljZSgtMik7XHJcbiAgICBsZXQgbW0gPSAoXCIwXCIgKyBtKS5zbGljZSgtMik7XHJcbiAgICBsZXQgc3MgPSAoXCIwXCIgKyBzKS5zbGljZSgtMik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEhIKGhoKTtcclxuICAgICAgc2V0TU0obW0pO1xyXG4gICAgICBzZXRTUyhzcyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIC8vIGNvbnN0IHRpbWVyID1cclxuICAgIC8vICAgY291bnRlciA+IDAgJiYgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q291bnRlcihjb3VudGVyIC0gMSksIDEwMDApO1xyXG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtTU10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPlxyXG4gICAgICAgIDxoMz57YCR7SEh9OiR7TU19OiR7U1N9YH08L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW9tZW50IiwiQ291bnRkb3duIiwiY291bnRlciIsInNldENvdW50ZXIiLCJISCIsInNldEhIIiwiTU0iLCJzZXRNTSIsIlNTIiwic2V0U1MiLCJoIiwibSIsInMiLCJoaCIsInNsaWNlIiwibW0iLCJzcyIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9