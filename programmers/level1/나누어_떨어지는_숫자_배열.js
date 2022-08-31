/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
  array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

function solution(arr, divisor) {
  let filterArr = arr.filter(item => item % divisor === 0)
  return filterArr.length ? filterArr.sort((a, b) => a - b) : [-1]
}