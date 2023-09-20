class Node{
  constructor(value){
    this.data=value;
    this.next=null;
  }
}

let head=new Node(10);
head.next=new Node(20);
console.log(head);
