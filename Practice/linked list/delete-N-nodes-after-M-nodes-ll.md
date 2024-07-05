# Delete N nodes after M nodes of a linked list

Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

```
Examples:

Input:
M = 2, N = 2
Linked List: 1->2->3->4->5->6->7->8
Output:
Linked List: 1->2->5->6

Input:
M = 3, N = 2
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->2->3->6->7->8

Input:
M = 1, N = 1
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->3->5->7->9
```

The main part of the problem is to maintain proper links between nodes, and make sure that all corner cases are handled. Following is C implementation of function skipMdeleteN() that skips M nodes and delete N nodes till end of list. It is assumed that M cannot be 0.

```

class Solution {
  linkdelete(head,M,N){
    //code here
    if(head === null || head.next === null) return head;

    let current = head;
    let ptr = head;

    let count = 0;

    // The main loop that traverses through the whole list
    while (current != null) {
        for (count = 1; count < M && current != null;count++)
            current = current.next;

        // If we reached end of list, then return
        if (current == null)
            return;

        // Start from next node and delete N nodes
        ptr = current.next;
        for (count = 1; count <= N && ptr != null;count++) {
            ptr = ptr.next;
        }

        // Link the previous list with remaining nodes
        current.next = ptr;

        // Set current pointer for next iteration
        current = ptr;
    }
  }
}
```

```
Time Complexity: O(n) where n is number of nodes in linked list.
Auxiliary Space: O(1)
```
