// EN: There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters.
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// SV: Det finns en enda operator i JavaScript, som kan ge resten av en divisionsoperation.
// Två nummer skickas som parametrar.
// Det första parameter delat med det andra parameter kommer att ha en rest, möjligtvis noll. Returnera det värdet.

export function remainder(x: number, y: number): number {
  return x % y;
}
