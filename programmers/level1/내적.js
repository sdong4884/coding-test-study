// 길이가 같은 두 1차원 정수 배열 a, b가 있을때 a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 이다.
function solution(a, b) {
  var answer = 0;
  a.forEach((item, index) => {
      answer += item * b[index]
  })
  return answer;
}