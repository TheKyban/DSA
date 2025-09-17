const arr = [
    ["x", "x", "x", "x"],
    ["x", "o", "x", "o"],
    ["x", "x", "o", "x"],
    ["x", "x", "x", "o"],
];

function changeXtoO(arr: string[][]) {
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[i].length - 1; j++) {
            if (arr[i][j] === "o") {
                // upper bottom left right
                if (
                    arr[i - 1][j] === "x" &&
                    arr[i + 1][j] === "x" &&
                    arr[i][j - 1] === "x" &&
                    arr[i][j + 1] === "x"
                ) {
                    arr[i][j] = "x";
                }
            }
        }
    }
}

const arr2 = [
    ["x", "o", "x", "x", "x"],
    ["x", "o", "x", "o", "x"],
    ["x", "o", "o", "x", "x"],
    ["x", "o", "x", "x", "x"],
    ["x", "x", "x", "o", "o"],
];

// function changeXtoOWithBorder(arr: string[][]) {
//     for (let i = 1; i < arr.length - 1; i++) {
//         for (let j = 1; j < arr[i].length - 1; j++) {
//             // top bottom left right
//             if (
//                 i - 1 == 0 &&
//                 i + 1 == arr.length - 1 &&
//                 j - 1 == 0 &&
//                 j + 1 == arr[i].length - 1
//             ) {
//                 continue;
//             } else if (arr[i][j] === "o") {
//                 // upper bottom left right
//                 if (
//                     arr[i - 1][j] === "x" &&
//                     arr[i + 1][j] === "x" &&
//                     arr[i][j - 1] === "x" &&
//                     arr[i][j + 1] === "x"
//                 ) {
//                     arr[i][j] = "x";
//                 }
//             }
//         }
//     }
// }

changeXtoO(arr2);
for (let i of arr2) {
    console.log(i);
}
