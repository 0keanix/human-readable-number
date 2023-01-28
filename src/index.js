module.exports = function toReadable(number) {
    const arr = number.toString().split('');
    let result = '';
    const ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    const tens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    const hundreds = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred'
    };
    const thousands = {
        1: 'one thousand',
        2: 'two thousand',
        3: 'three thousand',
        4: 'four thousand',
        5: 'five thousand',
        6: 'six thousand',
        7: 'seven thousand',
        8: 'eight thousand',
        9: 'nine thousand'
    };
    
    if (number < 10) {
        result = ones[number];
    } else if (number < 20) {
        result = tens[number];
    } else if (number < 100 && number > 19) {
        result = arr[1] === '0' ? dozens[arr[0]] : dozens[arr[0]] + ' ' + ones[arr[1]];
    } else if (number < 1000 && number > 99) {
        result = arr[1] === '0' && arr[2] === '0' ?
            hundreds[arr[0]] : hundreds[arr[0]] + ' ' + toReadable(number - arr[0] * 100);
    } else if (number < 10000 && number > 999) {
        result = arr[1] === '0' && arr[2] === '0' && arr[3] === '0' ?
            thousands[arr[0]] : thousands[arr[0]] + ' ' + toReadable(number - arr[0] * 1000);
    } else if (number < 100000 && number > 9999) {
        result = arr[1] === '0' && arr[2] === '0' && arr[3] === '0' && arr[4] === '0' ?
            toReadable(arr[0]) + ' thousand' :
            toReadable(arr[0]) + ' thousand ' + toReadable(number - arr[0] * 10000);
    } else if (number < 1000000 && number > 99999) {
        result = arr[1] === '0' && arr[2] === '0' && arr[3] === '0' && arr[4] === '0' && arr[5] === '0' ?
            toReadable(arr[0]) + ' hundred thousand' :
            toReadable(arr[0]) + ' hundred thousand ' + toReadable(number - arr[0] * 100000);
    }
    
    return result;
}
