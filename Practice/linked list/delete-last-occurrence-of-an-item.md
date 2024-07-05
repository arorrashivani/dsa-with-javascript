# Delete last occurrence of an item from linked list

```
Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10
```

## Approach 1

Using pointers, loop through the whole list and keep track of the node prior to the node containing the last occurrence key using a special pointer. After this just store the next of next of the special pointer, into to next of special pointer to remove the required node from the linked list.

```
class Solution {
    // Function to delete the last occurrence
    deleteLast(head, x) {
        let current = head;
        let ptr = null;

        while (current != null) {
            //If found key, update
            if (current.data == x)
                ptr = current;
            current = current.next;
        }

        // If the last occurrence is the last node
        if (ptr != null && ptr.next == null) {
            current = head;
            while (current.next != ptr) {
                current = current.next;
            }
            current.next = null;
        }

        // If it is not the last node
        if (ptr != null && ptr.next != null) {
            ptr.data = ptr.next.data;
            ptr.next = ptr.next.next;
        }

        return head;
    }
}
```

```
Time Complexity: O(n)

Auxiliary Space: O(1)
```
