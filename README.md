# palindromeRearranging question

Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

##
For a string to be a palindrome, then the string needs to have characters with an even count if the string length is even, and if it's odd,then the characters should have an odd count. So the strategy here is to create a new array to be used later, then change the string to array, then divide the length by two and round the result down using Math.floor. The result we get from there is the number of even counts that the string should have to be a palindrome.

We the loop via the array and store the number in a variable, then change splice it from the array. We then check if the variable value can still be found in the array. If so, the there's an even count of the previous element that we removed, we push the new found element to the new array and we splice the new found element as well. At the end of it all if the result we got prom the previous step (with Math.floor) is equal to the length of the new array, the return, otherwise it's false

9/10