function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

// let nums1 = [2, 0],
//   m = 1,
//   nums2 = [1],
//   n = 1;
// let nums1 = [0],
//   m = 0,
//   nums2 = [1],
//   n = 1;
// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;
let nums1 = [4, 5, 6, 0, 0, 0],
  m = 3,
  nums2 = [1, 2, 3],
  n = 3;
merge(nums1, m, nums2, n);

console.log(nums1);
