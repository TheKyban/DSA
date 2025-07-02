/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    let curr = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = curr;
  }
}

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
