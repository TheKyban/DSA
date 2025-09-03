function lengthOfLastWord(s: string): number {
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " " && length > 0) {
            break;
        }
        if (s[i] !== " ") {
            length++;
        }
    }

    return length;
}

const s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));