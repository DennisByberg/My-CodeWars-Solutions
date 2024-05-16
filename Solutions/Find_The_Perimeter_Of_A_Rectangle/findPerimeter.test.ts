import { describe, expect, it } from "vitest";
import { findPerimeter } from "./findPerimeter";

describe(findPerimeter, () => {
  it("should return the perimeter of a rectangle", () => {
    expect(findPerimeter(6, 7)).toEqual(26);
    expect(findPerimeter(2, 9)).toEqual(22);
    expect(findPerimeter(20, 10)).toEqual(60);
  });
});
