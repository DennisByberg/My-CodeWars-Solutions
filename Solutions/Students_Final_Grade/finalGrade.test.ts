import { describe, expect, it } from "vitest";
import { finalGrade } from "./finalGrade";

describe(finalGrade, () => {
  it("Should return the final grade", () => {
    expect(finalGrade(100, 12)).toEqual(100); // Test for grade 100 scenario
    expect(finalGrade(91, 0)).toEqual(100); // Test for grade 100 with high exam score but low projects
    expect(finalGrade(85, 5)).toEqual(90); // Test for grade 90 scenario
    expect(finalGrade(76, 5)).toEqual(90); // Test for grade 90 with minimum requirements
    expect(finalGrade(60, 2)).toEqual(75); // Test for grade 75 scenario
    expect(finalGrade(51, 2)).toEqual(75); // Test for grade 75 with minimum requirements
    expect(finalGrade(50, 10)).toEqual(0); // Test for grade 0 scenario
    expect(finalGrade(10, 1)).toEqual(0); // Test for grade 0 with low exam and projects
    expect(finalGrade(75, 1)).toEqual(0); // Test for edge case just below grade 75 requirements
  });
});
