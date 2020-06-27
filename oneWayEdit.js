function isOneEdit(str1,str2){
    temp={};
    let firstStringLength=str1.length;
    let secondStringLength=str2.length;
    if(Math.abs(firstStringLength-secondStringLength)>1)
        return false;
    let maxLength=Math.max(firstStringLength,secondStringLength);
    let iPtr=0;
    let jPtr=0;
    let edits=0;
    for(let i=0 ; i< maxLength ;i++){
        if(str1[iPtr] !== str2[jPtr]){
            if(str1[iPtr] !== str2[jPtr++])
                return "l";
            edits++;
        }
        iPtr++;
        jPtr++;
        if(iPtr>=firstStringLength && jPtr>secondStringLength)
        {
            edits++
            if(edits>1){
                return false;
            }
            if()
        }
        if(iPtr>=secondStringLength && jPtr>firstStringLength)
            edits++
        if(edits > 1)
            return "b";
        
    }
    return  true;
}

console.log(isOneEdit("geeks",'geek'));

