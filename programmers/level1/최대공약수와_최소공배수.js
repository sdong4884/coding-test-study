// 유클리드 호제법
// 1. 두 수를 나눈다.
// 2. 만약 나누고 난 나머지가 0 이라면 뒤에 있던 수가 최대공약수이다.
// 3. 만약 나머지가 0 이 아니라면, 뒤에 수를 다시 나머지로 나눈다.
// 4. 이를 반복해서 나머지가 0 이 될 때, 그 수가 바로 두 수의 최대공약수이다.
// a,b의 최소공배수 * a,b의 최대공약수 = a * b
function solution(n, m) {
  let answer = []
  let a = n
  let b = m
  let r
  while(true) {
    r = a % b
    if (r === 0) {
      answer[0] = b
      break
    }
    a = b
    b = r
  }
  answer[1] = n * m / answer[0]
  
  return answer
}