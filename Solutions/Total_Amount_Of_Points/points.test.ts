import { describe, expect, it } from "vitest";
import { points } from "./points";

describe(points, () => {
  it("should calculate the total points", () => {
    expect(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])).toEqual(10);
    expect(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])).toEqual(0);
    expect(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])).toEqual(15);
  });
});
