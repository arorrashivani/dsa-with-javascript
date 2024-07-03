# Leet 328 Odd Even Linked List

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:

<center>
    <img src="../../images/oddeven-linked-list.jpg">
</center>

<br/>

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

<br/>
Example 2:

<center>
    <img src="../../images/oddeven2-linked-list.jpg">
</center>

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

### Constraints

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106

### Solutions

#### Approach 1

The approach of this method is to group all odd-positioned nodes followed by all even-positioned nodes, while preserving their original relative order, involves several key steps executed within a single pass through the list. This method ensures O(n) time complexity, where nnn is the number of nodes in the list, and O(1) space complexity, as it manipulates the list in place using a constant amount of additional storage.

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var oddEvenList = function(head) {

    if(head === null || head.next === null) return head;

    let oddLkd = new ListNode(-1);
    let odd_ptr = oddLkd;

    let evenLkd = new ListNode(-1);
    let even_ptr = evenLkd;

    let idx = 1;

    while(head != null) {

        if(idx % 2 === 0) {
            even_ptr.next = head;

            even_ptr = even_ptr.next;
        } else {
            odd_ptr.next = head;

            odd_ptr = odd_ptr.next;
        }

        head = head.next;
        idx++;
    }

    even_ptr.next = null;

    odd_ptr.next = evenLkd.next;

    return oddLkd.next;
};

/* The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list. This is because we iterate through each node of the linked list exactly once.

The space complexity is O(1) because we are using a constant amount of extra space regardless of the size of the input linked list.
*/
```

#### Approach 2

The given problem by rearranging a singly-linked list so that all nodes at odd indices are positioned before all nodes at even indices, while preserving their original relative order within each subgroup (odd and even). The approach is elegant and efficient, with a time complexity of O(n) and space complexity of O(1).

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null || head.next === null) return head;

    let odd = head;
    let even = head.next;
    let ehead = even;

    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = ehead;

    return head;
};

/* The time complexity of this solution is O(n) where n is the number of nodes in the linked list. This is because we iterate through the linked list once to separate the odd and even nodes.

The space complexity is O(1) because we are not using any extra space that grows with the input size. We are only using a constant amount of extra space for a few pointers.
*/
```
