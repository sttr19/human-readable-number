    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    module.exports = function toReadable(number) {
        function convert_tens(number) {
            if (number < 10) return ones[number];
            if (number >= 10 && number < 20) return teens[number - 10];
            if (number >= 20 && number < 100 && number % 10 != 0) return tens[Math.floor(number / 10)] + " " + ones[number % 10];
            if (number >= 20 && number < 100 && number % 10 === 0) return tens[Math.floor(number / 10)];
        }


        if (number === 0) return "zero";

        if (number < 10) return ones[number];
        if (number >= 10 && number < 20) return teens[number - 10];
        if (number >= 20 && number < 100 && number % 10 != 0) return tens[Math.floor(number / 10)] + " " + ones[number % 10];
        if (number >= 20 && number < 100 && number % 10 === 0) return tens[Math.floor(number / 10)];
        if (number > 99 && number % 100 != 0) return ones[Math.floor(number / 100)] + " hundred " + convert_tens(number % 100);
        if (number > 99 && number % 100 === 0) return ones[Math.floor(number / 100)] + " hundred";

    }
