// boyer moore's voting algo

function boyerMooresVotingAlgo(arr: number[]) {
    let candidate;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
        }

        count += arr[i] == candidate ? 1 : -1;
    }

    return candidate;
}

// basic
function majority_element(arr: number[]): number {
    const hm = new Map();
    let majority = arr[0];
    for (let n of arr) {
        if (!!hm[n]) {
            hm[n] = hm[n] + 1;
        } else {
            hm[n] = 1;
        }
        if (hm[n] > hm[majority]) majority = n;
    }

    return majority;
}
const nums = [5, 2, 5, 5, 7, 9, 5];
// console.log(majority_element(nums));
console.log(boyerMooresVotingAlgo(nums));
