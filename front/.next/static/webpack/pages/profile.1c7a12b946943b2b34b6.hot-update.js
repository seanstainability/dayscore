/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ \"./node_modules/gravatar/index.js\");\n/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/seanstainability/Projects/twitter/front/components/FollowList.js\",\n    _this = undefined;\n\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  var header = _ref.header,\n      data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List, {\n    itemLayout: \"horizontal\",\n    dataSource: data,\n    renderItem: function renderItem(item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item, {\n        actions: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"\\uC5B8\\uD314\\uB85C\\uC6B0\"\n        }, \"item-delete\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 30\n        }, _this)],\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item.Meta, {\n          avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n            src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(email, {\n              d: \"retro\"\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 21\n          }, _this),\n          title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"#\",\n            children: item.nickname\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 20\n          }, _this),\n          description: item.bio\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = FollowList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJpdGVtIiwiZ3JhdmF0YXIiLCJlbWFpbCIsImQiLCJuaWNrbmFtZSIsImJpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBc0I7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDLHNCQUNFLDhEQUFDLHNDQUFEO0FBQ0UsY0FBVSxFQUFDLFlBRGI7QUFFRSxjQUFVLEVBQUVBLElBRmQ7QUFHRSxjQUFVLEVBQUUsb0JBQUNDLElBQUQ7QUFBQSwwQkFDViw4REFBQywyQ0FBRDtBQUFXLGVBQU8sRUFBRSxjQUFDO0FBQUE7QUFBQSxXQUFPLGFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBRCxDQUFwQjtBQUFBLCtCQUNFLDhEQUFDLGdEQUFEO0FBQ0UsZ0JBQU0sZUFBRSw4REFBQyx3Q0FBRDtBQUFRLGVBQUcsRUFBRUMsbURBQUEsQ0FBYUMsS0FBYixFQUFvQjtBQUFFQyxlQUFDLEVBQUU7QUFBTCxhQUFwQjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFY7QUFFRSxlQUFLLGVBQUU7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQSxzQkFBYUgsSUFBSSxDQUFDSTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZUO0FBR0UscUJBQVcsRUFBRUosSUFBSSxDQUFDSztBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUE7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWhCRDs7S0FBTVIsVTtBQWtCTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpc3QsIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgZ3JhdmF0YXIgZnJvbSBcImdyYXZhdGFyXCI7XG5cbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICBkYXRhU291cmNlPXtkYXRhfVxuICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcbiAgICAgICAgPExpc3QuSXRlbSBhY3Rpb25zPXtbPGEga2V5PVwiaXRlbS1kZWxldGVcIj7slrjtjJTroZzsmrA8L2E+XX0+XG4gICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtncmF2YXRhci51cmwoZW1haWwsIHsgZDogXCJyZXRyb1wiIH0pfSAvPn1cbiAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPVwiI1wiPntpdGVtLm5pY2tuYW1lfTwvYT59XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5iaW99XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICApfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ }),

/***/ "./components/ProfileEditForm.js":
/*!***************************************!*\
  !*** ./components/ProfileEditForm.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/seanstainability/Projects/twitter/front/components/ProfileEditForm.js\",\n    _this = undefined;\n\n\n\nvar ProfileEditForm = function ProfileEditForm() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = ProfileEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileEditForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProfileEditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlRWRpdEZvcm0uanM/MWYyZCJdLCJuYW1lcyI6WyJQcm9maWxlRWRpdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0tBQU1BLGU7QUFJTiwrREFBZUEsZUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZmlsZUVkaXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9maWxlRWRpdEZvcm0gPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVFZGl0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProfileEditForm.js\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProfileEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProfileEditForm */ \"./components/ProfileEditForm.js\");\n/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FollowList */ \"./components/FollowList.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/seanstainability/Projects/twitter/front/pages/profile.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar profile = function profile() {\n  var followingList = [{\n    nickname: \"김첨지\",\n    email: \"SOULIKK@gmail.com\",\n    bio: \"항해99\"\n  }, {\n    nickname: \"엠마오\",\n    email: \"dev.og.eun@gmail.com\",\n    bio: \"여신티켓\"\n  }, {\n    nickname: \"제로초\",\n    email: \"zerocho@gmail.com\",\n    bio: \"오늘의 픽업 CTO\"\n  }];\n  var followerList = [{\n    nickname: \"김첨지\",\n    email: \"SOULIKK@gmail.com\",\n    bio: \"항해99\"\n  }, {\n    nickname: \"엠마오\",\n    email: \"dev.og.eun@gmail.com\",\n    bio: \"여신티켓\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"\\uD504\\uB85C\\uD544 | DayScore\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileEditForm__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__.default, {\n        header: \"\\uD314\\uB85C\\uC789 \\uBAA9\\uB85D\",\n        data: followingList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__.default, {\n        header: \"\\uD314\\uB85C\\uC6CC \\uBAA9\\uB85D\",\n        data: followerList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profile);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcz81YmUyIl0sIm5hbWVzIjpbInByb2ZpbGUiLCJmb2xsb3dpbmdMaXN0Iiwibmlja25hbWUiLCJlbWFpbCIsImJpbyIsImZvbGxvd2VyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBTUMsYUFBYSxHQUFHLENBQ3BCO0FBQUVDLFlBQVEsRUFBRSxLQUFaO0FBQW1CQyxTQUFLLEVBQUUsbUJBQTFCO0FBQStDQyxPQUFHLEVBQUU7QUFBcEQsR0FEb0IsRUFFcEI7QUFBRUYsWUFBUSxFQUFFLEtBQVo7QUFBbUJDLFNBQUssRUFBRSxzQkFBMUI7QUFBa0RDLE9BQUcsRUFBRTtBQUF2RCxHQUZvQixFQUdwQjtBQUFFRixZQUFRLEVBQUUsS0FBWjtBQUFtQkMsU0FBSyxFQUFFLG1CQUExQjtBQUErQ0MsT0FBRyxFQUFFO0FBQXBELEdBSG9CLENBQXRCO0FBTUEsTUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQUVILFlBQVEsRUFBRSxLQUFaO0FBQW1CQyxTQUFLLEVBQUUsbUJBQTFCO0FBQStDQyxPQUFHLEVBQUU7QUFBcEQsR0FEbUIsRUFFbkI7QUFBRUYsWUFBUSxFQUFFLEtBQVo7QUFBbUJDLFNBQUssRUFBRSxzQkFBMUI7QUFBa0RDLE9BQUcsRUFBRTtBQUF2RCxHQUZtQixDQUFyQjtBQUtBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBWSxjQUFNLEVBQUMsaUNBQW5CO0FBQTRCLFlBQUksRUFBRUg7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UsOERBQUMsMkRBQUQ7QUFBWSxjQUFNLEVBQUMsaUNBQW5CO0FBQTRCLFlBQUksRUFBRUk7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFZRCxDQXhCRDs7QUEwQkEsK0RBQWVMLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBQcm9maWxlRWRpdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXRGb3JtXCI7XG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0XCI7XG5cbmNvbnN0IHByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGZvbGxvd2luZ0xpc3QgPSBbXG4gICAgeyBuaWNrbmFtZTogXCLquYDssqjsp4BcIiwgZW1haWw6IFwiU09VTElLS0BnbWFpbC5jb21cIiwgYmlvOiBcIu2Vre2VtDk5XCIgfSxcbiAgICB7IG5pY2tuYW1lOiBcIuyXoOuniOyYpFwiLCBlbWFpbDogXCJkZXYub2cuZXVuQGdtYWlsLmNvbVwiLCBiaW86IFwi7Jes7Iug7Yuw7LyTXCIgfSxcbiAgICB7IG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLCBlbWFpbDogXCJ6ZXJvY2hvQGdtYWlsLmNvbVwiLCBiaW86IFwi7Jik64qY7J2YIO2UveyXhSBDVE9cIiB9LFxuICBdO1xuXG4gIGNvbnN0IGZvbGxvd2VyTGlzdCA9IFtcbiAgICB7IG5pY2tuYW1lOiBcIuq5gOyyqOyngFwiLCBlbWFpbDogXCJTT1VMSUtLQGdtYWlsLmNvbVwiLCBiaW86IFwi7ZWt7ZW0OTlcIiB9LFxuICAgIHsgbmlja25hbWU6IFwi7Jeg66eI7JikXCIsIGVtYWlsOiBcImRldi5vZy5ldW5AZ21haWwuY29tXCIsIGJpbzogXCLsl6zsi6Dti7DsvJNcIiB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+7ZSE66Gc7ZWEIHwgRGF5U2NvcmU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEFwcExheW91dD5cbiAgICAgICAgPFByb2ZpbGVFZGl0Rm9ybSAvPlxuICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnokg66qp66GdXCIgZGF0YT17Zm9sbG93aW5nTGlzdH0gLz5cbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2VyTGlzdH0gLz5cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

});