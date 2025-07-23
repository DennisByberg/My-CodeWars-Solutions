using Xunit;

namespace Solutions.Third_Angle_Of_A_Triangle.CS;

public class ThirdAngleOfATriangleSolutionTests
{
    [Theory]
    [InlineData(30, 60, 90)]
    [InlineData(60, 60, 60)]
    [InlineData(43, 78, 59)]
    [InlineData(10, 20, 150)]
    public void OtherAngle_ShouldReturnThirdAngleOfTriangle(int angle1, int angle2, int expected)
    {
        // Act
        var result = ThirdAngleOfATriangleSolution.OtherAngle(angle1, angle2);

        // Assert
        Assert.Equal(expected, result);
    }
}