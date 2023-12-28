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
    title: 'Booked'
  }, {
    id: '2',
    resourceId: 'B',
    start: '2023-01-02T13:00:00',
    end: '2023-01-02T15:00:00',
    title: 'Booked'
  } // Add more booked time slots as needed
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

  var handleAddEvent = function handleAddEvent(resourceId, start, end) {
    var newEvent = {
      id: (events.length + 1).toString(),
      resourceId: resourceId,
      start: start,
      end: end,
      title: 'Booked'
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
    onClick: function onClick() {
      return handleAddEvent('A', '2023-01-03T10:00:00', '2023-01-03T12:00:00');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Book Court A"), __jsx("button", {
    onClick: function onClick() {
      return handleAddEvent('B', '2023-01-04T14:00:00', '2023-01-04T16:00:00');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Book Court B"), __jsx(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__.default, {
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
      lineNumber: 48,
      columnNumber: 7
    }
  }));
};

_s(BadmintonSchedule, "s0qmIIFSZAJBF65FydIqofQFFKw=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va2luZy9CYWRtaW50b25TY2hlZHVsZS5qcyJdLCJuYW1lcyI6WyJCYWRtaW50b25TY2hlZHVsZSIsInVzZVN0YXRlIiwiaWQiLCJyZXNvdXJjZUlkIiwic3RhcnQiLCJlbmQiLCJ0aXRsZSIsImV2ZW50cyIsInNldEV2ZW50cyIsInJlc291cmNlcyIsImhhbmRsZUFkZEV2ZW50IiwibmV3RXZlbnQiLCJsZW5ndGgiLCJ0b1N0cmluZyIsInRpbWVHcmlkUGx1Z2luIiwicmVzb3VyY2VUaW1lbGluZVBsdWdpbiIsImludGVyYWN0aW9uUGx1Z2luIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUMsQ0FDbkM7QUFDRUMsTUFBRSxFQUFFLEdBRE47QUFFRUMsY0FBVSxFQUFFLEdBRmQ7QUFHRUMsU0FBSyxFQUFFLHFCQUhUO0FBSUVDLE9BQUcsRUFBRSxxQkFKUDtBQUtFQyxTQUFLLEVBQUU7QUFMVCxHQURtQyxFQVFuQztBQUNFSixNQUFFLEVBQUUsR0FETjtBQUVFQyxjQUFVLEVBQUUsR0FGZDtBQUdFQyxTQUFLLEVBQUUscUJBSFQ7QUFJRUMsT0FBRyxFQUFFLHFCQUpQO0FBS0VDLFNBQUssRUFBRTtBQUxULEdBUm1DLENBZW5DO0FBZm1DLEdBQUQsQ0FETjtBQUFBLE1BQ3ZCQyxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBbUI5QixNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFBRVAsTUFBRSxFQUFFLEdBQU47QUFBV0ksU0FBSyxFQUFFO0FBQWxCLEdBRGdCLEVBRWhCO0FBQUVKLE1BQUUsRUFBRSxHQUFOO0FBQVdJLFNBQUssRUFBRTtBQUFsQixHQUZnQixDQUdoQjtBQUhnQixHQUFsQjs7QUFNQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNQLFVBQUQsRUFBYUMsS0FBYixFQUFvQkMsR0FBcEIsRUFBNEI7QUFDakQsUUFBTU0sUUFBUSxHQUFHO0FBQ2ZULFFBQUUsRUFBRSxDQUFDSyxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsQ0FBakIsRUFBb0JDLFFBQXBCLEVBRFc7QUFFZlYsZ0JBQVUsRUFBVkEsVUFGZTtBQUdmQyxXQUFLLEVBQUxBLEtBSGU7QUFJZkMsU0FBRyxFQUFIQSxHQUplO0FBS2ZDLFdBQUssRUFBRTtBQUxRLEtBQWpCO0FBUUFFLGFBQVMsbUxBQUtELE1BQUwsSUFBYUksUUFBYixHQUFUO0FBQ0QsR0FWRDs7QUFZQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1ELGNBQWMsQ0FBQyxHQUFELEVBQU0scUJBQU4sRUFBNkIscUJBQTdCLENBQXBCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUEsY0FBYyxDQUFDLEdBQUQsRUFBTSxxQkFBTixFQUE2QixxQkFBN0IsQ0FBcEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBRSxDQUFDSSwyREFBRCxFQUFpQkMsb0VBQWpCLEVBQXlDQyw4REFBekMsQ0FEWDtBQUVFLGVBQVcsRUFBQyxxQkFGZDtBQUdFLGlCQUFhLEVBQUU7QUFDYkMsVUFBSSxFQUFFLGlCQURPO0FBRWJDLFlBQU0sRUFBRSxPQUZLO0FBR2JDLFdBQUssRUFBRTtBQUhNLEtBSGpCO0FBUUUsWUFBUSxFQUFFLElBUlo7QUFTRSxjQUFVLEVBQUUsSUFUZDtBQVVFLDJCQUF1QixFQUFFLElBVjNCO0FBV0UsVUFBTSxFQUFFWixNQVhWO0FBWUUsYUFBUyxFQUFFRSxTQVpiO0FBYUUsYUFBUyxFQUFFLG1CQUFDVyxJQUFEO0FBQUEsYUFBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakIsQ0FBVjtBQUFBLEtBYmI7QUFjRSxlQUFXLEVBQUUscUJBQUNILElBQUQ7QUFBQSxhQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxLQUFqQixDQUFWO0FBQUEsS0FkZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERjtBQXNCRCxDQTNERDs7R0FBTXZCLGlCOztLQUFBQSxpQjtBQTZETiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9va2luZy9jYWxlbmRhci42MzlhMDdjNjRlNzU2ZTRiODcwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRnVsbENhbGVuZGFyIGZyb20gJ0BmdWxsY2FsZW5kYXIvcmVhY3QnO1xyXG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci90aW1lZ3JpZCc7XHJcbmltcG9ydCByZXNvdXJjZVRpbWVsaW5lUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvcmVzb3VyY2UtdGltZWxpbmUnO1xyXG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvbic7XHJcblxyXG5jb25zdCBCYWRtaW50b25TY2hlZHVsZSA9ICgpID0+IHtcclxuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBpZDogJzEnLFxyXG4gICAgICByZXNvdXJjZUlkOiAnQScsXHJcbiAgICAgIHN0YXJ0OiAnMjAyMy0wMS0wMVQwOTowMDowMCcsXHJcbiAgICAgIGVuZDogJzIwMjMtMDEtMDFUMTE6MDA6MDAnLFxyXG4gICAgICB0aXRsZTogJ0Jvb2tlZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzInLFxyXG4gICAgICByZXNvdXJjZUlkOiAnQicsXHJcbiAgICAgIHN0YXJ0OiAnMjAyMy0wMS0wMlQxMzowMDowMCcsXHJcbiAgICAgIGVuZDogJzIwMjMtMDEtMDJUMTU6MDA6MDAnLFxyXG4gICAgICB0aXRsZTogJ0Jvb2tlZCcsXHJcbiAgICB9LFxyXG4gICAgLy8gQWRkIG1vcmUgYm9va2VkIHRpbWUgc2xvdHMgYXMgbmVlZGVkXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHJlc291cmNlcyA9IFtcclxuICAgIHsgaWQ6ICdBJywgdGl0bGU6ICdDb3VydCBBJyB9LFxyXG4gICAgeyBpZDogJ0InLCB0aXRsZTogJ0NvdXJ0IEInIH0sXHJcbiAgICAvLyBBZGQgbW9yZSByZXNvdXJjZXMgYXMgbmVlZGVkXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkRXZlbnQgPSAocmVzb3VyY2VJZCwgc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RXZlbnQgPSB7XHJcbiAgICAgIGlkOiAoZXZlbnRzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCksXHJcbiAgICAgIHJlc291cmNlSWQsXHJcbiAgICAgIHN0YXJ0LFxyXG4gICAgICBlbmQsXHJcbiAgICAgIHRpdGxlOiAnQm9va2VkJyxcclxuICAgIH07XHJcblxyXG4gICAgc2V0RXZlbnRzKFsuLi5ldmVudHMsIG5ld0V2ZW50XSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkRXZlbnQoJ0EnLCAnMjAyMy0wMS0wM1QxMDowMDowMCcsICcyMDIzLTAxLTAzVDEyOjAwOjAwJyl9PkJvb2sgQ291cnQgQTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEV2ZW50KCdCJywgJzIwMjMtMDEtMDRUMTQ6MDA6MDAnLCAnMjAyMy0wMS0wNFQxNjowMDowMCcpfT5Cb29rIENvdXJ0IEI8L2J1dHRvbj5cclxuICAgICAgPEZ1bGxDYWxlbmRhclxyXG4gICAgICAgIHBsdWdpbnM9e1t0aW1lR3JpZFBsdWdpbiwgcmVzb3VyY2VUaW1lbGluZVBsdWdpbiwgaW50ZXJhY3Rpb25QbHVnaW5dfVxyXG4gICAgICAgIGluaXRpYWxWaWV3PVwicmVzb3VyY2VUaW1lbGluZURheVwiXHJcbiAgICAgICAgaGVhZGVyVG9vbGJhcj17e1xyXG4gICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICByaWdodDogJ3Jlc291cmNlVGltZWxpbmVEYXkscmVzb3VyY2VUaW1lbGluZVdlZWsscmVzb3VyY2VUaW1lbGluZU1vbnRoJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgIHNlbGVjdGFibGU9e3RydWV9XHJcbiAgICAgICAgZXZlbnRSZXNpemFibGVGcm9tU3RhcnQ9e3RydWV9XHJcbiAgICAgICAgZXZlbnRzPXtldmVudHN9XHJcbiAgICAgICAgcmVzb3VyY2VzPXtyZXNvdXJjZXN9XHJcbiAgICAgICAgZXZlbnREcm9wPXsoaW5mbykgPT4gY29uc29sZS5sb2coaW5mby5ldmVudCl9XHJcbiAgICAgICAgZXZlbnRSZXNpemU9eyhpbmZvKSA9PiBjb25zb2xlLmxvZyhpbmZvLmV2ZW50KX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWRtaW50b25TY2hlZHVsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==