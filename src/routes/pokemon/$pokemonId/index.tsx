import { Link, createFileRoute } from "@tanstack/react-router";
import {
  getStatColor,
  getTypeColor,
  lightenColor,
} from "@/utils/pokemon-colors";

import type { PokemonRetrieveResponse } from "@/client/index";
import { createServerFn } from "@tanstack/react-start";
import { pokemonRetrieve } from "@/client/index";

export const Route = createFileRoute("/pokemon/$pokemonId/")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const data = await pokemonRetrieve({ path: { id: params.pokemonId } });
    return data.data;
  },
});

function RouteComponent() {
  const pokemon = Route.useLoaderData();

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  // Get the primary type for the background color
  const primaryType = pokemon.types[0]?.type.name || "normal";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Header */}
      <div
        className="text-white py-12 px-4"
        style={{
          background: `linear-gradient(to right, ${getTypeColor(primaryType)}, ${lightenColor(getTypeColor(primaryType), 30)})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Link
              to="/"
              className="text-white hover:text-opacity-80 transition-opacity duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
                aria-label="Back to Pokédex"
              >
                <title>Back to Pokédex</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Pokédex
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center relative">
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 relative z-10 transform transition-transform duration-300">
              <img
                src={
                  pokemon.sprites.other?.["official-artwork"]?.front_default ||
                  ""
                }
                alt={pokemon.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="md:ml-8 text-center md:text-left">
              <div className="text-white font-bold text-opacity-70 mb-2">
                #{pokemon.id.toString().padStart(3, "0")}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold capitalize mb-4 tracking-tight">
                {pokemon.name}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-4 py-1 rounded-full text-white text-sm font-semibold bg-white bg-opacity-30"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Pokeball Background */}
            <div className="absolute right-0 top-0 opacity-30 hidden md:block">
              <svg
                width="120"
                height="120"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30C33 28.3431 31.6569 27 30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33Z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <path
                  d="M30 0C46.5686 0 60 13.4315 60 30H44C44 22.268 37.732 16 30 16C22.268 16 16 22.268 16 30H0C0 13.4315 13.4315 0 30 0Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Physical attributes */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Physical Attributes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Height</div>
              <div className="font-bold text-xl">
                {(pokemon.height || 0) / 10}m
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Weight</div>
              <div className="font-bold text-xl">
                {(pokemon.weight || 0) / 10}kg
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Base Experience</div>
              <div className="font-bold text-xl">{pokemon.base_experience}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Species</div>
              <div className="font-bold text-xl capitalize">
                {pokemon.species.name}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Base Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-600 capitalize font-medium">
                    {formatStatName(stat.stat.name)}
                  </div>
                  <div className="font-bold">{stat.base_stat}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${(stat.base_stat / 255) * 100}%`,
                      backgroundColor: getStatColor(
                        stat.stat.name,
                        primaryType
                      ),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Abilities */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Abilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pokemon.abilities.map((ability) => (
              <div
                key={ability.ability.name}
                className="bg-gray-50 p-4 rounded-lg flex justify-between items-center group hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="capitalize font-medium">
                  {ability.ability.name.replace(/-/g, " ")}
                </span>
                {ability.is_hidden && (
                  <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                    Hidden
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Moves */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Moves</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {pokemon.moves.slice(0, 12).map((move) => (
              <div
                key={move.move.name}
                className="bg-gray-50 p-3 rounded-lg capitalize text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                {move.move.name.replace(/-/g, " ")}
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Showing 12 of {pokemon.moves.length} moves
          </div>
        </div>
      </div>
    </div>
  );
}

function formatStatName(statName: string): string {
  switch (statName) {
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
      return statName;
  }
}
