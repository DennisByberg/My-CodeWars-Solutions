export function points(games: string[]): number {
  return games.reduce((total, game) => {
    const [homeScore, awayScore] = game.split(":").map(Number);

    if (homeScore > awayScore) return total + 3;
    if (homeScore === awayScore) return total + 1;

    return total;
  }, 0);
}
