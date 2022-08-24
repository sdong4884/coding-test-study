/*
  https://school.programmers.co.kr/learn/courses/30/lessons/68644
  정수 배열 numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아라.

  배열의 중복 제거 : [...new Set(arr)]
*/

function solution(numbers) {
  let arr = []
  for(let i=0; i<numbers.length-1; i++) {
    for(let j=i+1; j<numbers.length; j++) {
      arr.push(numbers[i] + numbers[j])
    }
  }
  let answer = [...new Set(arr.sort((a,b) => a - b))]
  return answer
}