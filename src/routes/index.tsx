import * as React from "react";

import { Link, createFileRoute, useRouter } from "@tanstack/react-router";
import type {
  PaginatedPokemonSummaryListReadable,
  PokemonSummaryReadable,
} from "@/client/index";

import { Pokeball } from "@/components/pokiball";
import { createServerFn } from "@tanstack/react-start";
import { pokemonList } from "@/client/index";

const getPokemonList = createServerFn({
  method: "GET",
}).handler(
  async (): Promise<PaginatedPokemonSummaryListReadable | undefined> => {
    const data = await pokemonList();
    return data.data;
  }
);

export const Route = createFileRoute("/")({
  component: RouteComponent,
  loader: async () => {
    const limit = 100;
    let offset = 0;
    const results: PokemonSummaryReadable[] = [];
    let hasNextPage = true;
    do {
      const data = await pokemonList({
        query: {
          limit,
          offset,
        },
      });
      results.push(...(data?.data?.results ?? []));
      offset += limit;
      hasNextPage = !!data?.data?.next;
    } while (hasNextPage);

    return results;
  },
});

function RouteComponent() {
  const router = useRouter();
  const state = Route.useLoaderData();
  const [searchTerm, setSearchTerm] = React.useState("");
  if (!state) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  const filteredPokemon = state?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-red-400 to-red-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-center">
            Pokédex
          </h1>
          <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
            Explore and discover all your favorite Pokémon in one place
          </p>
          <input
            type="text"
            placeholder="Search for a Pokémon"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-gray-600">
            Showing {filteredPokemon?.length} Pokémon
          </div>
        </div>

        {/* Pokemon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filteredPokemon?.map((pokemon) => {
            const id = getPokemonId(pokemon.url);
            return (
              <Link
                key={pokemon.name}
                to="/pokemon/$pokemonId"
                params={{ pokemonId: pokemon.name }}
                className="group flex flex-col rounded-2xl overflow-hidden shadow-sm transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-6 flex flex-col justify-between h-full relative">
                  {/* Pokeball Background */}
                  <div className="absolute top-4 right-4 opacity-30">
                    <Pokeball />
                  </div>

                  {/* Pokemon Number */}
                  <div className="font-bold text-opacity-70 mb-4 z-10">
                    #{id.padStart(3, "0")}
                  </div>

                  {/* Pokemon Name */}
                  <h2 className="capitalize text-xl font-extrabold mb-2 z-10">
                    {pokemon.name}
                  </h2>

                  {/* Pokemon Image */}
                  <div className="mt-4 flex justify-end">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      alt={pokemon.name}
                      className="w-32 h-32 object-contain z-10 transform group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredPokemon?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No Pokémon found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Extract Pokemon ID from URL
function getPokemonId(url: string): string {
  const matches = url.match(/\/pokemon\/(\d+)\/?$/);
  return matches ? matches[1] : "0";
}
