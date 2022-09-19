var number = parseInt(prompt('Enter any number'));
console.log("Given number is: " + number);
var temp = number;
console.log("Reverse order of given number in words: ");
while (temp) {
    lastDigit = temp % 10;
    switch (lastDigit) {
        case 0:
            {
                console.log('zero');
                break;
            }
        case 1:
            {
                console.log('one');
                break;
            }
        case 2:
            {
                console.log('two');
                break;
            }
        case 3:
            {
                console.log('three');
                break;
            }
        case 4:
            {
                console.log('four');
                break;
            }
        case 5:
            {
                console.log('five');
                break;
            }
        case 6:
            {
                console.log('six');
                break;
            }
        case 7:
            {
                console.log('seven');
                break;
            }
        case 8:
            {
                console.log('eight');
                break;
            }
        case 9:
            {
                console.log('nine');
                break;
            }

    }
    temp=(temp-lastDigit)/10;
}