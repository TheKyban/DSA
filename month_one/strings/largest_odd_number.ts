function largestOddNumber(num: string): string {
    for (let i = num.length - 1; i >= 0; i--) {
        const ch = num[i];
        if (parseInt(ch) % 2 === 1) {
            return num.substring(0, i + 1);
        }
    }
    return "";
}

const num = "239537672423884969653287101";

console.log(largestOddNumber(num));
