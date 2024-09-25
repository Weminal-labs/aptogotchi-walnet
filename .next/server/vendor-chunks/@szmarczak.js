"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@szmarczak";
exports.ids = ["vendor-chunks/@szmarczak"];
exports.modules = {

/***/ "(ssr)/./node_modules/@szmarczak/http-timer/dist/source/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@szmarczak/http-timer/dist/source/index.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst defer_to_connect_1 = __webpack_require__(/*! defer-to-connect */ \"(ssr)/./node_modules/defer-to-connect/dist/source/index.js\");\nconst util_1 = __webpack_require__(/*! util */ \"util\");\nconst nodejsMajorVersion = Number(process.versions.node.split('.')[0]);\nconst timer = (request) => {\n    if (request.timings) {\n        return request.timings;\n    }\n    const timings = {\n        start: Date.now(),\n        socket: undefined,\n        lookup: undefined,\n        connect: undefined,\n        secureConnect: undefined,\n        upload: undefined,\n        response: undefined,\n        end: undefined,\n        error: undefined,\n        abort: undefined,\n        phases: {\n            wait: undefined,\n            dns: undefined,\n            tcp: undefined,\n            tls: undefined,\n            request: undefined,\n            firstByte: undefined,\n            download: undefined,\n            total: undefined\n        }\n    };\n    request.timings = timings;\n    const handleError = (origin) => {\n        const emit = origin.emit.bind(origin);\n        origin.emit = (event, ...args) => {\n            // Catches the `error` event\n            if (event === 'error') {\n                timings.error = Date.now();\n                timings.phases.total = timings.error - timings.start;\n                origin.emit = emit;\n            }\n            // Saves the original behavior\n            return emit(event, ...args);\n        };\n    };\n    handleError(request);\n    const onAbort = () => {\n        timings.abort = Date.now();\n        // Let the `end` response event be responsible for setting the total phase,\n        // unless the Node.js major version is >= 13.\n        if (!timings.response || nodejsMajorVersion >= 13) {\n            timings.phases.total = Date.now() - timings.start;\n        }\n    };\n    request.prependOnceListener('abort', onAbort);\n    const onSocket = (socket) => {\n        timings.socket = Date.now();\n        timings.phases.wait = timings.socket - timings.start;\n        if (util_1.types.isProxy(socket)) {\n            return;\n        }\n        const lookupListener = () => {\n            timings.lookup = Date.now();\n            timings.phases.dns = timings.lookup - timings.socket;\n        };\n        socket.prependOnceListener('lookup', lookupListener);\n        defer_to_connect_1.default(socket, {\n            connect: () => {\n                timings.connect = Date.now();\n                if (timings.lookup === undefined) {\n                    socket.removeListener('lookup', lookupListener);\n                    timings.lookup = timings.connect;\n                    timings.phases.dns = timings.lookup - timings.socket;\n                }\n                timings.phases.tcp = timings.connect - timings.lookup;\n                // This callback is called before flushing any data,\n                // so we don't need to set `timings.phases.request` here.\n            },\n            secureConnect: () => {\n                timings.secureConnect = Date.now();\n                timings.phases.tls = timings.secureConnect - timings.connect;\n            }\n        });\n    };\n    if (request.socket) {\n        onSocket(request.socket);\n    }\n    else {\n        request.prependOnceListener('socket', onSocket);\n    }\n    const onUpload = () => {\n        var _a;\n        timings.upload = Date.now();\n        timings.phases.request = timings.upload - ((_a = timings.secureConnect) !== null && _a !== void 0 ? _a : timings.connect);\n    };\n    const writableFinished = () => {\n        if (typeof request.writableFinished === 'boolean') {\n            return request.writableFinished;\n        }\n        // Node.js doesn't have `request.writableFinished` property\n        return request.finished && request.outputSize === 0 && (!request.socket || request.socket.writableLength === 0);\n    };\n    if (writableFinished()) {\n        onUpload();\n    }\n    else {\n        request.prependOnceListener('finish', onUpload);\n    }\n    request.prependOnceListener('response', (response) => {\n        timings.response = Date.now();\n        timings.phases.firstByte = timings.response - timings.upload;\n        response.timings = timings;\n        handleError(response);\n        response.prependOnceListener('end', () => {\n            timings.end = Date.now();\n            timings.phases.download = timings.end - timings.response;\n            timings.phases.total = timings.end - timings.start;\n        });\n        response.prependOnceListener('aborted', onAbort);\n    });\n    return timings;\n};\nexports[\"default\"] = timer;\n// For CommonJS default export support\nmodule.exports = timer;\nmodule.exports[\"default\"] = timer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN6bWFyY3phay9odHRwLXRpbWVyL2Rpc3Qvc291cmNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixtQkFBTyxDQUFDLG9GQUFrQjtBQUNyRCxlQUFlLG1CQUFPLENBQUMsa0JBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBLHlCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwdG9nb3RjaGktcmFuZG9tLW1pbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9Ac3ptYXJjemFrL2h0dHAtdGltZXIvZGlzdC9zb3VyY2UvaW5kZXguanM/NGY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRlZmVyX3RvX2Nvbm5lY3RfMSA9IHJlcXVpcmUoXCJkZWZlci10by1jb25uZWN0XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcInV0aWxcIik7XG5jb25zdCBub2RlanNNYWpvclZlcnNpb24gPSBOdW1iZXIocHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJylbMF0pO1xuY29uc3QgdGltZXIgPSAocmVxdWVzdCkgPT4ge1xuICAgIGlmIChyZXF1ZXN0LnRpbWluZ3MpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QudGltaW5ncztcbiAgICB9XG4gICAgY29uc3QgdGltaW5ncyA9IHtcbiAgICAgICAgc3RhcnQ6IERhdGUubm93KCksXG4gICAgICAgIHNvY2tldDogdW5kZWZpbmVkLFxuICAgICAgICBsb29rdXA6IHVuZGVmaW5lZCxcbiAgICAgICAgY29ubmVjdDogdW5kZWZpbmVkLFxuICAgICAgICBzZWN1cmVDb25uZWN0OiB1bmRlZmluZWQsXG4gICAgICAgIHVwbG9hZDogdW5kZWZpbmVkLFxuICAgICAgICByZXNwb25zZTogdW5kZWZpbmVkLFxuICAgICAgICBlbmQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgYWJvcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgcGhhc2VzOiB7XG4gICAgICAgICAgICB3YWl0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkbnM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRjcDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGxzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZXF1ZXN0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBmaXJzdEJ5dGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRvd25sb2FkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0b3RhbDogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3QudGltaW5ncyA9IHRpbWluZ3M7XG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAob3JpZ2luKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtaXQgPSBvcmlnaW4uZW1pdC5iaW5kKG9yaWdpbik7XG4gICAgICAgIG9yaWdpbi5lbWl0ID0gKGV2ZW50LCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyBDYXRjaGVzIHRoZSBgZXJyb3JgIGV2ZW50XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICB0aW1pbmdzLmVycm9yID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB0aW1pbmdzLnBoYXNlcy50b3RhbCA9IHRpbWluZ3MuZXJyb3IgLSB0aW1pbmdzLnN0YXJ0O1xuICAgICAgICAgICAgICAgIG9yaWdpbi5lbWl0ID0gZW1pdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmVzIHRoZSBvcmlnaW5hbCBiZWhhdmlvclxuICAgICAgICAgICAgcmV0dXJuIGVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgaGFuZGxlRXJyb3IocmVxdWVzdCk7XG4gICAgY29uc3Qgb25BYm9ydCA9ICgpID0+IHtcbiAgICAgICAgdGltaW5ncy5hYm9ydCA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIExldCB0aGUgYGVuZGAgcmVzcG9uc2UgZXZlbnQgYmUgcmVzcG9uc2libGUgZm9yIHNldHRpbmcgdGhlIHRvdGFsIHBoYXNlLFxuICAgICAgICAvLyB1bmxlc3MgdGhlIE5vZGUuanMgbWFqb3IgdmVyc2lvbiBpcyA+PSAxMy5cbiAgICAgICAgaWYgKCF0aW1pbmdzLnJlc3BvbnNlIHx8IG5vZGVqc01ham9yVmVyc2lvbiA+PSAxMykge1xuICAgICAgICAgICAgdGltaW5ncy5waGFzZXMudG90YWwgPSBEYXRlLm5vdygpIC0gdGltaW5ncy5zdGFydDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5wcmVwZW5kT25jZUxpc3RlbmVyKCdhYm9ydCcsIG9uQWJvcnQpO1xuICAgIGNvbnN0IG9uU29ja2V0ID0gKHNvY2tldCkgPT4ge1xuICAgICAgICB0aW1pbmdzLnNvY2tldCA9IERhdGUubm93KCk7XG4gICAgICAgIHRpbWluZ3MucGhhc2VzLndhaXQgPSB0aW1pbmdzLnNvY2tldCAtIHRpbWluZ3Muc3RhcnQ7XG4gICAgICAgIGlmICh1dGlsXzEudHlwZXMuaXNQcm94eShzb2NrZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9va3VwTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1pbmdzLmxvb2t1cCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aW1pbmdzLnBoYXNlcy5kbnMgPSB0aW1pbmdzLmxvb2t1cCAtIHRpbWluZ3Muc29ja2V0O1xuICAgICAgICB9O1xuICAgICAgICBzb2NrZXQucHJlcGVuZE9uY2VMaXN0ZW5lcignbG9va3VwJywgbG9va3VwTGlzdGVuZXIpO1xuICAgICAgICBkZWZlcl90b19jb25uZWN0XzEuZGVmYXVsdChzb2NrZXQsIHtcbiAgICAgICAgICAgIGNvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aW1pbmdzLmNvbm5lY3QgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1pbmdzLmxvb2t1cCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignbG9va3VwJywgbG9va3VwTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aW1pbmdzLmxvb2t1cCA9IHRpbWluZ3MuY29ubmVjdDtcbiAgICAgICAgICAgICAgICAgICAgdGltaW5ncy5waGFzZXMuZG5zID0gdGltaW5ncy5sb29rdXAgLSB0aW1pbmdzLnNvY2tldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGltaW5ncy5waGFzZXMudGNwID0gdGltaW5ncy5jb25uZWN0IC0gdGltaW5ncy5sb29rdXA7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgYmVmb3JlIGZsdXNoaW5nIGFueSBkYXRhLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gc2V0IGB0aW1pbmdzLnBoYXNlcy5yZXF1ZXN0YCBoZXJlLlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY3VyZUNvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aW1pbmdzLnNlY3VyZUNvbm5lY3QgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRpbWluZ3MucGhhc2VzLnRscyA9IHRpbWluZ3Muc2VjdXJlQ29ubmVjdCAtIHRpbWluZ3MuY29ubmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAocmVxdWVzdC5zb2NrZXQpIHtcbiAgICAgICAgb25Tb2NrZXQocmVxdWVzdC5zb2NrZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5wcmVwZW5kT25jZUxpc3RlbmVyKCdzb2NrZXQnLCBvblNvY2tldCk7XG4gICAgfVxuICAgIGNvbnN0IG9uVXBsb2FkID0gKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRpbWluZ3MudXBsb2FkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGltaW5ncy5waGFzZXMucmVxdWVzdCA9IHRpbWluZ3MudXBsb2FkIC0gKChfYSA9IHRpbWluZ3Muc2VjdXJlQ29ubmVjdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGltaW5ncy5jb25uZWN0KTtcbiAgICB9O1xuICAgIGNvbnN0IHdyaXRhYmxlRmluaXNoZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdC53cml0YWJsZUZpbmlzaGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LndyaXRhYmxlRmluaXNoZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm9kZS5qcyBkb2Vzbid0IGhhdmUgYHJlcXVlc3Qud3JpdGFibGVGaW5pc2hlZGAgcHJvcGVydHlcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuZmluaXNoZWQgJiYgcmVxdWVzdC5vdXRwdXRTaXplID09PSAwICYmICghcmVxdWVzdC5zb2NrZXQgfHwgcmVxdWVzdC5zb2NrZXQud3JpdGFibGVMZW5ndGggPT09IDApO1xuICAgIH07XG4gICAgaWYgKHdyaXRhYmxlRmluaXNoZWQoKSkge1xuICAgICAgICBvblVwbG9hZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5wcmVwZW5kT25jZUxpc3RlbmVyKCdmaW5pc2gnLCBvblVwbG9hZCk7XG4gICAgfVxuICAgIHJlcXVlc3QucHJlcGVuZE9uY2VMaXN0ZW5lcigncmVzcG9uc2UnLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGltaW5ncy5yZXNwb25zZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRpbWluZ3MucGhhc2VzLmZpcnN0Qnl0ZSA9IHRpbWluZ3MucmVzcG9uc2UgLSB0aW1pbmdzLnVwbG9hZDtcbiAgICAgICAgcmVzcG9uc2UudGltaW5ncyA9IHRpbWluZ3M7XG4gICAgICAgIGhhbmRsZUVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgcmVzcG9uc2UucHJlcGVuZE9uY2VMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGltaW5ncy5lbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGltaW5ncy5waGFzZXMuZG93bmxvYWQgPSB0aW1pbmdzLmVuZCAtIHRpbWluZ3MucmVzcG9uc2U7XG4gICAgICAgICAgICB0aW1pbmdzLnBoYXNlcy50b3RhbCA9IHRpbWluZ3MuZW5kIC0gdGltaW5ncy5zdGFydDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3BvbnNlLnByZXBlbmRPbmNlTGlzdGVuZXIoJ2Fib3J0ZWQnLCBvbkFib3J0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGltaW5ncztcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lcjtcbi8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5tb2R1bGUuZXhwb3J0cyA9IHRpbWVyO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHRpbWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@szmarczak/http-timer/dist/source/index.js\n");

/***/ })

};
;