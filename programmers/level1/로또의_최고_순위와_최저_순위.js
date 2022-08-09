function solution(lottos, win_nums) {
  var answer = []
  var zeroNumbers = 0
  var includeNumbers = 0
  var maxMinNumbers = []
  
  lottos.forEach(item => {
    if (item === 0) zeroNumbers += 1
    if (win_nums.includes(item)) includeNumbers += 1
  })
  maxMinNumbers.push(includeNumbers + zeroNumbers, includeNumbers)
  maxMinNumbers.forEach(item => {
    var rank
    if (item === 6) {
      rank = 1
    } else if (item === 5) {
      rank = 2
    } else if (item === 4) {
      rank = 3
    } else if (item === 3) {
      rank = 4
    } else if (item === 2) {
        rank = 5
    } else {
      rank = 6
    }
    answer = answer.concat(rank)
  })
  
  return answer
}

/* rank 배열 센스 ! 

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter(v => win_nums.includes(v)).length;
  let zeroCount = lottos.filter(v => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
*/