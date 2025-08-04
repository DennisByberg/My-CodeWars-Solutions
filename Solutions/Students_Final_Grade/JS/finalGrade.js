const GRADES = {
  EXCELLENT: 100,
  GOOD: 90,
  PASSING: 75,
  FAILING: 0,
};

export const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) return GRADES.EXCELLENT;
  if (exam > 75 && projects >= 5) return GRADES.GOOD;
  if (exam > 50 && projects >= 2) return GRADES.PASSING;

  return GRADES.FAILING;
};
