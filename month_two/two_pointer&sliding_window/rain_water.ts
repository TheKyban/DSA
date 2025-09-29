function rainWater(arr: number[]): number {
    let water = 0;
    let lMax = 0;
    let rMax = 0;
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        lMax = Math.max(lMax, arr[i]);
        rMax = Math.max(rMax, arr[j]);

        water += Math.min(lMax, rMax) - arr[i];
        water += Math.max(lMax, rMax) - arr[j];

        i++;
        j--;
    }
    return water;
}

// const arr = [1, 0, 2, 3, 0, 2, 3];
const arr = [1, 2, 3, 1, 3];
console.log(rainWater(arr));
