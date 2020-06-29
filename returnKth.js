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
function returnKth(list,index){
  if(index<0 || index>=list.length)
      return "Index is not valid";
  else if(list.isEmpty())
      return "List is Empty"
  let traverseNode=list.head;
  let i=0;
  while(index !== i){
      traverseNode=traverseNode.next;
      i++;
  }
  let result=[];
  while(traverseNode){
      result.push(traverseNode.data);
      traverseNode=traverseNode.next
  }
  console.log(result);
  return result;
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
returnKth(l1,3);
l1.print()
