function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const m = new Map();
    const l = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!!m.get(s.charAt(i)) && m.get(s.charAt(i)) !== t.charAt(i)) {
            return false;
        } else if (!m.get(s.charAt(i)) && !!l.get(t.charAt(i))) {
            return false;
        } else {
            m.set(s.charAt(i), t.charAt(i));
            l.set(t.charAt(i), s.charAt(i));
        }
    }

    return true;
}

const s = "badc";
const t = "baba";

console.log(isIsomorphic(s, t));
