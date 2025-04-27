import { describe, expect, it } from "vitest";

import { formatStatName } from "../strings";

describe("formatStatName", () => {
  it("returns formatted names for specific stats", () => {
    expect(formatStatName("hp")).toBe("HP");
    expect(formatStatName("attack")).toBe("Attack");
    expect(formatStatName("defense")).toBe("Defense");
    expect(formatStatName("special-attack")).toBe("Sp. Atk");
    expect(formatStatName("special-defense")).toBe("Sp. Def");
    expect(formatStatName("speed")).toBe("Speed");
  });

  it("returns the original name for unknown stats", () => {
    expect(formatStatName("accuracy")).toBe("accuracy");
    expect(formatStatName("evasion")).toBe("evasion");
    expect(formatStatName("unknown-stat")).toBe("unknown-stat");
  });
});
