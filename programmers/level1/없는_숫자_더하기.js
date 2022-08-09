function solution(numbers) {
  var arr = [0,1,2,3,4,5,6,7,8,9]
  var arrSum = 0
  var numbersSum = 0
  
  arr.forEach(item => {
    arrSum += item
  })
  numbers.forEach(item => {
    numbersSum += item
  })
  
  return arrSum - numbersSum
}