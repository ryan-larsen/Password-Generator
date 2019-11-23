var resultEl = document.querySelector('#result')
var uppercaseEl = document.querySelector('#uppercase')
var lowercaseEl = document.querySelector('#lowercase')
var numbersEl = document.querySelector('#numbers')
var symbolsEl = document.querySelector('#symbols')
var submitEl = document.querySelector('#submit')

function passLength (length) {
    var upper = ''
    var lower = ''
    var number = ''
    var symbol = ''
    var password = ''
    

    if (uppercaseEl.checked === true) {
        upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        charSet1 = charSet1.concat(upper)
    }

    if (lowercaseEl.checked === true) {
        lower = 'abcdefghijklmnopqrstuvwxyz'
        charSet1 = charSet1.concat(lower)
    }

    if (numbersEl.checked === true) {
        number = '1234567890'
        charSet1 = charSet1.concat(number)
    }

    if (symbolsEl.checked === true) {
        symbol = '`~!@#$%^&*()_+[]\{}|;:,./<>?'
        charSet1 = charSet1.concat(symbol)
    }

    for (var i = 0; i <length; i++) {
        var x = Math.floor(Math.random() * charSet1.length) 
        password += charSet1.charAt(x)
    }
    return password
}

submitEl.addEventListener('click', passLength).resultEl.textContent = password





