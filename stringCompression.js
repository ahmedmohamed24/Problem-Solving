function stringCompression(str1){
    let counter=1;
    let compressesStr="";
    let editsNum=0;
    for(let i=0; i<str1.length;i++){
        if(str1[i]=== str1[i+1]){
            editsNum=1;
            counter++;
        }else{
            compressesStr+=str1[i]+counter;
            counter=1;
        }
    }
    if(editsNum ===0)
        return str1;
    return compressesStr;
}

console.log(stringCompression("aabcccccaaa"));

