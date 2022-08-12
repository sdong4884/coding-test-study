// 약수는 최대 자기 자신밖에 안되므로 자기 자신 값 이하로 반복문
// 약수는 나머지가 0이 되어야 하므로 조건문 추가
function solution(n) {
  let arr = []
  let idx = 1
  while(idx <= n) {
    if (n % idx === 0) {
      arr.push(idx)
    }
    idx += 1
  }
  let answer = 0
  arr.forEach(item => {
    answer += item
  })
  return answer
}