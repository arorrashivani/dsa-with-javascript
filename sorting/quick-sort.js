// Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Time Complexity -
// Average Case - O(nlog n)
// Best Case - O(nlog n)
// Worst Case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)
console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));


// Implement Quick Sort in JavaScript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

var swap = function(arr, i , j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var partition = function(arr, low, high) {
    let pivot = arr[low];

    let i = low;

    let j = high;

    while(i < j) {
        while(arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while(arr[j] > pivot && j >= low + 1) {
            j--;
        }

        if(i < j) {
            swap(arr, i , j);
        }
    }

    swap(arr, low, j);

    return j;

}

var quickSort = function(arr, low, high) {
    if(low < high) {
        let pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);

        quickSort(arr, pivotIndex + 1, high);
    }

    return arr;
}

var quickSelect = function(arr, low, high, index) {
    let sortedArray = quickSort(arr, low, high);

    return sortedArray[arr.length - index];
}