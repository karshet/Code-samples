function sumOfSubArray(arr, k){
  const result = [arr.slice(0,k).reduce((sum=0, a)=> sum + a)]
  for(let i = 1; i < arr.length - k + 1; i++){
    let start = i
    let end = i + k
    let currentSum = result[i-1] - arr[start - 1] + arr[end - 1]
    result.push(currentSum)
  }
  return result
}

console.log(sumOfSubArray([1,1,1,1,1,1,1], 5))
