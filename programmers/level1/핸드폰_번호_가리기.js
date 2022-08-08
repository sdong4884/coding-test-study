function solution(phone_number) {
  var num = phone_number.length - 4
  var answer = '*'.repeat(num) + phone_number.substring(num)
  return answer
}