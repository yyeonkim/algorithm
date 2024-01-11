/**
 * N x N 체스판에 N개의 퀸을 서로 공격하지 못하도록 놓기
 */
const n = 8;
const queens = []; // 현재 체스판에 놓인 퀸의 위치 정보
let count = 0;

dfs(0);
console.log(count);

function dfs(row) {
  if (row === n) {
    count++; // 퀸 N개를 모두 배치했으면 카운트
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없으면 무시

    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

function possible(x, y) {
  queens.forEach(([a, b]) => {
    if (a == x || b == y) return false; // 같은 행/열에 있으면 불가능
    if (Math.abs(a - x) === Math.abs(b - y)) return false; // 같은 대각선에 있으면 불가능
  });
  return true;
}
