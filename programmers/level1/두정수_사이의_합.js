/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12912
  두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수
*/

function solution(a, b) {
  let min = 0
  let max = 0
  if (a > b) {
    min = b
    max = a
  } else {
    min = a
    max = b
  }
  
  let sum = 0
  for (let i=min; i<=max; i++) {
    sum += i
  }
  return sum
}