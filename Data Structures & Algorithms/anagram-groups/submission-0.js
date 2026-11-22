class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const map = new Map()

       for(let i = 0; i <strs.length;i++){
        const n = strs[i];
        const c = n.split("").sort().join("")
        if(!map.has(c)){
            map.set(c,[])
        }
        map.get(c).push(n)



       }
       return Array.from(map.values())
    }

}
