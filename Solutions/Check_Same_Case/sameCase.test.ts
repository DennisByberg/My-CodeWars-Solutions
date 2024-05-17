import { describe, expect, it } from "vitest";
import { sameCase } from "./sameCase";

describe(sameCase, () => {
  it("should...", () => {
    expect(sameCase("C", "B")).toEqual(1);
    expect(sameCase("b", "a")).toEqual(1);
    expect(sameCase("d", "d")).toEqual(1);
    expect(sameCase("A", "s")).toEqual(0);
    expect(sameCase("c", "B")).toEqual(0);
    expect(sameCase("b", "Z")).toEqual(0);
    expect(sameCase("\t", "Z")).toEqual(-1);
    expect(sameCase("H", ":")).toEqual(-1);
    expect(sameCase("^", "a")).toEqual(-1);
    expect(sameCase("F", "]")).toEqual(-1);
  });
});
