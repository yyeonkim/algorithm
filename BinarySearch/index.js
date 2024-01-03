/* 재귀 함수를 사용한 이분 탐색 */
function binarySearchRecursive(arr, target, start, end) {
  if (start > end) return -1;

  let mid = parseInt((start + end) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target)
    return binarySearchRecursive(arr, target, start, mid - 1);
  if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, end);
}

/* 반복문을 사용한 이분 탐색 */
function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) end = mid - 1;
    if (arr[mid] < target) start = mid + 1;
  }

  return -1;
}
