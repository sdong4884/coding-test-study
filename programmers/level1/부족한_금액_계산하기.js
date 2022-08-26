/*
  https://school.programmers.co.kr/learn/courses/30/lessons/82612
*/


// Math.abs() 함수는 주어진 숫자의 절대값을 반환한다.

function solution(price, money, count) {
  let totalPrice = 0
  for (let i=1; i<=count; i++) {
    totalPrice += price * i
  }
  let result = money - totalPrice
  return result >= 0 ? 0 : Math.abs(result)
}