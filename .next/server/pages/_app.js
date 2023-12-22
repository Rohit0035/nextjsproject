module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoTop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\xpresscure024\\components\\_App\\GoTop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class GoTop extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const {
      is_visible
    } = this.state;
    return __jsx("div", {
      className: "scroll-to-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, is_visible && __jsx("div", {
      className: "go-top",
      onClick: () => this.scrollToTop(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "bx bx-chevrons-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }), __jsx("i", {
      className: "bx bx-chevrons-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    })));
  }

}

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoTop */ "./components/_App/GoTop.js");
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preloader */ "./components/_App/Preloader.js");
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\xpresscure024\\components\\_App\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = ({
  children
}) => {
  // Preloader
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "XpressCure"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Corf - React Medical Health & Clinic Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Corf - React Medical Health & Clinic Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "Corf - React Medical Health & Clinic Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "canonical",
    href: "https://corf-react.envytheme.com/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), children, loader ? __jsx(_Preloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }) : null, __jsx(_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/_App/Preloader.js":
/*!**************************************!*\
  !*** ./components/_App/Preloader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\xpresscure024\\components\\_App\\Preloader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Preloader = () => {
  return __jsx("div", {
    className: "loader-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "loader-section section-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "loader-section section-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Preloader);

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ "./public/css/bootstrap.min.css");
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/animate.css */ "./public/css/animate.css");
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_css_meanmenu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/meanmenu.css */ "./public/css/meanmenu.css");
/* harmony import */ var _public_css_meanmenu_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_meanmenu_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/boxicons.min.css */ "./public/css/boxicons.min.css");
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/flaticon.css */ "./public/css/flaticon.css");
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ "./node_modules/react-modal-video/css/modal-video.min.css");
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/css/style.css */ "./public/css/style.css");
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/css/responsive.css */ "./public/css/responsive.css");
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\xpresscure024\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/css/animate.css":
/*!********************************!*\
  !*** ./public/css/animate.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./public/css/boxicons.min.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/meanmenu.css":
/*!*********************************!*\
  !*** ./public/css/meanmenu.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0dvVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiR29Ub3AiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpc192aXNpYmxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JvbGxDb21wb25lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2V0U3RhdGUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJyZW5kZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImxvYWRlciIsInNldExvYWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiUHJlbG9hZGVyIiwiTXlBcHAiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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SCxDQVJEOztBQVVlQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1DLEtBQUssR0FBSSxDQUFDO0FBQUU1QixXQUFGO0FBQWE2QjtBQUFiLENBQUQsS0FBOEI7QUFDekMsU0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FESjtBQUtILENBTkQ7O0FBUWVELG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29Ub3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzX3Zpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBzY3JvbGxDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHNjcm9sbENvbXBvbmVudC50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzX3Zpc2libGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNfdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcFwiPlxuICAgICAgICAgICAgICAgIHtpc192aXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnby10b3BcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNjcm9sbFRvVG9wKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9ucy11cCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9ucy11cCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBHb1RvcCBmcm9tICcuL0dvVG9wJ1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL1ByZWxvYWRlcidcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgLy8gUHJlbG9hZGVyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRMb2FkZXIoZmFsc2UpLCAxNTAwKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlhwcmVzc0N1cmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvcmYgLSBSZWFjdCBNZWRpY2FsIEhlYWx0aCAmIENsaW5pYyBUZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJDb3JmIC0gUmVhY3QgTWVkaWNhbCBIZWFsdGggJiBDbGluaWMgVGVtcGxhdGVcIj48L21ldGE+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJDb3JmIC0gUmVhY3QgTWVkaWNhbCBIZWFsdGggJiBDbGluaWMgVGVtcGxhdGVcIj48L21ldGE+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vY29yZi1yZWFjdC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICB7bG9hZGVyID8gPFByZWxvYWRlciAvPiA6IG51bGx9XG4gICAgICAgIFxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFByZWxvYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci13cmFwcGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLWxlZnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1yaWdodFwiPjwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyXG4iLCJpbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5jc3MnXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvbWVhbm1lbnUuY3NzJ1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2JveGljb25zLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvZmxhdGljb24uY3NzJ1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLm1pbi5jc3MnXG5pbXBvcnQgJ3JlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3MnXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIlxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3N0eWxlLmNzcydcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9yZXNwb25zaXZlLmNzcydcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL19BcHAvTGF5b3V0JztcblxuY29uc3QgTXlBcHAgPSAgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==