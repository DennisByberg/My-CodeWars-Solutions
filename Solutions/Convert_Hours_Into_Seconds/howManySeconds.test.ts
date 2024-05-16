import { describe, expect, it } from "vitest";
import { howManySeconds } from "./howManySeconds";

describe(howManySeconds, () => {
  it("should convert hours into seconds correctly", () => {
    expect(howManySeconds(2)).toEqual(7200);
    expect(howManySeconds(10)).toEqual(36000);
    expect(howManySeconds(24)).toEqual(86400);
  });
});
