function findNumber(arr, k) {
  return arr.filter(item => item === k).length ? 'YES' : 'NO'
}