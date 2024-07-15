import { describe, expect, it } from "vitest";
import { hero } from "./hero";

describe("hero", () => {
  it("should return true if the hero can defeat all dragons", () => {
    expect(hero(10, 5)).toBe(true);
    expect(hero(100, 40)).toBe(true);
  });

  it("should return false if the hero cannot defeat all dragons", () => {
    expect(hero(7, 4)).toBe(false);
    expect(hero(4, 5)).toBe(false);
    expect(hero(1500, 751)).toBe(false);
    expect(hero(0, 1)).toBe(false);
  });
});
