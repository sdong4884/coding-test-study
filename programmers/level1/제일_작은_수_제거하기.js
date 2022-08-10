function solution(arr) {
  var min
  if (arr.length === 1) {
    return [-1]
  }
  arr.forEach((item, idx) => {
    if (idx === 0) min = item
    if (min >= item) min = item
  })
  return arr.filter(item => item !== min)
}