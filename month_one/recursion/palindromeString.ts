function isPalindrome(str: string) {
    if (str.length === 2 || str.length === 3)
        return str[0] === str[str.length - 1];
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("ada"));
