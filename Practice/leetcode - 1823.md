# Find the Winner of the Circular Game or famously known as the Josephus Problem

## There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend

The rules of the game are as follows:

- Start at the 1st friend.
- Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
- The last friend you counted leaves the circle and loses the game.
- If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
- Else, the last friend in the circle wins the game.

Given the number of friends, n, and an integer k, return the winner of the game.

<center>
    <img src="../images/leetcode-1823.png">
</center>

```
Example 1:

Input: n = 5, k = 2
Output: 3
Explanation: Here are the steps of the game:
1) Start at friend 1.
2) Count 2 friends clockwise, which are friends 1 and 2.
3) Friend 2 leaves the circle. Next start is friend 3.
4) Count 2 friends clockwise, which are friends 3 and 4.
5) Friend 4 leaves the circle. Next start is friend 5.
6) Count 2 friends clockwise, which are friends 5 and 1.
7) Friend 1 leaves the circle. Next start is friend 3.
8) Count 2 friends clockwise, which are friends 3 and 5.
9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.

Example 2:

Input: n = 6, k = 5
Output: 1
Explanation: The friends leave in this order: 5, 4, 6, 2, 3. The winner is friend 1.
```

### Approach - 1 Simulation

#### Intuition - 1

Pretty normal and understandable approach which first comes to anyone's mind

- We can simulate the circle with array: when we reached the last element in the array we'll go to the first element in the array
- Since we want to find original index as elements we would use 1-indexed indeces from original circle
- You can find the index (relative in the array) of next player to lose as (cur_ind + k - 1) % n where n is the current size of array

#### Coding - 1

- Initialize a list circle with integers from 1 to n representing initiall indeces.
- Set the initial index cur_ind to 0.
- Begin a while loop that continues until the length of circle is 1 (we've found a winner):
  - Calculate the index next_to_remove of the next person to be removed.
  - Remove the element at next_to_remove from circle.
  - Update cur_ind to next_to_remove.
- Return the last remaining element in circle (winner original index).

#### Solution - 1

```
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {

    let frndList = Array.from({length: n}, (_, i) => i + 1);

    let startIndex = 0;

    while(frndList.length > 1) {
        let removeIndex = (startIndex + k - 1) % frndList.length;

        frndList.splice(removeIndex, 1);

        startIndex = removeIndex;
    }

    return frndList[0];
};
```

#### Complexity - 1

Time complexity: O(n^2), since you remove n - 1 friends from circle with pop operation (which is O(n)).

Space complexity: O(n), since we use additional array of size n - circle

### Approach - 2 Recursion With Subproblems

#### Intuition - 2

This approach in much harder to understand but if you do the most oprimized solution (next) will be easy for you

- If you have circle [1, 2, 3, 4] and start index now 0 (0-indexed). Let's say k = 2. Then, as said earlier index (0-indexed) of element we want to remove will be (0 + 2 - 1) % 4 = 1.
- After removing we will have [1, 3, 4] and start index is 1 (0-indexed). But this is circle, so we can rearange this as [3, 4, 1] and now say that our start index is one more time 0. Can you see how indeces was changed? Every index ind (from the [1, 2, 3, 4]) was changed to ind - k in this new array. Next state will be [1, 3]
- After removing 3 we will have [1] which is our answer we want to return after returning index to normal.
- This example lead us to observation that we can divide problem on small subproblems (in fact, bottom-up DP) - if we know relative index of the winner let's say winner(n, k) then we can find winner(n + 1, k) as (winner(n, k) + k) % (n + 1). So if we have winner(1, 2) = 0 then winner(2, 2) = (0 + 2) % 2 = 0 -> winner(3, 2) = (0 + 2) % 3 = 2 and winner(4, 2) = (2 + 2) % 4 = 0 which was answer we've found above (they're the same since 0 is 0-indexed and above we have 1 1-indexed).
- Some more explanations for you competely understand why this works:
  - As was shown every time we remove some friend we reduce our subproblem to (n - 1, k).
  - But as we move to smaller subproblem we also change every index on -k (and so result index too), so we want to add this k after we calculated smaller subproblem so as we haven't changed indexes at all.
  - We find modulo n because we don't want to exceed the size of the array (as shown above winner(n - 1, k) + k can be bigger or equal to n)

#### Coding - 2

- Inside the method findTheWinner, define a recursive function recursion that will compute the winner.
- Base case: If n (the number of people) is 1, return 0.
- Recursive case: Use the formula (recursion(n - 1, k) + k) % n to find the winner of the subproblem with n-1 people.
- Return the result of recursion(n, k) adjusted by +1 to convert from 0-based indexing to 1-based indexing, which matches the problem's requirements.

#### Solution - 2

```
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    return recursion(n, k) + 1;
};

function recursion(n, k) {
    if (n === 1) {
        return 0;
    }
    return (recursion(n - 1, k) + k) % n;
}
```

#### Complexity - 2

Time complexity: O(n), since there's n function calls (recursion)

Space complexity: O(n), since there's n function calls (recursion)

### Approach - 3 Bottom-up DP with constant space

#### Intuition - 3

Intuition for this approach is the same, but now we will iteratively calculate our answers in range [2, n] (There's no sense to consider num_people = 1 since this returns just 0 (base case))

#### Coding - 3

- Initialize the result variable res to 0.
- Iterate through number of players from 2 to n. (as in recursion we're starting from bottom)
- Update the result using the formula (res + k) % player_num.
- Return the final result incremented by 1 to get the winner's position (1-indexed).

### Solution - 3

```
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    let res = 0;
    for (let player_num = 2; player_num <= n; ++player_num) {
        res = (res + k) % player_num;
    }
    return res + 1;
};
```

#### Complexity - 3

Time complexity: O(n), since we iterate through nums [2, n]

Space complexity: O(1), since no extra space is used
