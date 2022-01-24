var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  get: () => get
});
async function get() {
  const api_url = "https://zenquotes.io/api/random";
  const result = await fetch(api_url);
  const quotes = await result.json();
  if (result.ok) {
    return {
      body: quotes[0]
    };
  }
  return {
    status: result.status,
    error: new Error(`Could not load ${api_url}`)
  };
}
