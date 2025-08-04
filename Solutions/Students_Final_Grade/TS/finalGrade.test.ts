import { describe, expect, it } from 'vitest';
import { finalGrade } from './finalGrade';

describe('finalGrade', () => {
  describe('Grade 100 - Excellent performance', () => {
    it('should return 100 when exam > 90', () => {
      expect(finalGrade(91, 0)).toEqual(100);
      expect(finalGrade(100, 0)).toEqual(100);
    });

    it('should return 100 when projects > 10', () => {
      expect(finalGrade(0, 11)).toEqual(100);
      expect(finalGrade(100, 12)).toEqual(100);
    });
  });

  describe('Grade 90 - Good performance', () => {
    it('should return 90 when exam > 75 and projects >= 5', () => {
      expect(finalGrade(76, 5)).toEqual(90);
      expect(finalGrade(85, 5)).toEqual(90);
      expect(finalGrade(90, 10)).toEqual(90);
    });
  });

  describe('Grade 75 - Passing performance', () => {
    it('should return 75 when exam > 50 and projects >= 2', () => {
      expect(finalGrade(51, 2)).toEqual(75);
      expect(finalGrade(60, 2)).toEqual(75);
      expect(finalGrade(75, 4)).toEqual(75);
    });
  });

  describe('Grade 0 - Failing', () => {
    it('should return 0 when exam <= 50', () => {
      expect(finalGrade(50, 10)).toEqual(0);
      expect(finalGrade(10, 1)).toEqual(0);
    });

    it('should return 0 when projects < 2', () => {
      expect(finalGrade(75, 1)).toEqual(0);
      expect(finalGrade(60, 1)).toEqual(0);
    });
  });
});
