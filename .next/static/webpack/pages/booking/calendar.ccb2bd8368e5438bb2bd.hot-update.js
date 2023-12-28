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
  }, {
    id: 'C',
    title: 'Court C'
  }, {
    id: 'D',
    title: 'Court D'
  }, {
    id: 'E',
    title: 'Court E'
  }, {
    id: 'F',
    title: 'Court F'
  }, {
    id: 'G',
    title: 'Court G'
  }, {
    id: 'H',
    title: 'Court H'
  }, {
    id: 'I',
    title: 'Court I'
  }, {
    id: 'J',
    title: 'Court J'
  }, {
    id: 'K',
    title: 'Court K'
  }, {
    id: 'L',
    title: 'Court L'
  }, {
    id: 'M',
    title: 'Court M'
  }, {
    id: 'N',
    title: 'Court N'
  }, {
    id: 'O',
    title: 'Court O'
  }, {
    id: 'P',
    title: 'Court P'
  }, {
    id: 'Q',
    title: 'Court Q'
  }, {
    id: 'R',
    title: 'Court R'
  }, {
    id: 'S',
    title: 'Court S'
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return handleAddEvent('A', '2023-01-03T10:00:00', '2023-01-03T12:00:00');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Book Court A"), __jsx("button", {
    onClick: function onClick() {
      return handleAddEvent('B', '2023-01-04T14:00:00', '2023-01-04T16:00:00');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va2luZy9CYWRtaW50b25TY2hlZHVsZS5qcyJdLCJuYW1lcyI6WyJCYWRtaW50b25TY2hlZHVsZSIsInVzZVN0YXRlIiwiaWQiLCJyZXNvdXJjZUlkIiwic3RhcnQiLCJlbmQiLCJ0aXRsZSIsImV2ZW50cyIsInNldEV2ZW50cyIsInJlc291cmNlcyIsImhhbmRsZUFkZEV2ZW50IiwibmV3RXZlbnQiLCJsZW5ndGgiLCJ0b1N0cmluZyIsInRpbWVHcmlkUGx1Z2luIiwicmVzb3VyY2VUaW1lbGluZVBsdWdpbiIsImludGVyYWN0aW9uUGx1Z2luIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUMsQ0FDbkM7QUFDRUMsTUFBRSxFQUFFLEdBRE47QUFFRUMsY0FBVSxFQUFFLEdBRmQ7QUFHRUMsU0FBSyxFQUFFLHFCQUhUO0FBSUVDLE9BQUcsRUFBRSxxQkFKUDtBQUtFQyxTQUFLLEVBQUU7QUFMVCxHQURtQyxFQVFuQztBQUNFSixNQUFFLEVBQUUsR0FETjtBQUVFQyxjQUFVLEVBQUUsR0FGZDtBQUdFQyxTQUFLLEVBQUUscUJBSFQ7QUFJRUMsT0FBRyxFQUFFLHFCQUpQO0FBS0VDLFNBQUssRUFBRTtBQUxULEdBUm1DLENBZW5DO0FBZm1DLEdBQUQsQ0FETjtBQUFBLE1BQ3ZCQyxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBbUI5QixNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFBRVAsTUFBRSxFQUFFLEdBQU47QUFBV0ksU0FBSyxFQUFFO0FBQWxCLEdBRGdCLEVBRWhCO0FBQUVKLE1BQUUsRUFBRSxHQUFOO0FBQVdJLFNB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QUFTRSxjQUFVLEVBQUUsSUFUZDtBQVVFLDJCQUF1QixFQUFFLElBVjNCO0FBV0UsVUFBTSxFQUFFWixNQVhWO0FBWUUsYUFBUyxFQUFFRSxTQVpiO0FBYUUsYUFBUyxFQUFFLG1CQUFDVyxJQUFEO0FBQUEsYUFBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakIsQ0FBVjtBQUFBLEtBYmI7QUFjRSxlQUFXLEVBQUUscUJBQUNILElBQUQ7QUFBQSxhQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxLQUFqQixDQUFWO0FBQUEsS0FkZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERjtBQXNCRCxDQS9FRDs7R0FBTXZCLGlCOztLQUFBQSxpQjtBQWlGTiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9va2luZy9jYWxlbmRhci5jY2IyYmQ4MzY4ZTU0MzhiYjJiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRnVsbENhbGVuZGFyIGZyb20gJ0BmdWxsY2FsZW5kYXIvcmVhY3QnO1xyXG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci90aW1lZ3JpZCc7XHJcbmltcG9ydCByZXNvdXJjZVRpbWVsaW5lUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvcmVzb3VyY2UtdGltZWxpbmUnO1xyXG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvbic7XHJcblxyXG5jb25zdCBCYWRtaW50b25TY2hlZHVsZSA9ICgpID0+IHtcclxuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBpZDogJzEnLFxyXG4gICAgICByZXNvdXJjZUlkOiAnQScsXHJcbiAgICAgIHN0YXJ0OiAnMjAyMy0wMS0wMVQwOTowMDowMCcsXHJcbiAgICAgIGVuZDogJzIwMjMtMDEtMDFUMTE6MDA6MDAnLFxyXG4gICAgICB0aXRsZTogJ0Jvb2tlZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzInLFxyXG4gICAgICByZXNvdXJjZUlkOiAnQicsXHJcbiAgICAgIHN0YXJ0OiAnMjAyMy0wMS0wMlQxMzowMDowMCcsXHJcbiAgICAgIGVuZDogJzIwMjMtMDEtMDJUMTU6MDA6MDAnLFxyXG4gICAgICB0aXRsZTogJ0Jvb2tlZCcsXHJcbiAgICB9LFxyXG4gICAgLy8gQWRkIG1vcmUgYm9va2VkIHRpbWUgc2xvdHMgYXMgbmVlZGVkXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHJlc291cmNlcyA9IFtcclxuICAgIHsgaWQ6ICdBJywgdGl0bGU6ICdDb3VydCBBJyB9LFxyXG4gICAgeyBpZDogJ0InLCB0aXRsZTogJ0NvdXJ0IEInIH0sXHJcbiAgICB7IGlkOiAnQycsIHRpdGxlOiAnQ291cnQgQycgfSxcclxuICAgIHsgaWQ6ICdEJywgdGl0bGU6ICdDb3VydCBEJyB9LFxyXG4gICAgeyBpZDogJ0UnLCB0aXRsZTogJ0NvdXJ0IEUnIH0sXHJcbiAgICB7IGlkOiAnRicsIHRpdGxlOiAnQ291cnQgRicgfSxcclxuICAgIHsgaWQ6ICdHJywgdGl0bGU6ICdDb3VydCBHJyB9LFxyXG5cclxuICAgIHsgaWQ6ICdIJywgdGl0bGU6ICdDb3VydCBIJyB9LFxyXG4gICAgeyBpZDogJ0knLCB0aXRsZTogJ0NvdXJ0IEknIH0sXHJcbiAgICB7IGlkOiAnSicsIHRpdGxlOiAnQ291cnQgSicgfSxcclxuICAgIHsgaWQ6ICdLJywgdGl0bGU6ICdDb3VydCBLJyB9LFxyXG4gICAgeyBpZDogJ0wnLCB0aXRsZTogJ0NvdXJ0IEwnIH0sXHJcbiAgICB7IGlkOiAnTScsIHRpdGxlOiAnQ291cnQgTScgfSxcclxuICAgIHsgaWQ6ICdOJywgdGl0bGU6ICdDb3VydCBOJyB9LFxyXG4gICAgeyBpZDogJ08nLCB0aXRsZTogJ0NvdXJ0IE8nIH0sXHJcbiAgICB7IGlkOiAnUCcsIHRpdGxlOiAnQ291cnQgUCcgfSxcclxuICAgIHsgaWQ6ICdRJywgdGl0bGU6ICdDb3VydCBRJyB9LFxyXG4gICAgeyBpZDogJ1InLCB0aXRsZTogJ0NvdXJ0IFInIH0sXHJcbiAgICB7IGlkOiAnUycsIHRpdGxlOiAnQ291cnQgUycgfSxcclxuXHJcblxyXG4gICAgLy8gQWRkIG1vcmUgcmVzb3VyY2VzIGFzIG5lZWRlZFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZEV2ZW50ID0gKHJlc291cmNlSWQsIHN0YXJ0LCBlbmQpID0+IHtcclxuICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xyXG4gICAgICBpZDogKGV2ZW50cy5sZW5ndGggKyAxKS50b1N0cmluZygpLFxyXG4gICAgICByZXNvdXJjZUlkLFxyXG4gICAgICBzdGFydCxcclxuICAgICAgZW5kLFxyXG4gICAgICB0aXRsZTogJ0Jvb2tlZCcsXHJcbiAgICB9O1xyXG5cclxuICAgIHNldEV2ZW50cyhbLi4uZXZlbnRzLCBuZXdFdmVudF0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEV2ZW50KCdBJywgJzIwMjMtMDEtMDNUMTA6MDA6MDAnLCAnMjAyMy0wMS0wM1QxMjowMDowMCcpfT5Cb29rIENvdXJ0IEE8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRFdmVudCgnQicsICcyMDIzLTAxLTA0VDE0OjAwOjAwJywgJzIwMjMtMDEtMDRUMTY6MDA6MDAnKX0+Qm9vayBDb3VydCBCPC9idXR0b24+XHJcbiAgICAgIDxGdWxsQ2FsZW5kYXJcclxuICAgICAgICBwbHVnaW5zPXtbdGltZUdyaWRQbHVnaW4sIHJlc291cmNlVGltZWxpbmVQbHVnaW4sIGludGVyYWN0aW9uUGx1Z2luXX1cclxuICAgICAgICBpbml0aWFsVmlldz1cInJlc291cmNlVGltZWxpbmVEYXlcIlxyXG4gICAgICAgIGhlYWRlclRvb2xiYXI9e3tcclxuICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxyXG4gICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgcmlnaHQ6ICdyZXNvdXJjZVRpbWVsaW5lRGF5LHJlc291cmNlVGltZWxpbmVXZWVrLHJlc291cmNlVGltZWxpbmVNb250aCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBlZGl0YWJsZT17dHJ1ZX1cclxuICAgICAgICBzZWxlY3RhYmxlPXt0cnVlfVxyXG4gICAgICAgIGV2ZW50UmVzaXphYmxlRnJvbVN0YXJ0PXt0cnVlfVxyXG4gICAgICAgIGV2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgIHJlc291cmNlcz17cmVzb3VyY2VzfVxyXG4gICAgICAgIGV2ZW50RHJvcD17KGluZm8pID0+IGNvbnNvbGUubG9nKGluZm8uZXZlbnQpfVxyXG4gICAgICAgIGV2ZW50UmVzaXplPXsoaW5mbykgPT4gY29uc29sZS5sb2coaW5mby5ldmVudCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFkbWludG9uU2NoZWR1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=