using Xunit;

namespace Solutions.Students_Final_Grade.CS;

public class StudentsFinalGradeSolutionTests
{
    [Fact]
    public void FinalGrade_Grade100_ExcellentPerformance_WhenExamGreaterThan90()
    {
        // Arrange & Act & Assert
        Assert.Equal(100, StudentsFinalGradeSolution.FinalGrade(91, 0));
        Assert.Equal(100, StudentsFinalGradeSolution.FinalGrade(100, 0));
    }

    [Fact]
    public void FinalGrade_Grade100_ExcellentPerformance_WhenProjectsGreaterThan10()
    {
        // Arrange & Act & Assert
        Assert.Equal(100, StudentsFinalGradeSolution.FinalGrade(0, 11));
        Assert.Equal(100, StudentsFinalGradeSolution.FinalGrade(100, 12));
    }

    [Fact]
    public void FinalGrade_Grade90_GoodPerformance_WhenExamGreaterThan75AndProjectsAtLeast5()
    {
        // Arrange & Act & Assert
        Assert.Equal(90, StudentsFinalGradeSolution.FinalGrade(76, 5));
        Assert.Equal(90, StudentsFinalGradeSolution.FinalGrade(85, 5));
        Assert.Equal(90, StudentsFinalGradeSolution.FinalGrade(90, 10));
    }

    [Fact]
    public void FinalGrade_Grade75_PassingPerformance_WhenExamGreaterThan50AndProjectsAtLeast2()
    {
        // Arrange & Act & Assert
        Assert.Equal(75, StudentsFinalGradeSolution.FinalGrade(51, 2));
        Assert.Equal(75, StudentsFinalGradeSolution.FinalGrade(60, 2));
        Assert.Equal(75, StudentsFinalGradeSolution.FinalGrade(75, 4));
    }

    [Fact]
    public void FinalGrade_Grade0_Failing_WhenExamLessThanOrEqualTo50()
    {
        // Arrange & Act & Assert
        Assert.Equal(0, StudentsFinalGradeSolution.FinalGrade(50, 10));
        Assert.Equal(0, StudentsFinalGradeSolution.FinalGrade(10, 1));
    }

    [Fact]
    public void FinalGrade_Grade0_Failing_WhenProjectsLessThan2()
    {
        // Arrange & Act & Assert
        Assert.Equal(0, StudentsFinalGradeSolution.FinalGrade(75, 1));
        Assert.Equal(0, StudentsFinalGradeSolution.FinalGrade(60, 1));
    }
}