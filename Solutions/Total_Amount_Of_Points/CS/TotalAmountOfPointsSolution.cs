namespace Solutions.Total_Amount_Of_Points.CS;

public static class TotalAmountOfPointsSolution
{
    public static int TotalPoints(string[] games) =>
        games.Sum(game =>
        {
            var scores = game.Split(":");
            var homeScore = int.Parse(scores[0]);
            var awayScore = int.Parse(scores[1]);

            return homeScore > awayScore ? 3 : homeScore == awayScore ? 1 : 0;
        });
}