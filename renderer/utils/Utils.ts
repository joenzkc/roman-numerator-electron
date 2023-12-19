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
