coding assignment

var jump = function(nums) {
    let left = 0;
    let right = 0;
    let res = 0;

    while(right<nums.length-1){
        let max = 0;

        for(let i = left; i<=right;i++){
            max = Math.max(nums[i]+i,max)
        }
        left = right+1;
        right = max;

        res++
    }
    if(res==0)return -1
    return res;
};
//Time complexity O(N*N)
//space complexity O(1)
