import { describe, expect, it } from "vitest";
import { flip } from "./flip";

describe("Gravity Flip", () => {
  it("should sort the columns in ascending order when gravity is switched to the right", () => {
    const initialColumns = [3, 2, 1, 2];
    const expectedColumns = [1, 2, 2, 3];
    expect(flip("R", initialColumns)).to.deep.equal(expectedColumns);
  });

  it("should sort the columns in descending order when gravity is switched to the left", () => {
    const initialColumns = [1, 4, 5, 3, 5];
    const expectedColumns = [5, 5, 4, 3, 1];
    expect(flip("L", initialColumns)).to.deep.equal(expectedColumns);
  });
});
