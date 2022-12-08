let str = "aabaabaa";

function countAnagrams(longStr, str) {
  let ans = [],
    j = 0,
    i = 0,
    count = 0;

  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
      count++;
    } else obj[str[i]]++;
  }

  while (j < longStr.length) {
    if (obj[longStr[j]] != undefined) obj[longStr[j]]--;
    if (obj[longStr[j]] === 0) count--;
    if (count === 0) ans.push(i);
    if (j - i + 1 === str.length) {
      if (obj[longStr[i]] != undefined) obj[longStr[i]]++;
      if (obj[longStr[i]] >= 1) count++;
    }
  }

  return ans;
}

countAnagrams("cbaebabacd", "abc");




/*Sliding Window Explanation + JavaScript Solution w/ comments (Faster than 100%)
abdultolba
172
Apr 22, 2020
The question is essentially asking us to search the string s for substrings that are anagrams of p. One way to check if a word is an anagram of another is to validate that:

The strings are of the same length (i.e aba can't be an anagram of abab simply bc 3 !== 4
Each letter in word1 exists in word2 AND occurs the same number of times.
i.e. If word1 === 'salsa, then word2 must have 2 a's, 2 s's, and 1 l. Thus, alass would be valid as the lengths are the same and the c.
Given these rules, we can either do a brute force search, which has a runtime of O(n^2)) - or a better approach: the sliding window. If you're unfamiliar with this technique, I recommend you watch this video which explains it with examples, but the concept is that we can often use this technique to determine a minimum, maximum, longest, shortest, or in this case, a contained element/substring.

We do this by:

Generate the frequency map by iterating over p, and increment the counter for each unique character (one that we come across for the first time).
Iterate over the string s using two pointers: start and end.
If the current character (value at the end index) exists in the frequency map, then we decrement the count which gets us closer to finding all the characters in p.
Once we reach count = 0, then we have to increment the frequency of the variable at index start, if it exists in the frequency map, as well increment the counter.
If the two lengths (the substring in the window from start to end) and p match up, then it is valid - push start to result.*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Approach: Sliding Window with HashMap to keep count of letters needed to satisfy anagram
// Time Complexity: O(S + P)
// Space Complexity: O(1)
var findAnagrams = function(s, p) {  
  if(!s || s.length < p.length) return [];
  
  // Result is the output array that stores start indices, 
  // freqMap maps each character in p to its count
  
  const result = [], freqMap = { };
  let count = 0, start = 0, end = 0;
  
  for(let char of p){
    if(freqMap[char] === undefined) count++
    freqMap[char] = (freqMap[char] || 0) + 1
  }
  
  // Iterate over s using two pointers (start and end)
  while(end < s.length){
    let char = s[end] // The 'current' character
    // If the current character exists in the frequency map, then decrement it's count
    // and if the count reaches 0, then we know we got the right # of occurences for it
    if(freqMap[char] !== undefined){
      freqMap[char] -= 1
      if(freqMap[char] === 0) count--;
    }
    
    end++
    
    // Once we reach count = 0, then check to see if it is 
    // a valid anagram and move the window to the right
    while(count === 0){
      let temp = s[start]
      if(freqMap[temp] !== undefined){
        freqMap[temp] += 1
        if(freqMap[temp] > 0) count++
      }
      
      // If it is valid, then add the start index to the result
      if(end - start === p.length) result.push(start)
      start++
    }
  }
  
  return result
};