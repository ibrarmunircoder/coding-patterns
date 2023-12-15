// Maximum Average Sub Array (Contigous)
// Fixed window size

// Big O complexity = O(n*k)

function main() {
    const k = 4;
    const nums = [1, 12, -5, -6, 50, 3];
    const answer = findMaxAverage(nums, k)
    console.log("Average Max: ", answer)
}

function findMaxAverage(nums, k) {
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = 0; j < k; j++) {
            // i + (k - 1) maximum index of each sub array 
            if(!(i+(k - 1) > nums.length - 1)) {
                sum += nums[i + j];
            }else {
                i = nums.length;
                j = k
            }
        }
        if(sum != 0) {
            max = Math.max(max, sum / k);
        }
    }
    if(max === Number.NEGATIVE_INFINITY) {
        return 0;
    }
    return max;
}

main();