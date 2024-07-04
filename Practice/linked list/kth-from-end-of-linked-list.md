# Kth from End of Linked List

Given a Linked List and a number N, write a function that returns the value at the Nth node from the end of the Linked List.

Examples:

```
Input: 1 -> 2 -> 3 -> 4, N = 3
Output: 2

Input: 35 -> 15 -> 4 -> 20, N = 4
Output: 35
```

## Brute Force Approach

The simplest way to delete the Nth node from the end is to delete the (L-N+1)th node from the start of the linked list, where L is the total length of the linked list.

Therefore, this problem can be broken down into two sub-problems:

- The first part involves the calculation of the length of the linked list.
- The second part involves to traverse of the (L-N+1)th node from the start of the linked list.

### Algorithm

- Initialize a temp pointer that will be used to traverse the list.
- Create a cnt variable and initialize it to 0. Traverse the linked list, and at each node, increment cnt. Finally, when the pointer reaches NULL, return cnt, which contains the total length of the linked list.
- Now, after knowing the length of the linked list, the first sub-problem is solved.
- To solve the second sub-problem, we will follow the steps that we use to traverse to the Kth node of the linked list.

```
class Solution {
    /**
    * @param Node head
    * @param number k

    * @returns number
    */
    getKthFromLast(head, k) {
        // code here
        if(head === null) return null;

        let current = head;

        let length = 0;

        while(current !== null) {
            length++;

            current = current.next;
        }

        let value = length - k + 1;

        current = head;

        while(current !== null) {
            value--;
            if (value === 0) {
                break;
            }

            current = current.next;
        }

        return current && current.data ? current.data : -1;
    }
}
```

```
Time Complexity: O(L)+O(L-N), We are calculating the length of the linked list and
then iterating up to the (L-N)th node of the linked list, where L is the total length of the list.

Space Complexity:  O(1), as we have not used any extra space.
```

## Recursive

```
class Solution {
    /**
    * @param Node head
    * @param number k

    * @returns number
    */
    getKthFromLast(head, k) {

        let i = 0;

        if (head == null)
            return;
        getKthFromLast(head.next, k);

        if (++i === k)
            return head.data;
        }
    }
}
```

```
Time Complexity: O(M) where M is the length of the linked list.
Auxiliary Space: O(M) for call stack
```

## Nth node from the end of a Linked List using two pointers (Optimal Approach)

The brute force, in the worst case, has a time complexity of O(2*L), where L is the length of the linked list. Therefore, it is not the most efficient algorithm, as we are traversing the entire list twice.

To enhance efficiency, we will involve two pointers, a fast pointer and a slow pointer. The fast-moving pointer will initially be exactly N nodes ahead of the slow-moving pointer. After which, both of them will move one step at a time. When the fast pointer reaches the last node, i.e., the L-th node, the slow is guaranteed to be at the (L-N)-th node, where L is the total length of the linked list.

### Algorithm

- Initialize two pointers, `slow` and `fast`, to the head of the linked list. Initially, only fast will move till it crosses N nodes, after which both of the pointers will move simultaneously.
- Traverse the linked list till the fast pointer reaches the last node, that is, the Lth Node, at this stage, the slow pointer is guaranteed to be at the (L-N)th node.
- Point this slow pointer to the (L-N+2)th node, effectively skipping the Nth node from the end or the (L-N+1)th node from the start.

```
class Solution {
    /**
    * @param Node head
    * @param number k

    * @returns number
    */
    getKthFromLast(head, k) {
         // Create two pointers, fastp and slowp
        let fastp = head;
        let slowp = head;

        // Move the fastp pointer k nodes ahead
        for (let i = 0; i < k; i++) {
            if(fastp === null) {
                return -1;
            }
            fastp = fastp.next;
        }

        // If fastp becomes null, the kth node from the end is the head
        if (fastp === null)
            return head.data;

        // Move both pointers until fastp reaches the end
        while (fastp && fastp.next !== null) {
            fastp = fastp.next;
            slowp = slowp.next;
        }

        return slowp.next.data;
    }
}
```

```
Time Complexity: O(N) since the fast pointer will traverse the entire linked list, where N is the length of the linked list.

Space Complexity: O(1), as we have not used any extra space.
```
