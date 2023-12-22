webpackHotUpdate_N_E("pages/booking/overview",{

/***/ "./node_modules/react-accessible-accordion/dist/es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/es/index.js ***!
  \******************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState, resetNextUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemButton", function() { return AccordionItemButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemHeading", function() { return AccordionItemHeadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemPanel", function() { return AccordionItemPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemState", function() { return AccordionItemState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNextUuid", function() { return resetNextUuid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AccordionStore = function AccordionStore(_ref) {
  var _this = this;

  var _ref$expanded = _ref.expanded,
      _expanded = _ref$expanded === void 0 ? [] : _ref$expanded,
      _ref$allowMultipleExp = _ref.allowMultipleExpanded,
      allowMultipleExpanded = _ref$allowMultipleExp === void 0 ? false : _ref$allowMultipleExp,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? false : _ref$allowZeroExpande;

  _classCallCheck(this, AccordionStore);

  _defineProperty(this, "expanded", void 0);

  _defineProperty(this, "allowMultipleExpanded", void 0);

  _defineProperty(this, "allowZeroExpanded", void 0);

  _defineProperty(this, "toggleExpanded", function (uuid) {
    if (_this.isItemDisabled(uuid)) {
      return _this;
    }

    var isExpanded = _this.isItemExpanded(uuid);

    if (!isExpanded) {
      return _this.augment({
        expanded: _this.allowMultipleExpanded ? [].concat(_toConsumableArray(_this.expanded), [uuid]) : [uuid]
      });
    } else {
      return _this.augment({
        expanded: _this.expanded.filter(function (expandedUuid) {
          return expandedUuid !== uuid;
        })
      });
    }
  });

  _defineProperty(this, "isItemDisabled", function (uuid) {
    var isExpanded = _this.isItemExpanded(uuid);

    var isOnlyOneExpanded = _this.expanded.length === 1;
    return Boolean(isExpanded && !_this.allowZeroExpanded && isOnlyOneExpanded);
  });

  _defineProperty(this, "isItemExpanded", function (uuid) {
    return _this.expanded.indexOf(uuid) !== -1;
  });

  _defineProperty(this, "getPanelAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);
    return {
      role: _this.allowMultipleExpanded ? undefined : 'region',
      'aria-hidden': _this.allowMultipleExpanded ? !expanded : undefined,
      'aria-labelledby': _this.getButtonId(uuid),
      id: _this.getPanelId(uuid),
      hidden: expanded ? undefined : true
    };
  });

  _defineProperty(this, "getHeadingAttributes", function () {
    return {
      role: 'heading'
    };
  });

  _defineProperty(this, "getButtonAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);

    var disabled = _this.isItemDisabled(uuid);

    return {
      id: _this.getButtonId(uuid),
      'aria-disabled': disabled,
      'aria-expanded': expanded,
      'aria-controls': _this.getPanelId(uuid),
      role: 'button',
      tabIndex: 0
    };
  });

  _defineProperty(this, "getPanelId", function (uuid) {
    return "accordion__panel-".concat(uuid);
  });

  _defineProperty(this, "getButtonId", function (uuid) {
    return "accordion__heading-".concat(uuid);
  });

  _defineProperty(this, "augment", function (args) {
    return new AccordionStore(_objectSpread2({
      expanded: _this.expanded,
      allowMultipleExpanded: _this.allowMultipleExpanded,
      allowZeroExpanded: _this.allowZeroExpanded
    }, args));
  });

  this.expanded = _expanded;
  this.allowMultipleExpanded = allowMultipleExpanded;
  this.allowZeroExpanded = allowZeroExpanded;
};

var Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var Provider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Provider, _React$PureComponent);

  var _super = _createSuper(Provider);

  function Provider() {
    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", new AccordionStore({
      expanded: _this.props.preExpanded,
      allowMultipleExpanded: _this.props.allowMultipleExpanded,
      allowZeroExpanded: _this.props.allowZeroExpanded
    }));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function (key) {
      _this.setState(function (state) {
        return state.toggleExpanded(key);
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.expanded);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isItemDisabled", function (key) {
      return _this.state.isItemDisabled(key);
    });

    _defineProperty(_assertThisInitialized(_this), "isItemExpanded", function (key) {
      return _this.state.isItemExpanded(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getPanelAttributes(key, dangerouslySetExpanded);
    });

    _defineProperty(_assertThisInitialized(_this), "getHeadingAttributes", function () {
      // uuid: UUID
      return _this.state.getHeadingAttributes();
    });

    _defineProperty(_assertThisInitialized(_this), "getButtonAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getButtonAttributes(key, dangerouslySetExpanded);
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          allowZeroExpanded = _this$state.allowZeroExpanded,
          allowMultipleExpanded = _this$state.allowMultipleExpanded;
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
        value: {
          allowMultipleExpanded: allowMultipleExpanded,
          allowZeroExpanded: allowZeroExpanded,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Provider, "defaultProps", {
  allowMultipleExpanded: false,
  allowZeroExpanded: false
});

var Consumer = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(Consumer, _React$PureComponent2);

  var _super2 = _createSuper(Consumer);

  function Consumer() {
    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var Accordion = function Accordion(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion' : _ref$className,
      allowMultipleExpanded = _ref.allowMultipleExpanded,
      allowZeroExpanded = _ref.allowZeroExpanded,
      onChange = _ref.onChange,
      preExpanded = _ref.preExpanded,
      rest = _objectWithoutProperties(_ref, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider, {
    preExpanded: preExpanded,
    allowMultipleExpanded: allowMultipleExpanded,
    allowZeroExpanded: allowZeroExpanded,
    onChange: onChange
  }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    "data-accordion-component": "Accordion",
    className: className
  }, rest)));
};

var DisplayName;

(function (DisplayName) {
  DisplayName["Accordion"] = "Accordion";
  DisplayName["AccordionItem"] = "AccordionItem";
  DisplayName["AccordionItemButton"] = "AccordionItemButton";
  DisplayName["AccordionItemHeading"] = "AccordionItemHeading";
  DisplayName["AccordionItemPanel"] = "AccordionItemPanel";
})(DisplayName || (DisplayName = {}));

var DisplayName$1 = DisplayName;

var DEFAULT = 0;
var counter = DEFAULT;
function nextUuid() {
  var current = counter;
  counter = counter + 1;
  return "raa-".concat(current);
}
function resetNextUuid() {
  counter = DEFAULT;
} // HTML5 ids allow all unicode characters, except for ASCII whitespaces
// https://infra.spec.whatwg.org/#ascii-whitespace
// eslint-disable-next-line no-control-regex

var idRegex = /[\u0009\u000a\u000c\u000d\u0020]/g;
function assertValidHtmlId(htmlId) {
  if (htmlId === '' || idRegex.test(htmlId)) {
    console.error("uuid must be a valid HTML5 id but was given \"".concat(htmlId, "\", ASCII whitespaces are forbidden"));
    return false;
  }

  return true;
}

var Context$1 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

var Provider$1 = function Provider(_ref) {
  var children = _ref.children,
      uuid = _ref.uuid,
      accordionContext = _ref.accordionContext,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded;

  var toggleExpanded = function toggleExpanded() {
    accordionContext.toggleExpanded(uuid);
  };

  var renderChildren = function renderChildren(accordionContext) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : accordionContext.isItemExpanded(uuid);
    var disabled = accordionContext.isItemDisabled(uuid);
    var panelAttributes = accordionContext.getPanelAttributes(uuid, dangerouslySetExpanded);
    var headingAttributes = accordionContext.getHeadingAttributes(uuid);
    var buttonAttributes = accordionContext.getButtonAttributes(uuid, dangerouslySetExpanded);
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Provider, {
      value: {
        uuid: uuid,
        expanded: expanded,
        disabled: disabled,
        toggleExpanded: toggleExpanded,
        panelAttributes: panelAttributes,
        headingAttributes: headingAttributes,
        buttonAttributes: buttonAttributes
      }
    }, children);
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, renderChildren);
};

var ProviderWrapper = function ProviderWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, function (accordionContext) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider$1, _extends({}, props, {
      accordionContext: accordionContext
    }));
  });
};
var Consumer$1 = function Consumer(_ref2) {
  var children = _ref2.children;

  var renderChildren = function renderChildren(container) {
    return container ? children(container) : null;
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Consumer, null, renderChildren);
};

var AccordionItem = function AccordionItem(_ref) {
  var customUuid = _ref.uuid,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__item' : _ref$className,
      activeClassName = _ref.activeClassName,
      rest = _objectWithoutProperties(_ref, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(nextUuid()),
      _useState2 = _slicedToArray(_useState, 1),
      instanceUuid = _useState2[0];

  var uuid = customUuid || instanceUuid;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded;
    var cx = expanded && activeClassName ? activeClassName : className;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
      "data-accordion-component": "AccordionItem",
      className: cx
    }, rest));
  };

  assertValidHtmlId(uuid);

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProviderWrapper, {
    uuid: uuid,
    dangerouslySetExpanded: dangerouslySetExpanded
  }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren));
};

AccordionItem.displayName = DisplayName$1.AccordionItem;

function getClosestAccordion(el) {
  return el && (el.matches('[data-accordion-component="Accordion"]') ? el : getClosestAccordion(el.parentElement));
}
function getSiblingButtons(item) {
  var parentAccordion = getClosestAccordion(item);
  return parentAccordion && Array.from(parentAccordion.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function focusFirstSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var first = siblings[0];

  if (first) {
    first.focus();
  }
}
function focusLastSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var last = siblings[siblings.length - 1];

  if (last) {
    last.focus();
  }
}
function focusNextSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var next = siblings[currentIndex + 1];

    if (next) {
      next.focus();
    }
  }
}
function focusPreviousSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var previous = siblings[currentIndex - 1];

    if (previous) {
      previous.focus();
    }
  }
}

var keycodes = {
  END: 'End',
  ENTER: 'Enter',
  HOME: 'Home',
  SPACE: ' ',
  SPACE_DEPRECATED: 'Spacebar',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
};

var AccordionItemButton = function AccordionItemButton(_ref) {
  var toggleExpanded = _ref.toggleExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__button' : _ref$className,
      rest = _objectWithoutProperties(_ref, ["toggleExpanded", "className"]);

  var handleKeyPress = function handleKeyPress(evt) {
    var keyCode = evt.key;

    if (keyCode === keycodes.ENTER || keyCode === keycodes.SPACE || keyCode === keycodes.SPACE_DEPRECATED) {
      evt.preventDefault();
      toggleExpanded();
    }
    /* The following block is ignored from test coverage because at time
     * time of writing Jest/react-testing-library can not assert 'focus'
     * functionality.
     */
    // istanbul ignore next


    if (evt.target instanceof HTMLElement) {
      switch (keyCode) {
        case keycodes.HOME:
          {
            evt.preventDefault();
            focusFirstSiblingOf(evt.target);
            break;
          }

        case keycodes.END:
          {
            evt.preventDefault();
            focusLastSiblingOf(evt.target);
            break;
          }

        case keycodes.LEFT:
        case keycodes.UP:
          {
            evt.preventDefault();
            focusPreviousSiblingOf(evt.target);
            break;
          }

        case keycodes.RIGHT:
        case keycodes.DOWN:
          {
            evt.preventDefault();
            focusNextSiblingOf(evt.target);
            break;
          }
      }
    }
  };

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    className: className
  }, rest, {
    role: "button",
    tabIndex: 0,
    onClick: toggleExpanded,
    onKeyDown: handleKeyPress,
    "data-accordion-component": "AccordionItemButton"
  }));
};

var AccordionItemButtonWrapper = function AccordionItemButtonWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var toggleExpanded = itemContext.toggleExpanded,
        buttonAttributes = itemContext.buttonAttributes;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemButton, _extends({
      toggleExpanded: toggleExpanded
    }, props, buttonAttributes));
  });
};

var defaultProps = {
  className: 'accordion__heading',
  'aria-level': 3
};
var SPEC_ERROR = "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D\n\n";
var AccordionItemHeading = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AccordionItemHeading, _React$PureComponent);

  var _super = _createSuper(AccordionItemHeading);

  function AccordionItemHeading() {
    var _this;

    _classCallCheck(this, AccordionItemHeading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ref", void 0);

    _defineProperty(_assertThisInitialized(_this), "setRef", function (ref) {
      _this.ref = ref;
    });

    return _this;
  }

  _createClass(AccordionItemHeading, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function VALIDATE(ref) {
      if (ref === undefined) {
        throw new Error('ref is undefined');
      }

      if (!(ref.childElementCount === 1 && ref.firstElementChild && ref.firstElementChild.getAttribute('data-accordion-component') === 'AccordionItemButton')) {
        throw new Error(SPEC_ERROR);
      }
    }
  }]);

  return AccordionItemHeading;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(AccordionItemHeading, "defaultProps", defaultProps);

var AccordionItemHeadingWrapper = function AccordionItemHeadingWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var headingAttributes = itemContext.headingAttributes;

    if (props.id) {
      assertValidHtmlId(props.id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemHeading, _extends({}, props, headingAttributes));
  });
};

AccordionItemHeadingWrapper.displayName = DisplayName$1.AccordionItemHeading;

var AccordionItemPanel = function AccordionItemPanel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__panel' : _ref$className,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["className", "id"]);

  var renderChildren = function renderChildren(_ref2) {
    var panelAttributes = _ref2.panelAttributes;

    if (id) {
      assertValidHtmlId(id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
      "data-accordion-component": "AccordionItemPanel",
      className: className
    }, rest, panelAttributes));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};

var AccordionItemState = function AccordionItemState(_ref) {
  var children = _ref.children;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded,
        disabled = itemContext.disabled;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children({
      expanded: expanded,
      disabled: disabled
    }));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};




/***/ }),

/***/ "./pages/booking/overview.js":
/*!***********************************!*\
  !*** ./pages/booking/overview.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./pages/booking/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./pages/booking/footer.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./pages/booking/home.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/es/index.js");
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\xpresscure024\\pages\\booking\\overview.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Overview = function Overview() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "main-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "pt-100 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["Accordion"], {
    allowZeroExpanded: true,
    preExpanded: ["a"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItem"], {
    uuid: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemButton"], {
    style: {
      textAlign: "left"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "What is coronavirus & COVID-19?"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  }, "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates."))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItem"], {
    uuid: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }, "What are the symptoms of COVID-19?"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates.")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItem"], {
    uuid: "c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }, "What can I do to prevent myself from coronavirus and others?"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates."))))))), __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })));
};

_c = Overview;
/* harmony default export */ __webpack_exports__["default"] = (Overview);

var _c;

$RefreshReg$(_c, "Overview");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jvb2tpbmcvb3ZlcnZpZXcuanMiXSwibmFtZXMiOlsiT3ZlcnZpZXciLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3Rjs7QUFFeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFH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O0FBQUE7QUFBQTtBQUFBLGdSQURGLENBTkYsQ0FERixDQXRCRixFQXlDRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFBZSxRQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBREYsQ0FERixDQURGLEVBU0UsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnUkFERixDQVRGLENBREYsQ0F6Q0YsQ0FERixDQURGLENBRkYsRUFzRUUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEVGLENBREYsQ0FERjtBQTRFRCxDQTdFRDs7S0FBTUQsUTtBQStFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9va2luZy9vdmVydmlldy5mZGNhZWQyZDlhOGI3MTZhYzVjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgUHVyZUNvbXBvbmVudCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBBY2NvcmRpb25TdG9yZSA9IGZ1bmN0aW9uIEFjY29yZGlvblN0b3JlKF9yZWYpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgX3JlZiRleHBhbmRlZCA9IF9yZWYuZXhwYW5kZWQsXG4gICAgICBfZXhwYW5kZWQgPSBfcmVmJGV4cGFuZGVkID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkZXhwYW5kZWQsXG4gICAgICBfcmVmJGFsbG93TXVsdGlwbGVFeHAgPSBfcmVmLmFsbG93TXVsdGlwbGVFeHBhbmRlZCxcbiAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IF9yZWYkYWxsb3dNdWx0aXBsZUV4cCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGFsbG93TXVsdGlwbGVFeHAsXG4gICAgICBfcmVmJGFsbG93WmVyb0V4cGFuZGUgPSBfcmVmLmFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgYWxsb3daZXJvRXhwYW5kZWQgPSBfcmVmJGFsbG93WmVyb0V4cGFuZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhbGxvd1plcm9FeHBhbmRlO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY2NvcmRpb25TdG9yZSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXhwYW5kZWRcIiwgdm9pZCAwKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd011bHRpcGxlRXhwYW5kZWRcIiwgdm9pZCAwKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd1plcm9FeHBhbmRlZFwiLCB2b2lkIDApO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvZ2dsZUV4cGFuZGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgaWYgKF90aGlzLmlzSXRlbURpc2FibGVkKHV1aWQpKSB7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlzRXhwYW5kZWQgPSBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcblxuICAgIGlmICghaXNFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF90aGlzLmF1Z21lbnQoe1xuICAgICAgICBleHBhbmRlZDogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID8gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5leHBhbmRlZCksIFt1dWlkXSkgOiBbdXVpZF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3RoaXMuYXVnbWVudCh7XG4gICAgICAgIGV4cGFuZGVkOiBfdGhpcy5leHBhbmRlZC5maWx0ZXIoZnVuY3Rpb24gKGV4cGFuZGVkVXVpZCkge1xuICAgICAgICAgIHJldHVybiBleHBhbmRlZFV1aWQgIT09IHV1aWQ7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSXRlbURpc2FibGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgdmFyIGlzRXhwYW5kZWQgPSBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcblxuICAgIHZhciBpc09ubHlPbmVFeHBhbmRlZCA9IF90aGlzLmV4cGFuZGVkLmxlbmd0aCA9PT0gMTtcbiAgICByZXR1cm4gQm9vbGVhbihpc0V4cGFuZGVkICYmICFfdGhpcy5hbGxvd1plcm9FeHBhbmRlZCAmJiBpc09ubHlPbmVFeHBhbmRlZCk7XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSXRlbUV4cGFuZGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIF90aGlzLmV4cGFuZGVkLmluZGV4T2YodXVpZCkgIT09IC0xO1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRQYW5lbEF0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKHV1aWQsIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpIHtcbiAgICB2YXIgZXhwYW5kZWQgPSBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSBudWxsICYmIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgIT09IHZvaWQgMCA/IGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgOiBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcbiAgICByZXR1cm4ge1xuICAgICAgcm9sZTogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID8gdW5kZWZpbmVkIDogJ3JlZ2lvbicsXG4gICAgICAnYXJpYS1oaWRkZW4nOiBfdGhpcy5hbGxvd011bHRpcGxlRXhwYW5kZWQgPyAhZXhwYW5kZWQgOiB1bmRlZmluZWQsXG4gICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogX3RoaXMuZ2V0QnV0dG9uSWQodXVpZCksXG4gICAgICBpZDogX3RoaXMuZ2V0UGFuZWxJZCh1dWlkKSxcbiAgICAgIGhpZGRlbjogZXhwYW5kZWQgPyB1bmRlZmluZWQgOiB0cnVlXG4gICAgfTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SGVhZGluZ0F0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByb2xlOiAnaGVhZGluZydcbiAgICB9O1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRCdXR0b25BdHRyaWJ1dGVzXCIsIGZ1bmN0aW9uICh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgdmFyIGV4cGFuZGVkID0gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gbnVsbCAmJiBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSB2b2lkIDAgPyBkYW5nZXJvdXNseVNldEV4cGFuZGVkIDogX3RoaXMuaXNJdGVtRXhwYW5kZWQodXVpZCk7XG5cbiAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5pc0l0ZW1EaXNhYmxlZCh1dWlkKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogX3RoaXMuZ2V0QnV0dG9uSWQodXVpZCksXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBleHBhbmRlZCxcbiAgICAgICdhcmlhLWNvbnRyb2xzJzogX3RoaXMuZ2V0UGFuZWxJZCh1dWlkKSxcbiAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgdGFiSW5kZXg6IDBcbiAgICB9O1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRQYW5lbElkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIFwiYWNjb3JkaW9uX19wYW5lbC1cIi5jb25jYXQodXVpZCk7XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEJ1dHRvbklkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIFwiYWNjb3JkaW9uX19oZWFkaW5nLVwiLmNvbmNhdCh1dWlkKTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVnbWVudFwiLCBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiBuZXcgQWNjb3JkaW9uU3RvcmUoX29iamVjdFNwcmVhZDIoe1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLmV4cGFuZGVkLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBfdGhpcy5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZDogX3RoaXMuYWxsb3daZXJvRXhwYW5kZWRcbiAgICB9LCBhcmdzKSk7XG4gIH0pO1xuXG4gIHRoaXMuZXhwYW5kZWQgPSBfZXhwYW5kZWQ7XG4gIHRoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID0gYWxsb3dNdWx0aXBsZUV4cGFuZGVkO1xuICB0aGlzLmFsbG93WmVyb0V4cGFuZGVkID0gYWxsb3daZXJvRXhwYW5kZWQ7XG59O1xuXG52YXIgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIFByb3ZpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCBuZXcgQWNjb3JkaW9uU3RvcmUoe1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLnByb3BzLnByZUV4cGFuZGVkLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBfdGhpcy5wcm9wcy5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZDogX3RoaXMucHJvcHMuYWxsb3daZXJvRXhwYW5kZWRcbiAgICB9KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidG9nZ2xlRXhwYW5kZWRcIiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50b2dnbGVFeHBhbmRlZChrZXkpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShfdGhpcy5zdGF0ZS5leHBhbmRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzSXRlbURpc2FibGVkXCIsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5pc0l0ZW1EaXNhYmxlZChrZXkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzSXRlbUV4cGFuZGVkXCIsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5pc0l0ZW1FeHBhbmRlZChrZXkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFBhbmVsQXR0cmlidXRlc1wiLCBmdW5jdGlvbiAoa2V5LCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZ2V0UGFuZWxBdHRyaWJ1dGVzKGtleSwgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0SGVhZGluZ0F0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdXVpZDogVVVJRFxuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLmdldEhlYWRpbmdBdHRyaWJ1dGVzKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0QnV0dG9uQXR0cmlidXRlc1wiLCBmdW5jdGlvbiAoa2V5LCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZ2V0QnV0dG9uQXR0cmlidXRlcyhrZXksIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhbGxvd1plcm9FeHBhbmRlZCA9IF90aGlzJHN0YXRlLmFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IF90aGlzJHN0YXRlLmFsbG93TXVsdGlwbGVFeHBhbmRlZDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBhbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICAgICAgYWxsb3daZXJvRXhwYW5kZWQ6IGFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgICAgIHRvZ2dsZUV4cGFuZGVkOiB0aGlzLnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICAgIGlzSXRlbURpc2FibGVkOiB0aGlzLmlzSXRlbURpc2FibGVkLFxuICAgICAgICAgIGlzSXRlbUV4cGFuZGVkOiB0aGlzLmlzSXRlbUV4cGFuZGVkLFxuICAgICAgICAgIGdldFBhbmVsQXR0cmlidXRlczogdGhpcy5nZXRQYW5lbEF0dHJpYnV0ZXMsXG4gICAgICAgICAgZ2V0SGVhZGluZ0F0dHJpYnV0ZXM6IHRoaXMuZ2V0SGVhZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgICAgZ2V0QnV0dG9uQXR0cmlidXRlczogdGhpcy5nZXRCdXR0b25BdHRyaWJ1dGVzXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb3ZpZGVyO1xufShQdXJlQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFByb3ZpZGVyLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogZmFsc2UsXG4gIGFsbG93WmVyb0V4cGFuZGVkOiBmYWxzZVxufSk7XG5cbnZhciBDb25zdW1lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhDb25zdW1lciwgX1JlYWN0JFB1cmVDb21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihDb25zdW1lcik7XG5cbiAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zdW1lcik7XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBfdGhpczIgPSBfc3VwZXIyLmNhbGwuYXBwbHkoX3N1cGVyMiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcInJlbmRlckNoaWxkcmVuXCIsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHJldHVybiBjb250YWluZXIgPyBfdGhpczIucHJvcHMuY2hpbGRyZW4oY29udGFpbmVyKSA6IG51bGw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnN1bWVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnRleHQuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyQ2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25zdW1lcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbnZhciBBY2NvcmRpb24gPSBmdW5jdGlvbiBBY2NvcmRpb24oX3JlZikge1xuICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnYWNjb3JkaW9uJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkID0gX3JlZi5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZCA9IF9yZWYuYWxsb3daZXJvRXhwYW5kZWQsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBwcmVFeHBhbmRlZCA9IF9yZWYucHJlRXhwYW5kZWQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNsYXNzTmFtZVwiLCBcImFsbG93TXVsdGlwbGVFeHBhbmRlZFwiLCBcImFsbG93WmVyb0V4cGFuZGVkXCIsIFwib25DaGFuZ2VcIiwgXCJwcmVFeHBhbmRlZFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFByb3ZpZGVyLCB7XG4gICAgcHJlRXhwYW5kZWQ6IHByZUV4cGFuZGVkLFxuICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogYWxsb3dNdWx0aXBsZUV4cGFuZGVkLFxuICAgIGFsbG93WmVyb0V4cGFuZGVkOiBhbGxvd1plcm9FeHBhbmRlZCxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2VcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIFwiZGF0YS1hY2NvcmRpb24tY29tcG9uZW50XCI6IFwiQWNjb3JkaW9uXCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSwgcmVzdCkpKTtcbn07XG5cbnZhciBEaXNwbGF5TmFtZTtcblxuKGZ1bmN0aW9uIChEaXNwbGF5TmFtZSkge1xuICBEaXNwbGF5TmFtZVtcIkFjY29yZGlvblwiXSA9IFwiQWNjb3JkaW9uXCI7XG4gIERpc3BsYXlOYW1lW1wiQWNjb3JkaW9uSXRlbVwiXSA9IFwiQWNjb3JkaW9uSXRlbVwiO1xuICBEaXNwbGF5TmFtZVtcIkFjY29yZGlvbkl0ZW1CdXR0b25cIl0gPSBcIkFjY29yZGlvbkl0ZW1CdXR0b25cIjtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25JdGVtSGVhZGluZ1wiXSA9IFwiQWNjb3JkaW9uSXRlbUhlYWRpbmdcIjtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25JdGVtUGFuZWxcIl0gPSBcIkFjY29yZGlvbkl0ZW1QYW5lbFwiO1xufSkoRGlzcGxheU5hbWUgfHwgKERpc3BsYXlOYW1lID0ge30pKTtcblxudmFyIERpc3BsYXlOYW1lJDEgPSBEaXNwbGF5TmFtZTtcblxudmFyIERFRkFVTFQgPSAwO1xudmFyIGNvdW50ZXIgPSBERUZBVUxUO1xuZnVuY3Rpb24gbmV4dFV1aWQoKSB7XG4gIHZhciBjdXJyZW50ID0gY291bnRlcjtcbiAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICByZXR1cm4gXCJyYWEtXCIuY29uY2F0KGN1cnJlbnQpO1xufVxuZnVuY3Rpb24gcmVzZXROZXh0VXVpZCgpIHtcbiAgY291bnRlciA9IERFRkFVTFQ7XG59IC8vIEhUTUw1IGlkcyBhbGxvdyBhbGwgdW5pY29kZSBjaGFyYWN0ZXJzLCBleGNlcHQgZm9yIEFTQ0lJIHdoaXRlc3BhY2VzXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcblxudmFyIGlkUmVnZXggPSAvW1xcdTAwMDlcXHUwMDBhXFx1MDAwY1xcdTAwMGRcXHUwMDIwXS9nO1xuZnVuY3Rpb24gYXNzZXJ0VmFsaWRIdG1sSWQoaHRtbElkKSB7XG4gIGlmIChodG1sSWQgPT09ICcnIHx8IGlkUmVnZXgudGVzdChodG1sSWQpKSB7XG4gICAgY29uc29sZS5lcnJvcihcInV1aWQgbXVzdCBiZSBhIHZhbGlkIEhUTUw1IGlkIGJ1dCB3YXMgZ2l2ZW4gXFxcIlwiLmNvbmNhdChodG1sSWQsIFwiXFxcIiwgQVNDSUkgd2hpdGVzcGFjZXMgYXJlIGZvcmJpZGRlblwiKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBDb250ZXh0JDEgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcblxudmFyIFByb3ZpZGVyJDEgPSBmdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICB1dWlkID0gX3JlZi51dWlkLFxuICAgICAgYWNjb3JkaW9uQ29udGV4dCA9IF9yZWYuYWNjb3JkaW9uQ29udGV4dCxcbiAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgPSBfcmVmLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQ7XG5cbiAgdmFyIHRvZ2dsZUV4cGFuZGVkID0gZnVuY3Rpb24gdG9nZ2xlRXhwYW5kZWQoKSB7XG4gICAgYWNjb3JkaW9uQ29udGV4dC50b2dnbGVFeHBhbmRlZCh1dWlkKTtcbiAgfTtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihhY2NvcmRpb25Db250ZXh0KSB7XG4gICAgdmFyIGV4cGFuZGVkID0gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gbnVsbCAmJiBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSB2b2lkIDAgPyBkYW5nZXJvdXNseVNldEV4cGFuZGVkIDogYWNjb3JkaW9uQ29udGV4dC5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcbiAgICB2YXIgZGlzYWJsZWQgPSBhY2NvcmRpb25Db250ZXh0LmlzSXRlbURpc2FibGVkKHV1aWQpO1xuICAgIHZhciBwYW5lbEF0dHJpYnV0ZXMgPSBhY2NvcmRpb25Db250ZXh0LmdldFBhbmVsQXR0cmlidXRlcyh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKTtcbiAgICB2YXIgaGVhZGluZ0F0dHJpYnV0ZXMgPSBhY2NvcmRpb25Db250ZXh0LmdldEhlYWRpbmdBdHRyaWJ1dGVzKHV1aWQpO1xuICAgIHZhciBidXR0b25BdHRyaWJ1dGVzID0gYWNjb3JkaW9uQ29udGV4dC5nZXRCdXR0b25BdHRyaWJ1dGVzKHV1aWQsIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0JDEuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICB0b2dnbGVFeHBhbmRlZDogdG9nZ2xlRXhwYW5kZWQsXG4gICAgICAgIHBhbmVsQXR0cmlidXRlczogcGFuZWxBdHRyaWJ1dGVzLFxuICAgICAgICBoZWFkaW5nQXR0cmlidXRlczogaGVhZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXM6IGJ1dHRvbkF0dHJpYnV0ZXNcbiAgICAgIH1cbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgUHJvdmlkZXJXcmFwcGVyID0gZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGFjY29yZGlvbkNvbnRleHQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUHJvdmlkZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBhY2NvcmRpb25Db250ZXh0OiBhY2NvcmRpb25Db250ZXh0XG4gICAgfSkpO1xuICB9KTtcbn07XG52YXIgQ29uc3VtZXIkMSA9IGZ1bmN0aW9uIENvbnN1bWVyKF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuXG4gIHZhciByZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBjb250YWluZXIgPyBjaGlsZHJlbihjb250YWluZXIpIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29udGV4dCQxLkNvbnN1bWVyLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbSA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0oX3JlZikge1xuICB2YXIgY3VzdG9tVXVpZCA9IF9yZWYudXVpZCxcbiAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgPSBfcmVmLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICdhY2NvcmRpb25fX2l0ZW0nIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widXVpZFwiLCBcImRhbmdlcm91c2x5U2V0RXhwYW5kZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJhY3RpdmVDbGFzc05hbWVcIl0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShuZXh0VXVpZCgpKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDEpLFxuICAgICAgaW5zdGFuY2VVdWlkID0gX3VzZVN0YXRlMlswXTtcblxuICB2YXIgdXVpZCA9IGN1c3RvbVV1aWQgfHwgaW5zdGFuY2VVdWlkO1xuXG4gIHZhciByZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGl0ZW1Db250ZXh0KSB7XG4gICAgdmFyIGV4cGFuZGVkID0gaXRlbUNvbnRleHQuZXhwYW5kZWQ7XG4gICAgdmFyIGN4ID0gZXhwYW5kZWQgJiYgYWN0aXZlQ2xhc3NOYW1lID8gYWN0aXZlQ2xhc3NOYW1lIDogY2xhc3NOYW1lO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvbkl0ZW1cIixcbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICB9LCByZXN0KSk7XG4gIH07XG5cbiAgYXNzZXJ0VmFsaWRIdG1sSWQodXVpZCk7XG5cbiAgaWYgKHJlc3QuaWQpIHtcbiAgICBhc3NlcnRWYWxpZEh0bWxJZChyZXN0LmlkKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChQcm92aWRlcldyYXBwZXIsIHtcbiAgICB1dWlkOiB1dWlkLFxuICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQ6IGRhbmdlcm91c2x5U2V0RXhwYW5kZWRcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29uc3VtZXIkMSwgbnVsbCwgcmVuZGVyQ2hpbGRyZW4pKTtcbn07XG5cbkFjY29yZGlvbkl0ZW0uZGlzcGxheU5hbWUgPSBEaXNwbGF5TmFtZSQxLkFjY29yZGlvbkl0ZW07XG5cbmZ1bmN0aW9uIGdldENsb3Nlc3RBY2NvcmRpb24oZWwpIHtcbiAgcmV0dXJuIGVsICYmIChlbC5tYXRjaGVzKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uXCJdJykgPyBlbCA6IGdldENsb3Nlc3RBY2NvcmRpb24oZWwucGFyZW50RWxlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkge1xuICB2YXIgcGFyZW50QWNjb3JkaW9uID0gZ2V0Q2xvc2VzdEFjY29yZGlvbihpdGVtKTtcbiAgcmV0dXJuIHBhcmVudEFjY29yZGlvbiAmJiBBcnJheS5mcm9tKHBhcmVudEFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uSXRlbUJ1dHRvblwiXScpKTtcbn1cbmZ1bmN0aW9uIGZvY3VzRmlyc3RTaWJsaW5nT2YoaXRlbSkge1xuICB2YXIgc2libGluZ3MgPSBnZXRTaWJsaW5nQnV0dG9ucyhpdGVtKSB8fCBbXTtcbiAgdmFyIGZpcnN0ID0gc2libGluZ3NbMF07XG5cbiAgaWYgKGZpcnN0KSB7XG4gICAgZmlyc3QuZm9jdXMoKTtcbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNMYXN0U2libGluZ09mKGl0ZW0pIHtcbiAgdmFyIHNpYmxpbmdzID0gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkgfHwgW107XG4gIHZhciBsYXN0ID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QpIHtcbiAgICBsYXN0LmZvY3VzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZvY3VzTmV4dFNpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBuZXh0ID0gc2libGluZ3NbY3VycmVudEluZGV4ICsgMV07XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNQcmV2aW91c1NpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBwcmV2aW91cyA9IHNpYmxpbmdzW2N1cnJlbnRJbmRleCAtIDFdO1xuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG52YXIga2V5Y29kZXMgPSB7XG4gIEVORDogJ0VuZCcsXG4gIEVOVEVSOiAnRW50ZXInLFxuICBIT01FOiAnSG9tZScsXG4gIFNQQUNFOiAnICcsXG4gIFNQQUNFX0RFUFJFQ0FURUQ6ICdTcGFjZWJhcicsXG4gIFVQOiAnQXJyb3dVcCcsXG4gIERPV046ICdBcnJvd0Rvd24nLFxuICBMRUZUOiAnQXJyb3dMZWZ0JyxcbiAgUklHSFQ6ICdBcnJvd1JpZ2h0J1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1CdXR0b24gPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtQnV0dG9uKF9yZWYpIHtcbiAgdmFyIHRvZ2dsZUV4cGFuZGVkID0gX3JlZi50b2dnbGVFeHBhbmRlZCxcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJ2FjY29yZGlvbl9fYnV0dG9uJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ0b2dnbGVFeHBhbmRlZFwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIGhhbmRsZUtleVByZXNzID0gZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZ0KSB7XG4gICAgdmFyIGtleUNvZGUgPSBldnQua2V5O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IGtleWNvZGVzLkVOVEVSIHx8IGtleUNvZGUgPT09IGtleWNvZGVzLlNQQUNFIHx8IGtleUNvZGUgPT09IGtleWNvZGVzLlNQQUNFX0RFUFJFQ0FURUQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgLyogVGhlIGZvbGxvd2luZyBibG9jayBpcyBpZ25vcmVkIGZyb20gdGVzdCBjb3ZlcmFnZSBiZWNhdXNlIGF0IHRpbWVcbiAgICAgKiB0aW1lIG9mIHdyaXRpbmcgSmVzdC9yZWFjdC10ZXN0aW5nLWxpYnJhcnkgY2FuIG5vdCBhc3NlcnQgJ2ZvY3VzJ1xuICAgICAqIGZ1bmN0aW9uYWxpdHkuXG4gICAgICovXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXG4gICAgaWYgKGV2dC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Y29kZXMuSE9NRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvY3VzRmlyc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5FTkQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c0xhc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLlVQOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9jdXNQcmV2aW91c1NpYmxpbmdPZihldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIGtleWNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLkRPV046XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c05leHRTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChyZXN0LmlkKSB7XG4gICAgYXNzZXJ0VmFsaWRIdG1sSWQocmVzdC5pZCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIHJlc3QsIHtcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIG9uQ2xpY2s6IHRvZ2dsZUV4cGFuZGVkLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5UHJlc3MsXG4gICAgXCJkYXRhLWFjY29yZGlvbi1jb21wb25lbnRcIjogXCJBY2NvcmRpb25JdGVtQnV0dG9uXCJcbiAgfSkpO1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1CdXR0b25XcmFwcGVyID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUJ1dHRvbldyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIGZ1bmN0aW9uIChpdGVtQ29udGV4dCkge1xuICAgIHZhciB0b2dnbGVFeHBhbmRlZCA9IGl0ZW1Db250ZXh0LnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzID0gaXRlbUNvbnRleHQuYnV0dG9uQXR0cmlidXRlcztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQWNjb3JkaW9uSXRlbUJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgICAgdG9nZ2xlRXhwYW5kZWQ6IHRvZ2dsZUV4cGFuZGVkXG4gICAgfSwgcHJvcHMsIGJ1dHRvbkF0dHJpYnV0ZXMpKTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICdhY2NvcmRpb25fX2hlYWRpbmcnLFxuICAnYXJpYS1sZXZlbCc6IDNcbn07XG52YXIgU1BFQ19FUlJPUiA9IFwiQWNjb3JkaW9uSXRlbUJ1dHRvbiBtYXkgY29udGFpbiBvbmx5IG9uZSBjaGlsZCBlbGVtZW50LCB3aGljaCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIEFjY29yZGlvbkl0ZW1CdXR0b24uXFxuXFxuRnJvbSB0aGUgV0FJLUFSSUEgc3BlYyAoaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI2FjY29yZGlvbik6XFxuXFxuXFx1MjAxQ1RoZSBidXR0b24gZWxlbWVudCBpcyB0aGUgb25seSBlbGVtZW50IGluc2lkZSB0aGUgaGVhZGluZyBlbGVtZW50LiBUaGF0IGlzLCBpZiB0aGVyZSBhcmUgb3RoZXIgdmlzdWFsbHkgcGVyc2lzdGVudCBlbGVtZW50cywgdGhleSBhcmUgbm90IGluY2x1ZGVkIGluc2lkZSB0aGUgaGVhZGluZyBlbGVtZW50LlxcdTIwMURcXG5cXG5cIjtcbnZhciBBY2NvcmRpb25JdGVtSGVhZGluZyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFjY29yZGlvbkl0ZW1IZWFkaW5nLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBY2NvcmRpb25JdGVtSGVhZGluZyk7XG5cbiAgZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUhlYWRpbmcoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjY29yZGlvbkl0ZW1IZWFkaW5nKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0UmVmXCIsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnJlZiA9IHJlZjtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBY2NvcmRpb25JdGVtSGVhZGluZywgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIEFjY29yZGlvbkl0ZW1IZWFkaW5nLlZBTElEQVRFKHRoaXMucmVmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBBY2NvcmRpb25JdGVtSGVhZGluZy5WQUxJREFURSh0aGlzLnJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvbkl0ZW1IZWFkaW5nXCJcbiAgICAgIH0sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiB0aGlzLnNldFJlZlxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcIlZBTElEQVRFXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFZBTElEQVRFKHJlZikge1xuICAgICAgaWYgKHJlZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncmVmIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShyZWYuY2hpbGRFbGVtZW50Q291bnQgPT09IDEgJiYgcmVmLmZpcnN0RWxlbWVudENoaWxkICYmIHJlZi5maXJzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWNjb3JkaW9uLWNvbXBvbmVudCcpID09PSAnQWNjb3JkaW9uSXRlbUJ1dHRvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTUEVDX0VSUk9SKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWNjb3JkaW9uSXRlbUhlYWRpbmc7XG59KFB1cmVDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoQWNjb3JkaW9uSXRlbUhlYWRpbmcsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbnZhciBBY2NvcmRpb25JdGVtSGVhZGluZ1dyYXBwZXIgPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtSGVhZGluZ1dyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIGZ1bmN0aW9uIChpdGVtQ29udGV4dCkge1xuICAgIHZhciBoZWFkaW5nQXR0cmlidXRlcyA9IGl0ZW1Db250ZXh0LmhlYWRpbmdBdHRyaWJ1dGVzO1xuXG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBhc3NlcnRWYWxpZEh0bWxJZChwcm9wcy5pZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEFjY29yZGlvbkl0ZW1IZWFkaW5nLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIGhlYWRpbmdBdHRyaWJ1dGVzKSk7XG4gIH0pO1xufTtcblxuQWNjb3JkaW9uSXRlbUhlYWRpbmdXcmFwcGVyLmRpc3BsYXlOYW1lID0gRGlzcGxheU5hbWUkMS5BY2NvcmRpb25JdGVtSGVhZGluZztcblxudmFyIEFjY29yZGlvbkl0ZW1QYW5lbCA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW1QYW5lbChfcmVmKSB7XG4gIHZhciBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICdhY2NvcmRpb25fX3BhbmVsJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc05hbWVcIiwgXCJpZFwiXSk7XG5cbiAgdmFyIHJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oX3JlZjIpIHtcbiAgICB2YXIgcGFuZWxBdHRyaWJ1dGVzID0gX3JlZjIucGFuZWxBdHRyaWJ1dGVzO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBhc3NlcnRWYWxpZEh0bWxJZChpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgIFwiZGF0YS1hY2NvcmRpb24tY29tcG9uZW50XCI6IFwiQWNjb3JkaW9uSXRlbVBhbmVsXCIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0sIHJlc3QsIHBhbmVsQXR0cmlidXRlcykpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciQxLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbVN0YXRlID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbVN0YXRlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihpdGVtQ29udGV4dCkge1xuICAgIHZhciBleHBhbmRlZCA9IGl0ZW1Db250ZXh0LmV4cGFuZGVkLFxuICAgICAgICBkaXNhYmxlZCA9IGl0ZW1Db250ZXh0LmRpc2FibGVkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4oe1xuICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciQxLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBBY2NvcmRpb24sIEFjY29yZGlvbkl0ZW0sIEFjY29yZGlvbkl0ZW1CdXR0b25XcmFwcGVyIGFzIEFjY29yZGlvbkl0ZW1CdXR0b24sIEFjY29yZGlvbkl0ZW1IZWFkaW5nV3JhcHBlciBhcyBBY2NvcmRpb25JdGVtSGVhZGluZywgQWNjb3JkaW9uSXRlbVBhbmVsLCBBY2NvcmRpb25JdGVtU3RhdGUsIHJlc2V0TmV4dFV1aWQgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyQm9vayBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7XHJcbiAgQWNjb3JkaW9uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uSXRlbUhlYWRpbmcsXHJcbiAgQWNjb3JkaW9uSXRlbVBhbmVsLFxyXG4gIEFjY29yZGlvbkl0ZW1CdXR0b24sXHJcbn0gZnJvbSBcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uXCI7XHJcblxyXG5jb25zdCBPdmVydmlldyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWRpdlwiPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwMCBtYi01XCI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGFsbG93WmVyb0V4cGFuZGVkIHByZUV4cGFuZGVkPXtbXCJhXCJdfT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdXVpZD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5XaGF0IGlzIGNvcm9uYXZpcnVzICYgQ09WSUQtMTk/PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgSG93IGRvIHlvdSBTdGFydHVwP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBY2N1c2FtdXMgaXBzYSBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjZXB0dXJpLCBvYmNhZWNhdGkgYWxpcXVpZCB2ZW5pYW0gYmxhbmRpdGlpcyBxdWFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVwdGF0ZXMgbWF4aW1lIHVuZGUsIGlzdGUgbWluaW1hIGRvbG9yZXMgZG9sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZmVyZW5kaXMgZmFjaWxpcy4gSG93IGRvIHlvdSBTdGFydHVwIGJsYW5kaXRpaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldoYXQgYXJlIHRoZSBzeW1wdG9tcyBvZiBDT1ZJRC0xOT88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IEhvdyBkbyB5b3UgU3RhcnR1cD9cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFjY3VzYW11cyBpcHNhIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXhjZXB0dXJpLCBvYmNhZWNhdGkgYWxpcXVpZCB2ZW5pYW0gYmxhbmRpdGlpcyBxdWFzXHJcbiAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVzIG1heGltZSB1bmRlLCBpc3RlIG1pbmltYSBkb2xvcmVzIGRvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICBwZXJmZXJlbmRpcyBmYWNpbGlzLiBIb3cgZG8geW91IFN0YXJ0dXAgYmxhbmRpdGlpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwiY1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBjYW4gSSBkbyB0byBwcmV2ZW50IG15c2VsZiBmcm9tIGNvcm9uYXZpcnVzIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnM/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IEhvdyBkbyB5b3UgU3RhcnR1cD9cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFjY3VzYW11cyBpcHNhIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXhjZXB0dXJpLCBvYmNhZWNhdGkgYWxpcXVpZCB2ZW5pYW0gYmxhbmRpdGlpcyBxdWFzXHJcbiAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVzIG1heGltZSB1bmRlLCBpc3RlIG1pbmltYSBkb2xvcmVzIGRvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICBwZXJmZXJlbmRpcyBmYWNpbGlzLiBIb3cgZG8geW91IFN0YXJ0dXAgYmxhbmRpdGlpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXJCb29rIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9