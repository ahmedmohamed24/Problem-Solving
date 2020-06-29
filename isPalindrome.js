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


let l1=new LinkedList();
l1.insert('a');
l1.insert('b');
l1.insert('d');
l1.insert('c');
l1.insert('d');
l1.insert('b');
l1.insert('a');

let result=isPalindrome(l1)
console.log(result);
