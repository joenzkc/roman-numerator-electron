export function checkValidRomanNumeral(romanNumeral: string): boolean {
  const romanNumeralPattern =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return romanNumeralPattern.test(romanNumeral);
}

export function convertRomanNumeralToNumber(romanNumeral: string): number {
  const romanNumeralToNumberMap = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentChar = romanNumeral[i];
    const nextChar = romanNumeral[i + 1];
    const currentCharValue = romanNumeralToNumberMap.get(currentChar);
    const nextCharValue = romanNumeralToNumberMap.get(nextChar);

    if (currentCharValue < nextCharValue) {
      result += nextCharValue - currentCharValue;
      i++;
    } else {
      result += currentCharValue;
    }
  }

  return result;
}

export function convertNumberToRomanNumeral(num: number): string {
  const digits = String(+num).split("");
  const key: string[] = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];

  let roman = "";
  let i = 3;
  while (i--) roman = (key[+digits.pop()! + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
