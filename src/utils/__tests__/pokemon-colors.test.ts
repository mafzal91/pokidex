import { describe, expect, it } from "vitest";
import {
  getRandomType,
  getStatColor,
  getTypeColor,
  lightenColor,
} from "../pokemon-colors";

describe("getTypeColor", () => {
  it("returns the correct color for a given type", () => {
    expect(getTypeColor("fire")).toBe("#EE8130");
    expect(getTypeColor("water")).toBe("#6390F0");
    expect(getTypeColor("grass")).toBe("#7AC74C");
  });

  it("returns a default color for unknown types", () => {
    expect(getTypeColor("unknown")).toBe("#777777");
  });
});

describe("lightenColor", () => {
  it("lightens a color by the specified amount", () => {
    expect(lightenColor("#000000", 50)).toBe("#323232");
    expect(lightenColor("#FF0000", 20)).toBe("#ff1414");
  });

  it("does not exceed the maximum RGB value of 255", () => {
    expect(lightenColor("#FFFFFF", 50)).toBe("#ffffff");
    expect(lightenColor("#F0F0F0", 30)).toBe("#ffffff");
  });
});

describe("getStatColor", () => {
  it("returns predefined colors for known stats", () => {
    expect(getStatColor("hp", "fire")).toBe("#FF5959");
    expect(getStatColor("attack", "water")).toBe("#F5AC78");
    expect(getStatColor("defense", "grass")).toBe("#FAE078");
    expect(getStatColor("special-attack", "electric")).toBe("#9DB7F5");
    expect(getStatColor("special-defense", "psychic")).toBe("#A7DB8D");
    expect(getStatColor("speed", "ice")).toBe("#FA92B2");
  });

  it("returns the base type color for unknown stats", () => {
    expect(getStatColor("unknown", "fire")).toBe("#EE8130");
    expect(getStatColor("unknown", "water")).toBe("#6390F0");
  });
});

describe("getRandomType", () => {
  it("returns consistent types for the same ID", () => {
    const type1 = getRandomType("25");
    const type2 = getRandomType("25");
    expect(type1).toBe(type2);
  });

  it("returns different types for different IDs", () => {
    const types = new Set();
    for (let i = 0; i < 18; i++) {
      types.add(getRandomType(i.toString()));
    }
    // Since there are 18 types, we should get close to 18 unique types
    // with 18 different IDs due to the modulo operation
    expect(types.size).toBeGreaterThan(10);
  });

  it("returns a valid type", () => {
    const validTypes = [
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

    const type = getRandomType("42");
    expect(validTypes).toContain(type);
  });
});
