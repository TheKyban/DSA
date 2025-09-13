function reverseString(str: string) {
    if (str.length === 1) return str;
    return reverseString(str.substring(1, str.length)) + str.charAt(0);
}

const str = "Hello";
console.log(reverseString(str));
