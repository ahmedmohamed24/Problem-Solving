
/*
Tip it could be done with another simple solution but this solution is more generic */
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
  removeFromIndex(index){

      if(this.isEmpty()){
          console.log("this list is empty");
          return -1;
      }else if(index<0 || index>= this.length){//out of the list size 
          console.log("Invalid");
          return -1;
      }else if(index===0){//first element
          if(this.length===1){
              this.tail=this.head=null;
              this.tail.next=this.head.next=null;
          }else
              this.head=this.head.next;
          this.length--;
      }else if(index=== this.length-1){ //last element
          let current=this.head.next;
          let prev=this.head;
          while(current !== this.tail){
              current=current.next;
              prev=prev.next;
          }
          this.tail=prev;
          this.tail.next=null;
          this.length--;
      }else{
          let tempIndex=1;
          let iNode=this.head;
          while(tempIndex !== index){
              iNode=iNode.next;
              tempIndex++;
          }
          iNode.next=iNode.next.next;
          this.length--;
      }
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
function removeDuplicates(list){
  if(list.length<=1)
      return list;
  let prevNode=list.head;
  let currentNode=list.head.next;
  let tempBuffer=[prevNode.data];
  let index=1;
  while(currentNode){
      if(! tempBuffer.includes(currentNode.data)){
          tempBuffer.push(currentNode.data);
          currentNode=currentNode.next;
          prevNode=prevNode.next;
          index++;
      }
      else{
          list.removeFromIndex(index);
          currentNode=prevNode;
          currentNode=currentNode.next;
      }
  }
  
}
let l1=new LinkedList();
l1.insert(5);
l1.insert(2);
l1.insert(3);
l1.insert(1);
l1.insert(2);
l1.insert(5);
l1.insert(5);
l1.insert(1);
l1.insert(1);
l1.insert(2);
l1.insert(6);
l1.insert(2);
removeDuplicates(l1);
l1.print()
