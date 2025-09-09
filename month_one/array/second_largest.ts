function second_largest_number(arr: number[]): [number, number] {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second) {
            second = num;
        }
    }

    return [first, second];
}

const arr = [2, 4, 3, 5, 6];
console.log(second_largest_number(arr));
