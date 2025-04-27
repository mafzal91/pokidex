export const pokemonGames = [
  "DPPt",
  "HGSS",
  "BW_B2W2",
  "HOME",
  "BDSP",
] as const;

// Define types based on the games array
export type PokemonGame = (typeof pokemonGames)[number];
export type GameColorMap = Record<PokemonGame, string>;

export const pokemonColors = [
  {
    id: 0,
    name: "Red",
    hex: {
      DPPt: "#E33030",
      HGSS: "#E33030",
      BW_B2W2: "#F35969",
      HOME: "#F54C4C",
      BDSP: "#E60033",
    } as GameColorMap,
  },
  {
    id: 1,
    name: "Blue",
    hex: {
      DPPt: "#4149EB",
      HGSS: "#4149EB",
      BW_B2W2: "#308AF3",
      HOME: "#8098FD",
      BDSP: "#0095D9",
    } as GameColorMap,
  },
  {
    id: 2,
    name: "Yellow",
    hex: {
      DPPt: "#EBE361",
      HGSS: "#FBE379",
      BW_B2W2: "#F3D349",
      HOME: "#FAEE2D",
      BDSP: "#FFD900",
    } as GameColorMap,
  },
  {
    id: 3,
    name: "Green",
    hex: {
      DPPt: "#92CB61",
      HGSS: "#9AEB82",
      BW_B2W2: "#41BA69",
      HOME: "#5FCB5C",
      BDSP: "#3EB370",
    } as GameColorMap,
  },
  {
    id: 4,
    name: "Black",
    hex: {
      DPPt: "#282830",
      HGSS: "#717182",
      BW_B2W2: "#595959",
      HOME: "#232323",
      BDSP: "#2B2B2B",
    } as GameColorMap,
  },
  {
    id: 5,
    name: "Brown",
    hex: {
      DPPt: "#D38230",
      HGSS: "#D38230",
      BW_B2W2: "#B27130",
      HOME: "#D89948",
      BDSP: "#965042",
    } as GameColorMap,
  },
  {
    id: 6,
    name: "Purple",
    hex: {
      DPPt: "#BA79F3",
      HGSS: "#CB829A",
      BW_B2W2: "#AA69C3",
      HOME: "#BE7FFF",
      BDSP: "#884898",
    } as GameColorMap,
  },
  {
    id: 7,
    name: "Gray",
    hex: {
      DPPt: "#B2B2BA",
      HGSS: "#B2B2BA",
      BW_B2W2: "#A2A2A2",
      HOME: "#BCBCBC",
      BDSP: "#7D7D7D",
    } as GameColorMap,
  },
  {
    id: 8,
    name: "White",
    hex: {
      DPPt: "#F3F3F3",
      HGSS: "#F3F3F3",
      BW_B2W2: "#F3F3F3",
      HOME: "#FFFFFF",
      BDSP: "#FFFFFF",
    } as GameColorMap,
  },
  {
    id: 9,
    name: "Pink",
    hex: {
      DPPt: "#FB82EB",
      HGSS: "#FB82EB",
      BW_B2W2: "#FB92CB",
      HOME: "#FF9EC7",
      BDSP: "#E38698",
    } as GameColorMap,
  },
];

export function getTypeColor(type: string): string {
  const typeColors: Record<string, string> = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return typeColors[type] || "#777777";
}

// Helper function to lighten a color
export function lightenColor(hex: string, amount: number): string {
  // Remove the # character
  const hexWithoutHash = hex.replace("#", "");

  // Parse the hex values to RGB
  const r = Number.parseInt(hexWithoutHash.substring(0, 2), 16);
  const g = Number.parseInt(hexWithoutHash.substring(2, 4), 16);
  const b = Number.parseInt(hexWithoutHash.substring(4, 6), 16);

  // Lighten each component
  const lightenedR = Math.min(255, r + amount);
  const lightenedG = Math.min(255, g + amount);
  const lightenedB = Math.min(255, b + amount);

  // Convert back to hex
  const lightenedHex = `#${lightenedR.toString(16).padStart(2, "0")}${lightenedG.toString(16).padStart(2, "0")}${lightenedB.toString(16).padStart(2, "0")}`;

  return lightenedHex;
}

// Get a color for each stat based on type
export function getStatColor(statName: string, pokemonType: string): string {
  const baseColor = getTypeColor(pokemonType);

  switch (statName) {
    case "hp":
      return "#FF5959"; // Red for HP
    case "attack":
      return "#F5AC78"; // Orange for Attack
    case "defense":
      return "#FAE078"; // Yellow for Defense
    case "special-attack":
      return "#9DB7F5"; // Blue for Sp. Atk
    case "special-defense":
      return "#A7DB8D"; // Green for Sp. Def
    case "speed":
      return "#FA92B2"; // Pink for Speed
    default:
      return baseColor;
  }
}

// Get a random type based on the Pokémon ID to ensure consistency
export function getRandomType(id: string): string {
  const types = [
    "grass",
    "fire",
    "water",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
  ];

  // Use ID as seed for consistent "random" type
  const numId = Number.parseInt(id, 10);
  return types[numId % types.length];
}
