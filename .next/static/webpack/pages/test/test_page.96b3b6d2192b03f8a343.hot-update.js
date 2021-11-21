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
    // let now = moment();
    // let end = moment("01:00", "hh:mm");
    // console.log("now", now.hour);
    // let h = end.diff(now, "hours");
    // let m = end.diff(now, "minutes") - 60 * h;
    // let s = end.diff(now, "seconds") - 60 * 60 * h - 60 * m;
    var h = counter / 3600 - counter % 3600;
    var m = counter / 60 - counter % 60;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UuOTZiM2I2ZDIxOTJiMDNmOGEzNDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBQ0EsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixrQkFBOEJGLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQW9CSiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUI7QUFBQSxNQUFPSyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBb0JOLCtDQUFRLENBQUMsSUFBRCxDQUE1QjtBQUFBLE1BQU9PLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUNBLG1CQUFvQlIsK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT1MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBRUFYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFFBQUlZLENBQUMsR0FBR1IsT0FBTyxHQUFHLElBQVYsR0FBa0JBLE9BQU8sR0FBRyxJQUFwQztBQUNBLFFBQUlTLENBQUMsR0FBR1QsT0FBTyxHQUFHLEVBQVYsR0FBZ0JBLE9BQU8sR0FBRyxFQUFsQztBQUNBLFFBQUlVLENBQUMsR0FBR1YsT0FBTyxHQUFHLEVBQWxCO0FBRUEsUUFBSVcsRUFBRSxHQUFHLENBQUMsTUFBTUgsQ0FBUCxFQUFVSSxLQUFWLENBQWdCLENBQUMsQ0FBakIsQ0FBVDtBQUNBLFFBQUlDLEVBQUUsR0FBRyxDQUFDLE1BQU1KLENBQVAsRUFBVUcsS0FBVixDQUFnQixDQUFDLENBQWpCLENBQVQ7QUFDQSxRQUFJRSxFQUFFLEdBQUcsQ0FBQyxNQUFNSixDQUFQLEVBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBRUFHLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZaLE1BQUFBLEtBQUssQ0FBQ1EsRUFBRCxDQUFMO0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ1EsRUFBRCxDQUFMO0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ08sRUFBRCxDQUFMO0FBQ0QsS0FKUyxFQUlQLElBSk8sQ0FBVixDQWpCYyxDQXNCZDtBQUNBO0FBQ0E7QUFDRCxHQXpCUSxFQXlCTixDQUFDUixFQUFELENBekJNLENBQVQ7QUEwQkEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBQSw0QkFBUUosRUFBUixjQUFjRSxFQUFkLGNBQW9CRSxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFPRCxDQXZDRDs7R0FBTVA7O0tBQUFBO0FBeUNOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgQ291bnRkb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDEyMCk7XHJcbiAgY29uc3QgW0hILCBzZXRISF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbTU0sIHNldE1NXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtTUywgc2V0U1NdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAvLyBsZXQgZW5kID0gbW9tZW50KFwiMDE6MDBcIiwgXCJoaDptbVwiKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5vd1wiLCBub3cuaG91cik7XHJcbiAgICAvLyBsZXQgaCA9IGVuZC5kaWZmKG5vdywgXCJob3Vyc1wiKTtcclxuICAgIC8vIGxldCBtID0gZW5kLmRpZmYobm93LCBcIm1pbnV0ZXNcIikgLSA2MCAqIGg7XHJcbiAgICAvLyBsZXQgcyA9IGVuZC5kaWZmKG5vdywgXCJzZWNvbmRzXCIpIC0gNjAgKiA2MCAqIGggLSA2MCAqIG07XHJcblxyXG4gICAgbGV0IGggPSBjb3VudGVyIC8gMzYwMCAtIChjb3VudGVyICUgMzYwMCk7XHJcbiAgICBsZXQgbSA9IGNvdW50ZXIgLyA2MCAtIChjb3VudGVyICUgNjApO1xyXG4gICAgbGV0IHMgPSBjb3VudGVyICUgNjA7XHJcblxyXG4gICAgbGV0IGhoID0gKFwiMFwiICsgaCkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IG1tID0gKFwiMFwiICsgbSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHNzID0gKFwiMFwiICsgcykuc2xpY2UoLTIpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRISChoaCk7XHJcbiAgICAgIHNldE1NKG1tKTtcclxuICAgICAgc2V0U1Moc3MpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICAvLyBjb25zdCB0aW1lciA9XHJcbiAgICAvLyAgIGNvdW50ZXIgPiAwICYmIHNldEludGVydmFsKCgpID0+IHNldENvdW50ZXIoY291bnRlciAtIDEpLCAxMDAwKTtcclxuICAgIC8vIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9LCBbU1NdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8aDM+e2Ake0hIfToke01NfToke1NTfWB9PC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vbWVudCIsIkNvdW50ZG93biIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiSEgiLCJzZXRISCIsIk1NIiwic2V0TU0iLCJTUyIsInNldFNTIiwiaCIsIm0iLCJzIiwiaGgiLCJzbGljZSIsIm1tIiwic3MiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==