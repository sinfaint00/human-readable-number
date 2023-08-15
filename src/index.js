function toReadable(number) {
    const singleDigits = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ];

    const teens = [
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    if (number < 10) {
        return singleDigits[number];
    } else if (number >= 10 && number < 20) {
        return teens[number - 10];
    } else if (number >= 20 && number < 100) {
        const tensDigit = Math.floor(number / 10);
        const onesDigit = number % 10;
        return onesDigit === 0 ? tens[tensDigit] : `${tens[tensDigit]} ${singleDigits[onesDigit]}`;
    } else {
        const hundredsDigit = Math.floor(number / 100);
        const remainingNumber = number % 100;
        if (remainingNumber === 0) {
            return `${singleDigits[hundredsDigit]} hundred`;
        } else {
            return `${singleDigits[hundredsDigit]} hundred ${toReadable(remainingNumber)}`;
        }
    }
}

module.exports = toReadable;
