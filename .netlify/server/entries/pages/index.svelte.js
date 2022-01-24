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
  default: () => Routes,
  load: () => load
});
var import_index_96af34ba = __toModule(require("../../chunks/index-96af34ba.js"));
var MainHeading_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "h1.svelte-rfwf1a{text-align:center;color:var(--color-primary);font-size:var(--font-h1)}",
  map: null
};
const MainHeading = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<h1 class="${"svelte-rfwf1a"}">${slots.default ? slots.default({}) : ``}
</h1>`;
});
var Quote_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".svelte-dx75rb{text-align:center}blockquote.svelte-dx75rb{font-size:var(--font-500)}blockquote.svelte-dx75rb::before,blockquote.svelte-dx75rb::after{font-size:1em;color:var(--color-primary);position:absolute;transform:scale(3);opacity:0.8}blockquote.svelte-dx75rb::before{content:open-quote}blockquote.svelte-dx75rb::after{content:close-quote}figcaption.svelte-dx75rb{font-size:var(--font-450);opacity:0.75}figcaption.svelte-dx75rb::before{content:'\\2014 \\00A0'}",
  map: null
};
const Quote = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  let { quote } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  $$result.css.add(css$3);
  return `<figure class="${"svelte-dx75rb"}"><blockquote class="${"svelte-dx75rb"}">${(0, import_index_96af34ba.e)(quote.q)}</blockquote>
    <figcaption class="${"svelte-dx75rb"}">${(0, import_index_96af34ba.e)(quote.a)}</figcaption>
</figure>`;
});
const subscriber_queue = [];
function writable(value, start = import_index_96af34ba.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_96af34ba.b)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_96af34ba.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_96af34ba.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const todos = [{ text: "example test", today: true, deadline: new Date(new Date().setHours(new Date().getHours() + 2)) }];
const inactiveTodos = [{ text: "missed todo", today: true, deadline: new Date(), succeeded: false }];
const todosStore = new writable(todos);
todosStore.subscribe((todos2) => {
});
const inactiveTodosStore = new writable(inactiveTodos);
inactiveTodosStore.subscribe((inactiveTodos2) => {
});
var DailyTodo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "label.svelte-drl2tj{display:flex}",
  map: null
};
function humanReadableDuration(msDuration) {
  const h = Math.floor(msDuration / 1e3 / 60 / 60);
  const m = Math.floor((msDuration / 1e3 / 60 / 60 - h) * 60);
  const s = Math.floor(((msDuration / 1e3 / 60 / 60 - h) * 60 - m) * 60);
  const seconds = s < 10 ? `0${s}` : `${s}`;
  const minutes = m < 10 ? `0${m}` : `${m}`;
  const hours = h < 10 ? `0${h}` : `${h}`;
  return `${hours}h ${minutes}m ${seconds}s`;
}
const DailyTodo = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  let remainingTimeInMs;
  let remainingTime;
  let { todo } = $$props;
  let currentTime = new Date();
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  $$result.css.add(css$2);
  remainingTimeInMs = Math.abs(todo.deadline - currentTime);
  remainingTime = humanReadableDuration(remainingTimeInMs);
  return `<li><label class="${"svelte-drl2tj"}"><p>${(0, import_index_96af34ba.e)(todo.text)}</p>
        <input type="${"checkbox"}"></label>
    <p>deadline: ${(0, import_index_96af34ba.e)(remainingTime)}</p>
</li>`;
});
var CallToAction_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-8w3myf{text-decoration:none;text-align:center;background-color:var(--color-primary);color:black;padding:1em;border-radius:20% 10% / 10% 20%;outline:3px solid transparent;transition:outline-offset 0.3s ease-in, outline-color 0.3s ease-out}a.svelte-8w3myf:is(:hover, :focus){outline-color:white;outline-offset:-0.5em}",
  map: null
};
const CallToAction = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `<a${(0, import_index_96af34ba.a)("href", href, 0)} class="${"svelte-8w3myf"}">${slots.default ? slots.default({}) : ``}
</a>`;
});
var TodosCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1no0i38{display:flex;flex-direction:column;gap:1em;align-items:center;background-color:black;color:white}",
  map: null
};
const TodosCard = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  let dailyTodos;
  let $todosStore, $$unsubscribe_todosStore;
  $$unsubscribe_todosStore = (0, import_index_96af34ba.d)(todosStore, (value) => $todosStore = value);
  $$result.css.add(css);
  dailyTodos = $todosStore.filter((todo) => todo.today);
  $$unsubscribe_todosStore();
  return `<article class="${"svelte-1no0i38"}"><h2>Daily todos</h2>
	${dailyTodos.length ? `<ul>${(0, import_index_96af34ba.f)(dailyTodos, (dailyTodo) => {
    return `${(0, import_index_96af34ba.v)(DailyTodo, "DailyTodo").$$render($$result, { todo: dailyTodo }, {}, {})}`;
  })}</ul>` : `<p>No todos added</p>`}
	${(0, import_index_96af34ba.v)(CallToAction, "CallToAction").$$render($$result, { href: "/add-todos" }, {}, {
    default: () => {
      return `Add ${(0, import_index_96af34ba.e)(dailyTodos.length ? "more" : "")} todos`;
    }
  })}
</article>`;
});
async function load({ fetch }) {
  const result = await fetch("./quote.json");
  const quote = await result.json();
  return { props: { quote } };
}
const Routes = (0, import_index_96af34ba.c)(($$result, $$props, $$bindings, slots) => {
  let { quote } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  return `<header>${(0, import_index_96af34ba.v)(MainHeading, "MainHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Generic to-do list`;
    }
  })}
    ${(0, import_index_96af34ba.v)(Quote, "Quote").$$render($$result, { quote }, {}, {})}</header>
<main>${(0, import_index_96af34ba.v)(TodosCard, "TodosCard").$$render($$result, {}, {}, {})}</main>`;
});
