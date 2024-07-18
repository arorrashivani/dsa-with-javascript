# Sorted Sqaure Array

## Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order

```
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

### Approach - 1 Brute Force

- Squared and stored the values in same array.
- Used Sort Funciton

### Solution - 1

```
var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = Math.pow(nums[i], 2);
    }

    return nums.sort((a, b) => a - b);
};
```

#### Complexity - 1

Time complexity: O(nlogn)

Space complexity: O(1)

### Approach - 2 Optimal

1. Since the original array is not sorted, it's not guaranteed that the largest elements (in terms of absolute value) are at the ends of the array.

2. By iterating backwards from the end of the array, we can start populating the result array from the end, ensuring that the squares of larger elements occupy the higher indices of the result array.

### Solution - 2

```
var sortedSquares = function(nums) {
    let newArray = new Array(nums.length).fill(0);

    let left = 0;
    let right = nums.length - 1;

    for(let i = nums.length - 1; i >= 0; i--) {
        let leftPow = Math.pow(nums[left], 2);

        let rightPow = Math.pow(nums[right], 2);

        if(leftPow < rightPow) {
            newArray[i] = rightPow;
            right--;
        } else {
            newArray[i] = leftPow;
            left++;
        }
    }

    return newArray;
};
```

#### Complexity - 2

Time complexity: O(n)

Space complexity: O(n)

## Take away

- Math.abs(x) => Returns the absolute(positive) value of a number.
- Math.pow(base, exponent) => Returns the value of a base raised to a power.
- The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

  - fill(value)
  - fill(value, start)
  - fill(value, start, end)
  - Return the modified array, filled with value.
