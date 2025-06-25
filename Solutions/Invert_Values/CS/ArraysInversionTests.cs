using Xunit;

namespace Solutions.Invert_Values.CS;

public class ArraysInversionTests
{
    [Theory]
    [InlineData(new int[] { 1, 2, 3, 4, 5 }, new int[] { -1, -2, -3, -4, -5 })]
    [InlineData(new int[] { 1, -2, 3, -4, 5 }, new int[] { -1, 2, -3, 4, -5 })]
    [InlineData(new int[] { }, new int[] { })]
    [InlineData(new int[] { 0 }, new int[] { 0 })]
    public void InvertValues_ShouldReturnAdditiveInverse(int[] input, int[] expected)
    {
        // Act
        var result = ArraysInversion.InvertValues(input);

        // Assert
        Assert.Equal(expected, result);
    }
}