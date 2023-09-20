// Problem 8.2: Rotate Linked List. Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list.
// Example 1:Input:N = 5    value[] = {2, 4, 7, 8, 9}   k = 3
// Output: 8 9 2 4 7
// Explanation:Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7
// Example 2:Input:N = 8   value[] = {1, 2, 3, 4, 5, 6, 7, 8}  k = 4
// Output: 5 6 7 8 1 2 3 4
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 103 1 <= k <= N

class Node {
  constructor(value) {
      this.data = value;
      this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head;
  }

  add(value) {
      let node = new Node(value);

      if (this.head == null){
        this.head = node;
      }
      else {
          let current = this.head;
          while (current.next) {
              current = current.next;
          }
          current.next = node;
      }
  }

  rotate(k) {
      let previousHead = this.head,
          previous = this.head,
          current = this.head;

      let i = 1;
      while(current.next){
          if(i == k+1){
              this.head = current;
              previous.next = null;
          }

          previous = current;
          current = current.next;
          i++;
      }
      current.next = previousHead;
      return this;
  }
}

let ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
ll.add(70);


let rotate = ll.rotate(3);
console.log(JSON.stringify(rotate));

