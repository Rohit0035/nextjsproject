self["webpackHotUpdate_N_E"]("pages/booking/calendar",{

/***/ "./pages/booking/BadmintonSchedule.js":
/*!********************************************!*\
  !*** ./pages/booking/BadmintonSchedule.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_deepa_OneDrive_Documents_rohit_hotal_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/resource-timeline */ "./node_modules/@fullcalendar/resource-timeline/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\pages\\booking\\BadmintonSchedule.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);






var BadmintonSchedule = function BadmintonSchedule() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    id: '1',
    resourceId: 'A',
    start: '2023-01-01T09:00:00',
    end: '2023-01-01T11:00:00',
    title: 'Badminton Game 1'
  }, {
    id: '2',
    resourceId: 'B',
    start: '2023-01-02T13:00:00',
    end: '2023-01-02T15:00:00',
    title: 'Badminton Game 2'
  } // Add more events as needed
  ]),
      events = _useState[0],
      setEvents = _useState[1];

  var resources = [{
    id: 'A',
    title: 'Court A'
  }, {
    id: 'B',
    title: 'Court B'
  } // Add more resources as needed
  ];

  var handleAddEvent = function handleAddEvent() {
    var newEvent = {
      id: (events.length + 1).toString(),
      resourceId: 'A',
      // Default to Court A
      start: '2023-01-03T10:00:00',
      end: '2023-01-03T12:00:00',
      title: 'New Badminton Game'
    };
    setEvents([].concat((0,C_Users_deepa_OneDrive_Documents_rohit_hotal_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(events), [newEvent]));
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: handleAddEvent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Add Event"), __jsx(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__.default, {
    plugins: [_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__.default, _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_4__.default, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__.default],
    initialView: "resourceTimelineDay",
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
    },
    editable: true,
    selectable: true,
    eventResizableFromStart: true,
    events: events,
    resources: resources,
    eventDrop: function eventDrop(info) {
      return console.log(info.event);
    },
    eventResize: function eventResize(info) {
      return console.log(info.event);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }));
};

_s(BadmintonSchedule, "8OceNO9BkeGZitva3ch4TQJITfg=");

_c = BadmintonSchedule;
/* harmony default export */ __webpack_exports__["default"] = (BadmintonSchedule);

var _c;

$RefreshReg$(_c, "BadmintonSchedule");

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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va2luZy9CYWRtaW50b25TY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyJdLCJuYW1lcyI6WyJCYWRtaW50b25TY2hlZHVsZSIsInVzZVN0YXRlIiwiaWQiLCJyZXNvdXJjZUlkIiwic3RhcnQiLCJlbmQiLCJ0aXRsZSIsImV2ZW50cyIsInNldEV2ZW50cyIsInJlc291cmNlcyIsImhhbmRsZUFkZEV2ZW50IiwibmV3RXZlbnQiLCJsZW5ndGgiLCJ0b1N0cmluZyIsInRpbWVHcmlkUGx1Z2luIiwicmVzb3VyY2VUaW1lbGluZVBsdWdpbiIsImludGVyYWN0aW9uUGx1Z2luIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUMsQ0FDbkM7QUFDRUMsTUFBRSxFQUFFLEdBRE47QUFFRUMsY0FBVSxFQUFFLEdBRmQ7QUFHRUMsU0FBSyxFQUFFLHFCQUhUO0FBSUVDLE9BQUcsRUFBRSxxQkFKUDtBQUtFQyxTQUFLLEVBQUU7QUFMVCxHQURtQyxFQVFuQztBQUNFSixNQUFFLEVBQUUsR0FETjtBQUVFQyxjQUFVLEVBQUUsR0FGZDtBQUdFQyxTQUFLLEVBQUUscUJBSFQ7QUFJRUMsT0FBRyxFQUFFLHFCQUpQO0FBS0VDLFNBQUssRUFBRTtBQUxULEdBUm1DLENBZW5DO0FBZm1DLEdBQUQsQ0FETjtBQUFBLE1BQ3ZCQyxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBbUI5QixNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFBRVAsTUFBRSxFQUFFLEdBQU47QUFBV0ksU0FBSyxFQUFFO0FBQWxCLEdBRGdCLEVBRWhCO0FBQUVKLE1BQUUsRUFBRSxHQUFOO0FBQVdJLFNBQUssRUFBRTtBQUFsQixHQUZnQixDQUdoQjtBQUhnQixHQUFsQjs7QUFNQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZULFFBQUUsRUFBRSxDQUFDSyxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsQ0FBakIsRUFBb0JDLFFBQXBCLEVBRFc7QUFFZlYsZ0JBQVUsRUFBRSxHQUZHO0FBRUU7QUFDakJDLFdBQUssRUFBRSxxQkFIUTtBQUlmQyxTQUFHLEVBQUUscUJBSlU7QUFLZkMsV0FBSyxFQUFFO0FBTFEsS0FBakI7QUFRQUUsYUFBUyxtTEFBS0QsTUFBTCxJQUFhSSxRQUFiLEdBQVQ7QUFDRCxHQVZEOztBQVlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRCxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUUsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBRSxDQUFDSSwyREFBRCxFQUFpQkMsb0VBQWpCLEVBQXlDQyw4REFBekMsQ0FEWDtBQUVFLGVBQVcsRUFBQyxxQkFGZDtBQUdFLGlCQUFhLEVBQUU7QUFDYkMsVUFBSSxFQUFFLGlCQURPO0FBRWJDLFlBQU0sRUFBRSxPQUZLO0FBR2JDLFdBQUssRUFBRTtBQUhNLEtBSGpCO0FBUUUsWUFBUSxFQUFFLElBUlo7QUFTRSxjQUFVLEVBQUUsSUFUZDtBQVVFLDJCQUF1QixFQUFFLElBVjNCO0FBV0UsVUFBTSxFQUFFWixNQVhWO0FBWUUsYUFBUyxFQUFFRSxTQVpiO0FBYUUsYUFBUyxFQUFFLG1CQUFDVyxJQUFEO0FBQUEsYUFBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakIsQ0FBVjtBQUFBLEtBYmI7QUFjRSxlQUFXLEVBQUUscUJBQUNILElBQUQ7QUFBQSxhQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxLQUFqQixDQUFWO0FBQUEsS0FkZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQXFCRCxDQTFERDs7R0FBTXZCLGlCOztLQUFBQSxpQjtBQTRETiwrREFBZUEsaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRTJFO0FBQzVEO0FBQ2YsaUNBQWlDLG9GQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNkU7QUFDSjtBQUNzQjtBQUNsQjtBQUM5RDtBQUNmLFNBQVMscUZBQWlCLFNBQVMsbUZBQWUsU0FBUyw4RkFBMEIsU0FBUyxxRkFBaUI7QUFDL0csQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ib29raW5nL2NhbGVuZGFyLmE0MjI0YjY1MmY2NDEyODk4MDI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSAnQGZ1bGxjYWxlbmRhci9yZWFjdCc7XHJcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL3RpbWVncmlkJztcclxuaW1wb3J0IHJlc291cmNlVGltZWxpbmVQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9yZXNvdXJjZS10aW1lbGluZSc7XHJcbmltcG9ydCBpbnRlcmFjdGlvblBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uJztcclxuXHJcbmNvbnN0IEJhZG1pbnRvblNjaGVkdWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMScsXHJcbiAgICAgIHJlc291cmNlSWQ6ICdBJyxcclxuICAgICAgc3RhcnQ6ICcyMDIzLTAxLTAxVDA5OjAwOjAwJyxcclxuICAgICAgZW5kOiAnMjAyMy0wMS0wMVQxMTowMDowMCcsXHJcbiAgICAgIHRpdGxlOiAnQmFkbWludG9uIEdhbWUgMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzInLFxyXG4gICAgICByZXNvdXJjZUlkOiAnQicsXHJcbiAgICAgIHN0YXJ0OiAnMjAyMy0wMS0wMlQxMzowMDowMCcsXHJcbiAgICAgIGVuZDogJzIwMjMtMDEtMDJUMTU6MDA6MDAnLFxyXG4gICAgICB0aXRsZTogJ0JhZG1pbnRvbiBHYW1lIDInLFxyXG4gICAgfSxcclxuICAgIC8vIEFkZCBtb3JlIGV2ZW50cyBhcyBuZWVkZWRcclxuICBdKTtcclxuXHJcbiAgY29uc3QgcmVzb3VyY2VzID0gW1xyXG4gICAgeyBpZDogJ0EnLCB0aXRsZTogJ0NvdXJ0IEEnIH0sXHJcbiAgICB7IGlkOiAnQicsIHRpdGxlOiAnQ291cnQgQicgfSxcclxuICAgIC8vIEFkZCBtb3JlIHJlc291cmNlcyBhcyBuZWVkZWRcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRFdmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xyXG4gICAgICBpZDogKGV2ZW50cy5sZW5ndGggKyAxKS50b1N0cmluZygpLFxyXG4gICAgICByZXNvdXJjZUlkOiAnQScsIC8vIERlZmF1bHQgdG8gQ291cnQgQVxyXG4gICAgICBzdGFydDogJzIwMjMtMDEtMDNUMTA6MDA6MDAnLFxyXG4gICAgICBlbmQ6ICcyMDIzLTAxLTAzVDEyOjAwOjAwJyxcclxuICAgICAgdGl0bGU6ICdOZXcgQmFkbWludG9uIEdhbWUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRFdmVudHMoWy4uLmV2ZW50cywgbmV3RXZlbnRdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRFdmVudH0+QWRkIEV2ZW50PC9idXR0b24+XHJcbiAgICAgIDxGdWxsQ2FsZW5kYXJcclxuICAgICAgICBwbHVnaW5zPXtbdGltZUdyaWRQbHVnaW4sIHJlc291cmNlVGltZWxpbmVQbHVnaW4sIGludGVyYWN0aW9uUGx1Z2luXX1cclxuICAgICAgICBpbml0aWFsVmlldz1cInJlc291cmNlVGltZWxpbmVEYXlcIlxyXG4gICAgICAgIGhlYWRlclRvb2xiYXI9e3tcclxuICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxyXG4gICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgcmlnaHQ6ICdyZXNvdXJjZVRpbWVsaW5lRGF5LHJlc291cmNlVGltZWxpbmVXZWVrLHJlc291cmNlVGltZWxpbmVNb250aCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBlZGl0YWJsZT17dHJ1ZX1cclxuICAgICAgICBzZWxlY3RhYmxlPXt0cnVlfVxyXG4gICAgICAgIGV2ZW50UmVzaXphYmxlRnJvbVN0YXJ0PXt0cnVlfVxyXG4gICAgICAgIGV2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgIHJlc291cmNlcz17cmVzb3VyY2VzfVxyXG4gICAgICAgIGV2ZW50RHJvcD17KGluZm8pID0+IGNvbnNvbGUubG9nKGluZm8uZXZlbnQpfVxyXG4gICAgICAgIGV2ZW50UmVzaXplPXsoaW5mbykgPT4gY29uc29sZS5sb2coaW5mby5ldmVudCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFkbWludG9uU2NoZWR1bGU7XHJcbiIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9