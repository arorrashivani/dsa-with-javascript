# Rotate a Linked List

Given a singly linked list, The task is to rotate the linked list counter-clockwise by k nodes.

Examples:

```
Input: linked list = 10->20->30->40->50->60, k = 4
Output: 50->60->10->20->30->40.
Explanation: k is smaller than the count of nodes in a linked list so (k+1 )th node
i.e. 50 becomes the head node and 60’s next points to 10

Input: linked list = 30->40->50->60, k = 2
Output: 50->60->30->40.
```

## Approach 1

```
To rotate the linked list, we need to change the next pointer of kth node to NULL,
the next pointer of the last node should point to the previous head node, and
finally, change the head to (k+1)th node. So we need to get hold of three nodes: kth node, (k+1)th node, and last node.

Traverse the list from the beginning and stop at kth node. store k’s next in a tem pointer and
point k’s next to NULL then start traversing from tem and keep traversing till the end and
point end node’s next to start node and make tem as the new head.
```

Follow the below steps to implement the idea:

- Initialize a count variable with 0 and pointer kthnode pointing to Null and current pointing to head node.
- Move from current till k-1 and point kthnode to current’s next and current’s next to NULL.
- Move current from kth node to end node and point current’s next to head.

```
class Solution {
    //Function to rotate a linked list.
    rotate(head, k) {
        if(head === null || head.next === null || k === 0) {
            return head;
        }

        let current = head;

        let count = 1;

        while (count < k && current != null) {
            current = current.next;
            count++;
        }

        // If current is NULL, k is greater than or equal to count
        // of nodes in linked list.
        if (current == null)
            return;

        // current points to kth node. Store it in a variable.
        let kthNode = current;

        // current will point to last node after this loop
        while (current.next != null)
            current = current.next;

        // Change next of last node to previous head
        current.next = head;

        // Change head to (k+1)th node
        head = kthNode.next;

        // change next of kth node to null
        kthNode.next = null;

        return head;
    }
}
```

```
Time Complexity: O(N), where N is the number of nodes in Linked List.
Auxiliary Space: O(1)
```

## Approach 2 Optimal Solution

This gives us a hint that for k greater than the length of the list, we have to rotate the list for k%length of the list. This reduces our time complexity.

Steps to the algorithm:-

- Calculate the length of the list.
- Connect the last node to the first node, converting it to a circular linked list.
- Iterate to cut the link of the last node and start a node of k%length of the list rotated list.

```
class Solution {
    //Function to rotate a linked list.
    rotate(head, k)
    {
        if(head === null || head.next === null || k === 0) {
            return head;
        }

        let length = 1;

        let current = head;

        while(current.next !== null) {
            current = current.next;
            length++;
        }

        //link last node to first node
        current.next = head;

        //when k is more than length of list
        k = k % length;

        //to get end of the list
        let end = length-k;

        while(end !== 0) {
            current = current.next;
            end--;
        }

        //breaking last node link and pointing to NULL
        head = current.next;

        current.next = null;

        return head;
    }
}
```

```
Time Complexity: O(length of list) + O(length of list - (length of list%k))
Reason: O(length of the list) for calculating the length of the list.
O(length of the list - (length of list%k)) for breaking link.

Space Complexity: O(1)
Reason: No extra data structure is used for computation.
```

## Approach 3 Rotate the linked list k times by placing the first element at the end

```
The idea is to traverse the given list to find the last element and store it in a node.
Now we need to make the next of last element as the current head,
which we can do by storing head in temporary node. Repeat the process k time.
```

Follow the steps below to implement the above idea:

- Return head if the head is NULL or k=0.
- Initialize a node last and make it point to the last node of the given list.
- Make a temporary node pointing to head.
- while k>0 run a loop :
  - make temp as last node and head point to next of head.

```
class Solution {
    //Function to rotate a linked list.
    rotate(head, k) {

        // initialising 2 nodes temp and last
        let last = head;
        let current = head;

        // if head is null or k==0 no rotation is required
        if(head == null || k == 0) return head;

        // Making last point to the last-node of the given
        while(last.next != null)
            last = last.next;

        // Rotating the linked list k times, one rotation at a time.
        while(k != 0) {
            // Make head point to next of head
            head = head.next;

            // Making next of temp as NULL
            current.next = null;

            // Making current as last node
            last.next = current;
            last = current;

            // Point current to head again for next rotation
            current = head;
            k--;
        }

        return head;
    }
}
```

```
Time Complexity: O(N)
Auxiliary Space: O(1)
```
