"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/clone-response";
exports.ids = ["vendor-chunks/clone-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/clone-response/node_modules/mimic-response/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/clone-response/node_modules/mimic-response/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\n// We define these manually to ensure they're always copied\n// even if they would move up the prototype chain\n// https://nodejs.org/api/http.html#http_class_http_incomingmessage\nconst knownProps = [\n\t'destroy',\n\t'setTimeout',\n\t'socket',\n\t'headers',\n\t'trailers',\n\t'rawHeaders',\n\t'statusCode',\n\t'httpVersion',\n\t'httpVersionMinor',\n\t'httpVersionMajor',\n\t'rawTrailers',\n\t'statusMessage'\n];\n\nmodule.exports = (fromStream, toStream) => {\n\tconst fromProps = new Set(Object.keys(fromStream).concat(knownProps));\n\n\tfor (const prop of fromProps) {\n\t\t// Don't overwrite existing properties\n\t\tif (prop in toStream) {\n\t\t\tcontinue;\n\t\t}\n\n\t\ttoStream[prop] = typeof fromStream[prop] === 'function' ? fromStream[prop].bind(fromStream) : fromStream[prop];\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xvbmUtcmVzcG9uc2Uvbm9kZV9tb2R1bGVzL21pbWljLXJlc3BvbnNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwdG9nb3RjaGktcmFuZG9tLW1pbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jbG9uZS1yZXNwb25zZS9ub2RlX21vZHVsZXMvbWltaWMtcmVzcG9uc2UvaW5kZXguanM/NGViNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIFdlIGRlZmluZSB0aGVzZSBtYW51YWxseSB0byBlbnN1cmUgdGhleSdyZSBhbHdheXMgY29waWVkXG4vLyBldmVuIGlmIHRoZXkgd291bGQgbW92ZSB1cCB0aGUgcHJvdG90eXBlIGNoYWluXG4vLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX2NsYXNzX2h0dHBfaW5jb21pbmdtZXNzYWdlXG5jb25zdCBrbm93blByb3BzID0gW1xuXHQnZGVzdHJveScsXG5cdCdzZXRUaW1lb3V0Jyxcblx0J3NvY2tldCcsXG5cdCdoZWFkZXJzJyxcblx0J3RyYWlsZXJzJyxcblx0J3Jhd0hlYWRlcnMnLFxuXHQnc3RhdHVzQ29kZScsXG5cdCdodHRwVmVyc2lvbicsXG5cdCdodHRwVmVyc2lvbk1pbm9yJyxcblx0J2h0dHBWZXJzaW9uTWFqb3InLFxuXHQncmF3VHJhaWxlcnMnLFxuXHQnc3RhdHVzTWVzc2FnZSdcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZyb21TdHJlYW0sIHRvU3RyZWFtKSA9PiB7XG5cdGNvbnN0IGZyb21Qcm9wcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoZnJvbVN0cmVhbSkuY29uY2F0KGtub3duUHJvcHMpKTtcblxuXHRmb3IgKGNvbnN0IHByb3Agb2YgZnJvbVByb3BzKSB7XG5cdFx0Ly8gRG9uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIHByb3BlcnRpZXNcblx0XHRpZiAocHJvcCBpbiB0b1N0cmVhbSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dG9TdHJlYW1bcHJvcF0gPSB0eXBlb2YgZnJvbVN0cmVhbVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJyA/IGZyb21TdHJlYW1bcHJvcF0uYmluZChmcm9tU3RyZWFtKSA6IGZyb21TdHJlYW1bcHJvcF07XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/clone-response/node_modules/mimic-response/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/clone-response/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/clone-response/src/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst PassThrough = (__webpack_require__(/*! stream */ \"stream\").PassThrough);\nconst mimicResponse = __webpack_require__(/*! mimic-response */ \"(ssr)/./node_modules/clone-response/node_modules/mimic-response/index.js\");\n\nconst cloneResponse = response => {\n\tif (!(response && response.pipe)) {\n\t\tthrow new TypeError('Parameter `response` must be a response stream.');\n\t}\n\n\tconst clone = new PassThrough();\n\tmimicResponse(response, clone);\n\n\treturn response.pipe(clone);\n};\n\nmodule.exports = cloneResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xvbmUtcmVzcG9uc2Uvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG9CQUFvQix5REFBNkI7QUFDakQsc0JBQXNCLG1CQUFPLENBQUMsZ0dBQWdCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHRvZ290Y2hpLXJhbmRvbS1taW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvY2xvbmUtcmVzcG9uc2Uvc3JjL2luZGV4LmpzPzQzMDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXNzVGhyb3VnaCA9IHJlcXVpcmUoJ3N0cmVhbScpLlBhc3NUaHJvdWdoO1xuY29uc3QgbWltaWNSZXNwb25zZSA9IHJlcXVpcmUoJ21pbWljLXJlc3BvbnNlJyk7XG5cbmNvbnN0IGNsb25lUmVzcG9uc2UgPSByZXNwb25zZSA9PiB7XG5cdGlmICghKHJlc3BvbnNlICYmIHJlc3BvbnNlLnBpcGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUGFyYW1ldGVyIGByZXNwb25zZWAgbXVzdCBiZSBhIHJlc3BvbnNlIHN0cmVhbS4nKTtcblx0fVxuXG5cdGNvbnN0IGNsb25lID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdG1pbWljUmVzcG9uc2UocmVzcG9uc2UsIGNsb25lKTtcblxuXHRyZXR1cm4gcmVzcG9uc2UucGlwZShjbG9uZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVzcG9uc2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/clone-response/src/index.js\n");

/***/ })

};
;