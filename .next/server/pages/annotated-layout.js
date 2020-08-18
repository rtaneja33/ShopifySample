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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log('submission', this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToggle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? 'Disable' : 'Enable';\n    const textStatus = enabled ? 'enabled' : 'disabled';\n    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Default discount\",\n      description: \"Add a product to Sample App, it will automatically be discounted.\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      sectioned: true\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n      onSubmit: this.handleSubmit\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n      value: discount,\n      onChange: this.handleChange('discount'),\n      label: \"Discount percentage\",\n      type: \"discount\"\n    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      distribution: \"trailing\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      primary: true,\n      submit: true\n    }, \"Save\")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Price updates\",\n      description: \"Temporarily disabled all Rohan's app updates.\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"SettingToggle\"], {\n      action: {\n        content: contentStatus,\n        onAction: this.handleToggle\n      },\n      enabled: enabled\n    }, \"This setting is\", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextStyle\"], {\n      variation: \"strong\"\n    }, textStatus)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQWFBLE1BQU1BLGVBQU4sU0FBOEJDLDRDQUFLLENBQUNDLFNBQXBDLENBQThDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDbEM7QUFDSkMsY0FBUSxFQUFFLEtBRE47QUFFSkMsYUFBTyxFQUFFO0FBRkwsS0FEa0M7O0FBQUEsMENBd0QzQixNQUFNO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUNWRixnQkFBUSxFQUFFLEtBQUtHLEtBQUwsQ0FBV0g7QUFEWCxPQUFkO0FBR0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsS0FBS0YsS0FBL0I7QUFDSCxLQTdEeUM7O0FBQUEsMENBK0QxQkcsS0FBRCxJQUFXO0FBQ3RCLGFBQVFDLEtBQUQsSUFBVyxLQUFLTCxRQUFMLENBQWM7QUFBRSxTQUFDSSxLQUFELEdBQVNDO0FBQVgsT0FBZCxDQUFsQjtBQUNILEtBakV5Qzs7QUFBQSwwQ0FtRTNCLE1BQU07QUFDakIsV0FBS0wsUUFBTCxDQUFjLENBQUM7QUFBRUQ7QUFBRixPQUFELEtBQWlCO0FBQzNCLGVBQU87QUFBRUEsaUJBQU8sRUFBRSxDQUFDQTtBQUFaLFNBQVA7QUFDSCxPQUZEO0FBR0gsS0F2RXlDO0FBQUE7O0FBTTFDTyxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVSLGNBQUY7QUFBWUM7QUFBWixRQUF3QixLQUFLRSxLQUFuQztBQUNBLFVBQU1NLGFBQWEsR0FBR1IsT0FBTyxHQUFHLFNBQUgsR0FBZSxRQUE1QztBQUNBLFVBQU1TLFVBQVUsR0FBR1QsT0FBTyxHQUFHLFNBQUgsR0FBZSxVQUF6QztBQUVBLFdBQ0ksTUFBQyxxREFBRCxRQUNJLE1BQUMsdURBQUQsUUFDSSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDSSxXQUFLLEVBQUMsa0JBRFY7QUFFSSxpQkFBVyxFQUFDO0FBRmhCLE9BSUksTUFBQyxxREFBRDtBQUFNLGVBQVM7QUFBZixPQUNJLE1BQUMscURBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS1U7QUFBckIsT0FDSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywwREFBRDtBQUNJLFdBQUssRUFBSVgsUUFEYjtBQUVJLGNBQVEsRUFBSSxLQUFLWSxZQUFMLENBQWtCLFVBQWxCLENBRmhCO0FBR0ksV0FBSyxFQUFDLHFCQUhWO0FBSUksVUFBSSxFQUFDO0FBSlQsTUFESixFQU9JLE1BQUMsc0RBQUQ7QUFBTyxrQkFBWSxFQUFHO0FBQXRCLE9BQ0ksTUFBQyx1REFBRDtBQUFRLGFBQU8sTUFBZjtBQUFnQixZQUFNO0FBQXRCLGNBREosQ0FQSixDQURKLENBREosQ0FKSixDQURKLEVBdUJJLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNJLFdBQUssRUFBQyxlQURWO0FBRUksaUJBQVcsRUFBQztBQUZoQixPQUlJLE1BQUMsOERBQUQ7QUFDSSxZQUFNLEVBQUk7QUFDTkMsZUFBTyxFQUFFSixhQURIO0FBRU5LLGdCQUFRLEVBQUUsS0FBS0M7QUFGVCxPQURkO0FBS0ksYUFBTyxFQUFHZDtBQUxkLDBCQU9vQixHQVBwQixFQVFJLE1BQUMsMERBQUQ7QUFBVyxlQUFTLEVBQUM7QUFBckIsT0FBK0JTLFVBQS9CLENBUkosQ0FKSixDQXZCSixDQURKLENBREo7QUEyQ0g7O0FBdER5Qzs7QUF5RS9CYiw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBCdXR0b24sXG4gICAgQ2FyZCxcbiAgICBGb3JtLFxuICAgIEZvcm1MYXlvdXQsXG4gICAgTGF5b3V0LFxuICAgIFBhZ2UsXG4gICAgU2V0dGluZ1RvZ2dsZSxcbiAgICBTdGFjayxcbiAgICBUZXh0RmllbGQsXG4gICAgVGV4dFN0eWxlLFxuIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5cbmNsYXNzIEFubm90YXRlZExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRpc2NvdW50OiAnMTAlJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBkaXNjb3VudCwgZW5hYmxlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY29udGVudFN0YXR1cyA9IGVuYWJsZWQgPyAnRGlzYWJsZScgOiAnRW5hYmxlJztcbiAgICAgICAgY29uc3QgdGV4dFN0YXR1cyA9IGVuYWJsZWQgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnOyBcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlZmF1bHQgZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNjb3VudGVkLlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50IHBlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkaXNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbiA9IFwidHJhaWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgdXBkYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRlbXBvcmFyaWx5IGRpc2FibGVkIGFsbCBSb2hhbidzIGFwcCB1cGRhdGVzLlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246IHRoaXMuaGFuZGxlVG9nZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZD0ge2VuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBzZXR0aW5nIGlzeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPnt0ZXh0U3RhdHVzfTwvVGV4dFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZXR0aW5nVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBlbmFibGVkIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IGVuYWJsZWQ6ICFlbmFibGVkIH07XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });