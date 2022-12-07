/*Sum of subarray
Description

You are given an array of N integers and a single integer K. You need to find out if there is a subarray, which has the sum exactly as K.


Input
Input Format

First-line contains T, no of test cases.

First-line of each test case contains N, the size of the array, and K.

Second-lineof each test casecontains N spaced integers, elements of an array.

Constraints

1 <= T <= 10

1 <= N <= 10^5

1 <= A[i] <= 10^12

1 <= K <= 10^12


Output
For each test case print "Yes", if there exists a subarray with sum K or else print "No".


Sample Input 1 

3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1
Sample Output 1

Yes
No
Yes
*/

find = (size, tar, arr) => {
  let i = 0,
    sum = 0,
    j = 0,
    ans = "No";
  while (j < size) {
    sum += arr[j];
    if (sum < k) j++;
    else if (sum === tar) {
      ans = "Yes";
      break;
    } else {
      while (sum > k) sum -= arr[i++];
      if (sum === tar) {
        ans = "Yes";
        break;
      }
      j++;
    }
  }
  console.log(ans);
};
