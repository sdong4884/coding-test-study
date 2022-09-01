/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12906
*/

function solution(arr) {
  let filterArr = arr.filter((item, idx) => {
    return item !== arr[idx+1]
  })
  return filterArr
}