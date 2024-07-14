import { describe, expect, it } from "vitest";
import { centuryFromYear } from "./centuryFromYear";

describe(centuryFromYear, () => {
  it("Should return the century it is in given a year", () => {
    expect(centuryFromYear(1705)).toEqual(18);
    expect(centuryFromYear(1900)).toEqual(19);
    expect(centuryFromYear(1601)).toEqual(17);
    expect(centuryFromYear(2000)).toEqual(20);
    expect(centuryFromYear(2742)).toEqual(28);
  });
});
