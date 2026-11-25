class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""

        for(let i = 0; i < strs.length;i++){
            result += strs[i].length + "#"+ strs[i]
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //4#neet4#code
    decode(str) {
        let result = []
        let i = 0

        while(i < str.length){
         let j = i
         while(str[j] !== "#")j++;
         let length = Number(str.slice(i,j))
         let word = str.slice(j + 1, j+1+ length)
      
         result.push(word)
             i = j + 1 + length; 

        }
        return result
        
    }
}
