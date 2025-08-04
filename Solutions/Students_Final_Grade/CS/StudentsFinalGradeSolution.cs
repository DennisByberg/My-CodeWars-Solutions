namespace Solutions.Students_Final_Grade.CS;

public static class StudentsFinalGradeSolution
{
    public enum Grade
    {
        Excellent = 100,
        Good = 90,
        Passing = 75,
        Failing = 0
    }

    public static int FinalGrade(int exam, int projects)
    {
        if (exam > 90 || projects > 10) return (int)Grade.Excellent;
        if (exam > 75 && projects >= 5) return (int)Grade.Good;
        if (exam > 50 && projects >= 2) return (int)Grade.Passing;

        return (int)Grade.Failing;
    }
}