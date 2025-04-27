import { jsx, jsxs } from 'react/jsx-runtime';
import { useRouter, createFileRoute, Link, lazyRouteComponent } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { c as d$1, p as v } from './index-xIYRZ9oo.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@hey-api/client-fetch';
import 'tiny-invariant';

function C(r) {
  return { normal: "#A8A77A", fire: "#EE8130", water: "#6390F0", electric: "#F7D02C", grass: "#7AC74C", ice: "#96D9D6", fighting: "#C22E28", poison: "#A33EA1", ground: "#E2BF65", flying: "#A98FF3", psychic: "#F95587", bug: "#A6B91A", rock: "#B6A136", ghost: "#735797", dragon: "#6F35FC", dark: "#705746", steel: "#B7B7CE", fairy: "#D685AD" }[r] || "#777777";
}
function k(r) {
  const t = ["grass", "fire", "water", "electric", "psychic", "ice", "dragon", "dark", "fairy", "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel"], i = Number.parseInt(r, 10);
  return t[i % t.length];
}
function N() {
  return jsxs("svg", { width: "60", height: "60", viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [jsx("path", { d: "M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z", fill: "white", fillOpacity: "0.3" }), jsx("path", { d: "M30 33C31.6569 33 33 31.6569 33 30C33 28.3431 31.6569 27 30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33Z", fill: "white", fillOpacity: "0.5" }), jsx("path", { d: "M30 0C46.5686 0 60 13.4315 60 30H44C44 22.268 37.732 16 30 16C22.268 16 16 22.268 16 30H0C0 13.4315 13.4315 0 30 0Z", fill: "white", fillOpacity: "0.3" })] });
}
const P = () => Promise.resolve().then(() => S), _ = d$1("src_routes_index_tsx--getPokemonList_createServerFn_handler", "/_server", (r, t) => d.__executeServer(r, t)), d = createServerFn({ method: "GET" }).handler(_, async () => (await v()).data), m = createFileRoute("/")({ component: lazyRouteComponent(P, "component", () => m.ssr), loader: async () => await d() });
function A(r) {
  const t = r.match(/\/pokemon\/(\d+)\/?$/);
  return t ? t[1] : "0";
}
const F = function() {
  var _a;
  useRouter();
  const t = m.useLoaderData(), [i, j] = useState(""), [p, h] = useState({});
  if (useEffect(() => {
    h({ 1: "grass", 4: "fire", 7: "water", 25: "electric", 39: "fairy", 54: "water", 92: "ghost", 150: "psychic" });
  }, []), !t) return jsx("div", { className: "flex justify-center items-center min-h-screen", children: jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) });
  const s = (_a = t.results) == null ? void 0 : _a.filter((o) => o.name.toLowerCase().includes(i.toLowerCase()));
  return jsxs("div", { className: "min-h-screen bg-gray-100", children: [jsx("div", { className: "bg-gradient-to-r from-red-400 to-red-600 text-white py-12 px-4", children: jsxs("div", { className: "container mx-auto", children: [jsx("h1", { className: "text-5xl font-extrabold mb-4 tracking-tight text-center", children: "Pok\xE9dex" }), jsx("p", { className: "text-xl text-center mb-8 max-w-2xl mx-auto", children: "Explore and discover all your favorite Pok\xE9mon in one place" })] }) }), jsxs("div", { className: "container mx-auto p-6", children: [jsx("div", { className: "mb-6 flex justify-between items-center", children: jsxs("div", { className: "text-gray-600", children: ["Showing ", s == null ? void 0 : s.length, " Pok\xE9mon"] }) }), jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8", children: s == null ? void 0 : s.map((o) => {
    const a = A(o.url), l = p[a] || k(a);
    return jsx(Link, { to: "/pokemon/$pokemonId", params: { pokemonId: o.name }, className: "group flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105", children: jsxs("div", { className: "p-6 flex flex-col justify-between h-full relative", style: { backgroundColor: C(l) }, children: [jsx("div", { className: "absolute top-4 right-4 opacity-30", children: jsx(N, {}) }), jsxs("div", { className: "text-white font-bold text-opacity-70 mb-4 z-10", children: ["#", a.padStart(3, "0")] }), jsx("h2", { className: "text-white capitalize text-xl font-extrabold mb-2 z-10", children: o.name }), jsx("div", { className: "mb-3 z-10", children: jsx("span", { className: "text-sm inline-block py-1 px-3 rounded-full capitalize bg-white bg-opacity-30 text-white", children: l }) }), jsx("div", { className: "mt-4 flex justify-end", children: jsx("img", { src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${a}.png`, alt: o.name, className: "w-32 h-32 object-contain z-10 transform group-hover:scale-110 transition-transform duration-300", loading: "lazy" }) })] }) }, o.name);
  }) }), (s == null ? void 0 : s.length) === 0 && jsx("div", { className: "text-center py-12", children: jsx("p", { className: "text-gray-600 text-lg", children: "No Pok\xE9mon found matching your search." }) })] })] });
}, S = Object.freeze(Object.defineProperty({ __proto__: null, component: F }, Symbol.toStringTag, { value: "Module" }));

export { F as component };
//# sourceMappingURL=index-C-3dJyN4.mjs.map
