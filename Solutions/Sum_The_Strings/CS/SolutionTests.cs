using Xunit;

namespace Solutions.Sum_The_Strings.CS;

public class SolutionTests
{
    [Fact]
    public void ShouldReturnSumOfTwoStringNumbers()
    {
        Assert.Equal("9", Solution.StringsSum("4", "5"));
        Assert.Equal("39", Solution.StringsSum("34", "5"));
        Assert.Equal("0", Solution.StringsSum("", ""));
        Assert.Equal("2", Solution.StringsSum("2", ""));
        Assert.Equal("-2", Solution.StringsSum("-5", "3"));
    }
}