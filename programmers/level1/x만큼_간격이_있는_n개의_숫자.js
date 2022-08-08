function solution(x, n) {
  var answer = []
  for(let i=0; i<n; i++) {
    answer = answer.concat(x + (x*i))
  }
  return answer
}