// Problem 8.1 : Reverse the Linked list. Given a linked list of N nodes. 
// The task is to reverse this list.
// Example 1:Input:LinkedList: 1->2->3->4->5->6
// Output: 6 5 4 3 2 1
// Explanation: After reversing the list,elements are 6->5->4->3->2->1.
// Example 2:Input:LinkedList: 2->7->8->9->10
// Output: 10 9 8 7 2
// Explanation: After reversing the list,elements are 10->9->8->7->2.
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 104

class Node{
  constructor(data, next=null){
      this.data=data;
      this.next=next;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }

  insertFirst(data){//Insert at start
      this.head=new Node(data, this.head);
      this.size++;
  }

  insertLast(data){//Insert at last
      let node=new Node(data);
      let current;
      //If list is empty make head
      if(this.head==null){
          this.head=node;
      }
      else{
        current=this.head;
        while(current.next){
          current=current.next;
        }
        current.next=node;
      }
      this.size++;
  }
  //Insert at index
  insertAt(index, data){
    if(index>0 && index>this.size){//Index out of range
      return; 
    }
    //If first index, make it head
    if(index===0){
      this.head=new Node(data, this.head);
      return;
    }

    const node=new Node(data);
    let current, previous;

    //Set current to first
    current=this.head;
    let count=0;
    while(index > count){
      previous=current;//Node before index
      count++;
      current=current.next;//Node after index
    }
    node.next=current;
    previous.next=node;
    this.size++;
  }

  //Print all the list data
  printList(){
      let current=this.head;
      while(current){
        console.log(current.data);
        current=current.next;
      }
  }

  reverseList(){
    let prev,next=null;
    let current=this.head;
    while(current!==null){
      next=current.next;
      current.next=prev;
      prev= current;
      current=next;
    }
   return prev;
  } 

}

const list=new LinkedList();
list.insertFirst(10);
list.insertAt(1,20);
list.insertAt(2,30);
list.insertLast(40);
list.printList();
console.log(list.reverseList());

