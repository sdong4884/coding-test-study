// Math.sqrt() - 숫자의 제곱근을 반환
// Number.isInteger() - 주어진 값이 정수인지 판별
// Math.pow(base, exponent) - base에 exponent를 제곱한 값을 반환
function solution(n) {
  var number = Math.sqrt(n)
  if (Number.isInteger(number)) {
      return Math.pow(number+1, 2)
  } else {
      return -1
  }
}