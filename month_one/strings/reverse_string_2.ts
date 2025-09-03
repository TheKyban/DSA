function reverseStr(s: string, k: number): string {
    let r: string[] = s.split("");
    for (let i = 0; i < r.length - 1; i += 2 * k) {
        let left = i;
        let right = i + k - 1;
        while (left < right) {
            const temp = r[left];
            r[left] = r[right];
            r[right] = temp;
            left++;
            right--;
        }
    }
    return r.join("");
}

const s = "abcdef";
const k = 3;

console.log(reverseStr(s, k));
