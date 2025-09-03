function maxFreqSum(s: string): number {
    let maxFreqVowel = 0;
    let maxFreqConsonent = 0;

    const hm = new Map();

    for (let i = 0; i < s.length; i++) {
        if (hm[s[i]]) {
            hm[s[i]] += 1;
        } else {
            hm[s[i]] = 1;
        }

        if (
            s[i] === "a" ||
            s[i] === "e" ||
            s[i] === "i" ||
            s[i] === "o" ||
            s[i] === "u"
        ) {
            if (maxFreqVowel < hm[s[i]]) {
                maxFreqVowel = hm[s[i]];
            }
        } else {
            if (maxFreqConsonent < hm[s[i]]) {
                maxFreqConsonent = hm[s[i]];
            }
        }
    }

    return maxFreqConsonent + maxFreqVowel;
}

console.log(maxFreqSum("successes"));
