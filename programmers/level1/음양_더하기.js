// javascript reduce
function solution(absolutes, signs) {
  var answer = signs.reduce((acc, cur, idx) => {
    return cur ? acc += absolutes[idx] : acc -= absolutes[idx]
  }, 0)
  return answer
}