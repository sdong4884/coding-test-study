/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12916
*/

function solution(s){
  let arr = s.split('')
  let pNum = 0
  let yNum = 0
  arr.forEach(item => {
    if (item.toUpperCase() === 'P') {
      pNum++
    } else if (item.toUpperCase() === 'Y') {
      yNum++
    }
  })
  return pNum === yNum ? true : false
}