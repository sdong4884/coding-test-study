// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 나누어 떨어져야한다.
function solution(x) {
  var numArr = Array.from(String(x), Number) // 숫자를 배열로 변환
  var sum = 0
  numArr.forEach(item => { 
    sum += item 
  })
  return x % sum === 0 ? true : false
}