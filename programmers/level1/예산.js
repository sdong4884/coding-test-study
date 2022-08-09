function solution(d, budget) {
  let answer = 0
  let sortArr = d.sort((a, b) => a - b)
  for(let i=0; i<d.length; i++) {
    answer += sortArr[i]
    if (answer > budget) {
      return i
    }
  }
  return d.length
}