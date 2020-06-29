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
function sumLinkedList(l1,l2){
  if(l1.isEmpty() || l2.isEmpty())
      return -1;
  let firstLength=l1.length;
  let secondLength=l2.length;
  let firstNumber=0;
  let secondNumber=0;
  let traversalNode=l1.head;
  while(traversalNode){
      firstLength--;
      firstNumber+=(traversalNode.data)*Math.pow(10,firstLength);
      traversalNode=traversalNode.next;
  }
  traversalNode=l2.head;
  while(traversalNode){
      secondLength--;
      secondNumber+=(traversalNode.data)*Math.pow(10,secondLength);
      traversalNode=traversalNode.next;
  }
  let thirdNumber=firstNumber+secondNumber;
  thirdNumber=thirdNumber.toString();
  let l3=new LinkedList();

  for(let i=0;i<thirdNumber.length;i++)
      l3.insert(thirdNumber[i]);
  return l3;
}
let l1=new LinkedList();
l1.insert(5);
l1.insert(0);
l1.insert(1);
let l2=new LinkedList();
l2.insert(2);
l2.insert(0);
l2.insert(2);


let l3=sumLinkedList(l1,l2);
l3.print();