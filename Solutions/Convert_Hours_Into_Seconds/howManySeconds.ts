// EN: Write a function that converts hours into seconds.

// SV: Skriv en funktion som konverterar timmar till sekunder.

export function howManySeconds(hours: number): number {
  const secondsPerHour = 3600;
  return hours * secondsPerHour;
}
