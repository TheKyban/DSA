function gcd(a: number, b: number): number {
    if (b > a) {
        // swap
        a = a + b;
        b = a - b;
        a = a - b;
    }
    if (a % b === 0) return b;
    return gcd(a % b, a);
}

let a = 2;
let b = 5;

console.log(gcd(a, b));
