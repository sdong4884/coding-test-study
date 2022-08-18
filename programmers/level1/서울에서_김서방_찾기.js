/* 
  https://school.programmers.co.kr/learn/courses/30/lessons/12919
  String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요
*/

function solution(seoul) {
  let index = 0
  seoul.forEach((item, idx) => {
    if (item === 'Kim') {
      index = idx
    }
  })
  return `김서방은 ${index}에 있다`
}

/* 다른 사람의 풀이 
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
*/