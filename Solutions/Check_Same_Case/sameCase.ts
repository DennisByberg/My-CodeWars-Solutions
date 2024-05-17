export function sameCase(a: string, b: string): number {
  function checkCase(char: string) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return "UpperCase";
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) return "LowerCase";

    return "Special";
  }

  if (checkCase(a) === "Special" || checkCase(b) === "Special") return -1;
  if (checkCase(a) === checkCase(b)) return 1;

  return 0;
}
