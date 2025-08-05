using Xunit;

namespace Solutions.Cat_Years_Dog_Years.CS;

public class SolutionTests
{
    [Fact]
    public void ShouldReturn_1_15_15_For_1_HumanYear()
    {
        // Arrange & Act
        var result = Solution.HumanYearsCatYearsDogYears(1);

        // Assert
        Assert.Equal([1, 15, 15], result);
    }

    [Fact]
    public void ShouldReturn_2_24_24_For_2_HumanYears()
    {
        // Arrange & Act
        var result = Solution.HumanYearsCatYearsDogYears(2);

        // Assert
        Assert.Equal([2, 24, 24], result);
    }

    [Fact]
    public void ShouldReturn_10_56_64_For_10_HumanYears()
    {
        // Arrange & Act
        var result = Solution.HumanYearsCatYearsDogYears(10);

        // Assert
        Assert.Equal([10, 56, 64], result);
    }
}