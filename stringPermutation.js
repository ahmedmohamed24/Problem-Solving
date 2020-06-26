function IsPermuted(str1,str2){
    temp={};
    let firstStringLength=str1.length;
    let secondStringLength=str2.length;
    if(firstStringLength !== secondStringLength)
        return false;
    if(firstStringLength ===0)
        return false;
    
    for(let i=0;i<firstStringLength;i++){
        if(! temp[str1[i]])
            temp[str1[i]]=1;
        else
            temp[str1[i]]++;  
    }
    for(let i=0;i<secondStringLength;i++){
        if(!temp[str2[i]] || temp[str2[i]]<1)
            return false;
        else 
            temp[str2[i]]--;
    }
    for(let element in temp){
        if(element>0)
            return false
    }
    return  true;
}

console.log(IsPermuted("abbcda",'bacgab'));//O(n)

