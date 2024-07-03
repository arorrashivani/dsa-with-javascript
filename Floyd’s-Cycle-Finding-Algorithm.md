# Floyd’s Cycle Finding Algorithm

Floyd’s cycle finding algorithm or Hare-Tortoise algorithm is a pointer algorithm that uses only two pointers, moving through the sequence at different speeds. This algorithm is used to find a loop in a linked list. It uses two pointers one moving twice as fast as the other one. The faster one is called the fast pointer and the other one is called the slow pointer.

## How Does Floyd’s Cycle Finding Algorithm Works?

While traversing the linked list one of these things will occur-

- The Fast pointer may reach the end (NULL) this shows that there is no loop in the linked list.
- The Fast pointer again catches the slow pointer at some time therefore a loop exists in the linked list.

<center>
    <img src="images/Floyd’s Cycle Finding Algorithm image1.jpg">
</center>

<center>
    <img src="images/Floyd’s Cycle Finding Algorithm image2.jpg">
</center>

### Pseudocode

- Initialize two-pointers and start traversing the linked list.
- Move the slow pointer by one position.
- Move the fast pointer by two positions.
- If both pointers meet at some point then a loop exists and if the fast pointer meets the end position then no loop exists.

```
// JavaScript code for the above approach
    class Node
    {
        constructor(d)
        {
            this.data = d;
            this.next = null;
        }
    }

    // initialize a new head for the linked list
    let head = null;

    // detect if there is a loop
    // in the linked list
    function detectLoop(head) {
        let slowPointer = head;
        let fastPointer = head;

        while (slowPointer != null
            && fastPointer != null
            && fastPointer.next != null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
            if (slowPointer == fastPointer)
                return 1;
        }

        return 0;
    }

```

```
Time complexity: O(n), as the loop is traversed once.
Auxiliary Space: O(1), only two pointers are used therefore constant space complexity.
```
