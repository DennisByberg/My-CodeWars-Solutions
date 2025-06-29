using Xunit;

namespace Solutions.Get_Nth_Even_Number.CS;

public class KataTests
{
    [Theory]
    [InlineData(1, 0)]
    [InlineData(3, 4)]
    [InlineData(100, 198)]
    [InlineData(1298734, 2597466)]
    public void NthEven_ShouldReturnCorrectEvenNumber(int n, int expected)
    {
        // Act
        var result = Kata.NthEven(n);

        // Assert
        Assert.Equal(expected, result);
    }
}