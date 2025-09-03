function balancedStringSplit(s: string): number {
    let match = 0;
    let character = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") character++;
        if (s[i] === "R") character--;
        if (character === 0) match++;
    }
    return match;
}

const s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));
