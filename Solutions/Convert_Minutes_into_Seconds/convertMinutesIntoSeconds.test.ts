import { describe, expect, it } from "vitest";
import { convert } from "./convertMinutesIntoSeconds";

describe(convert, () => {
  it("should convert minutes to seconds", () => {
    expect(convert(6)).toEqual(360);
    expect(convert(4)).toEqual(240);
    expect(convert(8)).toEqual(480);
    expect(convert(60)).toEqual(3600);
  });
});
