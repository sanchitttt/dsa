/**
 * 
 Problem Description
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input format
You ‘ll be given space-separated strings.

Output format
Output the longest common prefix amongst the array of strings. If there is no common prefix, return an empty string "".

Sample Input 1
flower flow flight

Sample Output 1
fl

Explanation 1
fl is common in all three strings

Sample Input 2
dog racecar car

Sample Output 2
""

Explanation 2
There is no common prefix.Print an empty string
 */
function longestCommonPrefix(strs) {
    let result = "";
    for (let i = 0; i < strs.length; i++) {
        let temp = "";
        let resultIndex = 0;
        if (!result.length) {
            result = strs[i];
        }
  
        else {
            let foundAtleastOnce = false;
            for (let j = 0; j < strs[i].length; j++) {
                if (strs[i][j] === result[resultIndex]) {
                    
                    temp += strs[i][j];
                    foundAtleastOnce = true;
                    resultIndex++;
                    continue;
                }
                else {
                    break;
                }
            }
            if (foundAtleastOnce) {
                result = temp;
            }
            
            else{
                return "";
            }
        }
    }
    return result;
}