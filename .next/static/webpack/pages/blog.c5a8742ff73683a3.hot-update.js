"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Layouts.js":
/*!*******************************!*\
  !*** ./components/Layouts.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//import Head from 'next/head'\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark;\n    _s();\n    var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on('routeChangeStart', handleRouteChange);\n        router.events.on('routeChangeComplete', function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            router.events.off('routeChangeStart', handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\omunoz\\\\Desktop\\\\port\\\\components\\\\Layouts.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\omunoz\\\\Desktop\\\\port\\\\components\\\\Layouts.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: children\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\omunoz\\\\Desktop\\\\port\\\\components\\\\Layouts.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container py-4\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\omunoz\\\\Desktop\\\\port\\\\components\\\\Layouts.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\omunoz\\\\Desktop\\\\port\\\\components\\\\Layouts.js\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            },\n                            __self: _this,\n                            children: \"\\xa9 Oscar Mu\\xf1oz\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\omunoz\\\\Desktop\\\\port\\\\components\\\\Layouts.js\",\n                                lineNumber: 38,\n                                columnNumber: 17\n                            },\n                            __self: _this,\n                            children: [\n                                \"2012 - \",\n                                new Date().getFullYear()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\omunoz\\\\Desktop\\\\port\\\\components\\\\Layouts.js\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            },\n                            __self: _this,\n                            children: \"All rights reserved\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzdCLEVBQThCO0FBQ0c7QUFDa0I7QUFDbEI7OztBQUVqQyxHQUFLLENBQUNJLE1BQU0sR0FBRyxRQUFRLFFBQXVDLENBQUM7UUFBN0NDLFFBQVEsU0FBUkEsUUFBUSxrQkFBRUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLElBQUksMEJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxLQUFLOztJQUVuRCxHQUFLLENBQUNDLE1BQU0sR0FBR04sa0VBQVM7SUFFeEJELGdEQUFTLENBQUMsUUFDZCxHQURtQixDQUFDO1FBRVosR0FBSyxDQUFDUSxpQkFBaUIsR0FBR0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUM5QlAsc0RBQWU7UUFDbkIsQ0FBQztRQUVESyxNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQWtCLG1CQUFFSixpQkFBaUI7UUFFdERELE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUUsUUFBUTtZQUFGVixNQUFNLENBQU5BLHFEQUFjOztRQUU1RCxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDVkssTUFBTSxDQUFDSSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFrQixtQkFBRU4saUJBQWlCO1FBQzNELENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTTs7aUZBRURULCtDQUFNOzs7Ozs7OztpRkFDTmdCLENBQUk7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQjs7Ozs7OzswQkFDM0JaLFFBQVE7O1lBSVZDLE1BQU0seUVBQ0pBLENBQU07Z0JBQUNXLFNBQVMsRUFBQyxDQUFnQzs7Ozs7OztnR0FDakRDLENBQUc7b0JBQUNELFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs7NkZBQzFCRSxDQUFFOzs7Ozs7O3NDQUFDLENBQWtCOzs4RkFDckJDLENBQUM7Ozs7Ozs7O2dDQUFDLENBQU87Z0NBQUMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLFdBQVc7Ozs2RkFDaENGLENBQUM7Ozs7Ozs7c0NBQUMsQ0FBbUI7Ozs7Ozs7QUFRdEMsQ0FBQztHQXhDS2hCLE1BQU07O1FBRU9GLDhEQUFTOzs7S0FGdEJFLE1BQU07QUEwQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dHMuanM/ZTJmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiXHJcbi8vaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XHJcbiAgICAgICAgICAgIG5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG5cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gblByb2dyZXNzLmRvbmUoKSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgZm9vdGVyICYmIChcclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPiZjb3B5OyBPc2NhciBNdcOxb3o8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+MjAxMiAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+ICAgXHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJuUHJvZ3Jlc3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImZvb3RlciIsImRhcmsiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwib2ZmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layouts.js\n");

/***/ })

});