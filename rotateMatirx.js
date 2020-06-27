
function imageRotate_second(imageMatrix){
    //with no external space
    let imageSize=imageMatrix.length;
    for(let i=0;i< imageSize;i++){
        let temp=0;
        for(let j=i+1;j< imageSize;j++){
            temp=imageMatrix[i][j];
            imageMatrix[i][j]=imageMatrix[j][i];
            imageMatrix[j][i]=temp;
        }
    }
    return imageMatrix;
}
console.log(imageRotate_second([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]));
