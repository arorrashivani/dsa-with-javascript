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
        let temp = head;
        let prt = null;

        while (temp != null) {
            //If found key, update
            if (temp.data == x)
                ptr = temp;
            temp = temp.next;
        }

        // If the last occurrence is the last node
        if (ptr != null && ptr.next == null) {
            temp = head;
            while (temp.next != ptr) {
                temp = temp.next;
            }
            temp.next = null;
        }

        // If it is not the last node
        if (ptr != null && ptr.next != null) {
            ptr.data = ptr.next.data;
            temp = ptr.next;
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

## Approach 2

The idea is to traverse the linked list from beginning to end. While traversing, keep track of last occurrence key. After traversing the complete list, delete the last occurrence by copying data of next node and deleting the next node.

```
class Solution {
    // Function to delete the last occurrence
    deleteLast(head, x) {

        // Initialize previous of Node to be deleted
        let ptr = null;

        // Start from head and find the Node to be deleted
        let temp = head;

        while (temp != null) {
            // If found key, update
            if (temp.data == x)
                ptr = temp;

            temp = temp.next;
        }


        // key occurs at-least once
        if (ptr != null) {

            // Copy key of next Node to x
            ptr.key = ptr.next.key;

            // Store and unlink next
            temp = ptr.next;

            ptr.next = ptr.next.next;
            // Free memory for next
        }
        return head;
    }
}
```

```
Time Complexity: O(n)

Auxiliary Space: O(1)

This solution doesn’t work when the node to be deleted is the last node.
```
