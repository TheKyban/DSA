function maxArea(height: number[]): number {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        if (max < area) {
            max = area;
        }
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
