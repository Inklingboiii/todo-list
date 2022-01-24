var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_96af34ba = __toModule(require("../../chunks/index-96af34ba.js"));
var Link_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-o65hjm{text-decoration:none;background:linear-gradient(currentColor, currentColor);background-repeat:no-repeat;background-position:bottom left;background-size:0% 0%;transition:background-size 0.35s ease-in-out}a.svelte-o65hjm:is(:hover, :focus){background-size:100% 0.15em}",
  map: null
};
const Link = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `<a${(0, import_index_96af34ba.a)("href", href, 0)} class="${"svelte-o65hjm"}">${slots.default ? slots.default({}) : ``}
</a>`;
});
var Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1ddfget{display:flex;justify-content:space-around;padding:1em;background:black}nav a{color:white}",
  map: null
};
const Nav = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-1ddfget"}">${(0, import_index_96af34ba.v)(Link, "Link").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })}
    ${(0, import_index_96af34ba.v)(Link, "Link").$$render($$result, { href: "/add-todos" }, {}, {
    default: () => {
      return `Add Todos`;
    }
  })}
    ${(0, import_index_96af34ba.v)(Link, "Link").$$render($$result, { href: "/calendar" }, {}, {
    default: () => {
      return `Calendar`;
    }
  })}
</nav>`;
});
var global = "";
const _layout = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_96af34ba.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
