function oddNumbers(l, r) {
  let answer = []
  let numArr = []
  for(let i=l; i<=r; i++) {
    numArr.push(i)
  }
  numArr.forEach(item => {
    if (item % 2) {
      answer.push(item)
    }
  })
  return answer
}