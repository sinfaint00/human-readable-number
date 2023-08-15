function toReadable(number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 0 && number <= 9) {
        return ones[number];
    } else if (number >= 11 && number <= 19) {
        return teens[number - 11];
    } else if (number >= 10 && number <= 99) {
        if (number % 10 === 0) {
            return tens[number / 10 - 1];
        } else {
            return tens[Math.floor(number / 10 - 1)] + ' ' + ones[number % 10];
        }
    } else if (number >= 100 && number <= 999) {
        if (number % 100 === 0) {
            return ones[Math.floor(number / 100)] + ' hundred';
        } else if (number % 100 <= 9) {
            return ones[Math.floor(number / 100)] + ' hundred ' + ones[number % 100];
        } else if (number % 100 >= 11 && number % 100 <= 19) {
            return ones[Math.floor(number / 100)] + ' hundred ' + teens[number % 100 - 11];
        } else if (number % 10 === 0) {
            return ones[Math.floor(number / 100)] + ' hundred ' + tens[Math.floor((number % 100) / 10) - 1];
        } else {
            return ones[Math.floor(number / 100)] + ' hundred ' + tens[Math.floor((number % 100) / 10) - 1] + ' ' + ones[number % 10];
        }
    }
}