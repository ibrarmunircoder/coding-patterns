// Maximum Average Sub Array (Contigous)
// Fixed window size

// Big O complexity = O(n)
// our start will touch n - (k - 2) ==> 6 - (4 - 2) = 4 
// start will touch four elements

function main() {
    const k = 4;
    const nums = [1, 12, -5, -6, 50, 3];
    const answer = findMaxAverageWithSlidingWindow(nums, k)
    console.log("Average Max: ", answer)
}

function findMaxAverageWithSlidingWindow(nums, k) {
    let windSum = 0;
    let start = 0;
    let max = Number.NEGATIVE_INFINITY;

    for(let end = 0; end < nums.length; end++) {
        windSum += nums[end];
        if((end - start + 1) === k) {
            max = Math.max(max, windSum / k);
            windSum -= nums[start];
            start++;
        }
    }
    return max;
}

main();