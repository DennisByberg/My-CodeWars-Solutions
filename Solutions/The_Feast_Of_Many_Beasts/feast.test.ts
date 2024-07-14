import { describe, expect, it } from "vitest";
import { feast } from "./feast";

describe(feast, () => {
  it("Should return true if the first and last letter of beast is the same as first and last letter of feast", () => {
    expect(feast("great blue heron", "garlic naan")).toBe(true);
    expect(feast("chickadee", "chocolate cake")).toBe(true);
    expect(feast("brown bear", "bear claw")).toBe(false);
  });
});
