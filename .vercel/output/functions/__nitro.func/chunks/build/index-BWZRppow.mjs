import { jsx, jsxs } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { g, u, p } from './pokemon-colors-BEseCud9.mjs';
import { P } from '../nitro/nitro.mjs';
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

function m(l) {
  switch (l) {
    case "hp":
      return "HP";
    case "attack":
      return "Attack";
    case "defense":
      return "Defense";
    case "special-attack":
      return "Sp. Atk";
    case "special-defense":
      return "Sp. Def";
    case "speed":
      return "Speed";
    default:
      return l;
  }
}
const C = function() {
  var _a, _b, _c;
  const a = P.useLoaderData();
  if (!a) return jsx("div", { className: "flex justify-center items-center min-h-screen", children: jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) });
  const r = ((_a = a.types[0]) == null ? void 0 : _a.type.name) || "normal";
  return jsxs("div", { className: "min-h-screen bg-gray-100", children: [jsx("div", { className: "text-white py-12 px-4", style: { background: `linear-gradient(to right, ${g(r)}, ${u(g(r), 30)})` }, children: jsxs("div", { className: "container mx-auto", children: [jsx("div", { className: "flex items-center mb-8", children: jsxs(Link, { to: "/", className: "text-white hover:text-opacity-80 transition-opacity duration-300 flex items-center", children: [jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "w-6 h-6 mr-2", "aria-label": "Back to Pok\xE9dex", children: [jsx("title", { children: "Back to Pok\xE9dex" }), jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" })] }), "Back to Pok\xE9dex"] }) }), jsxs("div", { className: "flex flex-col md:flex-row items-center relative", children: [jsx("div", { className: "w-40 h-40 md:w-48 md:h-48 flex-shrink-0 relative z-10 transform transition-transform duration-300", children: jsx("img", { src: ((_c = (_b = a.sprites.other) == null ? void 0 : _b["official-artwork"]) == null ? void 0 : _c.front_default) || "", alt: a.name, className: "w-full h-full object-contain" }) }), jsxs("div", { className: "md:ml-8 text-center md:text-left", children: [jsxs("div", { className: "text-white font-bold text-opacity-70 mb-2", children: ["#", a.id.toString().padStart(3, "0")] }), jsx("h1", { className: "text-4xl md:text-5xl font-extrabold capitalize mb-4 tracking-tight", children: a.name }), jsx("div", { className: "flex flex-wrap justify-center md:justify-start gap-2 mb-4", children: a.types.map((i) => jsx("span", { className: "px-4 py-1 rounded-full text-white text-sm font-semibold bg-white bg-opacity-30", children: i.type.name }, i.type.name)) })] }), jsx("div", { className: "absolute right-0 top-0 opacity-30 hidden md:block", children: jsxs("svg", { width: "120", height: "120", viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [jsx("path", { d: "M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z", fill: "white", fillOpacity: "0.3" }), jsx("path", { d: "M30 33C31.6569 33 33 31.6569 33 30C33 28.3431 31.6569 27 30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33Z", fill: "white", fillOpacity: "0.5" }), jsx("path", { d: "M30 0C46.5686 0 60 13.4315 60 30H44C44 22.268 37.732 16 30 16C22.268 16 16 22.268 16 30H0C0 13.4315 13.4315 0 30 0Z", fill: "white", fillOpacity: "0.3" })] }) })] })] }) }), jsxs("div", { className: "container mx-auto p-6", children: [jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl", children: [jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Physical Attributes" }), jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [jsx("div", { className: "text-sm text-gray-500 mb-1", children: "Height" }), jsxs("div", { className: "font-bold text-xl", children: [(a.height || 0) / 10, "m"] })] }), jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [jsx("div", { className: "text-sm text-gray-500 mb-1", children: "Weight" }), jsxs("div", { className: "font-bold text-xl", children: [(a.weight || 0) / 10, "kg"] })] }), jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [jsx("div", { className: "text-sm text-gray-500 mb-1", children: "Base Experience" }), jsx("div", { className: "font-bold text-xl", children: a.base_experience })] }), jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [jsx("div", { className: "text-sm text-gray-500 mb-1", children: "Species" }), jsx("div", { className: "font-bold text-xl capitalize", children: a.species.name })] })] })] }), jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl", children: [jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Base Stats" }), jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: a.stats.map((i) => jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [jsxs("div", { className: "flex justify-between mb-2", children: [jsx("div", { className: "text-gray-600 capitalize font-medium", children: m(i.stat.name) }), jsx("div", { className: "font-bold", children: i.base_stat })] }), jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: jsx("div", { className: "h-3 rounded-full", style: { width: `${i.base_stat / 255 * 100}%`, backgroundColor: p(i.stat.name, r) } }) })] }, i.stat.name)) })] }), jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl", children: [jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Abilities" }), jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: a.abilities.map((i) => jsxs("div", { className: "bg-gray-50 p-4 rounded-lg flex justify-between items-center group hover:bg-gray-100 transition-colors duration-300", children: [jsx("span", { className: "capitalize font-medium", children: i.ability.name.replace(/-/g, " ") }), i.is_hidden && jsx("span", { className: "text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full", children: "Hidden" })] }, i.ability.name)) })] }), jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl", children: [jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Key Moves" }), jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: a.moves.slice(0, 12).map((i) => jsx("div", { className: "bg-gray-50 p-3 rounded-lg capitalize text-sm font-medium hover:bg-gray-100 transition-colors duration-300", children: i.move.name.replace(/-/g, " ") }, i.move.name)) }), jsxs("div", { className: "mt-4 text-sm text-gray-500", children: ["Showing 12 of ", a.moves.length, " moves"] })] })] })] });
};

export { C as component };
//# sourceMappingURL=index-BWZRppow.mjs.map
