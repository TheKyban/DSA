// brute force approach
function lengthOfLongestSubstring(s: string): number {
    let count = 0;
    let maxCount = 0;

    let mp: {
        [key: string]: number;
    } = {};
    let i = 0;
    while (i < s.length) {
        if (mp[s.charAt(i)] === undefined) {
            mp[s.charAt(i)] = i;
            count++;
        } else {
            count = 1;
            i = mp[s.charAt(i)] + 1;
            mp = { [s.charAt(i)]: i };
        }

        if (count > maxCount) maxCount = count;
        i++;
    }
    return maxCount;
}

const s = "dvdf";
console.log(lengthOfLongestSubstring(s));
