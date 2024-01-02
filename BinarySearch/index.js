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
