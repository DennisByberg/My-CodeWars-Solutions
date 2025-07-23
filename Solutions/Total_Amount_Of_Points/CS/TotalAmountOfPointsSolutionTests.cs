using Xunit;

namespace Solutions.Total_Amount_Of_Points.CS;

public class TotalAmountOfPointsSolutionTests
{
    [Theory]
    [InlineData(new string[] { "1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4" }, 10)]
    [InlineData(new string[] { "0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4" }, 0)]
    [InlineData(new string[] { "1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4" }, 15)]
    [InlineData(new string[] { "1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:1", "4:1", "4:1" }, 30)]
    [InlineData(new string[] { "1:1", "1:1", "1:1", "1:1", "1:1", "1:1", "1:1", "1:1", "1:1", "1:1" }, 10)]
    public void TotalPoints_ShouldCalculateCorrectTotalPoints(string[] games, int expected)
    {
        // Act
        var result = TotalAmountOfPointsSolution.TotalPoints(games);

        // Assert
        Assert.Equal(expected, result);
    }
}