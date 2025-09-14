function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];
    strs = strs.sort();
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0].charAt(i) != strs[strs.length - 1].charAt(i)) break;
        prefix += strs[0].charAt(i);
    }
    return prefix;
}

// const strs = ["dog", "racecar", "car"];
const strs = ["flower", "flow", "flight"];
// const strs = ["acc", "aaa", "aaba"];
console.log(longestCommonPrefix(strs));
