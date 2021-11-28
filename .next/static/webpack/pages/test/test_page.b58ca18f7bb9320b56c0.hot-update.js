"use strict";
self["webpackHotUpdate_N_E"]("pages/test/test_page",{

/***/ "./src/components/PopModal.js":
/*!************************************!*\
  !*** ./src/components/PopModal.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\DEV\\GITHUB\\thequestionmark\\src\\components\\PopModal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_DEV_GITHUB_thequestionmark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function PopModal(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, props), {}, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Scorecard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Body, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
        children: ["Total Questions : ", props.progress.total]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
        children: ["Correct Answer : ", props.progress.correct.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
        children: ["Incorrect Answers : ", props.progress.incorrect.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
        style: {
          fontWeight: "bolder"
        },
        children: ["Marks Obtained :", " ", Math.round(props.progress.correct.length / props.progress.total * 100), "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__.default.Footer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/test/selectTest");
        },
        style: {
          alignSelf: "left"
        },
        children: "Finish Test"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        onClick: props.onHide,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/test/result_page");
        },
        children: "Check Result"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = PopModal;
/* harmony default export */ __webpack_exports__["default"] = (PopModal);

var _c;

$RefreshReg$(_c, "PopModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC90ZXN0X3BhZ2UuYjU4Y2ExOGY3YmI5MzIwYjU2YzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQ0UsOERBQUMsMERBQUQsa0NBQ01BLEtBRE47QUFFRSxRQUFJLEVBQUMsSUFGUDtBQUdFLHVCQUFnQiwrQkFIbEI7QUFJRSxZQUFRLE1BSlY7QUFBQSw0QkFNRSw4REFBQyxpRUFBRDtBQUFjLGlCQUFXLE1BQXpCO0FBQUEsNkJBQ0UsOERBQUMsZ0VBQUQ7QUFBYSxVQUFFLEVBQUMsK0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBU0UsOERBQUMsK0RBQUQ7QUFBQSw4QkFDRTtBQUFBLHlDQUF1QkEsS0FBSyxDQUFDQyxRQUFOLENBQWVDLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSx3Q0FBc0JGLEtBQUssQ0FBQ0MsUUFBTixDQUFlRSxPQUFmLENBQXVCQyxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUEsMkNBQXlCSixLQUFLLENBQUNDLFFBQU4sQ0FBZUksU0FBZixDQUF5QkQsTUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFJLGFBQUssRUFBRTtBQUFFRSxVQUFBQSxVQUFVLEVBQUU7QUFBZCxTQUFYO0FBQUEsdUNBQ21CLEdBRG5CLEVBRUdDLElBQUksQ0FBQ0MsS0FBTCxDQUNFUixLQUFLLENBQUNDLFFBQU4sQ0FBZUUsT0FBZixDQUF1QkMsTUFBdkIsR0FBZ0NKLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxLQUFoRCxHQUF5RCxHQUQxRCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBcUJFLDhEQUFDLGlFQUFEO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUwsdURBQUEsQ0FBWSxrQkFBWixDQUFOO0FBQUEsU0FEWDtBQUVFLGFBQUssRUFBRTtBQUFFYSxVQUFBQSxTQUFTLEVBQUU7QUFBYixTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQywyREFBRDtBQUFRLGVBQU8sRUFBRVYsS0FBSyxDQUFDVyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUUsOERBQUMsMkRBQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTWQsdURBQUEsQ0FBWSxtQkFBWixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0tBckNRRTtBQXVDVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3BNb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFBvcE1vZGFsKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgID5cclxuICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlNjb3JlY2FyZDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICA8aDQ+VG90YWwgUXVlc3Rpb25zIDoge3Byb3BzLnByb2dyZXNzLnRvdGFsfTwvaDQ+XHJcbiAgICAgICAgPGg0PkNvcnJlY3QgQW5zd2VyIDoge3Byb3BzLnByb2dyZXNzLmNvcnJlY3QubGVuZ3RofTwvaDQ+XHJcbiAgICAgICAgPGg0PkluY29ycmVjdCBBbnN3ZXJzIDoge3Byb3BzLnByb2dyZXNzLmluY29ycmVjdC5sZW5ndGh9PC9oND5cclxuICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fT5cclxuICAgICAgICAgIE1hcmtzIE9idGFpbmVkIDp7XCIgXCJ9XHJcbiAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgKHByb3BzLnByb2dyZXNzLmNvcnJlY3QubGVuZ3RoIC8gcHJvcHMucHJvZ3Jlc3MudG90YWwpICogMTAwXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgJVxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi90ZXN0L3NlbGVjdFRlc3RcIil9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6IFwibGVmdFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRmluaXNoIFRlc3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rlc3QvcmVzdWx0X3BhZ2VcIil9PlxyXG4gICAgICAgICAgQ2hlY2sgUmVzdWx0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3BNb2RhbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTW9kYWwiLCJCdXR0b24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJQb3BNb2RhbCIsInByb3BzIiwicHJvZ3Jlc3MiLCJ0b3RhbCIsImNvcnJlY3QiLCJsZW5ndGgiLCJpbmNvcnJlY3QiLCJmb250V2VpZ2h0IiwiTWF0aCIsInJvdW5kIiwicHVzaCIsImFsaWduU2VsZiIsIm9uSGlkZSJdLCJzb3VyY2VSb290IjoiIn0=