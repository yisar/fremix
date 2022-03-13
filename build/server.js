var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var React;
var init_react_shim = __esm({
  "src/react-shim.js"() {
    React = __toESM(require("react"));
  }
});

// src/index.js
var import_react2, RouteDataContext, useLoaderData;
var init_src = __esm({
  "src/index.js"() {
    init_react_shim();
    import_react2 = __toESM(require("react"));
    RouteDataContext = (0, import_react2.createContext)(null);
    useLoaderData = () => {
      const context = useContext(RouteDataContext);
      return context;
    };
  }
});

// demo/pages/index.js
var pages_exports = {};
__export(pages_exports, {
  default: () => Home,
  loader: () => loader
});
function Home() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.id
  }, /* @__PURE__ */ React.createElement("a", {
    href: `/${post.id}`
  }, post.title))));
}
var loader;
var init_pages = __esm({
  "demo/pages/index.js"() {
    init_react_shim();
    init_src();
    loader = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const posts = await res.json();
      return {
        props: {
          posts
        }
      };
    };
  }
});

// server.js
init_react_shim();
var import_express = __toESM(require("express"));

// src/render-app.js
init_react_shim();

// demo/routes.js
init_react_shim();

// src/loadable.js
init_react_shim();
var import_react = require("react");
function useForceUpdate() {
  const [, dispatch] = (0, import_react.useState)({});
  const forceUpdate = (0, import_react.useCallback)(() => {
    dispatch({});
  }, []);
  return forceUpdate;
}
function loadable(importFn, { fallback = () => null } = {}) {
  return function LoadableComponent(props) {
    const component = (0, import_react.useRef)(fallback);
    const forceUpdate = useForceUpdate();
    (0, import_react.useEffect)(() => {
      importFn(props).then((mod) => {
        component.current = mod.default;
        forceUpdate();
      });
    }, []);
    return /* @__PURE__ */ React.createElement(component.current, {
      ...props
    });
  };
}

// demo/routes.js
var routes = makeRoutes([
  {
    path: "/",
    page: () => Promise.resolve().then(() => (init_pages(), pages_exports))
  }
]);
function makeRoutes(routes2) {
  return routes2.map((route) => ({
    ...route,
    component: route.component || loadable(route.page)
  }));
}

// src/match-route.js
init_react_shim();
var import_regexparam = __toESM(require("regexparam"));
function matchRoute(route, toMatch) {
  const routeRegex = (0, import_regexparam.default)(route);
  return routeRegex.pattern.test(toMatch);
}

// src/render-app.js
async function renderApp(url) {
  const urlWithoutQuery = new URL(`https://example.com${url}`).pathname;
  const route = routes.find((x) => matchRoute(x.path, urlWithoutQuery));
  if (!route) {
    return { notFound: true };
  }
  const page = await route.page();
  console.log(page);
  return { notFound: true };
}

// server.js
var app = (0, import_express.default)();
app.use(import_express.default.static("public"));
app.use(import_express.default.json());
app.use(import_express.default.urlencoded({ extended: true }));
app.use("/", async function(req, res) {
  const RemixApp = await renderApp(req.originalUrl);
  if (RemixApp.notFound === true) {
    return res.status(404).send("Page not found");
  }
  const html = handleRequest(RemixApp);
  res.setHeader("content-type", "text/html");
  res.send(html);
});
app.listen(3e3, () => {
  console.log("Server started on http://localhost:3000");
});
//# sourceMappingURL=/build/server.js.map
