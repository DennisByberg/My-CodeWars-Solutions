using Xunit;

namespace Solutions.Twice_As_Old.CS;

public class TwiceAsOldSolutionTests
{
    [Theory]
    [InlineData(36, 7, 22)]
    [InlineData(55, 30, 5)]
    [InlineData(42, 21, 0)]
    [InlineData(22, 1, 20)]
    [InlineData(29, 0, 29)]
    public void TwiceAsOld_ShouldCalculateYearsDifference(int dadAge, int sonAge, int expected)
    {
        // Act
        var result = TwiceAsOldSolution.TwiceAsOld(dadAge, sonAge);

        // Assert
        Assert.Equal(expected, result);
    }
}