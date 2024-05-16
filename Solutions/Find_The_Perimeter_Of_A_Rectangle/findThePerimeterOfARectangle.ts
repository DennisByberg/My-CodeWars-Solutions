// EN: Create a function that takes length and width and finds the perimeter of a rectangle.

// SV: Skapa en funktion som tar längd och bredd och hittar omkretsen av en rektangel.

export function findPerimeter(length: number, width: number): number {
  const perimeterOfARectangle = (length + width) * 2;

  return perimeterOfARectangle;
}
