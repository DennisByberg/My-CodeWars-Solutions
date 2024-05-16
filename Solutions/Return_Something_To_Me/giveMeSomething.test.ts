import { describe, expect, it } from "vitest";
import { giveMeSomething } from "./giveMeSomething";

describe(giveMeSomething, () => {
  it("should returns the string 'something' joined with a space and the given argument a.", () => {
    expect(giveMeSomething("is better than nothing")).toBe("something is better than nothing");
    expect(giveMeSomething("something")).toBe("something something");
  });
});
