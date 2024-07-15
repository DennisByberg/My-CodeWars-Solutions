import { describe, expect, it } from "vitest";
import { reverseSeq } from "./reverseSeq";

describe(reverseSeq, () => {
  it("Should return an array of integers from n to 1", () => {
    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(reverseSeq(3)).toStrictEqual([3, 2, 1]);
  });
});
