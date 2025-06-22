namespace My_CodeWars_Solutions.Sum_The_Strings.CSharp;

public static class SumStr
{
    public static string Sum(string a, string b)
    {
        var num1 = int.TryParse(a, out var n1) ? n1 : 0;
        var num2 = int.TryParse(b, out var n2) ? n2 : 0;
        var sum = num1 + num2;

        return sum.ToString();
    }
}