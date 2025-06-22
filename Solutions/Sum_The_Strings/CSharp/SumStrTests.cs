using Xunit;

namespace My_CodeWars_Solutions.Sum_The_Strings.CSharp;

public class SumStrTests
{
    [Fact]
    public void ShouldReturnSumOfTwoStringNumbers()
    {
        Assert.Equal("9", SumStr.Sum("4", "5"));
        Assert.Equal("39", SumStr.Sum("34", "5"));
        Assert.Equal("0", SumStr.Sum("", ""));
        Assert.Equal("2", SumStr.Sum("2", ""));
        Assert.Equal("-2", SumStr.Sum("-5", "3"));
    }
}