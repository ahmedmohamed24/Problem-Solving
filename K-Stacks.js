/* Three in One: Describe how you could use a single array to implement three stacks. */
class K_Stacks{
    constructor(k,size){ //divide the array with size (size) into (k) stacks 
        this.size=size;
        this.k=k;
        this.length=0;
        this.mainStack=[]; // the main stack which holds all other stacks 
        this.auxiliary=[]; // an array to define which indexes belongs to every stack (auxiliary Array)
    }
    isFull(){
        return this.length+1>this.size; //check if the next item will over my main stack size 
    }
    push(element,stackNum){
        if(this.isFull())
            return "Error: This stack is full !";
        this.mainStack.push(element);
        this.auxiliary.push(stackNum);
        this.length++;
    }
    getTopIndex(stackNum){//get the last element index related to a specific stack
        var temp=-1;
        for(let i=0;i<=this.length;i++){
            if(this.auxiliary[i]=== stackNum)
                temp=i;
        }
        return temp; 
    }
    pop(stackNum){
       let temp=this.getTopIndex(stackNum);
        if(temp===-1){
            return "Error: This stack is Empty";
        }else{
            temp=this.mainStack[temp];
            this.mainStack[temp]=null;
            this.auxiliary[temp]=-1;
        }
        return temp; //we may shift here to avoid any free space 
    }
    peek(stackNum){
        let temp=this.getTopIndex(stackNum);
        if(temp===-1){
            return "Error: This stack is Empty";
        }else{
           return this.mainStack[temp];
        }
    }
}
let k = new K_Stacks(3,100);
k.push(0,0);
k.push(2,1);
k.push(1,2);
k.push(3,1);
k.push(6,2);
k.push(5,0);
k.pop(1);
console.log(k.mainStack);
console.log(k.peek(0));