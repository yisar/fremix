import {
  React,
  init_react_shim,
  useLoaderData
} from "/build/chunk-B3IQNZWS.js";

// demo/pages/index.js
init_react_shim();
var loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
};
function Home() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.id
  }, /* @__PURE__ */ React.createElement("a", {
    href: `/${post.id}`
  }, post.title))));
}
export {
  Home as default,
  loader
};
//# sourceMappingURL=/build/pages-UKPQT5A2.js.map
