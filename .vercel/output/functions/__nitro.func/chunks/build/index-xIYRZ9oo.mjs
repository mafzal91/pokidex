import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { createClient, createConfig } from '@hey-api/client-fetch';
import M from 'tiny-invariant';
import { createServerFn } from '@tanstack/start-client-core';

function l(e) {
  return e.replace(/^\/|\/$/g, "");
}
const d = (e, t, r) => {
  M(r, "\u{1F6A8}splitImportFn required for the server functions server runtime, but was not provided.");
  const a = `/${l(t)}/${e}`;
  return Object.assign(r, { url: a, functionId: e });
}, _ = createClient(createConfig({ baseUrl: "https://pokeapi.co" })), v = (e) => {
  var _a;
  return ((_a = void 0 ) != null ? _a : _).get({ security: [{ in: "cookie", name: "sessionid", type: "apiKey" }, { scheme: "basic", type: "http" }], url: "/api/v2/pokemon/", ...e });
}, f = () => import('./index-C-3dJyN4.mjs'), o = d("src_routes_index_tsx--getPokemonList_createServerFn_handler", "/_server", (e, t) => n.__executeServer(e, t)), n = createServerFn({ method: "GET" }).handler(o, async () => (await v()).data), g = createFileRoute("/")({ component: lazyRouteComponent(f, "component", () => g.ssr), loader: async () => await n() }), S = Object.freeze(Object.defineProperty({ __proto__: null, getPokemonList_createServerFn_handler: o }, Symbol.toStringTag, { value: "Module" }));

export { d as c, S as i, v as p };
//# sourceMappingURL=index-xIYRZ9oo.mjs.map
