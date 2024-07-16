import { describe, expect, it } from "vitest";
import { toBinary } from "./toBinary";

describe(toBinary, () => {
  it("Should return the given number in a binary format", () => {
    expect(toBinary(1)).toEqual(1);
    expect(toBinary(2)).toEqual(10);
    expect(toBinary(3)).toEqual(11);
    expect(toBinary(5)).toEqual(101);
  });
});
