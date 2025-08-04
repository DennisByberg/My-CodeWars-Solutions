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
        return
            exam > 90 || projects > 10 ? (int)Grade.Excellent :
            exam > 75 && projects >= 5 ? (int)Grade.Good :
            exam > 50 && projects >= 2 ? (int)Grade.Passing :
            (int)Grade.Failing;
    }
}