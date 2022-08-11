function solution(s) {
  let answer = ''
  let arr = s.split(' ')
  arr.forEach((item, idx) => {
    if (idx !== 0) answer += ' ' 
    for(let i=0; i<item.length; i++) {
      if (i % 2) {
        answer += item[i].toLowerCase()
      } else {
        answer += item[i].toUpperCase()
      }
    }
  })
  return answer
}