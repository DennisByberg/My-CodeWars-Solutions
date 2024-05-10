import { describe, expect, it } from "vitest";
import { cubes } from "./buggyCodePart1";

describe(cubes, () => {
  it("should return the cubes of the given number", () => {
    expect(cubes(3)).toEqual(27);
    expect(cubes(5)).toEqual(125);
    expect(cubes(10)).toEqual(1000);
  });
});
