// brute force approach
function threeSum(nums: number[]): number[][] {
    const ans = new Set<string>();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort(
                        (a, b) => a - b
                    );
                    ans.add(JSON.stringify(triplet));
                }
            }
        }
    }
    return Array.from(ans, (item) => JSON.parse(item));
}

// optimal approach
function threeSumO(nums: number[]): number[][] {
    const ans = new Set<string>();
    for (let i = 0; i < nums.length; i++) {
        const tempSet = new Set<number>();
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (tempSet.has(-sum)) {
                ans.add(
                    JSON.stringify(
                        [nums[i], nums[j], -sum].sort((a, b) => a - b)
                    )
                );
            }
            tempSet.add(nums[j]);
        }
    }
    return Array.from(ans, (item) => JSON.parse(item));
}

// best approach
function threeSumB(nums: number[]): number[][] {
    const ans: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return ans;
}
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSumB(nums));
