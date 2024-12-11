(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("axios"), require("n3"), require("jose"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "axios", "n3", "jose"], factory);
	else if(typeof exports === 'object')
		exports["AuthAppHeaderBar"] = factory(require("vue"), require("axios"), require("n3"), require("jose"));
	else
		root["AuthAppHeaderBar"] = factory(root["vue"], root["axios"], root["n3"], root["jose"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__380__, __WEBPACK_EXTERNAL_MODULE__742__, __WEBPACK_EXTERNAL_MODULE__907__, __WEBPACK_EXTERNAL_MODULE__603__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(935);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-container[data-v-a2445d98]{background-image:linear-gradient(to right,var(--shared-auth-app-header-bar-background-color-from,var(--surface-100)),var(--shared-auth-app-header-bar-background-color-to,var(--surface-100)))}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(935);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#idps[data-v-5039e133]{display:flex;flex-direction:column}.idp[data-v-5039e133]{margin-top:5px;margin-bottom:5px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 935:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 758:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 433:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 765:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(825)/* ["default"] */ .A)
var update = add("1a923ce2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 947:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(825)/* ["default"] */ .A)
var update = add("ce4da68e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ../../node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ../../node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 742:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__742__;

/***/ }),

/***/ 603:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__603__;

/***/ }),

/***/ 907:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__907__;

/***/ }),

/***/ 380:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__380__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ../../node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(380);
;// CONCATENATED MODULE: ../../node_modules/thread-loader/dist/cjs.js!../../node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/AuthAppHeaderBar.vue?vue&type=template&id=a2445d98&scoped=true&ts=true

const _withScopeId = n => ((0,external_vue_.pushScopeId)("data-v-a2445d98"), n = n(), (0,external_vue_.popScopeId)(), n);
const _hoisted_1 = { class: "header-container shadow-2 p-4 fixed top-0 left-0 right-0 z-2" };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = {
    href: "/",
    class: "no-underline text-900 ml-2"
};
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "white-space-nowrap overflow-hidden text-overflow-ellipsis hidden sm:inline w-5 md:w-auto" };
const _hoisted_6 = ["src"];
const _hoisted_7 = {
    key: 1,
    class: "pi pi-user"
};
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,external_vue_.createElementVNode)("div", { class: "h-5rem" }, null, -1));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Avatar = (0,external_vue_.resolveComponent)("Avatar");
    const _component_LoginButton = (0,external_vue_.resolveComponent)("LoginButton");
    const _component_LogoutButton = (0,external_vue_.resolveComponent)("LogoutButton");
    const _component_Toolbar = (0,external_vue_.resolveComponent)("Toolbar");
    return ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)(external_vue_.Fragment, null, [
        (0,external_vue_.createElementVNode)("div", _hoisted_1, [
            (0,external_vue_.createVNode)(_component_Toolbar, null, {
                start: (0,external_vue_.withCtx)(() => [
                    (_ctx.appLogo)
                        ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("img", {
                            key: 0,
                            src: _ctx.appLogo,
                            alt: _ctx.appName
                        }, null, 8, _hoisted_2))
                        : (0,external_vue_.createCommentVNode)("", true),
                    (0,external_vue_.createElementVNode)("a", _hoisted_3, [
                        (0,external_vue_.createElementVNode)("span", null, (0,external_vue_.toDisplayString)(_ctx.appName), 1)
                    ])
                ]),
                end: (0,external_vue_.withCtx)(() => [
                    (_ctx.webId)
                        ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("a", {
                            key: 0,
                            href: _ctx.webId,
                            class: "no-tap-highlight no-underline text-900 gap-2 flex align-items-center justify-content-end"
                        }, [
                            (0,external_vue_.createElementVNode)("span", _hoisted_5, (0,external_vue_.toDisplayString)(_ctx.name), 1),
                            (_ctx.isLoggedIn)
                                ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(_component_Avatar, {
                                    key: 0,
                                    shape: "circle",
                                    class: "border-1"
                                }, {
                                    default: (0,external_vue_.withCtx)(() => [
                                        (_ctx.img)
                                            ? ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("img", {
                                                key: 0,
                                                src: _ctx.img
                                            }, null, 8, _hoisted_6))
                                            : ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("i", _hoisted_7))
                                    ]),
                                    _: 1
                                }))
                                : (0,external_vue_.createCommentVNode)("", true)
                        ], 8, _hoisted_4))
                        : (0,external_vue_.createCommentVNode)("", true),
                    (!_ctx.isLoggedIn)
                        ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(_component_LoginButton, { key: 1 }))
                        : ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(_component_LogoutButton, { key: 2 }))
                ]),
                _: 1
            })
        ]),
        _hoisted_8
    ], 64));
}

;// CONCATENATED MODULE: ./src/AuthAppHeaderBar.vue?vue&type=template&id=a2445d98&scoped=true&ts=true

;// CONCATENATED MODULE: ../composables/dist/esm/src/useCache.js
const cache = {};
const useCache = () => cache;

;// CONCATENATED MODULE: ../composables/dist/esm/src/useServiceWorkerNotifications.js

const hasActivePush = (0,external_vue_.ref)(false);
/** ask the user for permission to display notifications */
const askForNotificationPermission = async () => {
    const status = await Notification.requestPermission();
    console.log("### PWA  \t| Notification permission status:", status);
    return status;
};
/**
 * We should perform this check whenever the user accesses our app
 * because subscription objects may change during their lifetime.
 * We need to make sure that it is synchronized with our server.
 * If there is no subscription object we can update our UI
 * to ask the user if they would like receive notifications.
 */
const _checkSubscription = async () => {
    if (!("serviceWorker" in navigator)) {
        throw new Error("Service Worker not in Navigator");
    }
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg?.pushManager.getSubscription();
    if (!sub) {
        throw new Error(`No Subscription`); // Update UI to ask user to register for Push
    }
    return sub; // We have a subscription, update the database
};
// Notification.permission == "granted" && await _checkSubscription()
const _hasActivePush = async () => {
    return Notification.permission == "granted" && await _checkSubscription().then(() => true).catch(() => false);
};
_hasActivePush().then(hasPush => hasActivePush.value = hasPush);
/** It's best practice to call the ``subscribeUser()` function
 * in response to a user action signalling they would like to
 * subscribe to push messages from our app.
 */
const subscribeToPush = async (pubKey) => {
    if (Notification.permission != "granted") {
        throw new Error("Notification permission not granted");
    }
    if (!("serviceWorker" in navigator)) {
        throw new Error("Service Worker not in Navigator");
    }
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg?.pushManager.subscribe({
        userVisibleOnly: true, // demanded by chrome
        applicationServerKey: pubKey, // "TODO :) VAPID Public Key (e.g. from Pod Server)",
    });
    /*
     * userVisibleOnly:
     * A boolean indicating that the returned push subscription will only be used
     * for messages whose effect is made visible to the user.
     */
    /*
     * applicationServerKey:
     * A Base64-encoded DOMString or ArrayBuffer containing an ECDSA P-256 public key
     * that the push server will use to authenticate your application server
     * Note: This parameter is required in some browsers like Chrome and Edge.
     */
    if (!sub) {
        throw new Error(`Subscription failed: Sub == ${sub}`);
    }
    console.log("### PWA  \t| Subscription created!");
    hasActivePush.value = true;
    return sub.toJSON();
};
const unsubscribeFromPush = async () => {
    const sub = await _checkSubscription();
    const isUnsubbed = await sub.unsubscribe();
    console.log("### PWA  \t| Subscription cancelled:", isUnsubbed);
    hasActivePush.value = false;
    return sub.toJSON();
};
const useServiceWorkerNotifications_useServiceWorkerNotifications = () => {
    return {
        askForNotificationPermission,
        subscribeToPush,
        unsubscribeFromPush,
        hasActivePush,
    };
};

;// CONCATENATED MODULE: ../composables/dist/esm/src/useServiceWorkerUpdate.js

const hasUpdatedAvailable = (0,external_vue_.ref)(false);
let registration;
// Store the SW registration so we can send it a message
// We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
// To alert the user there is an update they need to refresh for
const updateAvailable = (event) => {
    registration = event.detail;
    hasUpdatedAvailable.value = true;
};
// Called when the user accepts the update
const refreshApp = () => {
    hasUpdatedAvailable.value = false;
    // Make sure we only send a 'skip waiting' message if the SW is waiting
    if (!registration || !registration.waiting)
        return;
    // send message to SW to skip the waiting and activate the new SW
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
};
// Listen for our custom event from the SW registration
if ('addEventListener' in document) {
    document.addEventListener("serviceWorkerUpdated", updateAvailable, {
        once: true,
    });
}
let isRefreshing = false;
// this must not be in the service worker, since it will be updated ;-)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (isRefreshing)
            return;
        isRefreshing = true;
        window.location.reload();
    });
}
const useServiceWorkerUpdate = () => {
    return {
        hasUpdatedAvailable,
        refreshApp,
    };
};

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(742);
// EXTERNAL MODULE: external "n3"
var external_n3_ = __webpack_require__(907);
;// CONCATENATED MODULE: ../solid-requests/dist/esm/src/namespaces.js
/**
 * Concat the RDF namespace identified by the prefix used as function name
 * with the RDF thing identifier as function parameter,
 * e.g. FOAF("knows") resovles to "http://xmlns.com/foaf/0.1/knows"
 * @param namespace uri of the namesapce
 * @returns function which takes a parameter of RDF thing identifier as string
 */
function Namespace(namespace) {
    return (thing) => thing ? namespace.concat(thing) : namespace;
}
// Namespaces as functions where their parameter is the RDF thing identifier => concat, e.g. FOAF("knows") resolves to "http://xmlns.com/foaf/0.1/knows"
const FOAF = Namespace("http://xmlns.com/foaf/0.1/");
const DCT = Namespace("http://purl.org/dc/terms/");
const namespaces_RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
const RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#");
const WDT = Namespace("http://www.wikidata.org/prop/direct/");
const WD = Namespace("http://www.wikidata.org/entity/");
const namespaces_LDP = Namespace("http://www.w3.org/ns/ldp#");
const ACL = Namespace("http://www.w3.org/ns/auth/acl#");
const AUTH = Namespace("http://www.example.org/vocab/datev/auth#");
const namespaces_AS = Namespace("https://www.w3.org/ns/activitystreams#");
const XSD = Namespace("http://www.w3.org/2001/XMLSchema#");
const ETHON = Namespace("http://ethon.consensys.net/");
const PDGR = Namespace("http://purl.org/pedigree#");
const LDCV = Namespace("http://people.aifb.kit.edu/co1683/2019/ld-chain/vocab#");
const WILD = Namespace("http://purl.org/wild/vocab#");
const VCARD = Namespace("http://www.w3.org/2006/vcard/ns#");
const GDPRP = Namespace("https://solid.ti.rw.fau.de/public/ns/gdpr-purposes#");
const namespaces_PUSH = Namespace("https://purl.org/solid-web-push/vocab#");
const SEC = Namespace("https://w3id.org/security#");
const SPACE = Namespace("http://www.w3.org/ns/pim/space#");
const SVCS = Namespace("https://purl.org/solid-vc/credentialStatus#");
const CREDIT = Namespace("http://example.org/vocab/datev/credit#");
const SCHEMA = Namespace("http://schema.org/");
const INTEROP = Namespace("http://www.w3.org/ns/solid/interop#");
const SKOS = Namespace("http://www.w3.org/2004/02/skos/core#");
const ORG = Namespace("http://www.w3.org/ns/org#");
const MANDAT = Namespace("https://solid.aifb.kit.edu/vocab/mandat/");
const AD = Namespace("https://www.example.org/advertisement/");
const SHAPETREE = Namespace("https://solid.aifb.kit.edu/shapes/mandat/businessAssessment.tree#");

// EXTERNAL MODULE: external "jose"
var external_jose_ = __webpack_require__(603);
;// CONCATENATED MODULE: ../solid-oicd/dist/esm/src/solid-oidc-client-browser/requestDynamicClientRegistration.js

/**
 * When the client does not have a webid profile document, use this.
 *
 * @param registration_endpoint
 * @param redirect__uris
 * @returns
 */
const requestDynamicClientRegistration = async (registration_endpoint, redirect__uris) => {
    // prepare dynamic client registration
    const client_registration_request_body = {
        redirect_uris: redirect__uris,
        grant_types: ["authorization_code", "refresh_token"],
        id_token_signed_response_alg: "ES256",
        token_endpoint_auth_method: "client_secret_basic", // also works with value "none" if you do not provide "client_secret" on token request
        application_type: "web",
        subject_type: "public",
    };
    // register
    return external_axios_({
        url: registration_endpoint,
        method: "post",
        data: client_registration_request_body,
    });
};


;// CONCATENATED MODULE: ../solid-oicd/dist/esm/src/solid-oidc-client-browser/requestAccessToken.js


/**
 * Request an dpop-bound access token from a token endpoint
 * @param authorization_code
 * @param pkce_code_verifier
 * @param redirect_uri
 * @param client_id
 * @param client_secret
 * @param token_endpoint
 * @param key_pair
 * @returns
 */
const requestAccessToken = async (authorization_code, pkce_code_verifier, redirect_uri, client_id, client_secret, token_endpoint, key_pair) => {
    // prepare public key to bind access token to
    const jwk_public_key = await (0,external_jose_.exportJWK)(key_pair.publicKey);
    jwk_public_key.alg = "ES256";
    // sign the access token request DPoP token
    const dpop = await new external_jose_.SignJWT({
        htu: token_endpoint,
        htm: "POST",
    })
        .setIssuedAt()
        .setJti(window.crypto.randomUUID())
        .setProtectedHeader({
        alg: "ES256",
        typ: "dpop+jwt",
        jwk: jwk_public_key,
    })
        .sign(key_pair.privateKey);
    return external_axios_({
        url: token_endpoint,
        method: "post",
        headers: {
            dpop,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: new URLSearchParams({
            grant_type: "authorization_code",
            code: authorization_code,
            code_verifier: pkce_code_verifier,
            redirect_uri: redirect_uri,
            client_id: client_id,
            client_secret: client_secret,
        }),
    });
};


;// CONCATENATED MODULE: ../solid-oicd/dist/esm/src/solid-oidc-client-browser/AuthorizationCodeGrantFlow.js




/**
 * Login with the idp, using dynamic client registration.
 * TODO generalise to use a provided client webid
 * TODO generalise to use provided client_id und client_secret
 *
 * @param idp
 * @param redirect_uri
 */
const redirectForLogin = async (idp, redirect_uri) => {
    // RFC 9207 iss check: remember the identity provider (idp) / issuer (iss)
    sessionStorage.setItem("idp", idp);
    // lookup openid configuration of idp
    const openid_configuration = (await external_axios_.get(`${idp}/.well-known/openid-configuration`)).data;
    // remember token endpoint
    sessionStorage.setItem("token_endpoint", openid_configuration["token_endpoint"]);
    const registration_endpoint = openid_configuration["registration_endpoint"];
    // get client registration
    const client_registration = (await requestDynamicClientRegistration(registration_endpoint, [
        redirect_uri,
    ])).data;
    // remember client_id and client_secret
    const client_id = client_registration["client_id"];
    sessionStorage.setItem("client_id", client_id);
    const client_secret = client_registration["client_secret"];
    sessionStorage.setItem("client_secret", client_secret);
    // RFC 7636 PKCE, remember code verifer
    const { pkce_code_verifier, pkce_code_challenge } = await getPKCEcode();
    sessionStorage.setItem("pkce_code_verifier", pkce_code_verifier);
    // RFC 6749 OAuth 2.0 - CSRF token
    const csrf_token = window.crypto.randomUUID();
    sessionStorage.setItem("csrf_token", csrf_token);
    // redirect to idp
    const redirect_to_idp = openid_configuration["authorization_endpoint"] +
        `?response_type=code` +
        `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
        `&scope=openid offline_access webid` +
        `&client_id=${client_id}` +
        `&code_challenge_method=S256` +
        `&code_challenge=${pkce_code_challenge}` +
        `&state=${csrf_token}` +
        `&prompt=consent`; // this query parameter value MUST be present for CSS v7 to issue a refresh token (TODO open issue because prompting is the default behaviour but without this query param no refresh token is provided despite the "remember this client" box being checked)
    window.location.href = redirect_to_idp;
};
/**
 * RFC 7636 PKCE
 * @returns PKCE code verifier and PKCE code challenge
 */
const getPKCEcode = async () => {
    // create random string as PKCE code verifier
    const pkce_code_verifier = window.crypto.randomUUID() + "-" + window.crypto.randomUUID();
    // hash the verifier and base64URL encode as PKCE code challenge
    const digest = new Uint8Array(await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(pkce_code_verifier)));
    const pkce_code_challenge = btoa(String.fromCharCode(...digest))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    return { pkce_code_verifier, pkce_code_challenge };
};
/**
 * On incoming redirect from OpenID provider (idp/iss),
 * URL contains authrization code, issuer (idp) and state (csrf token),
 * get an access token for the authrization code.
 */
const onIncomingRedirect = async () => {
    const url = new URL(window.location.href);
    // authorization code
    const authorization_code = url.searchParams.get("code");
    if (authorization_code === null) {
        return undefined;
    }
    // RFC 9207 issuer check
    const idp = sessionStorage.getItem("idp");
    if (idp === null ||
        url.searchParams.get("iss") != idp + (idp.endsWith("/") ? "" : "/")) {
        throw new Error("RFC 9207 - iss != idp - " + url.searchParams.get("iss") + " != " + idp);
    }
    // RFC 6749 OAuth 2.0
    if (url.searchParams.get("state") != sessionStorage.getItem("csrf_token")) {
        throw new Error("RFC 6749 - state != csrf_token - " +
            url.searchParams.get("iss") +
            " != " +
            sessionStorage.getItem("csrf_token"));
    }
    // remove redirect query parameters from URL
    url.searchParams.delete("iss");
    url.searchParams.delete("state");
    url.searchParams.delete("code");
    window.history.pushState({}, document.title, url.toString());
    // prepare token request
    const pkce_code_verifier = sessionStorage.getItem("pkce_code_verifier");
    if (pkce_code_verifier === null) {
        throw new Error("Access Token Request preparation - Could not find in sessionStorage: pkce_code_verifier");
    }
    const client_id = sessionStorage.getItem("client_id");
    if (client_id === null) {
        throw new Error("Access Token Request preparation - Could not find in sessionStorage: client_id");
    }
    const client_secret = sessionStorage.getItem("client_secret");
    if (client_secret === null) {
        throw new Error("Access Token Request preparation - Could not find in sessionStorage: client_secret");
    }
    const token_endpoint = sessionStorage.getItem("token_endpoint");
    if (token_endpoint === null) {
        throw new Error("Access Token Request preparation - Could not find in sessionStorage: token_endpoint");
    }
    // RFC 9449 DPoP
    const key_pair = await (0,external_jose_.generateKeyPair)("ES256");
    // get access token
    const token_response = (await requestAccessToken(authorization_code, pkce_code_verifier, url.toString(), client_id, client_secret, token_endpoint, key_pair)).data;
    // TODO double check if I need to check token for ISS = IDP
    // clean session storage
    // sessionStorage.removeItem("idp");
    sessionStorage.removeItem("csrf_token");
    sessionStorage.removeItem("pkce_code_verifier");
    // sessionStorage.removeItem("client_id");
    // sessionStorage.removeItem("client_secret");
    // sessionStorage.removeItem("token_endpoint");
    // remember refresh_token for session
    sessionStorage.setItem("refresh_token", token_response["refresh_token"]);
    // return client login information
    return {
        ...token_response,
        dpop_key_pair: key_pair,
    };
};


;// CONCATENATED MODULE: ../solid-oicd/dist/esm/src/solid-oidc-client-browser/RefreshTokenGrant.js


const renewTokens = async () => {
    const client_id = sessionStorage.getItem("client_id");
    const client_secret = sessionStorage.getItem("client_secret");
    const refresh_token = sessionStorage.getItem("refresh_token");
    const token_endpoint = sessionStorage.getItem("token_endpoint");
    if (!client_id || !client_secret || !refresh_token || !token_endpoint) {
        // we can not restore the old session
        throw new Error("Cannot renew tokens");
    }
    // RFC 9449 DPoP
    const key_pair = await (0,external_jose_.generateKeyPair)("ES256");
    const token_response = (await requestFreshTokens(refresh_token, client_id, client_secret, token_endpoint, key_pair)).data;
    return {
        ...token_response,
        dpop_key_pair: key_pair,
    };
};
/**
 * Request an dpop-bound access token from a token endpoint using a refresh token
 * @param authorization_code
 * @param pkce_code_verifier
 * @param redirect_uri
 * @param client_id
 * @param client_secret
 * @param token_endpoint
 * @param key_pair
 * @returns
 */
const requestFreshTokens = async (refresh_token, client_id, client_secret, token_endpoint, key_pair) => {
    // prepare public key to bind access token to
    const jwk_public_key = await (0,external_jose_.exportJWK)(key_pair.publicKey);
    jwk_public_key.alg = "ES256";
    // sign the access token request DPoP token
    const dpop = await new external_jose_.SignJWT({
        htu: token_endpoint,
        htm: "POST",
    })
        .setIssuedAt()
        .setJti(window.crypto.randomUUID())
        .setProtectedHeader({
        alg: "ES256",
        typ: "dpop+jwt",
        jwk: jwk_public_key,
    })
        .sign(key_pair.privateKey);
    return external_axios_({
        url: token_endpoint,
        method: "post",
        headers: {
            authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
            dpop,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        }),
    });
};


;// CONCATENATED MODULE: ../solid-oicd/dist/esm/src/solid-oidc-client-browser/Session.js




class Session_Session {
    tokenInformation;
    isActive_ = false;
    webId_ = undefined;
    login = redirectForLogin;
    logout() {
        this.tokenInformation = undefined;
        this.isActive_ = false;
        this.webId_ = undefined;
        // clean session storage
        sessionStorage.removeItem("idp");
        sessionStorage.removeItem("client_id");
        sessionStorage.removeItem("client_secret");
        sessionStorage.removeItem("token_endpoint");
        sessionStorage.removeItem("refresh_token");
    }
    handleRedirectFromLogin() {
        return onIncomingRedirect().then(async (sessionInfo) => {
            if (!sessionInfo) {
                // try refresh
                sessionInfo = await renewTokens().catch((_) => {
                    return undefined;
                });
            }
            if (!sessionInfo) {
                // still no session
                return;
            }
            // we got a sessionInfo
            this.tokenInformation = sessionInfo;
            this.isActive_ = true;
            this.webId_ = (0,external_jose_.decodeJwt)(this.tokenInformation.access_token)["webid"];
        });
    }
    async createSignedDPoPToken(payload) {
        if (this.tokenInformation == undefined) {
            throw new Error("Session not established.");
        }
        const jwk_public_key = await (0,external_jose_.exportJWK)(this.tokenInformation.dpop_key_pair.publicKey);
        return new external_jose_.SignJWT(payload)
            .setIssuedAt()
            .setJti(window.crypto.randomUUID())
            .setProtectedHeader({
            alg: "ES256",
            typ: "dpop+jwt",
            jwk: jwk_public_key,
        })
            .sign(this.tokenInformation.dpop_key_pair.privateKey);
    }
    /**
     * Make axios requests.
     * If session is established, authenticated requests are made.
     *
     * @param config the axios config to use (authorization header, dpop header will be overwritten in active session)
     * @param dpopPayload optional, the payload of the dpop token to use (overwrites the default behaviour of `htu=config.url` and `htm=config.method`)
     * @returns axios response
     */
    async authFetch(config, dpopPayload) {
        // prepare authenticated call using a DPoP token (either provided payload, or default)
        const headers = config.headers ? config.headers : {};
        if (this.tokenInformation) {
            const requestURL = new URL(config.url);
            dpopPayload = dpopPayload
                ? dpopPayload
                : {
                    htu: `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`,
                    htm: config.method,
                };
            const dpop = await this.createSignedDPoPToken(dpopPayload);
            headers["dpop"] = dpop;
            headers["authorization"] = `DPoP ${this.tokenInformation.access_token}`;
        }
        config.headers = headers;
        return external_axios_(config);
    }
    get isActive() {
        return this.isActive_;
    }
    get webId() {
        return this.webId_;
    }
}

;// CONCATENATED MODULE: ../solid-oicd/dist/esm/index.js


;// CONCATENATED MODULE: ../solid-requests/dist/esm/src/solidRequests.js




/**
 * #######################
 * ### BASIC REQUESTS  ###
 * #######################
 */
/**
 *
 * @param response http response, e.g. from axiosFetch
 * @throws Error, if response is not ok
 * @returns the response, if response is ok
 */
function _checkResponseStatus(response) {
    if (response.status >= 400) {
        throw new Error(`Action on \`${response.request.url}\` failed: \`${response.status}\` \`${response.statusText}\`.`);
    }
    return response;
}
/**
 *
 * @param uri the URI to strip from its fragment #
 * @return substring of the uri prior to fragment #
 */
function _stripFragment(uri) {
    if (typeof uri !== "string") {
        return "";
    }
    const indexOfFragment = uri.indexOf("#");
    if (indexOfFragment !== -1) {
        uri = uri.substring(0, indexOfFragment);
    }
    return uri;
}
/**
 *
 * @param uri `<http://ex.org>`
 * @returns `http://ex.org` without the parentheses
 */
function _stripUriFromStartAndEndParentheses(uri) {
    if (uri.startsWith("<"))
        uri = uri.substring(1, uri.length);
    if (uri.endsWith(">"))
        uri = uri.substring(0, uri.length - 1);
    return uri;
}
/**
 * Parse text/turtle to N3.
 * @param text text/turtle
 * @param baseIRI string
 * @return Promise ParsedN3
 */
async function solidRequests_parseToN3(text, baseIRI) {
    const store = new external_n3_.Store();
    const parser = new external_n3_.Parser({
        baseIRI: _stripFragment(baseIRI),
        blankNodePrefix: "",
    }); // { blankNodePrefix: 'any' } does not have the effect I thought
    return new Promise((resolve, reject) => {
        // parser.parse is actually async but types don't tell you that.
        parser.parse(text, (error, quad, prefixes) => {
            if (error)
                reject(error);
            if (quad)
                store.addQuad(quad);
            else
                resolve({ store, prefixes });
        });
    });
}
/**
 * Send a session.axiosFetch request: GET, uri, async requesting `text/turtle`
 *
 * @param uri: the URI of the text/turtle to get
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @param headers: OPTIONAL - headers to set manually (e.g. `Accept` or `baseIRI`), `content-type` is set by default to `text/turtle`.
 * @return Promise string of the response text/turtle
 */
async function solidRequests_getResource(uri, session, headers) {
    console.log("### SoLiD\t| GET\n" + uri);
    if (session === undefined)
        session = new Session_Session();
    if (!headers)
        headers = {};
    headers["Accept"] = headers["Accept"]
        ? headers["Accept"]
        : "text/turtle,application/ld+json";
    return session
        .authFetch({ url: uri, method: "GET", headers: headers })
        .then(_checkResponseStatus);
}
/**
 * Send a session.axiosFetch request: POST, uri, async providing `text/turtle`
 * providing `text/turtle` and baseURI header, accepting `text/turtle`
 *
 * @param uri: the URI of the server (the text/turtle to post to)
 * @param body: OPTIONAL - the text/turtle to provide
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @param headers: OPTIONAL - headers to set manually (e.g. `Accept` or `baseIRI`), `content-type` is set by default to `text/turtle`.
 * @return Promise of the response
 */
async function postResource(uri, body, session, headers) {
    if (session === undefined)
        session = new Session();
    if (!headers)
        headers = {};
    headers["Content-type"] = headers["Content-type"]
        ? headers["Content-type"]
        : "text/turtle";
    return session
        .authFetch({
        url: uri,
        method: "POST",
        headers: headers,
        data: body,
    })
        .then(_checkResponseStatus);
}
/**
 * Send a session.axiosFetch request: POST, location uri, container name, async .
 * This will generate a new URI at which the resource will be available.
 * The response's `Location` header will contain the URL of the created resource.
 *
 * @param uri: the URI of the resrouce to post to / to be located at
 * @param body: the body of the resource to create
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @return Promise Response
 */
async function solidRequests_createResource(locationURI, body, session, headers) {
    console.log("### SoLiD\t| CREATE RESOURCE AT\n" + locationURI);
    if (!headers)
        headers = {};
    headers["Content-type"] = headers["Content-type"]
        ? headers["Content-type"]
        : "text/turtle";
    headers["Link"] = `<${LDP("Resource")}>; rel="type"`;
    return postResource(locationURI, body, session, headers);
}
/**
 * Send a session.axiosFetch request: POST, location uri, resource name, async .
 * If the container already exists, an additional one with a prefix will be created.
 * The response's `Location` header will contain the URL of the created resource.
 *
 * @param uri: the URI of the container to post to
 * @param name: the name of the container
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @return Promise Response (location header not included (i think) since you know the name and folder)
 */
async function createContainer(locationURI, name, session) {
    console.log("### SoLiD\t| CREATE CONTAINER\n" + locationURI + name + "/");
    const body = undefined;
    return postResource(locationURI, body, session, {
        Link: `<${LDP("BasicContainer")}>; rel="type"`,
        Slug: name,
    });
}
/**
 * Get the Location header of a newly created resource.
 * @param resp string location header
 */
function getLocationHeader(resp) {
    if (!(resp.headers instanceof AxiosHeaders && resp.headers.has("Location"))) {
        throw new Error(`Location Header at \`${resp.request.url}\` not set.`);
    }
    let loc = resp.headers.get("Location");
    if (!loc) {
        throw new Error(`Could not get Location Header at \`${resp.request.url}\`.`);
    }
    loc = loc.toString();
    if (!loc.startsWith("http://") && !loc.startsWith("https://")) {
        loc = new URL(resp.request.url).origin + loc;
    }
    return loc;
}
/**
 * Shortcut to get the items in a container.
 *
 * @param uri The container's URI to get the items from
 * @param session
 * @returns string URIs of the items in the container
 */
async function getContainerItems(uri, session) {
    console.log("### SoLiD\t| GET CONTAINER ITEMS\n" + uri);
    return solidRequests_getResource(uri, session)
        .then((resp) => resp.data)
        .then((txt) => solidRequests_parseToN3(txt, uri))
        .then((parsedN3) => parsedN3.store)
        .then((store) => store.getObjects(uri, LDP("contains"), null).map((obj) => obj.value));
}
/**
 * Send a session.axiosFetch request: PUT, uri, async providing `text/turtle`
 *
 * @param uri: the URI of the text/turtle to be put
 * @param body: the text/turtle to provide
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @return Promise string  of the created URI from the response `Location` header
 */
async function putResource(uri, body, session, headers) {
    console.log("### SoLiD\t| PUT\n" + uri);
    if (session === undefined)
        session = new Session();
    if (!headers)
        headers = {};
    headers["Content-type"] = headers["Content-type"]
        ? headers["Content-type"]
        : "text/turtle";
    headers["Link"] = `<${LDP("Resource")}>; rel="type"`;
    return session
        .authFetch({
        url: uri,
        method: "PUT",
        headers: headers,
        data: body,
    })
        .then(_checkResponseStatus);
}
/**
 * Send a session.axiosFetch request: PATCH, uri, async providing `text/n3`
 *
 * @param uri: the URI of the text/n3 to be patch
 * @param body: the text/turtle to provide
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @return Promise string  of the created URI from the response `Location` header
 */
async function patchResource(uri, body, session) {
    console.log("### SoLiD\t| PATCH\n" + uri);
    if (session === undefined)
        session = new Session();
    return session
        .authFetch({
        url: uri,
        method: "PATCH",
        headers: { "Content-Type": "text/n3" },
        data: body,
    })
        .then(_checkResponseStatus);
}
/**
 * Send a session.axiosFetch request: DELETE, uri, async
 *
 * @param uri: the URI of the text/turtle to delete
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @return true if http request successfull with status 204
 */
async function deleteResource(uri, session) {
    console.log("### SoLiD\t| DELETE\n" + uri);
    if (session === undefined)
        session = new Session();
    return session
        .authFetch({
        url: uri,
        method: "DELETE",
    })
        .then(_checkResponseStatus)
        .then(() => true);
}
/**
 * ####################
 * ## Access Control ##
 * ####################
 */
/**
 * `http://ex.org/test.txt` > `http://ex.org/` and `http://ex.org/test/` > `http://ex.org/test/`
 * @param uri the resource
 * @returns folder the resource is in; if the resource is a folder, the folder uri itself is returned
 */
function _getSameLocationAs(uri) {
    return uri.substring(0, uri.lastIndexOf("/") + 1);
}
/**
 * `http://ex.org/test.txt` > `http://ex.org/` and `http://ex.org/test/` > `http://ex.org/`
 * @param uri the resource
 * @returns the URI of the parent resource, i.e. the folder where the resource lives
 */
function _getParentUri(uri) {
    let parent;
    if (!uri.endsWith("/"))
        // uri is resource
        parent = _getSameLocationAs(uri);
    else
        parent = uri
            // get parent folder
            .substring(0, uri.length - 1)
            .substring(0, uri.lastIndexOf("/"));
    if (parent == "http://" || parent == "https://")
        throw new Error(`Parent not found: Reached root folder at \`${uri}\`.`); // reached the top
    return parent;
}
/**
 * Parses Header "Link", e.g. <.acl>; rel="acl", <.meta>; rel="describedBy", <http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type"
 *
 * @param txt string of the Link Header#
 * @returns the object parsed
 */
function _parseLinkHeader(txt) {
    const parsedObj = {};
    const propArray = txt.split(",").map((obj) => obj.split(";"));
    for (const prop of propArray) {
        if (parsedObj[prop[1].trim().split('"')[1]] === undefined) {
            // first element to have this prop type
            parsedObj[prop[1].trim().split('"')[1]] = prop[0].trim();
        }
        else {
            // this prop type is already set
            const propArray = new Array(parsedObj[prop[1].trim().split('"')[1]]).flat();
            propArray.push(prop[0].trim());
            parsedObj[prop[1].trim().split('"')[1]] = propArray;
        }
    }
    return parsedObj;
}
/**
 * Send a session.axiosFetch request: HEAD, uri, header `Link` as json obj
 *
 * @param uri: the URI of the text/turtle to get the access control file for
 * @param session: OPTIONAL - session.axiosFetch function to use, e.g. session.authFetch of a solid session
 * @return Json object of the Link header
 */
async function getLinkHeader(uri, session) {
    console.log("### SoLiD\t| HEAD\n" + uri);
    if (session === undefined)
        session = new Session();
    return session
        .authFetch({ url: uri, method: "HEAD" })
        .then(_checkResponseStatus)
        .then((resp) => {
        if (!(resp.headers instanceof AxiosHeaders && resp.headers.has("Link"))) {
            throw new Error(`Link Header at \`${resp.request.url}\` not set.`);
        }
        const linkHeader = resp.headers.get("Link");
        if (linkHeader == null) {
            throw new Error(`Could not get Link Header at \`${resp.request.url}\`.`);
        }
        else {
            return linkHeader.toString();
        }
    }) // e.g. <.acl>; rel="acl", <.meta>; rel="describedBy", <http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type"
        .then(_parseLinkHeader);
}
async function getAclResourceUri(uri, session) {
    console.log("### SoLiD\t| ACL\n" + uri);
    if (session === undefined)
        session = new Session();
    return getLinkHeader(uri, session)
        .then((lnk) => _stripUriFromStartAndEndParentheses(lnk.acl))
        .then((acl) => {
        if (acl.startsWith("http://") || acl.startsWith("https://")) {
            return acl;
        }
        return _getSameLocationAs(uri) + acl;
    });
}

;// CONCATENATED MODULE: ../solid-requests/dist/esm/index.js



;// CONCATENATED MODULE: ../composables/dist/esm/src/rdpCapableSession.js

class RdpCapableSession extends Session_Session {
    rdp_;
    constructor(rdp) {
        super();
        if (rdp !== "") {
            this.updateSessionWithRDP(rdp);
        }
    }
    async authFetch(config, dpopPayload) {
        const requestedURL = new URL(config.url);
        if (this.rdp_ !== undefined && this.rdp_ !== "") {
            const requestURL = new URL(config.url);
            requestURL.searchParams.set("host", requestURL.host);
            requestURL.host = new URL(this.rdp_).host;
            config.url = requestURL.toString();
        }
        if (!dpopPayload) {
            dpopPayload = {
                htu: `${requestedURL.protocol}//${requestedURL.host}${requestedURL.pathname}`, // ! adjust to `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`
                htm: config.method,
                // ! ptu: requestedURL.toString(),
            };
        }
        return super.authFetch(config, dpopPayload);
    }
    updateSessionWithRDP(rdp) {
        this.rdp_ = rdp;
    }
    get rdp() {
        return this.rdp_;
    }
}

;// CONCATENATED MODULE: ../composables/dist/esm/src/useSolidSession.js


let session;
async function restoreSession() {
    await session.handleRedirectFromLogin();
}
/**
 * Auto-re-login / and handle redirect after login
 *
 * Use in App.vue like this
 * ```ts
    // plain (without any routing framework)
    restoreSession()
    // but if you use a router, make sure it is ready
    router.isReady().then(restoreSession)
   ```
 */
const useSolidSession_useSolidSession = () => {
    session ??= (0,external_vue_.inject)('useSolidSession:RdpCapableSession', () => (0,external_vue_.reactive)(new RdpCapableSession("")), true);
    return {
        session,
        restoreSession,
    };
};

;// CONCATENATED MODULE: ../composables/dist/esm/src/useSolidProfile.js




let useSolidProfile_session;
const useSolidProfile_name = (0,external_vue_.ref)("");
const img = (0,external_vue_.ref)("");
const inbox = (0,external_vue_.ref)("");
const storage = (0,external_vue_.ref)("");
const authAgent = (0,external_vue_.ref)("");
const accessInbox = (0,external_vue_.ref)("");
const memberOf = (0,external_vue_.ref)("");
const hasOrgRDP = (0,external_vue_.ref)("");
const useSolidProfile_useSolidProfile = () => {
    if (!useSolidProfile_session) {
        const { session: sessionRef } = useSolidSession_useSolidSession();
        useSolidProfile_session = sessionRef;
    }
    (0,external_vue_.watch)(() => useSolidProfile_session.webId, async () => {
        const webId = useSolidProfile_session.webId;
        let store = new external_n3_.Store();
        if (useSolidProfile_session.webId !== undefined) {
            store = await solidRequests_getResource(webId)
                .then((resp) => resp.data)
                .then((respText) => solidRequests_parseToN3(respText, webId))
                .then((parsedN3) => parsedN3.store);
        }
        let query = store.getObjects(webId, VCARD("hasPhoto"), null);
        img.value = query.length > 0 ? query[0].value : "";
        query = store.getObjects(webId, VCARD("fn"), null);
        useSolidProfile_name.value = query.length > 0 ? query[0].value : "";
        query = store.getObjects(webId, namespaces_LDP("inbox"), null);
        inbox.value = query.length > 0 ? query[0].value : "";
        query = store.getObjects(webId, SPACE("storage"), null);
        storage.value = query.length > 0 ? query[0].value : "";
        query = store.getObjects(webId, INTEROP("hasAuthorizationAgent"), null);
        authAgent.value = query.length > 0 ? query[0].value : "";
        query = store.getObjects(webId, INTEROP("hasAccessInbox"), null);
        accessInbox.value = query.length > 0 ? query[0].value : "";
        query = store.getObjects(webId, ORG("memberOf"), null);
        const uncheckedMemberOf = query.length > 0 ? query[0].value : "";
        if (uncheckedMemberOf !== "") {
            let storeOrg = new external_n3_.Store();
            storeOrg = await solidRequests_getResource(uncheckedMemberOf)
                .then((resp) => resp.data)
                .then((respText) => solidRequests_parseToN3(respText, uncheckedMemberOf))
                .then((parsedN3) => parsedN3.store);
            const isMember = storeOrg.getQuads(uncheckedMemberOf, ORG("hasMember"), webId, null).length > 0;
            if (isMember) {
                memberOf.value = uncheckedMemberOf;
                query = storeOrg.getObjects(uncheckedMemberOf, MANDAT("hasRightsDelegationProxy"), null);
                hasOrgRDP.value = query.length > 0 ? query[0].value : "";
                useSolidProfile_session.updateSessionWithRDP(hasOrgRDP.value);
                // and also overwrite fields from org profile
                query = storeOrg.getObjects(memberOf.value, VCARD("fn"), null);
                useSolidProfile_name.value += ` (Org: ${query.length > 0 ? query[0].value : "N/A"})`;
                query = storeOrg.getObjects(memberOf.value, namespaces_LDP("inbox"), null);
                inbox.value = query.length > 0 ? query[0].value : "";
                query = storeOrg.getObjects(memberOf.value, SPACE("storage"), null);
                storage.value = query.length > 0 ? query[0].value : "";
                query = storeOrg.getObjects(memberOf.value, INTEROP("hasAuthorizationAgent"), null);
                authAgent.value = query.length > 0 ? query[0].value : "";
                query = storeOrg.getObjects(memberOf.value, INTEROP("hasAccessInbox"), null);
                accessInbox.value = query.length > 0 ? query[0].value : "";
            }
        }
    });
    return {
        name: useSolidProfile_name, img, inbox, storage, authAgent, accessInbox, memberOf, hasOrgRDP,
    };
};

;// CONCATENATED MODULE: ../composables/dist/esm/src/useSolidWebPush.js



let useSolidWebPush_unsubscribeFromPush;
let useSolidWebPush_subscribeToPush;
let useSolidWebPush_session;
// hardcoding for my demo
const solidWebPushProfile = "https://solid.aifb.kit.edu/web-push/service";
// usually this should expect the resource to sub to, then check their .meta and so on...
const _getSolidWebPushDetails = async () => {
    const { store } = await getResource(solidWebPushProfile)
        .then((resp) => resp.data)
        .then((txt) => parseToN3(txt, solidWebPushProfile));
    const service = store.getSubjects(AS("Service"), null, null)[0];
    const inbox = store.getObjects(service, LDP("inbox"), null)[0].value;
    const vapidPublicKey = store.getObjects(service, PUSH("vapidPublicKey"), null)[0].value;
    return { inbox, vapidPublicKey };
};
const _createSubscriptionOnResource = (uri, details) => {
    return `
@prefix rdf: <${RDF()}> .
@prefix as: <${AS()}> .
@prefix push: <${PUSH()}> .
<#sub> a as:Follow;
    as:actor <${useSolidWebPush_session.webId}>;
    as:object <${uri}>;
    push:endpoint "${details.endpoint}";
    # expirationTime: null # undefined
    push:keys [
            push:auth "${details.keys.auth}";
			      push:p256dh "${details.keys.p256dh}"
		    ].    
    `;
};
const _createUnsubscriptionFromResource = (uri, details) => {
    return `
@prefix rdf: <${RDF()}> .
@prefix as: <${AS()}> .
@prefix push: <${PUSH()}> .
<#unsub> a as:Undo;
    as:actor <${useSolidWebPush_session.webId}>;
    as:object [
            a as:Follow;
            as:actor <${useSolidWebPush_session.webId}>;
            as:object <${uri}>;
            push:endpoint "${details.endpoint}";
            # expirationTime: null # undefined
            push:keys [
                    push:auth "${details.keys.auth}";
		        	      push:p256dh "${details.keys.p256dh}"
		                  ]
              ].    
    `;
};
const subscribeForResource = async (uri) => {
    const { inbox, vapidPublicKey } = await _getSolidWebPushDetails();
    const sub = await useSolidWebPush_subscribeToPush(vapidPublicKey);
    const solidWebPushSub = _createSubscriptionOnResource(uri, sub);
    console.log(solidWebPushSub);
    return createResource(inbox, solidWebPushSub, useSolidWebPush_session);
};
const unsubscribeFromResource = async (uri) => {
    const { inbox } = await _getSolidWebPushDetails();
    const sub_old = await useSolidWebPush_unsubscribeFromPush();
    const solidWebPushUnSub = _createUnsubscriptionFromResource(uri, sub_old);
    console.log(solidWebPushUnSub);
    return createResource(inbox, solidWebPushUnSub, useSolidWebPush_session);
};
const useSolidWebPush = () => {
    if (!useSolidWebPush_session) {
        useSolidWebPush_session = useSolidSession().session;
    }
    if (!useSolidWebPush_unsubscribeFromPush && !useSolidWebPush_subscribeToPush) {
        const { unsubscribeFromPush: unsubscribeFromPushFunc, subscribeToPush: subscribeToPushFunc } = useServiceWorkerNotifications();
        useSolidWebPush_unsubscribeFromPush = unsubscribeFromPushFunc;
        useSolidWebPush_subscribeToPush = subscribeToPushFunc;
    }
    return {
        subscribeForResource,
        unsubscribeFromResource
    };
};

;// CONCATENATED MODULE: ../composables/dist/esm/src/useIsLoggedIn.js



const useIsLoggedIn = () => {
    const { session } = useSolidSession();
    const { memberOf } = useSolidProfile();
    const isLoggedIn = computed(() => {
        return (!!((session.webId && !memberOf) || (session.webId && memberOf && session.rdp)));
    });
    return { isLoggedIn };
};

;// CONCATENATED MODULE: ../composables/dist/esm/index.js



// export * from './src/useSolidInbox';


// export * from './src/useSolidWallet';





;// CONCATENATED MODULE: ../../node_modules/primevue/utils/utils.esm.js
function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread$3(); }
function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray$3(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$3(arr); }
function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$1(); }
function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit$1(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
var DomHandler = {
  innerWidth: function innerWidth(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  width: function width(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  getWindowScrollTop: function getWindowScrollTop() {
    var doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft: function getWindowScrollLeft() {
    var doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth: function getOuterWidth(el, margin) {
    if (el) {
      var width = el.offsetWidth;
      if (margin) {
        var style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
      return width;
    }
    return 0;
  },
  getOuterHeight: function getOuterHeight(el, margin) {
    if (el) {
      var height = el.offsetHeight;
      if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight: function getClientHeight(el, margin) {
    if (el) {
      var height = el.clientHeight;
      if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport: function getViewport() {
    var win = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight;
    return {
      width: w,
      height: h
    };
  },
  getOffset: function getOffset(el) {
    if (el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: 'auto',
      left: 'auto'
    };
  },
  index: function index(element) {
    if (element) {
      var _this$getParentNode;
      var children = (_this$getParentNode = this.getParentNode(element)) === null || _this$getParentNode === void 0 ? void 0 : _this$getParentNode.childNodes;
      var num = 0;
      for (var i = 0; i < children.length; i++) {
        if (children[i] === element) return num;
        if (children[i].nodeType === 1) num++;
      }
    }
    return -1;
  },
  addMultipleClasses: function addMultipleClasses(element, classNames) {
    var _this = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach(function (cNames) {
        return cNames.split(' ').forEach(function (className) {
          return _this.addClass(element, className);
        });
      });
    }
  },
  removeMultipleClasses: function removeMultipleClasses(element, classNames) {
    var _this2 = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach(function (cNames) {
        return cNames.split(' ').forEach(function (className) {
          return _this2.removeClass(element, className);
        });
      });
    }
  },
  addClass: function addClass(element, className) {
    if (element && className && !this.hasClass(element, className)) {
      if (element.classList) element.classList.add(className);else element.className += ' ' + className;
    }
  },
  removeClass: function removeClass(element, className) {
    if (element && className) {
      if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },
  hasClass: function hasClass(element, className) {
    if (element) {
      if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
    return false;
  },
  addStyles: function addStyles(element) {
    var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (element) {
      Object.entries(styles).forEach(function (_ref) {
        var _ref2 = _slicedToArray$1(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return element.style[key] = value;
      });
    }
  },
  find: function find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle: function findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  createElement: function createElement(type) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (type) {
      var element = document.createElement(type);
      this.setAttributes(element, attributes);
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }
      element.append.apply(element, children);
      return element;
    }
    return undefined;
  },
  setAttribute: function setAttribute(element) {
    var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var value = arguments.length > 2 ? arguments[2] : undefined;
    if (this.isElement(element) && value !== null && value !== undefined) {
      element.setAttribute(attribute, value);
    }
  },
  setAttributes: function setAttributes(element) {
    var _this3 = this;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.isElement(element)) {
      var computedStyles = function computedStyles(rule, value) {
        var _element$$attrs, _element$$attrs2;
        var styles = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
        return [value].flat().reduce(function (cv, v) {
          if (v !== null && v !== undefined) {
            var type = _typeof$3(v);
            if (type === 'string' || type === 'number') {
              cv.push(v);
            } else if (type === 'object') {
              var _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(function (_ref3) {
                var _ref4 = _slicedToArray$1(_ref3, 2),
                  _k = _ref4[0],
                  _v = _ref4[1];
                return rule === 'style' && (!!_v || _v === 0) ? "".concat(_k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), ":").concat(_v) : !!_v ? _k : undefined;
              });
              cv = _cv.length ? cv.concat(_cv.filter(function (c) {
                return !!c;
              })) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(function (_ref5) {
        var _ref6 = _slicedToArray$1(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];
        if (value !== undefined && value !== null) {
          var matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === 'p-bind') {
            _this3.setAttributes(element, value);
          } else {
            value = key === 'class' ? _toConsumableArray$3(new Set(computedStyles('class', value))).join(' ').trim() : key === 'style' ? computedStyles('style', value).join(';').trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  },
  getAttribute: function getAttribute(element, name) {
    if (this.isElement(element)) {
      var value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === 'true' || value === 'false') {
        return value === 'true';
      }
      return value;
    }
    return undefined;
  },
  isAttributeEquals: function isAttributeEquals(element, name, value) {
    return this.isElement(element) ? this.getAttribute(element, name) === value : false;
  },
  isAttributeNotEquals: function isAttributeNotEquals(element, name, value) {
    return !this.isAttributeEquals(element, name, value);
  },
  getHeight: function getHeight(el) {
    if (el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth: function getWidth(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
    return 0;
  },
  absolutePosition: function absolutePosition(element, target) {
    var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var elementOuterHeight = elementDimensions.height;
      var elementOuterWidth = elementDimensions.width;
      var targetOuterHeight = target.offsetHeight;
      var targetOuterWidth = target.offsetWidth;
      var targetOffset = target.getBoundingClientRect();
      var windowScrollTop = this.getWindowScrollTop();
      var windowScrollLeft = this.getWindowScrollLeft();
      var viewport = this.getViewport();
      var top,
        left,
        origin = 'top';
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        origin = 'bottom';
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
      }
      if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
      element.style.top = top + 'px';
      element.style.left = left + 'px';
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  relativePosition: function relativePosition(element, target) {
    var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var top,
        left,
        origin = 'top';
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        origin = 'bottom';
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
      }
      if (elementDimensions.width > viewport.width) {
        // element wider then viewport and cannot fit on screen (align at left side of viewport)
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        // element wider then viewport but can be fit on screen (align at right side of viewport)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        // element fits on screen (align with target)
        left = 0;
      }
      element.style.top = top + 'px';
      element.style.left = left + 'px';
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  nestedPosition: function nestedPosition(element, level) {
    if (element) {
      var parentItem = element.parentElement;
      var elementOffset = this.getOffset(parentItem);
      var viewport = this.getViewport();
      var sublistWidth = element.offsetParent ? element.offsetWidth : this.getHiddenElementOuterWidth(element);
      var itemOuterWidth = this.getOuterWidth(parentItem.children[0]);
      var left;
      if (parseInt(elementOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - this.calculateScrollbarWidth()) {
        if (parseInt(elementOffset.left, 10) < sublistWidth) {
          // for too small screens
          if (level % 2 === 1) {
            left = parseInt(elementOffset.left, 10) ? '-' + parseInt(elementOffset.left, 10) + 'px' : '100%';
          } else if (level % 2 === 0) {
            left = viewport.width - sublistWidth - this.calculateScrollbarWidth() + 'px';
          }
        } else {
          left = '-100%';
        }
      } else {
        left = '100%';
      }
      element.style.top = '0px';
      element.style.left = left;
    }
  },
  getParentNode: function getParentNode(element) {
    var parent = element === null || element === void 0 ? void 0 : element.parentNode;
    if (parent && parent instanceof ShadowRoot && parent.host) {
      parent = parent.host;
    }
    return parent;
  },
  getParents: function getParents(element) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var parent = this.getParentNode(element);
    return parent === null ? parents : this.getParents(parent, parents.concat([parent]));
  },
  getScrollableParents: function getScrollableParents(element) {
    var scrollableParents = [];
    if (element) {
      var parents = this.getParents(element);
      var overflowRegex = /(auto|scroll)/;
      var overflowCheck = function overflowCheck(node) {
        try {
          var styleDeclaration = window['getComputedStyle'](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
        } catch (err) {
          return false;
        }
      };
      var _iterator = _createForOfIteratorHelper$1(parents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var parent = _step.value;
          var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
          if (scrollSelectors) {
            var selectors = scrollSelectors.split(',');
            var _iterator2 = _createForOfIteratorHelper$1(selectors),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var selector = _step2.value;
                var el = this.findSingle(parent, selector);
                if (el && overflowCheck(el)) {
                  scrollableParents.push(el);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (parent.nodeType !== 9 && overflowCheck(parent)) {
            scrollableParents.push(parent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementHeight = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementWidth = element.offsetWidth;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions: function getHiddenElementDimensions(element) {
    if (element) {
      var dimensions = {};
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return dimensions;
    }
    return 0;
  },
  fadeIn: function fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      var last = +new Date();
      var opacity = 0;
      var tick = function tick() {
        opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  },
  fadeOut: function fadeOut(element, ms) {
    if (element) {
      var opacity = 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;
      var fading = setInterval(function () {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent: function getUserAgent() {
    return navigator.userAgent;
  },
  appendChild: function appendChild(element, target) {
    if (this.isElement(target)) target.appendChild(element);else if (target.el && target.elElement) target.elElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
  },
  isElement: function isElement(obj) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _typeof$3(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && _typeof$3(obj) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  },
  scrollInView: function scrollInView(container, item) {
    var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    var containerRect = container.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    var scroll = container.scrollTop;
    var elementHeight = container.clientHeight;
    var itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection: function clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document['selection'] && document['selection'].empty) {
      try {
        document['selection'].empty();
      } catch (error) {
        //ignore IE bug
      }
    }
  },
  getSelection: function getSelection() {
    if (window.getSelection) return window.getSelection().toString();else if (document.getSelection) return document.getSelection().toString();else if (document['selection']) return document['selection'].createRange().text;
    return null;
  },
  calculateScrollbarWidth: function calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
    var scrollDiv = document.createElement('div');
    this.addStyles(scrollDiv, {
      width: '100px',
      height: '100px',
      overflow: 'scroll',
      position: 'absolute',
      top: '-9999px'
    });
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  calculateBodyScrollbarWidth: function calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  },
  getBrowser: function getBrowser() {
    if (!this.browser) {
      var matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser['version'] = matched.version;
      }
      if (this.browser['chrome']) {
        this.browser['webkit'] = true;
      } else if (this.browser['webkit']) {
        this.browser['safari'] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent: function resolveUserAgent() {
    var ua = navigator.userAgent.toLowerCase();
    var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || '',
      version: match[2] || '0'
    };
  },
  isVisible: function isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod: function invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist: function isExist(element) {
    return !!(element !== null && typeof element !== 'undefined' && element.nodeName && this.getParentNode(element));
  },
  isClient: function isClient() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  },
  focus: function focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement: function isFocusableElement(element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return this.isElement(element) ? element.matches("button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])".concat(selector, ",\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector)) : false;
  },
  getFocusableElements: function getFocusableElements(element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var focusableElements = this.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])".concat(selector, ",\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector));
    var visibleFocusableElements = [];
    var _iterator3 = _createForOfIteratorHelper$1(focusableElements),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var focusableElement = _step3.value;
        if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden') visibleFocusableElements.push(focusableElement);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement: function getFirstFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement: function getLastFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement: function getNextFocusableElement(container, element, selector) {
    var focusableElements = this.getFocusableElements(container, selector);
    var index = focusableElements.length > 0 ? focusableElements.findIndex(function (el) {
      return el === element;
    }) : -1;
    var nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  getPreviousElementSibling: function getPreviousElementSibling(element, selector) {
    var previousElement = element.previousElementSibling;
    while (previousElement) {
      if (previousElement.matches(selector)) {
        return previousElement;
      } else {
        previousElement = previousElement.previousElementSibling;
      }
    }
    return null;
  },
  getNextElementSibling: function getNextElementSibling(element, selector) {
    var nextElement = element.nextElementSibling;
    while (nextElement) {
      if (nextElement.matches(selector)) {
        return nextElement;
      } else {
        nextElement = nextElement.nextElementSibling;
      }
    }
    return null;
  },
  isClickable: function isClickable(element) {
    if (element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === 'INPUT' || targetNode === 'TEXTAREA' || targetNode === 'BUTTON' || targetNode === 'A' || parentNode === 'INPUT' || parentNode === 'TEXTAREA' || parentNode === 'BUTTON' || parentNode === 'A' || !!element.closest('.p-button, .p-checkbox, .p-radiobutton') // @todo Add [data-pc-section="button"]
      ;
    }
    return false;
  },
  applyStyle: function applyStyle(element, style) {
    if (typeof style === 'string') {
      element.style.cssText = style;
    } else {
      for (var prop in style) {
        element.style[prop] = style[prop];
      }
    }
  },
  isIOS: function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
  },
  isAndroid: function isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice: function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  hasCSSAnimation: function hasCSSAnimation(element) {
    if (element) {
      var style = getComputedStyle(element);
      var animationDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
      return animationDuration > 0;
    }
    return false;
  },
  hasCSSTransition: function hasCSSTransition(element) {
    if (element) {
      var style = getComputedStyle(element);
      var transitionDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
      return transitionDuration > 0;
    }
    return false;
  },
  exportCSV: function exportCSV(csv, filename) {
    var blob = new Blob([csv], {
      type: 'application/csv;charset=utf-8;'
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + '.csv');
    } else {
      var link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', filename + '.csv');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = 'data:text/csv;charset=utf-8,' + csv;
        window.open(encodeURI(csv));
      }
    }
  },
  blockBodyScroll: function blockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden';
    document.body.style.setProperty('--scrollbar-width', this.calculateBodyScrollbarWidth() + 'px');
    this.addClass(document.body, className);
  },
  unblockBodyScroll: function unblockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden';
    document.body.style.removeProperty('--scrollbar-width');
    this.removeClass(document.body, className);
  }
};

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor); } }
function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$2(i) ? i : String(i); }
function _toPrimitive$1(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ConnectedOverlayScrollHandler = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function ConnectedOverlayScrollHandler(element) {
    var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    _classCallCheck$1(this, ConnectedOverlayScrollHandler);
    this.element = element;
    this.listener = listener;
  }
  _createClass$1(ConnectedOverlayScrollHandler, [{
    key: "bindScrollListener",
    value: function bindScrollListener() {
      this.scrollableParents = DomHandler.getScrollableParents(this.element);
      for (var i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].addEventListener('scroll', this.listener);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollableParents) {
        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].removeEventListener('scroll', this.listener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    }
  }]);
  return ConnectedOverlayScrollHandler;
}()));

function primebus() {
  var allHandlers = new Map();
  return {
    on: function on(type, handler) {
      var handlers = allHandlers.get(type);
      if (!handlers) handlers = [handler];else handlers.push(handler);
      allHandlers.set(type, handlers);
    },
    off: function off(type, handler) {
      var handlers = allHandlers.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type, evt) {
      var handlers = allHandlers.get(type);
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(evt);
        });
      }
    }
  };
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2(); }
function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray$2(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$2(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
var ObjectUtils = {
  equals: function equals(obj1, obj2, field) {
    if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
  },
  deepEquals: function deepEquals(a, b) {
    if (a === b) return true;
    if (a && b && _typeof$1(a) == 'object' && _typeof$1(b) == 'object') {
      var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i,
        length,
        key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData: function resolveFieldData(data, field) {
    if (!data || !field) {
      // short circuit if there is nothing to resolve
      return null;
    }
    try {
      var value = data[field];
      if (this.isNotEmpty(value)) return value;
    } catch (_unused) {
      // Performance optimization: https://github.com/primefaces/primereact/issues/4797
      // do nothing and continue to other methods to resolve field data
    }
    if (Object.keys(data).length) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf('.') === -1) {
        return data[field];
      } else {
        var fields = field.split('.');
        var _value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (_value == null) {
            return null;
          }
          _value = _value[fields[i]];
        }
        return _value;
      }
    }
    return null;
  },
  getItemValue: function getItemValue(obj) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
  },
  filter: function filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      var _iterator = _createForOfIteratorHelper(value),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var _iterator2 = _createForOfIteratorHelper(fields),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var field = _step2.value;
              if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return filteredItems;
  },
  reorderArray: function reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList: function findIndexInList(value, list) {
    var index = -1;
    if (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  },
  contains: function contains(value, list) {
    if (value != null && list && list.length) {
      var _iterator3 = _createForOfIteratorHelper(list),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var val = _step3.value;
          if (this.equals(value, val)) return true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return false;
  },
  insertIntoOrderedArray: function insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      var injected = false;
      for (var i = 0; i < arr.length; i++) {
        var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents: function removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
    }
    return str;
  },
  getVNodeProp: function getVNodeProp(vnode, prop) {
    if (vnode) {
      var props = vnode.props;
      if (props) {
        var kebabProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;
        return vnode.type["extends"].props[prop].type === Boolean && props[propName] === '' ? true : props[propName];
      }
    }
    return null;
  },
  toFlatCase: function toFlatCase(str) {
    // convert snake, kebab, camel and pascal cases to flat case
    return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
  },
  toKebabCase: function toKebabCase(str) {
    // convert snake, camel and pascal cases to kebab case
    return this.isString(str) ? str.replace(/(_)/g, '-').replace(/[A-Z]/g, function (c, i) {
      return i === 0 ? c : '-' + c.toLowerCase();
    }).toLowerCase() : str;
  },
  toCapitalCase: function toCapitalCase(str) {
    return this.isString(str, {
      empty: false
    }) ? str[0].toUpperCase() + str.slice(1) : str;
  },
  isEmpty: function isEmpty(value) {
    return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$1(value) === 'object' && Object.keys(value).length === 0;
  },
  isNotEmpty: function isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isFunction: function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
  },
  isObject: function isObject(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
  },
  isDate: function isDate(value) {
    return value instanceof Date && value.constructor === Date;
  },
  isArray: function isArray(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return Array.isArray(value) && (empty || value.length !== 0);
  },
  isString: function isString(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return typeof value === 'string' && (empty || value !== '');
  },
  isPrintableCharacter: function isPrintableCharacter() {
    var _char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast: function findLast(arr, callback) {
    var item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch (_unused2) {
        item = _toConsumableArray$2(arr).reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex: function findLastIndex(arr, callback) {
    var index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch (_unused3) {
        index = arr.lastIndexOf(_toConsumableArray$2(arr).reverse().find(callback));
      }
    }
    return index;
  },
  sort: function sort(value1, value2) {
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var comparator = arguments.length > 3 ? arguments[3] : undefined;
    var nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var result = this.compare(value1, value2, comparator, order);
    var finalSortOrder = order;

    // nullSortOrder == 1 means Excel like sort nulls at bottom
    if (this.isEmpty(value1) || this.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  },
  compare: function compare(value1, value2, comparator) {
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var result = -1;
    var emptyValue1 = this.isEmpty(value1);
    var emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2) result = 0;else if (emptyValue1) result = order;else if (emptyValue2) result = -order;else if (typeof value1 === 'string' && typeof value2 === 'string') result = comparator(value1, value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  },
  localeComparator: function localeComparator() {
    //performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
    return new Intl.Collator(undefined, {
      numeric: true
    }).compare;
  },
  nestedKeys: function nestedKeys() {
    var _this = this;
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return Object.entries(obj).reduce(function (o, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      var currentKey = parentKey ? "".concat(parentKey, ".").concat(key) : key;
      _this.isObject(value) ? o = o.concat(_this.nestedKeys(value, currentKey)) : o.push(currentKey);
      return o;
    }, []);
  },
  stringify: function stringify(value) {
    var _this2 = this;
    var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var currentIndent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var currentIndentStr = ' '.repeat(currentIndent);
    var nextIndentStr = ' '.repeat(currentIndent + indent);
    if (this.isArray(value)) {
      return '[' + value.map(function (v) {
        return _this2.stringify(v, indent, currentIndent + indent);
      }).join(', ') + ']';
    } else if (this.isDate(value)) {
      return value.toISOString();
    } else if (this.isFunction(value)) {
      return value.toString();
    } else if (this.isObject(value)) {
      return '{\n' + Object.entries(value).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];
        return "".concat(nextIndentStr).concat(k, ": ").concat(_this2.stringify(v, indent, currentIndent + indent));
      }).join(',\n') + "\n".concat(currentIndentStr) + '}';
    } else {
      return JSON.stringify(value);
    }
  }
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }
function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function _default(_ref) {
    var init = _ref.init,
      type = _ref.type;
    _classCallCheck(this, _default);
    _defineProperty(this, "helpers", void 0);
    _defineProperty(this, "type", void 0);
    this.helpers = new Set(init);
    this.type = type;
  }
  _createClass(_default, [{
    key: "add",
    value: function add(instance) {
      this.helpers.add(instance);
    }
  }, {
    key: "update",
    value: function update() {
      // @todo
    }
  }, {
    key: "delete",
    value: function _delete(instance) {
      this.helpers["delete"](instance);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.helpers.clear();
    }
  }, {
    key: "get",
    value: function get(parentInstance, slots) {
      var children = this._get(parentInstance, slots);
      var computed = children ? this._recursive(_toConsumableArray$1(this.helpers), children) : null;
      return ObjectUtils.isNotEmpty(computed) ? computed : null;
    }
  }, {
    key: "_isMatched",
    value: function _isMatched(instance, key) {
      var _parent$vnode;
      var parent = instance === null || instance === void 0 ? void 0 : instance.parent;
      return (parent === null || parent === void 0 || (_parent$vnode = parent.vnode) === null || _parent$vnode === void 0 ? void 0 : _parent$vnode.key) === key || parent && this._isMatched(parent, key) || false;
    }
  }, {
    key: "_get",
    value: function _get(parentInstance, slots) {
      var _ref2, _ref2$default;
      return ((_ref2 = slots || (parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$slots)) === null || _ref2 === void 0 || (_ref2$default = _ref2["default"]) === null || _ref2$default === void 0 ? void 0 : _ref2$default.call(_ref2)) || null;
    }
  }, {
    key: "_recursive",
    value: function _recursive() {
      var _this = this;
      var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var components = [];
      children.forEach(function (child) {
        if (child.children instanceof Array) {
          components = components.concat(_this._recursive(components, child.children));
        } else if (child.type.name === _this.type) {
          components.push(child);
        } else if (ObjectUtils.isNotEmpty(child.key)) {
          components = components.concat(helpers.filter(function (c) {
            return _this._isMatched(c, child.key);
          }).map(function (c) {
            return c.vnode;
          }));
        }
      });
      return components;
    }
  }]);
  return _default;
}()));

var lastId = 0;
function UniqueComponentId () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pv_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function handler() {
  var zIndexes = [];
  var generateZIndex = function generateZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999;
    var lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    var newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key: key,
      value: newZIndex
    });
    return newZIndex;
  };
  var revertZIndex = function revertZIndex(zIndex) {
    zIndexes = zIndexes.filter(function (obj) {
      return obj.value !== zIndex;
    });
  };
  var getCurrentZIndex = function getCurrentZIndex(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value;
  };
  var getLastZIndex = function getLastZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return _toConsumableArray(zIndexes).reverse().find(function (obj) {
      return autoZIndex ? true : obj.key === key;
    }) || {
      key: key,
      value: baseZIndex
    };
  };
  var getZIndex = function getZIndex(el) {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: function set(key, el, baseZIndex) {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, true, baseZIndex));
      }
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = '';
      }
    },
    getCurrent: function getCurrent(key) {
      return getCurrentZIndex(key, true);
    }
  };
}
var ZIndexUtils = handler();



;// CONCATENATED MODULE: ../../node_modules/primevue/usestyle/usestyle.esm.js



function usestyle_esm_typeof(o) { "@babel/helpers - typeof"; return usestyle_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, usestyle_esm_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { usestyle_esm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function usestyle_esm_defineProperty(obj, key, value) { key = usestyle_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function usestyle_esm_toPropertyKey(t) { var i = usestyle_esm_toPrimitive(t, "string"); return "symbol" == usestyle_esm_typeof(i) ? i : String(i); }
function usestyle_esm_toPrimitive(t, r) { if ("object" != usestyle_esm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != usestyle_esm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if ((0,external_vue_.getCurrentInstance)()) (0,external_vue_.onMounted)(fn);else if (sync) fn();else (0,external_vue_.nextTick)(fn);
}
var _id = 0;
function useStyle(css) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isLoaded = (0,external_vue_.ref)(false);
  var cssRef = (0,external_vue_.ref)(css);
  var styleRef = (0,external_vue_.ref)(null);
  var defaultDocument = DomHandler.isClient() ? window.document : undefined;
  var _options$document = options.document,
    document = _options$document === void 0 ? defaultDocument : _options$document,
    _options$immediate = options.immediate,
    immediate = _options$immediate === void 0 ? true : _options$immediate,
    _options$manual = options.manual,
    manual = _options$manual === void 0 ? false : _options$manual,
    _options$name = options.name,
    name = _options$name === void 0 ? "style_".concat(++_id) : _options$name,
    _options$id = options.id,
    id = _options$id === void 0 ? undefined : _options$id,
    _options$media = options.media,
    media = _options$media === void 0 ? undefined : _options$media,
    _options$nonce = options.nonce,
    nonce = _options$nonce === void 0 ? undefined : _options$nonce,
    _options$props = options.props,
    props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop() {};

  /* @todo: Improve _options params */
  var load = function load(_css) {
    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!document) return;
    var _styleProps = _objectSpread(_objectSpread({}, props), _props);
    var _name = _styleProps.name || name,
      _id = _styleProps.id || id,
      _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector("style[data-primevue-style-id=\"".concat(_name, "\"]")) || document.getElementById(_id) || document.createElement('style');
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css;
      DomHandler.setAttributes(styleRef.value, {
        type: 'text/css',
        id: _id,
        media: media,
        nonce: _nonce
      });
      document.head.appendChild(styleRef.value);
      DomHandler.setAttribute(styleRef.value, 'data-primevue-style-id', name);
      DomHandler.setAttributes(styleRef.value, _styleProps);
    }
    if (isLoaded.value) return;
    stop = (0,external_vue_.watch)(cssRef, function (value) {
      styleRef.value.textContent = value;
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload() {
    if (!document || !isLoaded.value) return;
    stop();
    DomHandler.isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
  };
  if (immediate && !manual) tryOnMounted(load);

  /*if (!manual)
    tryOnScopeDispose(unload)*/

  return {
    id: id,
    name: name,
    css: cssRef,
    unload: unload,
    load: load,
    isLoaded: (0,external_vue_.readonly)(isLoaded)
  };
}



;// CONCATENATED MODULE: ../../node_modules/primevue/base/style/basestyle.esm.js


function basestyle_esm_typeof(o) { "@babel/helpers - typeof"; return basestyle_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, basestyle_esm_typeof(o); }
function basestyle_esm_slicedToArray(arr, i) { return basestyle_esm_arrayWithHoles(arr) || basestyle_esm_iterableToArrayLimit(arr, i) || basestyle_esm_unsupportedIterableToArray(arr, i) || basestyle_esm_nonIterableRest(); }
function basestyle_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function basestyle_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return basestyle_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return basestyle_esm_arrayLikeToArray(o, minLen); }
function basestyle_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function basestyle_esm_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function basestyle_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function basestyle_esm_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function basestyle_esm_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? basestyle_esm_ownKeys(Object(t), !0).forEach(function (r) { basestyle_esm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : basestyle_esm_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function basestyle_esm_defineProperty(obj, key, value) { key = basestyle_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function basestyle_esm_toPropertyKey(t) { var i = basestyle_esm_toPrimitive(t, "string"); return "symbol" == basestyle_esm_typeof(i) ? i : String(i); }
function basestyle_esm_toPrimitive(t, r) { if ("object" != basestyle_esm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != basestyle_esm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var css = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n";
var classes = {};
var inlineStyles = {};
var BaseStyle = {
  name: 'base',
  css: css,
  classes: classes,
  inlineStyles: inlineStyles,
  loadStyle: function loadStyle() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return this.css ? useStyle(this.css, basestyle_esm_objectSpread({
      name: this.name
    }, options)) : {};
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.css) {
      var _props = Object.entries(props).reduce(function (acc, _ref) {
        var _ref2 = basestyle_esm_slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        return acc.push("".concat(k, "=\"").concat(v, "\"")) && acc;
      }, []).join(' ');
      return "<style type=\"text/css\" data-primevue-style-id=\"".concat(this.name, "\" ").concat(_props, ">").concat(this.css).concat(extendedCSS, "</style>");
    }
    return '';
  },
  extend: function extend(style) {
    return basestyle_esm_objectSpread(basestyle_esm_objectSpread({}, this), {}, {
      css: undefined
    }, style);
  }
};



;// CONCATENATED MODULE: ../../node_modules/primevue/badgedirective/style/badgedirectivestyle.esm.js


var badgedirectivestyle_esm_classes = {
  root: 'p-badge p-component'
};
var BadgeDirectiveStyle = BaseStyle.extend({
  name: 'badge',
  classes: badgedirectivestyle_esm_classes
});



;// CONCATENATED MODULE: ../../node_modules/primevue/basedirective/basedirective.esm.js




function basedirective_esm_typeof(o) { "@babel/helpers - typeof"; return basedirective_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, basedirective_esm_typeof(o); }
function basedirective_esm_slicedToArray(arr, i) { return basedirective_esm_arrayWithHoles(arr) || basedirective_esm_iterableToArrayLimit(arr, i) || basedirective_esm_unsupportedIterableToArray(arr, i) || basedirective_esm_nonIterableRest(); }
function basedirective_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function basedirective_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return basedirective_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return basedirective_esm_arrayLikeToArray(o, minLen); }
function basedirective_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function basedirective_esm_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function basedirective_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function basedirective_esm_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function basedirective_esm_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? basedirective_esm_ownKeys(Object(t), !0).forEach(function (r) { basedirective_esm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : basedirective_esm_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function basedirective_esm_defineProperty(obj, key, value) { key = basedirective_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function basedirective_esm_toPropertyKey(t) { var i = basedirective_esm_toPrimitive(t, "string"); return "symbol" == basedirective_esm_typeof(i) ? i : String(i); }
function basedirective_esm_toPrimitive(t, r) { if ("object" != basedirective_esm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != basedirective_esm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BaseDirective = {
  _getMeta: function _getMeta() {
    return [ObjectUtils.isObject(arguments.length <= 0 ? undefined : arguments[0]) ? undefined : arguments.length <= 0 ? undefined : arguments[0], ObjectUtils.getItemValue(ObjectUtils.isObject(arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : arguments.length <= 1 ? undefined : arguments[1])];
  },
  _getConfig: function _getConfig(binding, vnode) {
    var _ref, _binding$instance, _vnode$ctx;
    return (_ref = (binding === null || binding === void 0 || (_binding$instance = binding.instance) === null || _binding$instance === void 0 ? void 0 : _binding$instance.$primevue) || (vnode === null || vnode === void 0 || (_vnode$ctx = vnode.ctx) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.appContext) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.config) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.globalProperties) === null || _vnode$ctx === void 0 ? void 0 : _vnode$ctx.$primevue)) === null || _ref === void 0 ? void 0 : _ref.config;
  },
  _getOptionValue: function _getOptionValue(options) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var fKeys = ObjectUtils.toFlatCase(key).split('.');
    var fKey = fKeys.shift();
    return fKey ? ObjectUtils.isObject(options) ? BaseDirective._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find(function (k) {
      return ObjectUtils.toFlatCase(k) === fKey;
    }) || ''], params), fKeys.join('.'), params) : undefined : ObjectUtils.getItemValue(options, params);
  },
  _getPTValue: function _getPTValue() {
    var _instance$binding, _instance$$primevueCo;
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var searchInDefaultPT = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var getValue = function getValue() {
      var value = BaseDirective._getOptionValue.apply(BaseDirective, arguments);
      return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? {
        "class": value
      } : value;
    };
    var _ref2 = ((_instance$binding = instance.binding) === null || _instance$binding === void 0 || (_instance$binding = _instance$binding.value) === null || _instance$binding === void 0 ? void 0 : _instance$binding.ptOptions) || ((_instance$$primevueCo = instance.$primevueConfig) === null || _instance$$primevueCo === void 0 ? void 0 : _instance$$primevueCo.ptOptions) || {},
      _ref2$mergeSections = _ref2.mergeSections,
      mergeSections = _ref2$mergeSections === void 0 ? true : _ref2$mergeSections,
      _ref2$mergeProps = _ref2.mergeProps,
      useMergeProps = _ref2$mergeProps === void 0 ? false : _ref2$mergeProps;
    var global = searchInDefaultPT ? BaseDirective._useDefaultPT(instance, instance.defaultPT(), getValue, key, params) : undefined;
    var self = BaseDirective._usePT(instance, BaseDirective._getPT(obj, instance.$name), getValue, key, basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, params), {}, {
      global: global || {}
    }));
    var datasets = BaseDirective._getPTDatasets(instance, key);
    return mergeSections || !mergeSections && self ? useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, global, self, datasets) : basedirective_esm_objectSpread(basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, global), self), datasets) : basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, self), datasets);
  },
  _getPTDatasets: function _getPTDatasets() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var datasetPrefix = 'data-pc-';
    return basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, key === 'root' && basedirective_esm_defineProperty({}, "".concat(datasetPrefix, "name"), ObjectUtils.toFlatCase(instance.$name))), {}, basedirective_esm_defineProperty({}, "".concat(datasetPrefix, "section"), ObjectUtils.toFlatCase(key)));
  },
  _getPT: function _getPT(pt) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var getValue = function getValue(value) {
      var _computedValue$_key;
      var computedValue = callback ? callback(value) : value;
      var _key = ObjectUtils.toFlatCase(key);
      return (_computedValue$_key = computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _computedValue$_key !== void 0 ? _computedValue$_key : computedValue;
    };
    return pt !== null && pt !== void 0 && pt.hasOwnProperty('_usept') ? {
      _usept: pt['_usept'],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt);
  },
  _usePT: function _usePT() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var pt = arguments.length > 1 ? arguments[1] : undefined;
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var key = arguments.length > 3 ? arguments[3] : undefined;
    var params = arguments.length > 4 ? arguments[4] : undefined;
    var fn = function fn(value) {
      return callback(value, key, params);
    };
    if (pt !== null && pt !== void 0 && pt.hasOwnProperty('_usept')) {
      var _instance$$primevueCo2;
      var _ref4 = pt['_usept'] || ((_instance$$primevueCo2 = instance.$primevueConfig) === null || _instance$$primevueCo2 === void 0 ? void 0 : _instance$$primevueCo2.ptOptions) || {},
        _ref4$mergeSections = _ref4.mergeSections,
        mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections,
        _ref4$mergeProps = _ref4.mergeProps,
        useMergeProps = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps;
      var originalValue = fn(pt.originalValue);
      var value = fn(pt.value);
      if (originalValue === undefined && value === undefined) return undefined;else if (ObjectUtils.isString(value)) return value;else if (ObjectUtils.isString(originalValue)) return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, originalValue, value) : basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, originalValue), value) : value;
    }
    return fn(pt);
  },
  _useDefaultPT: function _useDefaultPT() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaultPT = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var key = arguments.length > 3 ? arguments[3] : undefined;
    var params = arguments.length > 4 ? arguments[4] : undefined;
    return BaseDirective._usePT(instance, defaultPT, callback, key, params);
  },
  _hook: function _hook(directiveName, hookName, el, binding, vnode, prevVnode) {
    var _binding$value, _config$pt;
    var name = "on".concat(ObjectUtils.toCapitalCase(hookName));
    var config = BaseDirective._getConfig(binding, vnode);
    var instance = el === null || el === void 0 ? void 0 : el.$instance;
    var selfHook = BaseDirective._usePT(instance, BaseDirective._getPT(binding === null || binding === void 0 || (_binding$value = binding.value) === null || _binding$value === void 0 ? void 0 : _binding$value.pt, directiveName), BaseDirective._getOptionValue, "hooks.".concat(name));
    var defaultHook = BaseDirective._useDefaultPT(instance, config === null || config === void 0 || (_config$pt = config.pt) === null || _config$pt === void 0 || (_config$pt = _config$pt.directives) === null || _config$pt === void 0 ? void 0 : _config$pt[directiveName], BaseDirective._getOptionValue, "hooks.".concat(name));
    var options = {
      el: el,
      binding: binding,
      vnode: vnode,
      prevVnode: prevVnode
    };
    selfHook === null || selfHook === void 0 || selfHook(instance, options);
    defaultHook === null || defaultHook === void 0 || defaultHook(instance, options);
  },
  _mergeProps: function _mergeProps() {
    var fn = arguments.length > 1 ? arguments[1] : undefined;
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }
    return ObjectUtils.isFunction(fn) ? fn.apply(void 0, args) : external_vue_.mergeProps.apply(void 0, args);
  },
  _extend: function _extend(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var handleHook = function handleHook(hook, el, binding, vnode, prevVnode) {
      var _el$$instance$hook, _el$$instance7;
      el._$instances = el._$instances || {};
      var config = BaseDirective._getConfig(binding, vnode);
      var $prevInstance = el._$instances[name] || {};
      var $options = ObjectUtils.isEmpty($prevInstance) ? basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, options), options === null || options === void 0 ? void 0 : options.methods) : {};
      el._$instances[name] = basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, $prevInstance), {}, {
        /* new instance variables to pass in directive methods */
        $name: name,
        $host: el,
        $binding: binding,
        $modifiers: binding === null || binding === void 0 ? void 0 : binding.modifiers,
        $value: binding === null || binding === void 0 ? void 0 : binding.value,
        $el: $prevInstance['$el'] || el || undefined,
        $style: basedirective_esm_objectSpread({
          classes: undefined,
          inlineStyles: undefined,
          loadStyle: function loadStyle() {}
        }, options === null || options === void 0 ? void 0 : options.style),
        $primevueConfig: config,
        /* computed instance variables */
        defaultPT: function defaultPT() {
          return BaseDirective._getPT(config === null || config === void 0 ? void 0 : config.pt, undefined, function (value) {
            var _value$directives;
            return value === null || value === void 0 || (_value$directives = value.directives) === null || _value$directives === void 0 ? void 0 : _value$directives[name];
          });
        },
        isUnstyled: function isUnstyled() {
          var _el$$instance, _el$$instance2;
          return ((_el$$instance = el.$instance) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.$binding) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.value) === null || _el$$instance === void 0 ? void 0 : _el$$instance.unstyled) !== undefined ? (_el$$instance2 = el.$instance) === null || _el$$instance2 === void 0 || (_el$$instance2 = _el$$instance2.$binding) === null || _el$$instance2 === void 0 || (_el$$instance2 = _el$$instance2.value) === null || _el$$instance2 === void 0 ? void 0 : _el$$instance2.unstyled : config === null || config === void 0 ? void 0 : config.unstyled;
        },
        /* instance's methods */
        ptm: function ptm() {
          var _el$$instance3;
          var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return BaseDirective._getPTValue(el.$instance, (_el$$instance3 = el.$instance) === null || _el$$instance3 === void 0 || (_el$$instance3 = _el$$instance3.$binding) === null || _el$$instance3 === void 0 || (_el$$instance3 = _el$$instance3.value) === null || _el$$instance3 === void 0 ? void 0 : _el$$instance3.pt, key, basedirective_esm_objectSpread({}, params));
        },
        ptmo: function ptmo() {
          var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return BaseDirective._getPTValue(el.$instance, obj, key, params, false);
        },
        cx: function cx() {
          var _el$$instance4, _el$$instance5;
          var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return !((_el$$instance4 = el.$instance) !== null && _el$$instance4 !== void 0 && _el$$instance4.isUnstyled()) ? BaseDirective._getOptionValue((_el$$instance5 = el.$instance) === null || _el$$instance5 === void 0 || (_el$$instance5 = _el$$instance5.$style) === null || _el$$instance5 === void 0 ? void 0 : _el$$instance5.classes, key, basedirective_esm_objectSpread({}, params)) : undefined;
        },
        sx: function sx() {
          var _el$$instance6;
          var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var when = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return when ? BaseDirective._getOptionValue((_el$$instance6 = el.$instance) === null || _el$$instance6 === void 0 || (_el$$instance6 = _el$$instance6.$style) === null || _el$$instance6 === void 0 ? void 0 : _el$$instance6.inlineStyles, key, basedirective_esm_objectSpread({}, params)) : undefined;
        }
      }, $options);
      el.$instance = el._$instances[name]; // pass instance data to hooks
      (_el$$instance$hook = (_el$$instance7 = el.$instance)[hook]) === null || _el$$instance$hook === void 0 || _el$$instance$hook.call(_el$$instance7, el, binding, vnode, prevVnode); // handle hook in directive implementation
      el["$".concat(name)] = el.$instance; // expose all options with $<directive_name>
      BaseDirective._hook(name, hook, el, binding, vnode, prevVnode); // handle hooks during directive uses (global and self-definition)
    };
    return {
      created: function created(el, binding, vnode, prevVnode) {
        handleHook('created', el, binding, vnode, prevVnode);
      },
      beforeMount: function beforeMount(el, binding, vnode, prevVnode) {
        var _config$csp, _el$$instance8, _el$$instance9, _config$csp2;
        var config = BaseDirective._getConfig(binding, vnode);
        BaseStyle.loadStyle({
          nonce: config === null || config === void 0 || (_config$csp = config.csp) === null || _config$csp === void 0 ? void 0 : _config$csp.nonce
        });
        !((_el$$instance8 = el.$instance) !== null && _el$$instance8 !== void 0 && _el$$instance8.isUnstyled()) && ((_el$$instance9 = el.$instance) === null || _el$$instance9 === void 0 || (_el$$instance9 = _el$$instance9.$style) === null || _el$$instance9 === void 0 ? void 0 : _el$$instance9.loadStyle({
          nonce: config === null || config === void 0 || (_config$csp2 = config.csp) === null || _config$csp2 === void 0 ? void 0 : _config$csp2.nonce
        }));
        handleHook('beforeMount', el, binding, vnode, prevVnode);
      },
      mounted: function mounted(el, binding, vnode, prevVnode) {
        var _config$csp3, _el$$instance10, _el$$instance11, _config$csp4;
        var config = BaseDirective._getConfig(binding, vnode);
        BaseStyle.loadStyle({
          nonce: config === null || config === void 0 || (_config$csp3 = config.csp) === null || _config$csp3 === void 0 ? void 0 : _config$csp3.nonce
        });
        !((_el$$instance10 = el.$instance) !== null && _el$$instance10 !== void 0 && _el$$instance10.isUnstyled()) && ((_el$$instance11 = el.$instance) === null || _el$$instance11 === void 0 || (_el$$instance11 = _el$$instance11.$style) === null || _el$$instance11 === void 0 ? void 0 : _el$$instance11.loadStyle({
          nonce: config === null || config === void 0 || (_config$csp4 = config.csp) === null || _config$csp4 === void 0 ? void 0 : _config$csp4.nonce
        }));
        handleHook('mounted', el, binding, vnode, prevVnode);
      },
      beforeUpdate: function beforeUpdate(el, binding, vnode, prevVnode) {
        handleHook('beforeUpdate', el, binding, vnode, prevVnode);
      },
      updated: function updated(el, binding, vnode, prevVnode) {
        handleHook('updated', el, binding, vnode, prevVnode);
      },
      beforeUnmount: function beforeUnmount(el, binding, vnode, prevVnode) {
        handleHook('beforeUnmount', el, binding, vnode, prevVnode);
      },
      unmounted: function unmounted(el, binding, vnode, prevVnode) {
        handleHook('unmounted', el, binding, vnode, prevVnode);
      }
    };
  },
  extend: function extend() {
    var _BaseDirective$_getMe = BaseDirective._getMeta.apply(BaseDirective, arguments),
      _BaseDirective$_getMe2 = basedirective_esm_slicedToArray(_BaseDirective$_getMe, 2),
      name = _BaseDirective$_getMe2[0],
      options = _BaseDirective$_getMe2[1];
    return basedirective_esm_objectSpread({
      extend: function extend() {
        var _BaseDirective$_getMe3 = BaseDirective._getMeta.apply(BaseDirective, arguments),
          _BaseDirective$_getMe4 = basedirective_esm_slicedToArray(_BaseDirective$_getMe3, 2),
          _name = _BaseDirective$_getMe4[0],
          _options = _BaseDirective$_getMe4[1];
        return BaseDirective.extend(_name, basedirective_esm_objectSpread(basedirective_esm_objectSpread(basedirective_esm_objectSpread({}, options), options === null || options === void 0 ? void 0 : options.methods), _options));
      }
    }, BaseDirective._extend(name, options));
  }
};



;// CONCATENATED MODULE: ../../node_modules/primevue/badgedirective/badgedirective.esm.js




var BaseBadgeDirective = BaseDirective.extend({
  style: BadgeDirectiveStyle
});

function badgedirective_esm_typeof(o) { "@babel/helpers - typeof"; return badgedirective_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, badgedirective_esm_typeof(o); }
function badgedirective_esm_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function badgedirective_esm_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? badgedirective_esm_ownKeys(Object(t), !0).forEach(function (r) { badgedirective_esm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : badgedirective_esm_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function badgedirective_esm_defineProperty(obj, key, value) { key = badgedirective_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function badgedirective_esm_toPropertyKey(t) { var i = badgedirective_esm_toPrimitive(t, "string"); return "symbol" == badgedirective_esm_typeof(i) ? i : String(i); }
function badgedirective_esm_toPrimitive(t, r) { if ("object" != badgedirective_esm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != badgedirective_esm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BadgeDirective = BaseBadgeDirective.extend('badge', {
  mounted: function mounted(el, binding) {
    var id = UniqueComponentId() + '_badge';
    var badge = DomHandler.createElement('span', {
      id: id,
      "class": !this.isUnstyled() && this.cx('root'),
      'p-bind': this.ptm('root', {
        context: badgedirective_esm_objectSpread(badgedirective_esm_objectSpread({}, binding.modifiers), {}, {
          nogutter: String(binding.value).length === 1,
          dot: binding.value == null
        })
      })
    });
    el.$_pbadgeId = badge.getAttribute('id');
    for (var modifier in binding.modifiers) {
      !this.isUnstyled() && DomHandler.addClass(badge, 'p-badge-' + modifier);
    }
    if (binding.value != null) {
      if (badgedirective_esm_typeof(binding.value) === 'object') el.$_badgeValue = binding.value.value;else el.$_badgeValue = binding.value;
      badge.appendChild(document.createTextNode(el.$_badgeValue));
      if (String(el.$_badgeValue).length === 1 && !this.isUnstyled()) {
        !this.isUnstyled() && DomHandler.addClass(badge, 'p-badge-no-gutter');
      }
    } else {
      !this.isUnstyled() && DomHandler.addClass(badge, 'p-badge-dot');
    }
    el.setAttribute('data-pd-badge', true);
    !this.isUnstyled() && DomHandler.addClass(el, 'p-overlay-badge');
    el.setAttribute('data-p-overlay-badge', 'true');
    el.appendChild(badge);
    this.$el = badge;
  },
  updated: function updated(el, binding) {
    !this.isUnstyled() && DomHandler.addClass(el, 'p-overlay-badge');
    el.setAttribute('data-p-overlay-badge', 'true');
    if (binding.oldValue !== binding.value) {
      var badge = document.getElementById(el.$_pbadgeId);
      if (badgedirective_esm_typeof(binding.value) === 'object') el.$_badgeValue = binding.value.value;else el.$_badgeValue = binding.value;
      if (!this.isUnstyled()) {
        if (el.$_badgeValue) {
          if (DomHandler.hasClass(badge, 'p-badge-dot')) DomHandler.removeClass(badge, 'p-badge-dot');
          if (el.$_badgeValue.length === 1) DomHandler.addClass(badge, 'p-badge-no-gutter');else DomHandler.removeClass(badge, 'p-badge-no-gutter');
        } else if (!el.$_badgeValue && !DomHandler.hasClass(badge, 'p-badge-dot')) {
          DomHandler.addClass(badge, 'p-badge-dot');
        }
      }
      badge.innerHTML = '';
      badge.appendChild(document.createTextNode(el.$_badgeValue));
    }
  }
});



;// CONCATENATED MODULE: ../../node_modules/thread-loader/dist/cjs.js!../../node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/LoginButton.vue?vue&type=template&id=5039e133&scoped=true&ts=true

const LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_withScopeId = n => ((0,external_vue_.pushScopeId)("data-v-5039e133"), n = n(), (0,external_vue_.popScopeId)(), n);
const LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_1 = /*#__PURE__*/ LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/ (0,external_vue_.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
}, [
    /*#__PURE__*/ (0,external_vue_.createElementVNode)("path", {
        fill: "#3B3B3B",
        "fill-opacity": ".9",
        d: "M10 1a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Z"
    }),
    /*#__PURE__*/ (0,external_vue_.createElementVNode)("path", {
        fill: "#fff",
        d: "M10 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8Z"
    }),
    /*#__PURE__*/ (0,external_vue_.createElementVNode)("path", {
        fill: "#00451D",
        "fill-opacity": ".9",
        d: "M15.946 15.334C15.684 13.265 14.209 12 11.944 12H8.056c-2.265 0-3.74 1.265-4.001 3.334A7.97 7.97 0 0 0 10 18a7.975 7.975 0 0 0 5.946-2.666ZM10 4c-1.629 0-3 .969-3 3 0 1.155.664 4 3 4 2.143 0 3-2.845 3-4 0-1.906-1.543-3-3-3Z"
    }),
    /*#__PURE__*/ (0,external_vue_.createElementVNode)("path", {
        fill: "#7AD200",
        d: "M8 7c0-1.74 1.253-2 2-2 .969 0 2 .701 2 2 0 .723-.602 3-2 3-1.652 0-2-2.507-2-3Zm3.944 6H8.056C6.222 13 5 14 5 16v.235A7.954 7.954 0 0 0 10 18a7.954 7.954 0 0 0 5-1.765V16c0-2-1.222-3-3.056-3Z"
    })
], -1));
const LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_2 = { id: "idps" };
const LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_3 = { class: "idp p-inputgroup" };
const LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_4 = { class: "flex justify-content-between my-4" };
function LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0,external_vue_.resolveComponent)("Button");
    const _component_InputText = (0,external_vue_.resolveComponent)("InputText");
    const _component_Dialog = (0,external_vue_.resolveComponent)("Dialog");
    return ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)(external_vue_.Fragment, null, [
        (0,external_vue_.createElementVNode)("div", {
            class: "session.login-button",
            onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.isDisplaingIDPs = !_ctx.isDisplaingIDPs))
        }, [
            (0,external_vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
                (0,external_vue_.createVNode)(_component_Button, { class: "p-button-text p-button-rounded" }, {
                    default: (0,external_vue_.withCtx)(() => [
                        LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_1
                    ]),
                    _: 1
                })
            ], true)
        ]),
        (0,external_vue_.createVNode)(_component_Dialog, {
            visible: _ctx.isDisplaingIDPs,
            position: "topright",
            header: "Identity Provider",
            closable: false,
            draggable: false
        }, {
            default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createElementVNode)("div", LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_2, [
                    (0,external_vue_.createElementVNode)("div", LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_3, [
                        (0,external_vue_.createVNode)(_component_InputText, {
                            placeholder: "https://your.idp",
                            type: "text",
                            modelValue: _ctx.idp,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ((_ctx.idp) = $event)),
                            onKeyup: _cache[2] || (_cache[2] = (0,external_vue_.withKeys)(($event) => (_ctx.session.login(_ctx.idp, _ctx.redirect_uri)), ["enter"]))
                        }, null, 8, ["modelValue"]),
                        (0,external_vue_.createVNode)(_component_Button, {
                            severity: "secondary",
                            onClick: _cache[3] || (_cache[3] = ($event) => (_ctx.session.login(_ctx.idp, _ctx.redirect_uri)))
                        }, {
                            default: (0,external_vue_.withCtx)(() => [
                                (0,external_vue_.createTextVNode)(" >")
                            ]),
                            _: 1
                        })
                    ]),
                    (0,external_vue_.createVNode)(_component_Button, {
                        class: "idp",
                        severity: "primary",
                        onClick: _cache[4] || (_cache[4] = ($event) => {
                            _ctx.idp = 'https://solid.aifb.kit.edu';
                            _ctx.session.login(_ctx.idp, _ctx.redirect_uri);
                            _ctx.isDisplaingIDPs = !_ctx.isDisplaingIDPs;
                        })
                    }, {
                        default: (0,external_vue_.withCtx)(() => [
                            (0,external_vue_.createTextVNode)(" https://solid.aifb.kit.edu ")
                        ]),
                        _: 1
                    }),
                    (0,external_vue_.createVNode)(_component_Button, {
                        class: "idp",
                        severity: "secondary",
                        onClick: _cache[5] || (_cache[5] = ($event) => {
                            _ctx.idp = 'https://solidcommunity.net';
                            _ctx.session.login(_ctx.idp, _ctx.redirect_uri);
                            _ctx.isDisplaingIDPs = !_ctx.isDisplaingIDPs;
                        })
                    }, {
                        default: (0,external_vue_.withCtx)(() => [
                            (0,external_vue_.createTextVNode)(" https://solidcommunity.net ")
                        ]),
                        _: 1
                    }),
                    (0,external_vue_.createVNode)(_component_Button, {
                        class: "idp",
                        severity: "secondary",
                        onClick: _cache[6] || (_cache[6] = ($event) => {
                            _ctx.idp = 'https://solidweb.org';
                            _ctx.session.login(_ctx.idp, _ctx.redirect_uri);
                            _ctx.isDisplaingIDPs = !_ctx.isDisplaingIDPs;
                        })
                    }, {
                        default: (0,external_vue_.withCtx)(() => [
                            (0,external_vue_.createTextVNode)(" https://solidweb.org ")
                        ]),
                        _: 1
                    }),
                    (0,external_vue_.createVNode)(_component_Button, {
                        class: "idp",
                        severity: "secondary",
                        onClick: _cache[7] || (_cache[7] = ($event) => {
                            _ctx.idp = 'https://solidweb.me';
                            _ctx.session.login(_ctx.idp, _ctx.redirect_uri);
                            _ctx.isDisplaingIDPs = !_ctx.isDisplaingIDPs;
                        })
                    }, {
                        default: (0,external_vue_.withCtx)(() => [
                            (0,external_vue_.createTextVNode)(" https://solidweb.me ")
                        ]),
                        _: 1
                    }),
                    (0,external_vue_.createVNode)(_component_Button, {
                        class: "idp",
                        severity: "secondary",
                        onClick: _cache[8] || (_cache[8] = ($event) => {
                            _ctx.idp = 'https://inrupt.net';
                            _ctx.session.login(_ctx.idp, _ctx.redirect_uri);
                            _ctx.isDisplaingIDPs = !_ctx.isDisplaingIDPs;
                        })
                    }, {
                        default: (0,external_vue_.withCtx)(() => [
                            (0,external_vue_.createTextVNode)(" https://inrupt.net ")
                        ]),
                        _: 1
                    })
                ]),
                (0,external_vue_.createElementVNode)("div", LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_hoisted_4, [
                    (0,external_vue_.createVNode)(_component_Button, {
                        label: "Get a Pod!",
                        severity: "secondary",
                        onClick: _ctx.GetAPod
                    }, null, 8, ["onClick"]),
                    (0,external_vue_.createVNode)(_component_Button, {
                        label: "close",
                        icon: "pi pi-times",
                        iconPos: "right",
                        severity: "secondary",
                        onClick: _cache[9] || (_cache[9] = ($event) => (_ctx.isDisplaingIDPs = !_ctx.isDisplaingIDPs))
                    })
                ])
            ]),
            _: 1
        }, 8, ["visible"])
    ], 64));
}

;// CONCATENATED MODULE: ./src/LoginButton.vue?vue&type=template&id=5039e133&scoped=true&ts=true

;// CONCATENATED MODULE: ../../node_modules/thread-loader/dist/cjs.js!../../node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/LoginButton.vue?vue&type=script&lang=ts


/* harmony default export */ var LoginButtonvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
    name: "session.loginButton",
    setup() {
        const { session } = useSolidSession_useSolidSession();
        const isDisplaingIDPs = (0,external_vue_.ref)(false);
        const idp = (0,external_vue_.ref)("");
        const redirect_uri = window.location.href;
        const GetAPod = () => {
            window
                .open("https://solidproject.org//users/get-a-pod", "_blank")
                ?.focus();
            // window.close();
        };
        return { session, isDisplaingIDPs, idp, redirect_uri, GetAPod };
    },
}));

;// CONCATENATED MODULE: ./src/LoginButton.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ../../node_modules/vue-style-loader/index.js??clonedRuleSet-55.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-55.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-55.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-55.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/LoginButton.vue?vue&type=style&index=0&id=5039e133&scoped=true&lang=css
var LoginButtonvue_type_style_index_0_id_5039e133_scoped_true_lang_css = __webpack_require__(947);
;// CONCATENATED MODULE: ./src/LoginButton.vue?vue&type=style&index=0&id=5039e133&scoped=true&lang=css

// EXTERNAL MODULE: ../../node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(433);
;// CONCATENATED MODULE: ./src/LoginButton.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(LoginButtonvue_type_script_lang_ts, [['render',LoginButtonvue_type_template_id_5039e133_scoped_true_ts_true_render],['__scopeId',"data-v-5039e133"]])

/* harmony default export */ var LoginButton = (__exports__);
;// CONCATENATED MODULE: ../../node_modules/thread-loader/dist/cjs.js!../../node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/LogoutButton.vue?vue&type=template&id=9263962a&ts=true

const LogoutButtonvue_type_template_id_9263962a_ts_true_hoisted_1 = /*#__PURE__*/ (0,external_vue_.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
}, [
    /*#__PURE__*/ (0,external_vue_.createElementVNode)("path", {
        fill: "#003D66",
        "fill-opacity": ".9",
        d: "M13 5v3H5v4h8v3l5.25-5L13 5Z"
    }),
    /*#__PURE__*/ (0,external_vue_.createElementVNode)("path", {
        fill: "#61C7F2",
        d: "M14 7.333 16.8 10 14 12.667V11H6V9h8V7.333Z"
    }),
    /*#__PURE__*/ (0,external_vue_.createElementVNode)("path", {
        fill: "#3B3B3B",
        "fill-opacity": ".9",
        d: "M2 3V1H1v18h1V3Z"
    })
], -1);
function LogoutButtonvue_type_template_id_9263962a_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0,external_vue_.resolveComponent)("Button");
    return ((0,external_vue_.openBlock)(), (0,external_vue_.createElementBlock)("div", {
        class: "logout-button",
        onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.session.logout()))
    }, [
        (0,external_vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
            (0,external_vue_.createVNode)(_component_Button, { class: "p-button-text p-button-rounded ml-1" }, {
                default: (0,external_vue_.withCtx)(() => [
                    LogoutButtonvue_type_template_id_9263962a_ts_true_hoisted_1
                ]),
                _: 1
            })
        ])
    ]));
}

;// CONCATENATED MODULE: ./src/LogoutButton.vue?vue&type=template&id=9263962a&ts=true

;// CONCATENATED MODULE: ../../node_modules/thread-loader/dist/cjs.js!../../node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/LogoutButton.vue?vue&type=script&lang=ts


/* harmony default export */ var LogoutButtonvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
    name: "LoginButton",
    setup() {
        const { session } = useSolidSession_useSolidSession();
        return { session };
    },
}));

;// CONCATENATED MODULE: ./src/LogoutButton.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/LogoutButton.vue




;
const LogoutButton_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(LogoutButtonvue_type_script_lang_ts, [['render',LogoutButtonvue_type_template_id_9263962a_ts_true_render]])

/* harmony default export */ var LogoutButton = (LogoutButton_exports_);
;// CONCATENATED MODULE: ../../node_modules/thread-loader/dist/cjs.js!../../node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/AuthAppHeaderBar.vue?vue&type=script&lang=ts





/* harmony default export */ var AuthAppHeaderBarvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
    name: "AuthAppHeaderBar",
    components: {
        LoginButton: LoginButton,
        LogoutButton: LogoutButton,
    },
    directives: {
        badge: BadgeDirective,
    },
    props: {
        isLoggedIn: Boolean,
        webId: String,
        appLogo: String,
    },
    setup() {
        const { hasActivePush } = useServiceWorkerNotifications_useServiceWorkerNotifications();
        const { name, img } = useSolidProfile_useSolidProfile();
        const appName = "Authorization App";
        return { img, hasActivePush, appName, name };
    },
}));

;// CONCATENATED MODULE: ./src/AuthAppHeaderBar.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ../../node_modules/vue-style-loader/index.js??clonedRuleSet-55.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-55.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-55.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-55.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/AuthAppHeaderBar.vue?vue&type=style&index=0&id=a2445d98&scoped=true&lang=css
var AuthAppHeaderBarvue_type_style_index_0_id_a2445d98_scoped_true_lang_css = __webpack_require__(765);
;// CONCATENATED MODULE: ./src/AuthAppHeaderBar.vue?vue&type=style&index=0&id=a2445d98&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/AuthAppHeaderBar.vue




;


const AuthAppHeaderBar_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(AuthAppHeaderBarvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-a2445d98"]])

/* harmony default export */ var AuthAppHeaderBar = (AuthAppHeaderBar_exports_);
;// CONCATENATED MODULE: ../../node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (AuthAppHeaderBar);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=AuthAppHeaderBar.umd.js.map