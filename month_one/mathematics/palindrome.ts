function isPalindrome(x: number): boolean {
    if (x < 1) return false;
    if (x < 10) return true;
    let num = x;
    let rev = 0;
    while (num > 0) {
        const lastDigit = num % 10;
        num = Math.floor(num / 10);
        rev += lastDigit;
        if (num > 0) rev *= 10;
    }
    return x === rev;
}

console.log(isPalindrome(121)); // true
