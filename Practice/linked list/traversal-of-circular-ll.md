# Traversal of Circular Linked List

In a conventional linked list, we traverse the list from the head node and stop the traversal when we reach NULL. In a circular linked list, we stop traversal when we reach the first node again. Following is the C code for the linked list traversal.

## Approach 1

```
class Solution {
    printList(head) {
        var x = '';
        var temp = head;

         while (temp.next !== head) {
            x = x+temp.data + "-->";
            temp = temp.next;
        }
        x=x+temp.data;

        console.log(x);
    }
}
```

```
Time Complexity: O(n) As we need to move through the whole list
Auxiliary Space: O(1) As no extra space is used
```
