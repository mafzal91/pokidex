import { jsx, jsxs } from 'react/jsx-runtime';
import { useRouter, Link } from '@tanstack/react-router';
import { h, g } from './pokemon-colors-BEseCud9.mjs';
import { useState, useEffect } from 'react';
import { k } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/start-client-core';
import '@hey-api/client-fetch';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

function w() {
  return jsxs("svg", { width: "60", height: "60", viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [jsx("path", { d: "M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z", fill: "white", fillOpacity: "0.3" }), jsx("path", { d: "M30 33C31.6569 33 33 31.6569 33 30C33 28.3431 31.6569 27 30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33Z", fill: "white", fillOpacity: "0.5" }), jsx("path", { d: "M30 0C46.5686 0 60 13.4315 60 30H44C44 22.268 37.732 16 30 16C22.268 16 16 22.268 16 30H0C0 13.4315 13.4315 0 30 0Z", fill: "white", fillOpacity: "0.3" })] });
}
function y(l) {
  const o = l.match(/\/pokemon\/(\d+)\/?$/);
  return o ? o[1] : "0";
}
const O = function() {
  var _a;
  useRouter();
  const o = k.useLoaderData(), [c, b] = useState(""), [m, d] = useState({});
  if (useEffect(() => {
    d({ 1: "grass", 4: "fire", 7: "water", 25: "electric", 39: "fairy", 54: "water", 92: "ghost", 150: "psychic" });
  }, []), !o) return jsx("div", { className: "flex justify-center items-center min-h-screen", children: jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) });
  const a = (_a = o.results) == null ? void 0 : _a.filter((t) => t.name.toLowerCase().includes(c.toLowerCase()));
  return jsxs("div", { className: "min-h-screen bg-gray-100", children: [jsx("div", { className: "bg-gradient-to-r from-red-400 to-red-600 text-white py-12 px-4", children: jsxs("div", { className: "container mx-auto", children: [jsx("h1", { className: "text-5xl font-extrabold mb-4 tracking-tight text-center", children: "Pok\xE9dex" }), jsx("p", { className: "text-xl text-center mb-8 max-w-2xl mx-auto", children: "Explore and discover all your favorite Pok\xE9mon in one place" })] }) }), jsxs("div", { className: "container mx-auto p-6", children: [jsx("div", { className: "mb-6 flex justify-between items-center", children: jsxs("div", { className: "text-gray-600", children: ["Showing ", a == null ? void 0 : a.length, " Pok\xE9mon"] }) }), jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8", children: a == null ? void 0 : a.map((t) => {
    const i = y(t.url), n = m[i] || h(i);
    return jsx(Link, { to: "/pokemon/$pokemonId", params: { pokemonId: t.name }, className: "group flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105", children: jsxs("div", { className: "p-6 flex flex-col justify-between h-full relative", style: { backgroundColor: g(n) }, children: [jsx("div", { className: "absolute top-4 right-4 opacity-30", children: jsx(w, {}) }), jsxs("div", { className: "text-white font-bold text-opacity-70 mb-4 z-10", children: ["#", i.padStart(3, "0")] }), jsx("h2", { className: "text-white capitalize text-xl font-extrabold mb-2 z-10", children: t.name }), jsx("div", { className: "mb-3 z-10", children: jsx("span", { className: "text-sm inline-block py-1 px-3 rounded-full capitalize bg-white bg-opacity-30 text-white", children: n }) }), jsx("div", { className: "mt-4 flex justify-end", children: jsx("img", { src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`, alt: t.name, className: "w-32 h-32 object-contain z-10 transform group-hover:scale-110 transition-transform duration-300", loading: "lazy" }) })] }) }, t.name);
  }) }), (a == null ? void 0 : a.length) === 0 && jsx("div", { className: "text-center py-12", children: jsx("p", { className: "text-gray-600 text-lg", children: "No Pok\xE9mon found matching your search." }) })] })] });
};

export { O as component };
//# sourceMappingURL=index-BwbzrdpL.mjs.map
