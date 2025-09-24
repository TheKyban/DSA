// brute force
function find(haystack: string, needle: string) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let first = i;
        let second = 0;
        while (
            second < needle.length &&
            haystack.charAt(first) === needle.charAt(second)
        ) {
            first++;
            second++;
        }

        if (second === needle.length) {
            return i;
        }
    }
    return -1;
}

// optimal
// KMP
function findLps(needle: string): number[] {
    const lps = new Array(needle.length);
    lps[0] = 0;
    // cal lps
    let pre = 0;
    let suf = 1;
    while (suf < needle.length) {
        if (needle.charAt(pre) === needle.charAt(suf)) {
            lps[suf] = pre + 1;
            pre++;
            suf++;
        } else {
            if (pre === 0) {
                lps[suf] = 0;
                suf++;
            } else {
                pre = lps[pre - 1];
            }
        }
    }
    return lps;
}
function strStr(haystack: string, needle: string) {
    if (haystack === needle) return 0;

    const lps = findLps(needle);

    let first = 0;
    let second = 0;
    while (first < haystack.length && second < needle.length) {
        if (haystack.charAt(first) === needle.charAt(second)) {
            first++;
            second++;
        } else {
            if (second === 0) {
                first++;
            } else {
                second = lps[second - 1];
            }
        }
    }
    if (needle.length === second) {
        return first - second;
    }
    return -1;
}

const haystack = "AAAABABCABDABCABCABD";
const needle = "ABABCABDABCABCABD";

console.time("it");
console.log(find(haystack, needle));
console.timeEnd("it");
console.time("opt");
console.log(strStr(haystack, needle));
console.timeEnd("opt");
