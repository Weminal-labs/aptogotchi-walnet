"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/defer-to-connect";
exports.ids = ["vendor-chunks/defer-to-connect"];
exports.modules = {

/***/ "(ssr)/./node_modules/defer-to-connect/dist/source/index.js":
/*!************************************************************!*\
  !*** ./node_modules/defer-to-connect/dist/source/index.js ***!
  \************************************************************/
/***/ ((module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction isTLSSocket(socket) {\n    return socket.encrypted;\n}\nconst deferToConnect = (socket, fn) => {\n    let listeners;\n    if (typeof fn === 'function') {\n        const connect = fn;\n        listeners = { connect };\n    }\n    else {\n        listeners = fn;\n    }\n    const hasConnectListener = typeof listeners.connect === 'function';\n    const hasSecureConnectListener = typeof listeners.secureConnect === 'function';\n    const hasCloseListener = typeof listeners.close === 'function';\n    const onConnect = () => {\n        if (hasConnectListener) {\n            listeners.connect();\n        }\n        if (isTLSSocket(socket) && hasSecureConnectListener) {\n            if (socket.authorized) {\n                listeners.secureConnect();\n            }\n            else if (!socket.authorizationError) {\n                socket.once('secureConnect', listeners.secureConnect);\n            }\n        }\n        if (hasCloseListener) {\n            socket.once('close', listeners.close);\n        }\n    };\n    if (socket.writable && !socket.connecting) {\n        onConnect();\n    }\n    else if (socket.connecting) {\n        socket.once('connect', onConnect);\n    }\n    else if (socket.destroyed && hasCloseListener) {\n        listeners.close(socket._hadError);\n    }\n};\nexports[\"default\"] = deferToConnect;\n// For CommonJS default export support\nmodule.exports = deferToConnect;\nmodule.exports[\"default\"] = deferToConnect;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVmZXItdG8tY29ubmVjdC9kaXN0L3NvdXJjZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTtBQUNmO0FBQ0E7QUFDQSx5QkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHRvZ290Y2hpLXJhbmRvbS1taW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvZGVmZXItdG8tY29ubmVjdC9kaXN0L3NvdXJjZS9pbmRleC5qcz8zNmMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNUTFNTb2NrZXQoc29ja2V0KSB7XG4gICAgcmV0dXJuIHNvY2tldC5lbmNyeXB0ZWQ7XG59XG5jb25zdCBkZWZlclRvQ29ubmVjdCA9IChzb2NrZXQsIGZuKSA9PiB7XG4gICAgbGV0IGxpc3RlbmVycztcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3QgPSBmbjtcbiAgICAgICAgbGlzdGVuZXJzID0geyBjb25uZWN0IH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsaXN0ZW5lcnMgPSBmbjtcbiAgICB9XG4gICAgY29uc3QgaGFzQ29ubmVjdExpc3RlbmVyID0gdHlwZW9mIGxpc3RlbmVycy5jb25uZWN0ID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IGhhc1NlY3VyZUNvbm5lY3RMaXN0ZW5lciA9IHR5cGVvZiBsaXN0ZW5lcnMuc2VjdXJlQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBoYXNDbG9zZUxpc3RlbmVyID0gdHlwZW9mIGxpc3RlbmVycy5jbG9zZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBvbkNvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoYXNDb25uZWN0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVExTU29ja2V0KHNvY2tldCkgJiYgaGFzU2VjdXJlQ29ubmVjdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBpZiAoc29ja2V0LmF1dGhvcml6ZWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc2VjdXJlQ29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXNvY2tldC5hdXRob3JpemF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQub25jZSgnc2VjdXJlQ29ubmVjdCcsIGxpc3RlbmVycy5zZWN1cmVDb25uZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ2xvc2VMaXN0ZW5lcikge1xuICAgICAgICAgICAgc29ja2V0Lm9uY2UoJ2Nsb3NlJywgbGlzdGVuZXJzLmNsb3NlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHNvY2tldC53cml0YWJsZSAmJiAhc29ja2V0LmNvbm5lY3RpbmcpIHtcbiAgICAgICAgb25Db25uZWN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNvY2tldC5jb25uZWN0aW5nKSB7XG4gICAgICAgIHNvY2tldC5vbmNlKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc29ja2V0LmRlc3Ryb3llZCAmJiBoYXNDbG9zZUxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5jbG9zZShzb2NrZXQuX2hhZEVycm9yKTtcbiAgICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmZXJUb0Nvbm5lY3Q7XG4vLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxubW9kdWxlLmV4cG9ydHMgPSBkZWZlclRvQ29ubmVjdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBkZWZlclRvQ29ubmVjdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/defer-to-connect/dist/source/index.js\n");

/***/ })

};
;