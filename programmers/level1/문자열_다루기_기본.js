/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12918
  문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
*/

/*
  처음에 아래와 같이 풀었는데, 테스트 케이스에서 하나를 통과할 수 없었고 도저히 그 이유를 알 수 없어 검색해본 결과
  자바스크립트에서는 숫자에 e가 붙으면 지수로 인식한다고 한다. 예를 들면 isNaN(1e22)는 1의 22승인 숫자다.
  아무튼 이런 이유로 문자열 전체로 판단하면 안되고 문자열을 하나씩 쪼개서 숫자인지 문자인지 확인해주어야 했다.

 function solution(s) {
    if((s.length === 4 || s.length === 6) && !isNaN(s)) {
      return true
    } else {
      return false
    }
  }
*/

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split('').every(item => !isNaN(item))
  } else {
    return false
  }
}

/*
  정규식을 이용해서 푼 다른 사람의 풀이가 아주 인상적이였다.
  /^\d{6}$|^\d{4}$/ : 6자리 숫자 또는 4자리 숫자

  function solution(s) {
    let regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }
*/