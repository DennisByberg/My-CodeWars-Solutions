using System.Runtime.InteropServices.Marshalling;

namespace Solutions.Cat_Years_Dog_Years.CS;

public static class Solution
{
    public static int[] HumanYearsCatYearsDogYears(int humanYears)
    {
        var firstYear = 15;
        var secondYear = 9;
        var catAdditionalYear = 4;
        var dogAdditionalYear = 5;

        if (humanYears == 1) return [humanYears, firstYear, firstYear];

        var baseCatYears = firstYear + secondYear;
        var baseDogYears = firstYear + secondYear;

        var additionalYears = humanYears - 2;
        var catYears = baseCatYears + additionalYears * catAdditionalYear;
        var dogYears = baseDogYears + additionalYears * dogAdditionalYear;

        return [humanYears, catYears, dogYears];
    }
}