import { defaultPlugins } from "@hey-api/openapi-ts";
import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input:
    "https://raw.githubusercontent.com/PokeAPI/pokeapi/refs/heads/master/openapi.yml",
  output: "./src/client",
  plugins: [
    ...defaultPlugins,
    "@hey-api/transformers",
    "@hey-api/client-fetch",
    "zod",
    {
      enums: "typescript",
      name: "@hey-api/typescript",
    },
    {
      name: "@hey-api/sdk",
      transformer: true,
    },
    {
      dates: true,
      name: "@hey-api/transformers",
    },
  ],
});
