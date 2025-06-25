namespace Solutions.Invert_Values.CS;

public static class ArraysInversion
{
    public static int[] InvertValues(int[] input) => [.. input.Select(number => -number)];
}