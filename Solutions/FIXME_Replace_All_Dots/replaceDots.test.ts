import { describe, expect, it } from "vitest";
import { replaceDots } from "./replaceDots";

describe(replaceDots, () => {
  it("Should replace all the dots in the specified String str with dashes", () => {
    expect(replaceDots("")).toBe("");
    expect(replaceDots("no dots")).toBe("no dots");
    expect(replaceDots("one.two.three")).toBe("one-two-three");
    expect(replaceDots("...")).toBe("---");
  });
});
