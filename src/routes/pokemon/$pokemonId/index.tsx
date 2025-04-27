import { Header } from "@/components/$pokemonId/header";
import type { PokemonRetrieveResponse } from "@/client/index";
import { TypeIcon } from "@/components/type-icon";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { formatStatName } from "@/utils/strings";
import { getTypeColor } from "@/utils/pokemon-colors";
import { pokemonRetrieve } from "@/client/index";

export const Route = createFileRoute("/pokemon/$pokemonId/")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const data = await pokemonRetrieve({ path: { id: params.pokemonId } });
    return data.data;
  },
});

// converts hectograms to kilograms
const toKilograms = (weight: number | null | undefined) => {
  if (weight == null) return "0.0";
  return (weight / 10).toFixed(1);
};

// converts decimeters to meters
const toMeters = (height: number | null | undefined) => {
  if (height == null) return "0.0";
  return (height / 10).toFixed(1);
};

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
  const primaryTypeColor = getTypeColor(primaryType);

  return (
    <div className="min-h-screen" style={{ backgroundColor: primaryTypeColor }}>
      {/* Hero Header */}
      <div className="text-white p-4">
        <div className="container mx-auto">
          <Header />
        </div>
      </div>

      <div className="flex flex-col md:items-center md:justify-center">
        <div className="px-10">
          <div className="text-white font-bold text-opacity-70 mb-2">
            #{pokemon.id.toString().padStart(3, "0")}
          </div>
          <h1 className="text-white text-4xl font-extrabold capitalize mb-4 tracking-tight">
            {pokemon.name}
          </h1>
        </div>
        <div className="flex flex-row gap-4 px-10">
          <div
            className="shrink-0 text-white font-bold text-opacity-70 rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Region: Kanto
          </div>

          <div className="flex flex-col justify-end">
            <div className="text-white">
              Height: {toMeters(pokemon.height)}m
            </div>
            <div className="text-white">
              Weight: {toKilograms(pokemon.weight)}kg
            </div>
          </div>
        </div>

        <div className="size-40 md:size-48 flex-shrink-0 relative z-10 transform transition-transform duration-300">
          <img
            src={
              pokemon.sprites.other?.["official-artwork"]?.front_default || ""
            }
            alt={pokemon.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className="flex gap-2 p-2 text-black rounded-full text-sm font-semibold bg-white"
              >
                <TypeIcon type={type.type.name} />
                <span className="capitalize">{type.type.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
