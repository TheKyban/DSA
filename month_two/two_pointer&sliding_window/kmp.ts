//longest preffix suffix
function kmp(s: string): number {
    const lps = new Array(s.length);
    let pre = 0;
    let suf = 1;
    while (suf < s.length) {
        if (s.charAt(pre) === s.charAt(suf)) {
            lps[suf] = pre + 1;
            suf++;
            pre++;
        } else {
            if (pre === 0) {
                lps[suf] = 0;
                suf++;
            } else {
                pre = lps[pre - 1];
            }
        }
    }
    return lps[s.length - 1];
}

const str = "ABCABDABCABCABD";
const str2 = "ABCABDABCABCABD";
console.log(kmp(str));
console.log(kmp(str2));
