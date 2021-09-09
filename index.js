function largestSubarraySum(array) {
    let max = 0
    let currSum = 0
    for(let number of array) {
        if(number + currSum < 0){
            currSum = 0;
        }else{
            currSum += number;
        }
        max = Math.max(max, currSum);
    }
    return max
}