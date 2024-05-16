import { describe, expect, it } from "vitest";
import { nextEdge } from "./nextEdge";

describe(nextEdge, () => {
  it("should correctly calculate the maximum range of a triangle's third edge", () => {
    expect(nextEdge(8, 10)).toEqual(17);
    expect(nextEdge(5, 7)).toEqual(11);
    expect(nextEdge(9, 2)).toEqual(10);
  });
});
