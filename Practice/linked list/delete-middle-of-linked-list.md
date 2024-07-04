# Delete middle of linked list

Given a singly linked list, delete the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the linked list should be modified to 1->2->4->5

If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.
If the input linked list is NULL, then it should remain NULL.

If the input linked list has 1 node, then this node should be deleted and a new head should be returned.

## Simple solution

The idea is to first count the number of nodes in a linked list, then delete n/2’th node using the simple deletion process.

```
class Solution {
    deleteMid(node)
    {
        if(node === null || node.next === null) {
            return null;
        }

        let length = 0;

        let current = node;

        while(current !== null) {
            length++;
            current = current.next;
        }

        let mid = Math.floor(length / 2);

        current = node;

        while(mid > 1) {
            current = current.next;
            mid--;
        }

        current.next = current.next.next;

        return node;
    }
}
```

```
Time Complexity: O(n).
Two traversals of the linked list are needed

Auxiliary Space: O(1).
No extra space is needed.
```

## Optimal Solution

The above solution requires two traversals of the linked list. The middle node can be deleted using one traversal. The idea is to use two pointers, slow_ptr, and fast_ptr. Both pointers start from the head of list. When fast_ptr reaches the end, slow_ptr reaches middle. This idea is the same as the one used in method 2 of this post. The additional thing in this post is to keep track of the previous middle so the middle node can be deleted.

```
class Solution {
    deleteMid(node)
    {
        // Base cases
        if (node == null || node.next == null) return null;

        // Initialize slow and fast pointers
        // to reach middle of linked list
        let slow_ptr = node;
        let fast_ptr = node;

        // Find the middle and previous of middle.
        let prev = null;

        // To store previous of slow_ptr
        while (fast_ptr != null && fast_ptr.next != null)
        {
            fast_ptr = fast_ptr.next.next;
            prev = slow_ptr;
            slow_ptr = slow_ptr.next;
        }

        // Delete the middle node
        prev.next = slow_ptr.next;

        return node;
    }
}
```

```
Time Complexity: O(n).
Only one traversal of the linked list is needed

Auxiliary Space: O(1).
As no extra space is needed.
```
