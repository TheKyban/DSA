function processData(input: string) {
    const data = input.trim().split("\n");
    const arr1 = new Set(data[0].split(" ").map(Number));
    const arr2 = new Set(data[1].split(" ").map(Number));

    // Quick size check
    if (arr1.size !== arr2.size) {
        console.log("False");
        return;
    }

    // Check every element
    for (let val of arr1) {
        if (!arr2.has(val)) {
            console.log("False");
            return;
        }
    }

    console.log("True");
}
const input = [1, 2, 3, 4];
