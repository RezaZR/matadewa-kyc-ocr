webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");







var _jsxFileName = "D:\\mahapatih\\kyc\\ekyc-matadewa\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
  };
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




var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      source: ""
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getVideoSource();
    }
  }, {
    key: "getVideoSource",
    value: function getVideoSource() {
      var videoPlayer = document.getElementById("video");

      if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({
          video: {
            width: {
              min: 1280,
              ideal: 1920,
              max: 2560
            },
            height: {
              min: 720,
              ideal: 1080,
              max: 1440
            },
            facingMode: "user"
          }
        }).then(function (stream) {
          console.log(stream);
          videoPlayer.srcObject = stream;
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, __jsx("video", {
        id: "video",
        width: "720",
        height: "560",
        autoPlay: true,
        muted: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4Iiwic291cmNlIiwidmlkZW9QbGF5ZXIiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsInZpZGVvIiwid2lkdGgiLCJtaW4iLCJpZGVhbCIsIm1heCIsImhlaWdodCIsImZhY2luZ01vZGUiLCJjb25zb2xlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ01BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsWUFBTSxFQUFFO0FBREYsSzs7Ozs7Ozt3Q0FJWTtBQUNsQjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQVJBLGVBQXBCLE9BQW9CQSxDQUFwQjs7QUFDQSxVQUNFLCtCQUNBLGtCQUFrQkMsU0FBUyxDQUY3QixjQUdFO0FBQ0FBLGlCQUFTLENBQVRBLDBCQUNnQjtBQUNaQyxlQUFLLEVBQUU7QUFDTEMsaUJBQUssRUFBRTtBQUNMQyxpQkFBRyxFQURFO0FBRUxDLG1CQUFLLEVBRkE7QUFHTEMsaUJBQUcsRUFBRTtBQUhBLGFBREY7QUFNTEMsa0JBQU0sRUFBRTtBQUNOSCxpQkFBRyxFQURHO0FBRU5DLG1CQUFLLEVBRkM7QUFHTkMsaUJBQUcsRUFBRTtBQUhDLGFBTkg7QUFXTEUsc0JBQVUsRUFBRTtBQVhQO0FBREssU0FEaEJQLE9BZ0JRLGtCQUF5QjtBQUM3QlEsaUJBQU8sQ0FBUEE7QUFDQVYscUJBQVcsQ0FBWEE7QUFsQkpFLG9CQW9CUyxpQkFBVztBQUNoQlEsaUJBQU8sQ0FBUEE7QUFyQkpSO0FBdUJEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBUSxhQUFLLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8sVUFBRSxFQUFUO0FBQWtCLGFBQUssRUFBdkI7QUFBOEIsY0FBTSxFQUFwQztBQUEyQyxnQkFBUSxFQUFuRDtBQUFvRCxhQUFLLEVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGO0FBS0Q7Ozs7RUEvQ2lCUyw0Q0FBSyxDQUFDQyxTOztBQWlEMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Q2ZWQ4NGI4OTUzMTFlZjc5ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc291cmNlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRWaWRlb1NvdXJjZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmlkZW9Tb3VyY2UoKSB7XHJcbiAgICBjb25zdCB2aWRlb1BsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIikgYXMgSFRNTFZpZGVvRWxlbWVudDtcclxuICAgIGlmIChcclxuICAgICAgXCJtZWRpYURldmljZXNcIiBpbiBuYXZpZ2F0b3IgJiZcclxuICAgICAgXCJnZXRVc2VyTWVkaWFcIiBpbiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXHJcbiAgICApIHtcclxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xyXG4gICAgICAgIC5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgICAgd2lkdGg6IHtcclxuICAgICAgICAgICAgICBtaW46IDEyODAsXHJcbiAgICAgICAgICAgICAgaWRlYWw6IDE5MjAsXHJcbiAgICAgICAgICAgICAgbWF4OiAyNTYwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgICBtaW46IDcyMCxcclxuICAgICAgICAgICAgICBpZGVhbDogMTA4MCxcclxuICAgICAgICAgICAgICBtYXg6IDE0NDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY2luZ01vZGU6IFwidXNlclwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChzdHJlYW06IE1lZGlhU3RyZWFtKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdHJlYW0pO1xyXG4gICAgICAgICAgdmlkZW9QbGF5ZXIuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIkhvbWVcIj5cclxuICAgICAgICA8dmlkZW8gaWQ9XCJ2aWRlb1wiIHdpZHRoPVwiNzIwXCIgaGVpZ2h0PVwiNTYwXCIgYXV0b1BsYXkgbXV0ZWQgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==