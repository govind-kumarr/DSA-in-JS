function merge(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    place = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[place--] = nums1[i--];
    } else {
      nums1[place--] = nums2[j--];
    }
  }

  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
