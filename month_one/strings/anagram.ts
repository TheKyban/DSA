function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap = new Map<string, number>();
    const tMap = new Map();

    for (let c of s) {
        if (!sMap.get(c)) {
            sMap.set(c, 1);
        } else {
            sMap.set(c, sMap?.get(c)! + 1);
        }
    }
    for (let c of t) {
        if (!tMap.get(c)) {
            tMap.set(c, 1);
        } else {
            tMap.set(c, tMap?.get(c)! + 1);
        }
    }

    for (let key of sMap.keys()) {
        if (sMap.get(key) !== tMap.get(key)) return false;
    }

    return true;
}

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
