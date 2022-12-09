function findRotation2(arr) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if(arr[mid]<arr[mid-1] && arr[mid]<arr[mid+1]) return mid;
  }
}
