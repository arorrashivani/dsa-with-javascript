# Find Middle of the Linked List

Given a Singly Linked List, the task is to find the middle of the linked list. If the number of nodes are even, then there would be two middle nodes, so return the second middle node.

Example:

```
Input: linked list = 1 -> 2 -> 3 -> 4 -> 5
Output: 3
Explanation: There are 5 nodes in the linked list and there is one middle node whose value is 3.

Input: linked list = 1 -> 2 -> 3 -> 4 -> 5 -> 6
Output: 4
Explanation: There are 6 nodes in the linked list, so we have two middle nodes: 3 and 4, but we will return the second middle node which is 4.

```

## Brute Force

Find middle of the Linked List using Extra Memory

```
Store the entire linked list in a Array such that each index contains the value of a node. 
Now, to find the middle of the linked list, we can simply return the value present at the middle of the Array List.
```

```
class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node)
    {
        if(node === null) return -1;

        if(node.next === null) return node.data;

        //your code here
        let current = node;
        let arr = [];

        while(current !== null) {
            arr.push(current.data);

            current = current.next;
        }

        let middle = Math.floor(arr.length / 2);

        return arr[middle];
    }
}
```

```
Time Complexity: O(N), where N is the number of nodes in the linked list.
Auxiliary Space: O(N)
```

## Optimal

Find Middle of the Linked List by Counting Nodes (Two-pass):

```
Traverse the whole linked list and count the number of nodes. After counting the total number of nodes, 
again traverse the first (count/2) nodes of the linked list and return the (count/2)th node’s value. 
This approach traverse the linked list two times to find the middle element of the linked list.
```

```
    getMiddle(node)
    {
        if(node === null) return -1;

        if(node.next === null) return node.data;

        //your code here
        let current = node;
        let length = 0;

        while(current !== null) {
            length++;
            current = current.next;
        }

        let middle = Math.floor(length / 2);

        current = node;
        while(middle > 0) {
            middle--;
            current = current.next;
        }

        return current.data;
    }
```

```
Time Complexity: O(2 * N) = O(N) where N is the number of nodes in the linked list.
Auxiliary Space: O(1)
```

## Best

Find Middle of the Linked List by Counting Nodes (One-pass):

```
Initialize an extra pointer, say mid with the head of the linked list and a counter to count the number of nodes in the linked list. 
Now, we traverse the linked list and increment the counter for each node and every time the value of counter becomes even, 
we move the mid pointer forward. As soon as we reach the end of the linked list, we return the mid pointer.
```

```
class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node)
    {
        if(node === null) return -1;

        if(node.next === null) return node.data;

        let mid = head;

        let counter = 1;

        while (head !== null) {
            // If counter is even, move the mid pointer to the next node
            if (counter % 2 === 0) {
                mid = mid.next;
            }

            head = head.next;
            // Increment the counter for each node
            counter++;
        }
        return mid.data;
    }
}
```

```
Time Complexity: O(N), where N is the number of nodes in the linked list.
Auxiliary Space: O(1)
```

## Floyd’s Cycle Finding Algorithm

```
We can use the Floyd’s Cycle Finding Algorithm, also known as Hare and Tortoise Algorithm to find the middle of the linked list. 
Traverse linked list using a slow pointer and a fast pointer. Move the slow pointer to the next node(one node forward) and the 
fast pointer to the next of the next node(two nodes forward). When the fast pointer reaches the last node or NULL, 
then the slow pointer will reach the middle of the linked list.

In case of odd number of nodes in the linked list, slow_ptr will reach the middle node when fast_ptr will reach 
the last node and in case of even number of nodes in the linked list, slow_ptr will reach the middle node 
when fast_ptr will become NULL.
```

```
class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node)
    {
        let slow_ptr = head;
        let fast_ptr = head;

        while (fast_ptr !== null && fast_ptr.next !== null) {
            // Move the fast pointer by two nodes
            fast_ptr = fast_ptr.next.next;
            // Move the slow pointer by one node
            slow_ptr = slow_ptr.next;
        }
        return slow_ptr.data;
    }
}
```

```
Time Complexity: O(N), where N is the number of nodes in the linked list.
Auxiliary Space: O(1)
```
