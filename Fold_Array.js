let fs = require("fs");
let data = fs.readFileSync('./Fold_Array.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let size = parseInt(readLine());
let array = [];
for(let i = 0; i < size; i++){
    array[i] = parseInt(readLine());
}
let temp = array;
let numOfFolds = parseInt(readLine());

console.log(Math.ceil(size/(2+numOfFolds-1)));
while(numOfFolds !=0){
    let foldedArray = [];
    for(let j = 0; j < (temp.length/2); j++){
        if(temp.length % 2 == 1){
            if(j < Math.floor(temp.length/2)){
                foldedArray[j] = temp[j] + temp[temp.length - 1 - j];
            }
            else{
                foldedArray[j] = temp[j];
            } 
        }
        else{
            foldedArray[j] = temp[j] + temp[size - 1 - j];
        }
    }
    temp = foldedArray;
    numOfFolds--;
}
for(let k = 0; k < temp.length; k++){
    console.log(temp[k]);
}

