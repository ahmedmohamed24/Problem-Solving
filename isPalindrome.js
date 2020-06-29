// this problem is solved with two different methods 
/*
first with linked list and array
and second one is more efficient with stack and linked list (cleaner code and easy to understand)
*/

class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class LinkedList{
  constructor(){
      this.head=null;
      this.tail=null;
      this.length=0;
  }
  isEmpty(){
      return this.length === 0;
  }
  insert(data) {
      let newNode=new Node(data);
      if(this.isEmpty()){
          this.head=this.tail=newNode;
      }else{
          this.tail.next=newNode;
          this.tail=newNode;
      }
      this.length++;
  }
  print(){
      let tempNode=this.head;
      let tempArr=[];
      while(tempNode){
          tempArr.push(tempNode.data)
          tempNode=tempNode.next;
      }
      console.log(tempArr);
  }
}
//this method takes O(n) time and O(n) space Complexity
function isPalindrome(list){ //O(n)
 if(list.isEmpty() || list.length===1)
     return false;
 let tempArr=[];
 let traversalNode=list.head;
 while(traversalNode){
     tempArr.push(traversalNode.data);
     traversalNode=traversalNode.next;
 }
 let tempArrLength=tempArr.length;
 let middleElement=Math.ceil(tempArrLength/2);
  for(let i=0 , j=tempArrLength-1 ; i<middleElement ; i++,j--){ // O(n/2)
      if(tempArr[i] !== tempArr[j])
          return false;
  }
  return true;
}

class Stack{
  constructor(){
      this.top=-1;
      this.data=[];
  }
  isEmpty(){
      return this.top===-1;
  }
  push(element){
      this.data[++this.top]=element;
  }
  pop(){
      if(!this.isEmpty())
          return this.data[this.top--]
      return "The Stack is Empty";
  }
  getTop(){
      if(this.isEmpty())
          return "the stack is empty";
      return this.data[this.top];
  }
};
function is_palindrome(list){//same thing using stack 
  if(list.isEmpty() || list.length ===1)
      return false;
  let traversalNode=list.head;
  let tempStack=new Stack();
  //loop for first time to add linked list elements in the stack
  while(traversalNode){
      tempStack.push(traversalNode.data);
      traversalNode=traversalNode.next;
  }
  //loop again to check if last element in the stack is equal to first element in the list 
  traversalNode=list.head;
  while(traversalNode){
      if(traversalNode.data !== tempStack.pop())
          return false;
      traversalNode=traversalNode.next;
  }
 
  return true;
}
let l1=new LinkedList();
l1.insert('a');
l1.insert('b');
l1.insert('d');
l1.insert('c');
l1.insert('d');
l1.insert('b');
l1.insert('a');

let result=is_palindrome(l1)
console.log(result);
