function isSubsequence(s: string, t: string): boolean {
    let count = 0;
    for (let i = 0; i < t.length; i++) {
        if (t.charAt(i) === s.charAt(count)) count++;
    }
    return s.length === count;
}
