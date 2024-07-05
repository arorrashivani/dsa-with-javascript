# Add two numbers represented by Linked List

Given two numbers represented by two lists, write a function that returns the sum in the form of a linked list.

```
Example:

Input:
List1: 5->6->3 // represents number 563
List2: 8->4->2 // represents number 842
Output:
Resultant list: 1->4->0->5 // represents number 1405
Explanation: 563 + 842 = 1405

Input:
List1: 7->5->9->4->6 // represents number 75946
List2: 8->4 // represents number 84
Output:
Resultant list: 7->6->0->3->0// represents number 76030
Explanation: 75946+84=76030
```

Traverse both lists to the end and add preceding zeros in the list with lesser digits. Then call a recursive function on the start nodes of both lists which calls itself for the next nodes of both lists till it gets to the end. This function creates a node for the sum of the current digits and returns the carry.

## Approach 1

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let current;

    let dummyNode = (current = new ListNode(0));
    let sum = 0;

    while (l1 || l2) {

        if (l1 && l2) {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val + carry;
            l1 = l1.next;
        } else if (l2) {
            sum = l2.val + carry;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);

        current = current.next;
    }

    if (carry === 1)
        current.next = new ListNode(carry);

    return dummyNode.next;
};
```

```
Time Complexity: O(max(m,n)). Assume that m and n represent the length of l1 and l2 respectively, the algorithm above iterates at most max(m,n) times.

Space Complexity: O(max(m,n)). The length of the new list is at most max(m,n)+1.
```

## Approach 2

Let us begin with the brute force approach of adding two numbers represented by linked lists. We are going to use some extra space, and it is slow but should be mentioned during the interview.

### Intuition

In the brute force approach add two numbers represented by linked lists. To add two numbers, the simplest thing we can do is to reverse the two linked lists (as they contain the digits in reverse order). Then convert the two numbers in linked lists into integers. Add these integers and convert the sum back to a linked list such that it contains digits in reverse order.

In this approach, we will need to implement the following functions :

- To reverse both the Linked List.
- Covert both the Linked List into integer.
- Find the sum of both integers.
- Reverse the resultant integer and then convert it into a Linked List.

### Algorithm

Here is the brute force algorithm for this particular problem add two numbers represented by linked lists :

- Firstly, reverse both the given Linked List l1 and l2.
1- Then, convert the numbers represented by both the linked list into integers n1 and n2.
- Then, add both the numbers as sum=n1+n2.
- Then, convert the above-calculated sum back to a Linked List using the toLinkedList() function which will one by one take the digits from the end of the number passed and create a linked list using them. And finally, return it. Note, in the toLinkedList() function the number's digit will be added in reverse order. ans = to_linkedlist(sum).
- Return the resultant linked list ‘ans’ containing the sum.

Note : This approach will not work for huge input numbers represented by Linked List, which is out of the range of integer, and it will throw an overflow error.

```
// Java program to add two numbers
// represented by linked list

import java.util.*;

// Node Class
class Node{
 int data;
 Node next;
 Node(int data, Node next){
  this.data = data;
  this.next = next;
 }
}

// Public class
public class MyClass{

    // convertList method to
    // convert Integer to List
    public static Node convertList(int num){
        Node l = null;
        while(num != 0){
   l = new Node(num%10, l);
   num = num/10;
  }
  return l;
    }

    // toInteger method to
    // convert List to Integer
 public static int toInteger(Node l){
  Node curr = l;
  int ans = 0;
  while(curr != null){
   ans = ans*10 + curr.data;
   curr = curr.next;
  }
  return ans;
 }

 // reverse method to reverse
 // the Linked List
 public static Node reverse(Node head){
  Node prev = head;
  Node curr = head.next;
  while(curr != null){
   Node next = curr.next;
   curr.next = prev;
   prev = curr;
   curr = next;
  }
  head.next = null;
  head = prev;
  return head;
 }

 // addList to add the content
 // of the Linked List
 public static Node addList(Node l1, Node l2){
  l1 = reverse(l1);
  l2 = reverse(l2);
  int num1 = toInteger(l1);
  int num2 = toInteger(l2);
  int sum = num1 + num2;
  Node l3 = convertList(sum);
  l3 = reverse(l3);
  return l3;
 }

 // printList to print the content
 // of the Linked List
 public static void printList(Node ans){
     Node curr = ans;
     while(curr != null){
         System.out.print(curr.data+" ");
         curr = curr.next;
     }
 }

 // main method
 public static void main(String[] args){
  int x = 243;
  int y = 564;
  Node l1 = convertList(x);
  Node l2 = convertList(y);
  Node ans = addList(l1, l2);
  printList(ans);
 }
}
```

```
Time Complexity

In this approach of adding two numbers represented by linked lists, Firstly, we are reversing both the list l1 and l2, then we are converting them into integers. So overall the time complexity for this code will be O(n+m).

T.C : O(n+m), where n,m are the number of nodes in the linked lists.

Space Complexity

The space complexity for the above implementation will depend upon the number of digits in our final result (after calculating the sum). This is very obvious because, as we are expected to store our final result in a Linked List, for every digit there will be a linked list node. So, for N digits, the total space taken by the linked list will be O(N), assuming, N is the number of digits in our final result sum. Since, we know the final sum will mainly depend upon the maximum number of digits, from each of the numbers provided to us. Hence, we can conclude that our space complexity will depend on O(max(n,m)), where m and n are the number of digits in num1 and num2 respectively.
```

## Approach 3 Add two numbers represented by Linked Lists using Stack

Now let us see another approach of how we can solve this add two numbers represented by linked lists problem with the help of a data structure stack, and how we can add the numbers of both the Linked List using a stack. This approach is not that efficient, as here we have to make sure that the size of the list should not exceed the limit of the stack, or it will throw an error of overflow.

Intuition :

In this approach we are going to use three stacks, out of which in two stacks s1, s2 we are going to store the nodes of both the Linked List and in the third stack s3 we will store the sum of the numbers of both the list inside the stacks s1, s2.

Algorithm :

- Firstly, we are going to create 3 stacks named s1, s2, and s3.
- Then, we will fill the stack s1 with Nodes of Linked List l1 and the stack s2 with Nodes of Linked List l2.
- We will initialize a carry variable in which we will store the first digit of the sum that comes out to be two-digit in any node. If the sum is greater than 9 we will set the carry as 1 else we will set the carry as 0.
- Now, we will start filling the stack s3 by creating new nodes and storing the data of that new node to the sum of s1.top(), and s2.top() and carry until both the list l1 and l2 are empty. We will create a Node (say prev) that will contain the head of the sum List inside the stack s3.
- Now, connect all the elements of s3 from top to bottom and then reverse the list as return prev.

```
// function that returns the sum of two numbers represented
// by linked lists
function addTwoNumbers(l1, l2) {
    let prev = null;
    // Create 3 stacks
    const s1 = [];
    const s2 = [];
    const s3 = [];
    // Fill first stack with first List Elements
    while (l1 !== null) {
        s1.push(l1);
        l1 = l1.next;
    }
    // Fill second stack with second List Elements
    while (l2 !== null) {
        s2.push(l2);
        l2 = l2.next;
    }
    let carry = 0;
    // Fill the third stack with the sum of first and second
    // stack
    while (s1.length !== 0 && s2.length !== 0) {
        const sum = s1[s1.length - 1].data + s2[s2.length - 1].data + carry;
        const temp = newnode(sum % 10);
        s3.push(temp);
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        s1.pop();
        s2.pop();
    }
    while (s1.length !== 0) {
        const sum = carry + s1[s1.length - 1].data;
        const temp = newnode(sum % 10);
        s3.push(temp);
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        s1.pop();
    }
    while (s2.length !== 0) {
        const sum = carry + s2[s2.length - 1].data;
        const temp = newnode(sum % 10);
        s3.push(temp);
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        s2.pop();
    }
    // If carry is still present create a new node with
    // value 1 and push it to the third stack
    if (carry === 1) {
        const temp = newnode(1);
        s3.push(temp);
    }
    // Link all the elements inside third stack with each
    // other
    if (s3.length !== 0) prev = s3[s3.length - 1];
    while (s3.length !== 0) {
        const temp = s3[s3.length - 1];
        s3.pop();
        if (s3.length === 0) {
            temp.next = null;
        } else {
            temp.next = s3[s3.length - 1];
        }
    }
    return prev;
}
```

```
Time Complexity: In this approach of adding two numbers represented by the problem of the linked list, as we are traversing both the list l1 and l2, we are storing them in stacks. So the overall time complexity for this code will be O(n+m).

Time Complexity : O(n+m), where n,m are the number of nodes in the linked lists.

Auxiliary Space: O(n), Extra space is used in storing the elements in the stack.

Space Complexity: In the above implementation, we are storing the nodes of both the Linked List inside two different stacks, so it will occupy O(n)+O(m) space, where n and m are the size of both the Linked list. Now, we are storing their sum inside another stack which will again occupy a space of O(max(n,m)) as discussed above, the space of the sum will depend upon the input number of more digits. So the overall space will be
O(n+m+max(n,m)).

O(n)+O(m)+O(max(n,m)). However, this approach is not much efficient as we are using a lot of space here.
```

## Conclusion

In this article, we learned about the problem, then added two numbers represented by linked lists.

Let us recap the points we discussed throughout the article :

- Basically, in this problem add two numbers represented by Linked List, you will be given two numbers represented by two Linked List, we have to write a function that returns the sum of both lists number-wise.
- At first, we applied the brute force approach for this problem add two numbers represented by linked lists. In which we reverse the two linked lists (as they contain the digits in reverse order). Then convert the two numbers in linked lists into integers. Add these integers and convert the sum back to a linked list such that it contains digits in reverse order.
- Then, we applied the optimal approach for this problem add two numbers represented by linked lists. In which we will use the Two Pointer technique.
- In this Two Pointer approach, We can simply iterate both the linked lists and keep on calculating the sum of values in nodes. Along with that, we will also maintain a carry in which we will store the first digit of the sum that comes out to be two-digit in any node. While taking the sums we will add the previous carry to it and add a new node to the result containing the last digit in the sum and update the carry for the next iteration.
- Using the Two Pointer approach, the code will even work perfectly for the input number's digit out of range of integer datatype.
- Then, we solved this problem using another approach for this problem adding two numbers represented by linked lists, that is, by using stack data structure.
- In this approach we will use three stacks, out of which in two stacks s1, s2 we are going to store the nodes of both the Linked List and in the third stack s3 we will store the sum of the numbers of both the list inside the stacks s1, s2.
