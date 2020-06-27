function zeroMatrix(mat){
    let zeroRows={};
    let zeroCols={};
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j] ===0){
                zeroRows[i]=true;
                zeroCols[j]=true;
            }
        }
    }
    for(let row in zeroRows){
        for(let j=0;j<mat[0].length;j++){
            mat[row][j]=0;
        }
    }
    for(let col in zeroCols){
        for(let i=0;i<mat.length;i++){
            mat[i][col]=0;
        }
    }
    return mat;
    
}
console.log(zeroMatrix([
    [1,2,3,0],
    [5,6,7,8],
    [9,0,11,12],
    [13,14,15,16]
]));
