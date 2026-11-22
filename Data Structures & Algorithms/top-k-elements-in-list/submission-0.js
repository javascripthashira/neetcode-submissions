class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const arrr = []
        const map = new Map();

        for(let i = 0;i < nums.length;i++){
            const n = nums[i]
            map.set(n,(map.get(n) ||0 ) + 1)
        }

        const arr = Array.from(map)

        arr.sort((a,b)=> b[1] - a[1])

           for(let i = 0;i < k;i++){
            arrr.push(arr[i][0])
           }
       return arrr
    }
}
