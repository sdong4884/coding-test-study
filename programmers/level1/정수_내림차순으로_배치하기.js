// 정수 n을 숫자 배열로 변환 : Array.from(String(n), Number)
// 숫자 배열 내림차순 : arr.sort((a, b) => b - a)
// 배열의 모든 요소를 연결해 하나의 문자열로 변환 : Array.join('') (* 매개변수가 없으면 ,로 연결됨) 
function solution(n) {
  let arr = Array.from(String(n), Number)
  let sortArr = arr.sort((a, b) => b - a)
  return Number(sortArr.join(''))
}