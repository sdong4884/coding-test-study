function solution(n) {
  let answer = []
  let str = String(n)
  for(let i=0; i<str.length; i++) {
    answer.splice(0, 0, Number(str[i]))
  }
  return answer
}