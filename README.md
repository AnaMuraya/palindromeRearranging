# palindromeRearranging question

Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

## explanation

For a string to form a palindrome, it must have at most one character with an odd count.

we create an empty object charCount to count the occurrence of each character in the input string. We then iterate through the input string and update the count of each character in the charCount object. We use the || operator to set the count of a character to 0 if it doesn't exist in the object yet.

The code first accesses the value of the char property in the charCount object by using square brackets notation: charCount[char].
If the value of charCount[char] is falsy (i.e., undefined, null, 0, false, NaN, or an empty string), the expression (charCount[char] || 0) evaluates to 0. Otherwise, the expression evaluates to charCount[char].
The code then adds 1 to the resulting value and assigns the result back to charCount[char], effectively incrementing the count of the character.
This line of code is a shorthand way of incrementing the count of a character in an object, without having to check whether the property exists or initializing it to zero. If the property doesn't exist, it will be created and initialized to zero before being incremented.

This code uses a for...of loop to iterate over the values of an object called charCount.

The Object.values() method is used to extract an array of the values of the charCount object. Then, the for...of loop is used to iterate over each value in the array.

The syntax let count of Object.values(charCount) declares a new variable count for each iteration of the loop and assigns it the value of the current element. In this case, count will take on the value of each count of a character in the charCount object.

For example, if charCount is {a: 2, b: 3, c: 1}, then Object.values(charCount) will return [2, 3, 1]. The for...of loop will iterate over this array and assign count the value 2, then 3, then 1 in each iteration. Used to iterate over the values of an object, which is not possible using a traditional for loop.

If the number of characters with an odd count exceeds 1, we return false because the string cannot be rearranged to form a palindrome. Otherwise, we return true.

For example, if we call solution("aabb"), the function will return true because we have two characters a and two characters b, and we can rearrange them to form the palindrome "abba".