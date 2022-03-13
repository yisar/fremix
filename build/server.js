var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/react-shim.js
var React = __toESM(require("react"));

// server.js
var import_express = __toESM(require("express"));

// src/server/request.js
function createRequestHandler() {
}

// server.js
var app = (0, import_express.default)();
app.use(import_express.default.static("public"));
app.use(import_express.default.json());
app.use(import_express.default.urlencoded({ extended: true }));
app.use("/", createRequestHandler());
app.listen(3e3, () => {
  console.log("Server started on http://localhost:3000");
});
//# sourceMappingURL=/build/server.js.map
