/* 값이 [leftValue, rightValue]인 데이터 개수를 반환하는 함수 */
function countByRange(arr, leftValue, rightValue) {
  // 유의: lowerBound와 upperBound는 end 변수의 값을 배열 길이로 설정
  const rightIndex = upperBound(arr, rightValue, 0, arr.length);
  const leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

/* 정렬된 배열 arr에서 target가 들어갈 가장 왼쪽 인덱스 찾기 */
function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target)
      end = mid; // 같을 때 end 이동 (최대한 왼쪽으로 이동)
    else start = mid + 1;
  }

  return end;
}

/* 정렬된 배열 arr에서 target가 들어갈 가장 오른쪽 인덱스 찾기 */
function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid; // 클 때만 왼쪽으로 이동
    else start = mid + 1; // 같을 때 start 이동 (최대한 오른쪽으로 이동)
  }

  return end;
}

module.exports = countByRange;
