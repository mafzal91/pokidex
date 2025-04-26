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
