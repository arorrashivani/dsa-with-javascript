# Merge a linked list into another linked list at alternate positions

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

```
class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    mergeList(p, q)
    {
        let p_current = p;
        let q_current = q;

        let p_next = null;
        let q_next = null;

        while(p_current !== null && q_current !== null) {
            // Save next pointers
            p_next = p_current.next;
            q_next = q_current.next;

            // Make q_curr as next of p_curr
            q_current.next = p_next; // Change next pointer of q_curr
            p_current.next = q_current; // Change next pointer of p_curr

            // Update current pointers for next iteration
            p_current = p_next;
            q_current = q_next;
        }

        q = q_current; // Update head pointer of second list
        return q;
    }
}
```

```
Time Complexity: O(min(n1, n2)), where n1 and n2  represents the length of the given two linked lists.
Auxiliary Space: O(1), no extra space is required, so it is a constant.
```
