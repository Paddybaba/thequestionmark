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
    console.log("now", now);
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
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UuYmZiYzk2ZjMwZTE1MmRkNmIzZTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBQ0EsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixrQkFBOEJGLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQW9CSiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUI7QUFBQSxNQUFPSyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBb0JOLCtDQUFRLENBQUMsSUFBRCxDQUE1QjtBQUFBLE1BQU9PLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUNBLG1CQUFvQlIsK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT1MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBRUFYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlZLEdBQUcsR0FBR1YsNkNBQU0sRUFBaEI7QUFDQSxRQUFJVyxHQUFHLEdBQUdYLDZDQUFNLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBaEI7QUFFQVksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkgsR0FBbkI7QUFDQSxRQUFJSSxDQUFDLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSixDQUFTTCxHQUFULEVBQWMsT0FBZCxDQUFSO0FBQ0EsUUFBSU0sQ0FBQyxHQUFHTCxHQUFHLENBQUNJLElBQUosQ0FBU0wsR0FBVCxFQUFjLFNBQWQsSUFBMkIsS0FBS0ksQ0FBeEM7QUFDQSxRQUFJRyxDQUFDLEdBQUdOLEdBQUcsQ0FBQ0ksSUFBSixDQUFTTCxHQUFULEVBQWMsU0FBZCxJQUEyQixLQUFLLEVBQUwsR0FBVUksQ0FBckMsR0FBeUMsS0FBS0UsQ0FBdEQ7QUFFQSxRQUFJRSxFQUFFLEdBQUcsQ0FBQyxNQUFNSixDQUFQLEVBQVVLLEtBQVYsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLENBQUMsTUFBTUosQ0FBUCxFQUFVRyxLQUFWLENBQWdCLENBQUMsQ0FBakIsQ0FBVDtBQUNBLFFBQUlFLEVBQUUsR0FBRyxDQUFDLE1BQU1KLENBQVAsRUFBVUUsS0FBVixDQUFnQixDQUFDLENBQWpCLENBQVQ7QUFFQUcsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmpCLE1BQUFBLEtBQUssQ0FBQ2EsRUFBRCxDQUFMO0FBQ0FYLE1BQUFBLEtBQUssQ0FBQ2EsRUFBRCxDQUFMO0FBQ0FYLE1BQUFBLEtBQUssQ0FBQ1ksRUFBRCxDQUFMO0FBQ0QsS0FKUyxFQUlQLElBSk8sQ0FBVixDQWJjLENBa0JkO0FBQ0E7QUFDQTtBQUNELEdBckJRLEVBcUJOLENBQUNiLEVBQUQsQ0FyQk0sQ0FBVDtBQXNCQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFBLDRCQUFRSixFQUFSLGNBQWNFLEVBQWQsY0FBb0JFLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBbkNEOztHQUFNUDs7S0FBQUE7QUFxQ04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMTIwKTtcclxuICBjb25zdCBbSEgsIHNldEhIXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtNTSwgc2V0TU1dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW1NTLCBzZXRTU10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgIGxldCBlbmQgPSBtb21lbnQoXCIwMTowMFwiLCBcImhoOm1tXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibm93XCIsIG5vdyk7XHJcbiAgICBsZXQgaCA9IGVuZC5kaWZmKG5vdywgXCJob3Vyc1wiKTtcclxuICAgIGxldCBtID0gZW5kLmRpZmYobm93LCBcIm1pbnV0ZXNcIikgLSA2MCAqIGg7XHJcbiAgICBsZXQgcyA9IGVuZC5kaWZmKG5vdywgXCJzZWNvbmRzXCIpIC0gNjAgKiA2MCAqIGggLSA2MCAqIG07XHJcblxyXG4gICAgbGV0IGhoID0gKFwiMFwiICsgaCkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IG1tID0gKFwiMFwiICsgbSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHNzID0gKFwiMFwiICsgcykuc2xpY2UoLTIpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRISChoaCk7XHJcbiAgICAgIHNldE1NKG1tKTtcclxuICAgICAgc2V0U1Moc3MpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICAvLyBjb25zdCB0aW1lciA9XHJcbiAgICAvLyAgIGNvdW50ZXIgPiAwICYmIHNldEludGVydmFsKCgpID0+IHNldENvdW50ZXIoY291bnRlciAtIDEpLCAxMDAwKTtcclxuICAgIC8vIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9LCBbU1NdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8aDM+e2Ake0hIfToke01NfToke1NTfWB9PC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vbWVudCIsIkNvdW50ZG93biIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiSEgiLCJzZXRISCIsIk1NIiwic2V0TU0iLCJTUyIsInNldFNTIiwibm93IiwiZW5kIiwiY29uc29sZSIsImxvZyIsImgiLCJkaWZmIiwibSIsInMiLCJoaCIsInNsaWNlIiwibW0iLCJzcyIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9