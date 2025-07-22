export function points(games: string[]): number {
  return games.reduce((totalPoints, game) => {
    const [homeScore, awayScore] = game.split(':').map(Number);

    if (homeScore > awayScore) totalPoints += 3;
    if (homeScore === awayScore) totalPoints += 1;

    return totalPoints;
  }, 0);
}
