// const input = 'Race Car$%';
// const input = 'this is not palindrome';
// const input = 'A man, a plan, a canal, Panama!';
const input = 'Dabale arroz a la zorra el abad';

function sanitize(text) {
    const isLetter = RegExp('[a-zA-Z]');
    let sanitized = '';
    for (let x = 0; x < text.length; x++) {
        if (isLetter.exec(text[x])) {
            sanitized += text[x].toLowerCase();
        }
    }

    return sanitized;
}

function checkPalindrome(text) {
    let isPalindrome = true;
    const sanitized = sanitize(input);
    let x = 0;
    let y = sanitized.length - 1;

    while (x < y && isPalindrome) {
        if (sanitized[x] !== sanitized[y]) {
            isPalindrome = false;
        }
        x++;
        y--;
    }


    return isPalindrome;
}

const response = checkPalindrome(input);

console.log(response);
