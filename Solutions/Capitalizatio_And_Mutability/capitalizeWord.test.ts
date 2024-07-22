import { describe, expect, it } from "vitest";
import { capitalizeWord } from "./capitalizeWord";

describe(capitalizeWord, () => {
  it("Should capitalize the first letter", () => {
    expect(capitalizeWord("word")).toBe("Word");
    expect(capitalizeWord("i")).toBe("I");
    expect(capitalizeWord("glasswear")).toBe("Glasswear");
  });
});
