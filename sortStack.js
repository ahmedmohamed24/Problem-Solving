class Stack{
    constructor(){
        this.top=0;
        this.data=new Array();
    }
    isEmpty(){
        return this.top===0;
    }
    push(element){
        ++this.top;
        this.data.push(element);
    }
    pop(){
        this.top--;
        return this.data.pop();
    }
    peek(){
        return this.data[this.top-1];
    }
    print(){
        if(this.isEmpty())
            console.log( "Error: this stack is empty");
        else{
            let tempTraverse=this.top-1;
            while(tempTraverse>=0){
                console.log(this.data[tempTraverse--]);
            }
        }
       
    }
}


function sortStack(inputStack){
    let tempStack=new Stack();
    let temp;
    while(! inputStack.isEmpty()){
        temp=inputStack.pop();
        while(! tempStack.isEmpty() && tempStack.peek() < temp)
            inputStack.push(tempStack.pop())
        tempStack.push(temp);
    }
    return tempStack;
}
let s1=new Stack();
s1.push(10);
s1.push(5);
s1.push(-8);
s1.push(12);
s1.push(3);
s1.push(8);
s1.push(12);
let sortedStack=new Stack();
sortedStack=sortStack(s1);
sortedStack.print();