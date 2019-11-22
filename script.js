function passLength (length) {
    var upper = ''
    var lower = ''
    var number = ''
    var symbol = ''
    var password = ''

    if (uppercase.checked === true) {
        upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        charSet1 = charSet1.concat(upper)
    }

    if (lowercase.checked === true) {
        lower = 'abcdefghijklmnopqrstuvwxyz'
        charSet1 = charSet1.concat(lower)
    }

    if (numbers.checked === true) {
        number = '1234567890'
        charSet1 = charSet1.concat(number)
    }

    if (symbols.checked === true) {
        symbol = '`~!@#$%^&*()_+[]\{}|;:,./<>?'
        charSet1 = charSet1.concat(symbol)
    }

    for (var i = 0; i <length; i++) {
        var x = Math.floor(Math.random() * passLength) 
        password += charSet1.charAt(x)
    }
    return password
}

