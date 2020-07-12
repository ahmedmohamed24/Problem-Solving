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
class My_Queue{
    constructor(){
        this.mainStack=new Stack();
        this.auxiliaryStack=new Stack();
    }
    enqueue(data){
        if(this.mainStack.isEmpty())
            this.mainStack.push(data);
        else{
            while( ! this.mainStack.isEmpty()){
                this.auxiliaryStack.push(this.mainStack.pop())
            }
            this.mainStack.push(data);
            while(! this.auxiliaryStack.isEmpty()){
                this.mainStack.push(this.auxiliaryStack.pop());
            }
        }
    }
    deQueue(){
        if(this.mainStack.isEmpty())
            return "Error: this Queue is Empty";
        return this.mainStack.pop();
    }
    print(){
        this.mainStack.print();
    }
}

let s1=new My_Queue();
s1.enqueue(5);
s1.deQueue();
s1.enqueue(3);
s1.enqueue(1);
s1.enqueue(0);
s1.deQueue();
s1.enqueue(6);
s1.print();

