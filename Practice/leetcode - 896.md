# Monotonic Array

## An array is monotonic if it is either monotone increasing or monotone decreasing.An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j]. Given an integer array nums, return true if the given array is monotonic, or false otherwise

```
Example 1:
Input: nums = [1,2,2,3]
Output: true

Example 2:
Input: nums = [6,5,4,4]
Output: true

Example 3:
Input: nums = [1,3,2]
Output: false
```

## Approach - 1

- First identify it's a monotone increasing or decreasing.
- Then, if we have same value, then iterate & check whether it's a monotone increasing or decreasing.
- On the basis of monotone increasing or decreasing, iterate over the array again & compare it

### Solution - 1

```
var isMonotonic = function(nums) {
    if(nums.length === 0 || nums.length === 1) {
        return true;
    }

    let i = 0;

    let j = 1;

    let isMonotonicArray = true;

    let isMonotoneIncreasing = nums[i] < nums[j];

    if(nums[i] === nums[j]) {
        while(i < nums.length - 1) {
            if(nums[i] === nums[j]) {
                i++;
                j++;
            } else {
                isMonotoneIncreasing = nums[i] < nums[j];
                break;
            }
        }
    }

    if(i === nums.length - 1) {
        return isMonotonicArray;
    }

    while( i < nums.length - 1) {
        if(isMonotoneIncreasing && nums[i] <= nums[j]) {
            i++;
            j++;
        } else if(isMonotoneIncreasing === false && nums[i] >= nums[j]) {
            i++;
            j++;
        } else {
            return false;
        }
    }

    return isMonotonicArray;
};
```

#### Complexity - 1

Time complexity: O(n) because it iterates through the entire input array once.

Space complexity: O(1) because the function uses a constant amount of extra space regardless of the size of the input array.

## Approach - 2

### Solution - 2

```
var isMonotonic = function (array) {
    const first = array[0];
    const last = array[array.length - 1];

    // 1.......10
    if (first === last) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] !== array[i]) return false;
        }
    }
    else if (first < last) {
        // non decreasing
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] < array[i]) return false;
        }
    }
    else {
        // non increasing
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] > array[i]) return false;
        }
    }
    return true;
};
```

#### Complexity - 2

Time complexity: O(n) because it iterates through the entire input array once.

Space complexity: O(1)

## Approach - 3

### Solution - 3

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const n = nums.length;
    if (n === 1) return true;

    let isInc = true;
    let isDec = true;

    for (let i = 1; i < n; i++) {
        if (!isInc && !isDec) {
            return false;
        }

        if (nums[i] < nums[i - 1]) {
            isInc = false;
        }
        if (nums[i] > nums[i - 1]) {
            isDec = false;
        }
    }

    return isInc || isDec;
};
```

#### Complexity - 3

Time complexity: O(n) because it iterates through the entire input array once.

Space complexity: O(1)
