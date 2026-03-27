/**
 * Problem Description
Rohan is playing a game in which he has got two strings, string A and string B. He needs to generate a passcode to qualify for the next level using those strings. The passcode will be in the form of a string. He needs to take the first character of string A and he should add it to the passcode. After that, he needs to take the first character of string B and he should add it to the passcode. Then he needs to take the second character of string A and he should add it to the passcode, and so on.

He needs to continue the process until there are no letters left in one of either A or B. When this happens, add all the remaining letters of the other string to the passcode. This is the resultant passcode to qualify for the next level, return this.


Input format
First line contains string A.

Second line contains string B


Output format
Return a string(passcode).


Sample Input 1
aaaaa

Bbb


Sample Output 1
abababaa
 */

function passCode(A, B) {
    let i = 0;
    let j = 0;
    let result = "";

    while (i < A.length || j < B.length) {
        if (i >= A.length && j < B.length) {
            result += B[j++]
        }
        else if (i < A.length && j >= B.length) {
            result += A[i++];
        }
        else {
            result+=A[i++];
            result+=B[j++];
        }
    }
    return result;
}


