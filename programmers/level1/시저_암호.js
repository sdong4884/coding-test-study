// 아스키코드표 활용
function solution(s, n) {
  let answer = ''
  let oldArr = []
  for(let i=0; i<s.length; i++) {
    oldArr.push(s.charCodeAt(i))
  }
  let newArr = oldArr.map(item => {
    let newItem = item + n
    if (item === 32) {
      return item
    } else if (newItem > 122) {
      return 96 + (newItem - 122)
    } else if (newItem > 90 && item <= 90) {
      return 64 + (newItem - 90)
    } else {
      return item + n
    }
  })
  newArr.forEach(item => {
    answer += String.fromCharCode(item)
  })
  return answer
}