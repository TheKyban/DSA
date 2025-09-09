function missingNumbers(arr: number[], brr: number[]): number[] {
    // Write your code here
    const missing: number[] = [];

    // brr
    const brrFrq = new Map<number, number>();
    for (let i of brr) {
        if (brrFrq?.get(i)) {
            brrFrq.set(i, brrFrq?.get(i)! + 1);
        } else {
            brrFrq.set(i, 1);
        }
    }
    // arr
    const arrFrq = new Map<number, number>();
    for (let i of arr) {
        if (arrFrq.get(i)) {
            arrFrq.set(i, arrFrq?.get(i)! + 1);
        } else {
            arrFrq.set(i, 1);
        }
    }

    for (let key of brrFrq.keys()) {
        if (brrFrq.get(Number(key)) !== arrFrq.get(Number(key)))
            missing.push(key);
    }
    return missing;
}

const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
console.log(missingNumbers(arr, brr)); // [204, 205, 206]
