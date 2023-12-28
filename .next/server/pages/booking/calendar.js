(function() {
var exports = {};
exports.id = "pages/booking/calendar";
exports.ids = ["pages/booking/calendar"];
exports.modules = {

/***/ "./pages/booking/BadmintonSchedule.js":
/*!********************************************!*\
  !*** ./pages/booking/BadmintonSchedule.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/react */ "@fullcalendar/react");
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid */ "@fullcalendar/timegrid");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/resource-timeline */ "@fullcalendar/resource-timeline");
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "@fullcalendar/interaction");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\pages\\booking\\BadmintonSchedule.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






const BadmintonSchedule = () => {
  const {
    0: events,
    1: setEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
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
  ]);
  const resources = [{
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

  const handleAddEvent = (resourceId, start, end) => {
    const newEvent = {
      id: (events.length + 1).toString(),
      resourceId,
      start,
      end,
      title: 'Booked'
    };
    setEvents([...events, newEvent]);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: () => handleAddEvent('A', '2023-01-03T10:00:00', '2023-01-03T12:00:00'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Book Court A"), __jsx("button", {
    onClick: () => handleAddEvent('B', '2023-01-04T14:00:00', '2023-01-04T16:00:00'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "Book Court B"), __jsx((_fullcalendar_react__WEBPACK_IMPORTED_MODULE_1___default()), {
    plugins: [(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2___default()), (_fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_3___default()), (_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4___default())],
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
    eventDrop: info => console.log(info.event),
    eventResize: info => console.log(info.event),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BadmintonSchedule);

/***/ }),

/***/ "./pages/booking/calendar.js":
/*!***********************************!*\
  !*** ./pages/booking/calendar.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./pages/booking/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./pages/booking/footer.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./pages/booking/home.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _unpaidinvoice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unpaidinvoice */ "./pages/booking/unpaidinvoice.js");
/* harmony import */ var _rmcooper_next_fullcalendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rmcooper/next-fullcalendar */ "@rmcooper/next-fullcalendar");
/* harmony import */ var _rmcooper_next_fullcalendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_rmcooper_next_fullcalendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rmcooper_next_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rmcooper/next-fullcalendar/daygrid */ "@rmcooper/next-fullcalendar/daygrid");
/* harmony import */ var _rmcooper_next_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_rmcooper_next_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rmcooper_next_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rmcooper/next-fullcalendar/timegrid */ "@rmcooper/next-fullcalendar/timegrid");
/* harmony import */ var _rmcooper_next_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_rmcooper_next_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _rmcooper_next_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rmcooper/next-fullcalendar/interaction */ "@rmcooper/next-fullcalendar/interaction");
/* harmony import */ var _rmcooper_next_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_rmcooper_next_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _BadmintonSchedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BadmintonSchedule */ "./pages/booking/BadmintonSchedule.js");
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\pages\\booking\\calendar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);














const Calendar = () => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "main-div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "pt-100 mb-5 mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    lg: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("input", {
    type: "date",
    className: "form-control mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "list",
    style: {
      border: "1px solid#ccc",
      padding: "15px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Badge, {
    className: "me-2",
    style: {
      backgroundColor: "green",
      padding: "4px 6px",
      color: "#fff",
      height: "30px",
      fontSize: "12px",
      paddingTop: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "3/01/24 Wednesday"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, " $9.00"), __jsx("i", {
    className: "bx bx-trash",
    style: {
      marginLeft: "auto",
      color: "red",
      fontSize: "25px",
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, "12:30pm - 1pm, Badminton 3")), __jsx("div", {
    className: "list",
    style: {
      border: "1px solid#ccc",
      padding: "15px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Badge, {
    className: "me-2",
    style: {
      backgroundColor: "green",
      padding: "4px 6px",
      color: "#fff",
      height: "30px",
      fontSize: "12px",
      paddingTop: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "3/01/24 Wednesday"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, " $9.00"), __jsx("i", {
    className: "bx bx-trash",
    style: {
      marginLeft: "auto",
      color: "red",
      fontSize: "25px",
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, "12:30pm - 1pm, Badminton 3")), __jsx("div", {
    className: "list",
    style: {
      border: "1px solid#ccc",
      padding: "15px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Badge, {
    className: "me-2",
    style: {
      backgroundColor: "green",
      padding: "4px 6px",
      color: "#fff",
      height: "30px",
      fontSize: "12px",
      paddingTop: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "3/01/24 Wednesday"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, " $9.00"), __jsx("i", {
    className: "bx bx-trash",
    style: {
      marginLeft: "auto",
      color: "red",
      fontSize: "25px",
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, "12:30pm - 1pm, Badminton 3")), __jsx("div", {
    className: "list",
    style: {
      border: "1px solid#ccc",
      padding: "15px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Badge, {
    className: "me-2",
    style: {
      backgroundColor: "green",
      padding: "4px 6px",
      color: "#fff",
      height: "30px",
      fontSize: "12px",
      paddingTop: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, "3/01/24 Wednesday"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, " $9.00"), __jsx("i", {
    className: "bx bx-trash",
    style: {
      marginLeft: "auto",
      color: "red",
      fontSize: "25px",
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "12:30pm - 1pm, Badminton 3")), __jsx("div", {
    className: "text-center mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 22
    }
  }, "Clear Cart and Start Again"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "default-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "bx bx-cart",
    style: {
      fontSize: '16px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 24
    }
  }), " Checkout", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 86
    }
  }, " (04)")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    lg: "9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx("h5", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "Lorem Sports Centre"), __jsx(_BadmintonSchedule__WEBPACK_IMPORTED_MODULE_11__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }))))), __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./pages/booking/footer.js":
/*!*********************************!*\
  !*** ./pages/booking/footer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\pages\\booking\\footer.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const FooterBook = () => {
  const currentYear = new Date().getFullYear();
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-bottom-area border-top",
    style: {
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      color: "#000",
      textAlign: "center",
      padding: "20px 0px",
      backgroundColor: '#fff',
      zIndex: '999999'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "copy-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("p", {
    style: {
      color: '#000'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Copyright \xA9 ", currentYear, " Lorem", __jsx("a", {
    href: "https://envyTheme.com/",
    target: "blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterBook);

/***/ }),

/***/ "./pages/booking/header.js":
/*!*********************************!*\
  !*** ./pages/booking/header.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\pages\\booking\\header.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const header = () => {
  const [menu, setMenu] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "header-area fixed-top border-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "nav-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "navbar",
    className: "navbar-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "main-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "navbar-brand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("h3", {
    style: {
      fontSize: "25px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 23
    }
  }, "Logo"))), __jsx("button", {
    onClick: toggleNavbar,
    className: classTwo,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "icon-bar top-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "icon-bar middle-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "icon-bar bottom-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: classOne,
    id: "navbarSupportedContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "navbar-nav",
    style: {
      marginRight: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 23
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/overview",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 27
    }
  }, "UserName"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 27
    }
  }, "Account ", __jsx("i", {
    className: "bx bx-chevron-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }))), __jsx("ul", {
    className: "dropdown-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 27
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/accountoverview",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 31
    }
  }, "Overview"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 27
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/invoiceindex",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 31
    }
  }, "Invoices"))))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 23
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 27
    }
  }, "Booking ", __jsx("i", {
    className: "bx bx-chevron-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }))), __jsx("ul", {
    className: "dropdown-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 27
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/calendar",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 31
    }
  }, "Make a Booking"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 27
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/futurebooking",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 31
    }
  }, "View Future Bookings"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 27
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/pastbooking",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 31
    }
  }, "View Past Bookings"))))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 23
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/booking/membership",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 27
    }
  }, "Membership"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 27
    }
  }, "About")))), __jsx("div", {
    className: "others-option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "subscribe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/sign-in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "navbar-nav",
    style: {
      marginRight: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 27
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/",
    activeClassName: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 31
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 35
    }
  }, __jsx("i", {
    className: "bx bx-log-out",
    style: {
      fontSize: '18px',
      fontWeight: '600',
      marginRight: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  })), "Log Out")))))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./pages/booking/home.js":
/*!*******************************!*\
  !*** ./pages/booking/home.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\pages\\booking\\home.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Home = () => {
  const currentYear = new Date().getFullYear();
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
    lg: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "align-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }
  }, "Welcome to BTTC"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/booking/unpaidinvoice.js":
/*!****************************************!*\
  !*** ./pages/booking/unpaidinvoice.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\pages\\booking\\unpaidinvoice.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const UnpaidInvoice = () => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "doctor-vaccination-table table-responsive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("table", {
    className: "table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, "S.No."), __jsx("th", {
    className: "tb-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  }, "Invoice ID"), __jsx("th", {
    className: "tb-color-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, "User Name"), __jsx("th", {
    className: "tb-color-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, "User Mobile"), __jsx("th", {
    className: "tb-color-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "User Email"), __jsx("th", {
    className: "tb-color-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, "User Address"), __jsx("th", {
    className: "tb-color-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "Booking"), __jsx("th", {
    className: "tb-color-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Invoice Date"), __jsx("th", {
    className: "tb-color-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Amount"), __jsx("th", {
    className: "tb-color-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Due Amount"), __jsx("th", {
    className: "tb-color-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, "Action"))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "1")), __jsx("td", {
    className: "tb-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "1121212")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "John")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "334344434343")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Info@gmail.com")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Lorem Ipsum")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "5 Hours")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "25-12-23")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "$234")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "bx bx-trash",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  })))), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "1")), __jsx("td", {
    className: "tb-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "1121212")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "John")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "334344434343")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Info@gmail.com")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "Lorem Ipsum")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "5 Hours")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "25-12-23")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "$234")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "$234")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "bx bx-trash",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  })))), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "1")), __jsx("td", {
    className: "tb-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, "1121212")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "John")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "334344434343")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Info@gmail.com")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "Lorem Ipsum")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "5 Hours")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, "25-12-23")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "$234")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "bx bx-trash",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UnpaidInvoice);

/***/ }),

/***/ "@fullcalendar/interaction":
/*!********************************************!*\
  !*** external "@fullcalendar/interaction" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fullcalendar/interaction");;

/***/ }),

/***/ "@fullcalendar/react":
/*!**************************************!*\
  !*** external "@fullcalendar/react" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fullcalendar/react");;

/***/ }),

/***/ "@fullcalendar/resource-timeline":
/*!**************************************************!*\
  !*** external "@fullcalendar/resource-timeline" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fullcalendar/resource-timeline");;

/***/ }),

/***/ "@fullcalendar/timegrid":
/*!*****************************************!*\
  !*** external "@fullcalendar/timegrid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fullcalendar/timegrid");;

/***/ }),

/***/ "@rmcooper/next-fullcalendar":
/*!**********************************************!*\
  !*** external "@rmcooper/next-fullcalendar" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@rmcooper/next-fullcalendar");;

/***/ }),

/***/ "@rmcooper/next-fullcalendar/daygrid":
/*!******************************************************!*\
  !*** external "@rmcooper/next-fullcalendar/daygrid" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@rmcooper/next-fullcalendar/daygrid");;

/***/ }),

/***/ "@rmcooper/next-fullcalendar/interaction":
/*!**********************************************************!*\
  !*** external "@rmcooper/next-fullcalendar/interaction" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@rmcooper/next-fullcalendar/interaction");;

/***/ }),

/***/ "@rmcooper/next-fullcalendar/timegrid":
/*!*******************************************************!*\
  !*** external "@rmcooper/next-fullcalendar/timegrid" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@rmcooper/next-fullcalendar/timegrid");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_ActiveLink_js"], function() { return __webpack_exec__("./pages/booking/calendar.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JmLy4vcGFnZXMvYm9va2luZy9CYWRtaW50b25TY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly9jb3JmLy4vcGFnZXMvYm9va2luZy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9jb3JmLy4vcGFnZXMvYm9va2luZy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vY29yZi8uL3BhZ2VzL2Jvb2tpbmcvaGVhZGVyLmpzIiwid2VicGFjazovL2NvcmYvLi9wYWdlcy9ib29raW5nL2hvbWUuanMiLCJ3ZWJwYWNrOi8vY29yZi8uL3BhZ2VzL2Jvb2tpbmcvdW5wYWlkaW52b2ljZS5qcyIsIndlYnBhY2s6Ly9jb3JmL2V4dGVybmFsIFwiQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvblwiIiwid2VicGFjazovL2NvcmYvZXh0ZXJuYWwgXCJAZnVsbGNhbGVuZGFyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vY29yZi9leHRlcm5hbCBcIkBmdWxsY2FsZW5kYXIvcmVzb3VyY2UtdGltZWxpbmVcIiIsIndlYnBhY2s6Ly9jb3JmL2V4dGVybmFsIFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZFwiIiwid2VicGFjazovL2NvcmYvZXh0ZXJuYWwgXCJAcm1jb29wZXIvbmV4dC1mdWxsY2FsZW5kYXJcIiIsIndlYnBhY2s6Ly9jb3JmL2V4dGVybmFsIFwiQHJtY29vcGVyL25leHQtZnVsbGNhbGVuZGFyL2RheWdyaWRcIiIsIndlYnBhY2s6Ly9jb3JmL2V4dGVybmFsIFwiQHJtY29vcGVyL25leHQtZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCIiLCJ3ZWJwYWNrOi8vY29yZi9leHRlcm5hbCBcIkBybWNvb3Blci9uZXh0LWZ1bGxjYWxlbmRhci90aW1lZ3JpZFwiIiwid2VicGFjazovL2NvcmYvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY29yZi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jb3JmL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jb3JmL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jb3JmL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vY29yZi9leHRlcm5hbCBcInJlYWN0LWlzXCIiXSwibmFtZXMiOlsiQmFkbWludG9uU2NoZWR1bGUiLCJldmVudHMiLCJzZXRFdmVudHMiLCJ1c2VTdGF0ZSIsImlkIiwicmVzb3VyY2VJZCIsInN0YXJ0IiwiZW5kIiwidGl0bGUiLCJyZXNvdXJjZXMiLCJoYW5kbGVBZGRFdmVudCIsIm5ld0V2ZW50IiwibGVuZ3RoIiwidG9TdHJpbmciLCJ0aW1lR3JpZFBsdWdpbiIsInJlc291cmNlVGltZWxpbmVQbHVnaW4iLCJpbnRlcmFjdGlvblBsdWdpbiIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImluZm8iLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJDYWxlbmRhciIsImJvcmRlciIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImhlaWdodCIsImZvbnRTaXplIiwicGFkZGluZ1RvcCIsIm1hcmdpbkxlZnQiLCJjdXJzb3IiLCJGb290ZXJCb29rIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwb3NpdGlvbiIsImJvdHRvbSIsIndpZHRoIiwidGV4dEFsaWduIiwiekluZGV4IiwiaGVhZGVyIiwibWVudSIsInNldE1lbnUiLCJSZWFjdCIsInRvZ2dsZU5hdmJhciIsImNsYXNzT25lIiwiY2xhc3NUd28iLCJtYXJnaW5SaWdodCIsImZvbnRXZWlnaHQiLCJIb21lIiwiVW5wYWlkSW52b2ljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1B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QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixFQU9FO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLEVBUUU7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLEVBU0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsRUFVRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsRUFXRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixDQURGLENBREYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLENBREYsRUFJRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FKRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FQRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBVkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQWJGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBakJGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FwQkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0F2QkYsRUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQTFCRixFQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0E3QkYsQ0FERixFQXFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBUEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVZGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FiRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQWpCRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBcEJGLEVBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBdkJGLEVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0ExQkYsRUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQTdCRixFQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FoQ0YsQ0FyQ0YsRUEyRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQVBGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FWRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBYkYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FqQkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQXBCRixFQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQXZCRixFQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBMUJGLEVBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQTdCRixDQTNFRixDQWpCRixDQURGLENBREYsQ0FERjtBQXVJRCxDQXhJRDs7QUEwSUEsK0RBQWVBLGFBQWYsRTs7Ozs7Ozs7Ozs7QUM1SUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoicGFnZXMvYm9va2luZy9jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tICdAZnVsbGNhbGVuZGFyL3JlYWN0JztcclxuaW1wb3J0IHRpbWVHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvdGltZWdyaWQnO1xyXG5pbXBvcnQgcmVzb3VyY2VUaW1lbGluZVBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL3Jlc291cmNlLXRpbWVsaW5lJztcclxuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb24nO1xyXG5cclxuY29uc3QgQmFkbWludG9uU2NoZWR1bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaWQ6ICcxJyxcclxuICAgICAgcmVzb3VyY2VJZDogJ0EnLFxyXG4gICAgICBzdGFydDogJzIwMjMtMDEtMDFUMDk6MDA6MDAnLFxyXG4gICAgICBlbmQ6ICcyMDIzLTAxLTAxVDExOjAwOjAwJyxcclxuICAgICAgdGl0bGU6ICdCb29rZWQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICcyJyxcclxuICAgICAgcmVzb3VyY2VJZDogJ0InLFxyXG4gICAgICBzdGFydDogJzIwMjMtMDEtMDJUMTM6MDA6MDAnLFxyXG4gICAgICBlbmQ6ICcyMDIzLTAxLTAyVDE1OjAwOjAwJyxcclxuICAgICAgdGl0bGU6ICdCb29rZWQnLFxyXG4gICAgfSxcclxuICAgIC8vIEFkZCBtb3JlIGJvb2tlZCB0aW1lIHNsb3RzIGFzIG5lZWRlZFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCByZXNvdXJjZXMgPSBbXHJcbiAgICB7IGlkOiAnQScsIHRpdGxlOiAnQ291cnQgQScgfSxcclxuICAgIHsgaWQ6ICdCJywgdGl0bGU6ICdDb3VydCBCJyB9LFxyXG4gICAgeyBpZDogJ0MnLCB0aXRsZTogJ0NvdXJ0IEMnIH0sXHJcbiAgICB7IGlkOiAnRCcsIHRpdGxlOiAnQ291cnQgRCcgfSxcclxuICAgIHsgaWQ6ICdFJywgdGl0bGU6ICdDb3VydCBFJyB9LFxyXG4gICAgeyBpZDogJ0YnLCB0aXRsZTogJ0NvdXJ0IEYnIH0sXHJcbiAgICB7IGlkOiAnRycsIHRpdGxlOiAnQ291cnQgRycgfSxcclxuXHJcbiAgICB7IGlkOiAnSCcsIHRpdGxlOiAnQ291cnQgSCcgfSxcclxuICAgIHsgaWQ6ICdJJywgdGl0bGU6ICdDb3VydCBJJyB9LFxyXG4gICAgeyBpZDogJ0onLCB0aXRsZTogJ0NvdXJ0IEonIH0sXHJcbiAgICB7IGlkOiAnSycsIHRpdGxlOiAnQ291cnQgSycgfSxcclxuICAgIHsgaWQ6ICdMJywgdGl0bGU6ICdDb3VydCBMJyB9LFxyXG4gICAgeyBpZDogJ00nLCB0aXRsZTogJ0NvdXJ0IE0nIH0sXHJcbiAgICB7IGlkOiAnTicsIHRpdGxlOiAnQ291cnQgTicgfSxcclxuICAgIHsgaWQ6ICdPJywgdGl0bGU6ICdDb3VydCBPJyB9LFxyXG4gICAgeyBpZDogJ1AnLCB0aXRsZTogJ0NvdXJ0IFAnIH0sXHJcbiAgICB7IGlkOiAnUScsIHRpdGxlOiAnQ291cnQgUScgfSxcclxuICAgIHsgaWQ6ICdSJywgdGl0bGU6ICdDb3VydCBSJyB9LFxyXG4gICAgeyBpZDogJ1MnLCB0aXRsZTogJ0NvdXJ0IFMnIH0sXHJcblxyXG5cclxuICAgIC8vIEFkZCBtb3JlIHJlc291cmNlcyBhcyBuZWVkZWRcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRFdmVudCA9IChyZXNvdXJjZUlkLCBzdGFydCwgZW5kKSA9PiB7XHJcbiAgICBjb25zdCBuZXdFdmVudCA9IHtcclxuICAgICAgaWQ6IChldmVudHMubGVuZ3RoICsgMSkudG9TdHJpbmcoKSxcclxuICAgICAgcmVzb3VyY2VJZCxcclxuICAgICAgc3RhcnQsXHJcbiAgICAgIGVuZCxcclxuICAgICAgdGl0bGU6ICdCb29rZWQnLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRFdmVudHMoWy4uLmV2ZW50cywgbmV3RXZlbnRdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRFdmVudCgnQScsICcyMDIzLTAxLTAzVDEwOjAwOjAwJywgJzIwMjMtMDEtMDNUMTI6MDA6MDAnKX0+Qm9vayBDb3VydCBBPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkRXZlbnQoJ0InLCAnMjAyMy0wMS0wNFQxNDowMDowMCcsICcyMDIzLTAxLTA0VDE2OjAwOjAwJyl9PkJvb2sgQ291cnQgQjwvYnV0dG9uPlxyXG4gICAgICA8RnVsbENhbGVuZGFyXHJcbiAgICAgICAgcGx1Z2lucz17W3RpbWVHcmlkUGx1Z2luLCByZXNvdXJjZVRpbWVsaW5lUGx1Z2luLCBpbnRlcmFjdGlvblBsdWdpbl19XHJcbiAgICAgICAgaW5pdGlhbFZpZXc9XCJyZXNvdXJjZVRpbWVsaW5lRGF5XCJcclxuICAgICAgICBoZWFkZXJUb29sYmFyPXt7XHJcbiAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcclxuICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgIHJpZ2h0OiAncmVzb3VyY2VUaW1lbGluZURheSxyZXNvdXJjZVRpbWVsaW5lV2VlayxyZXNvdXJjZVRpbWVsaW5lTW9udGgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZWRpdGFibGU9e3RydWV9XHJcbiAgICAgICAgc2VsZWN0YWJsZT17dHJ1ZX1cclxuICAgICAgICBldmVudFJlc2l6YWJsZUZyb21TdGFydD17dHJ1ZX1cclxuICAgICAgICBldmVudHM9e2V2ZW50c31cclxuICAgICAgICByZXNvdXJjZXM9e3Jlc291cmNlc31cclxuICAgICAgICBldmVudERyb3A9eyhpbmZvKSA9PiBjb25zb2xlLmxvZyhpbmZvLmV2ZW50KX1cclxuICAgICAgICBldmVudFJlc2l6ZT17KGluZm8pID0+IGNvbnNvbGUubG9nKGluZm8uZXZlbnQpfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhZG1pbnRvblNjaGVkdWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlckJvb2sgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQnV0dG9uLCBDYXJkLCBCYWRnZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCBVbnBhaWRJbnZvaWNlIGZyb20gXCIuL3VucGFpZGludm9pY2VcIjtcclxuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tIFwiQHJtY29vcGVyL25leHQtZnVsbGNhbGVuZGFyXCI7XHJcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gXCJAcm1jb29wZXIvbmV4dC1mdWxsY2FsZW5kYXIvZGF5Z3JpZFwiO1xyXG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSBcIkBybWNvb3Blci9uZXh0LWZ1bGxjYWxlbmRhci90aW1lZ3JpZFwiO1xyXG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSBcIkBybWNvb3Blci9uZXh0LWZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvblwiO1xyXG5pbXBvcnQgQmFkbWludG9uU2NoZWR1bGUgZnJvbSBcIi4vQmFkbWludG9uU2NoZWR1bGVcIjtcclxuY29uc3QgQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1kaXZcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMDAgbWItNSBtdC0zXCI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkI2NjY1wiLCBwYWRkaW5nOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHggNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMy8wMS8yNCBXZWRuZXNkYXlcclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiAkOS4wMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnggYngtdHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD4xMjozMHBtIC0gMXBtLCBCYWRtaW50b24gMzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCNjY2NcIiwgcGFkZGluZzogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4IDZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDMvMDEvMjQgV2VkbmVzZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gJDkuMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ4IGJ4LXRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+MTI6MzBwbSAtIDFwbSwgQmFkbWludG9uIDM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQjY2NjXCIsIHBhZGRpbmc6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweCA2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAzLzAxLzI0IFdlZG5lc2RheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+ICQ5LjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJieCBieC10cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjEyOjMwcG0gLSAxcG0sIEJhZG1pbnRvbiAzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkI2NjY1wiLCBwYWRkaW5nOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHggNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMy8wMS8yNCBXZWRuZXNkYXlcclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiAkOS4wMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnggYngtdHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD4xMjozMHBtIC0gMXBtLCBCYWRtaW50b24gMzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxwPkNsZWFyIENhcnQgYW5kIFN0YXJ0IEFnYWluPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC1jYXJ0XCIgc3R5bGU9e3tmb250U2l6ZTonMTZweCd9fS8+IENoZWNrb3V0PHNwYW4+ICgwNCk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPVwiOVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTJcIj5Mb3JlbSBTcG9ydHMgQ2VudHJlPC9oNT5cclxuICAgICAgICAgICAgICAgIDxCYWRtaW50b25TY2hlZHVsZS8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlckJvb2sgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgRm9vdGVyQm9vayA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b20tYXJlYSBib3JkZXItdG9wXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMjBweCAwcHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjonI2ZmZicsXHJcbiAgICAgICAgICB6SW5kZXg6Jzk5OTk5OSdcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOicjMDAwJ319PlxyXG4gICAgICAgICAgICAgIENvcHlyaWdodCAmY29weTsge2N1cnJlbnRZZWFyfSBMb3JlbVxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VudnlUaGVtZS5jb20vXCIgdGFyZ2V0PVwiYmxhbmtcIj48L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlckJvb2s7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uLy4uL3V0aWxzL0FjdGl2ZUxpbmtcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgc2V0TWVudSghbWVudSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xhc3NPbmUgPSBtZW51XHJcbiAgICA/IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCJcclxuICAgIDogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2Ugc2hvd1wiO1xyXG4gIGNvbnN0IGNsYXNzVHdvID0gbWVudVxyXG4gICAgPyBcIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0IGNvbGxhcHNlZFwiXHJcbiAgICA6IFwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHRcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXItYXJlYSBmaXhlZC10b3AgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWFyZWFcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXItYXJlYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XHJcbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va2luZy9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2ltZy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiB3aWR0aD1cIjI4MHB4XCIvPiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiIH19PkxvZ288L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzVHdvfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciB0b3AtYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyIG1pZGRsZS1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgYm90dG9tLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NPbmV9IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va2luZy9vdmVydmlld1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOYW1lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50IDxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tZG93blwiPjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ib29raW5nL2FjY291bnRvdmVydmlld1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3ZlcnZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jvb2tpbmcvaW52b2ljZWluZGV4XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlTmF2YmFyfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9va2luZyA8aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ib29raW5nL2NhbGVuZGFyXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIGEgQm9va2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va2luZy9mdXR1cmVib29raW5nXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IEZ1dHVyZSBCb29raW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va2luZy9wYXN0Ym9va2luZ1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBQYXN0IEJvb2tpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Jvb2tpbmcvbWVtYmVyc2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcnNoaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlTmF2YmFyfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnMtb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ24taW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlTmF2YmFyfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LWxvZy1vdXRcIiBzdHlsZT17e2ZvbnRTaXplOicxOHB4JywgZm9udFdlaWdodDonNjAwJywgbWFyZ2luUmlnaHQ6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIGxnPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFsaWduLWxlZnRcIj5XZWxjb21lIHRvIEJUVEM8L2g1PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgPC9Sb3c+XHJcbiAgICAgICBcclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVucGFpZEludm9pY2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLXZhY2NpbmF0aW9uLXRhYmxlIHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5TLk5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRiLWNvbG9yLTJcIj5JbnZvaWNlIElEPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGItY29sb3ItM1wiPlVzZXIgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRiLWNvbG9yLTRcIj5Vc2VyIE1vYmlsZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRiLWNvbG9yLTVcIj5Vc2VyIEVtYWlsPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGItY29sb3ItNlwiPlVzZXIgQWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRiLWNvbG9yLTZcIj5Cb29raW5nPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGItY29sb3ItN1wiPkludm9pY2UgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRiLWNvbG9yLThcIj5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0Yi1jb2xvci04XCI+RHVlIEFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRiLWNvbG9yLTlcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4xPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRiLWNvbG9yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjExMjEyMTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Kb2huPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MzM0MzQ0NDM0MzQzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+SW5mb0BnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TG9yZW0gSXBzdW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj41IEhvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MjUtMTItMjM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4kMjM0PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0Yi1jb2xvci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4xMTIxMjEyPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Sm9objwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjMzNDM0NDQzNDM0Mzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkluZm9AZ21haWwuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkxvcmVtIElwc3VtPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NSBIb3Vyczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjI1LTEyLTIzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JDIzNDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiQyMzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGItY29sb3ItMlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MTEyMTIxMjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkpvaG48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMzQzNDQ0MzQzNDM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5JbmZvQGdtYWlsLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb3JlbSBJcHN1bTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjUgSG91cnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4yNS0xMi0yMzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiQyMzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5wYWlkSW52b2ljZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZ1bGxjYWxlbmRhci9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZ1bGxjYWxlbmRhci9yZXNvdXJjZS10aW1lbGluZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJtY29vcGVyL25leHQtZnVsbGNhbGVuZGFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcm1jb29wZXIvbmV4dC1mdWxsY2FsZW5kYXIvZGF5Z3JpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJtY29vcGVyL25leHQtZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcm1jb29wZXIvbmV4dC1mdWxsY2FsZW5kYXIvdGltZWdyaWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==