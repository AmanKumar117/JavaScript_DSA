const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync('./MaxOccur.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let n = parseInt(readLine());
let arr = [];
for(let i = 0; i < n; i++){
    arr[i] = parseInt(readLine());
}
let max = 1;
let maxEle = [];
let k = 0;
for(let index = 0; index < n; index++){
    let count = 0;
    for(let j = index + 1; j < n; j++){
        if(arr[index] == arr[j]){
            count++;
        }
    }
    if(count >= max){
        max = count;
        maxEle[k] = arr[index];
        k++;
    }
}
for(let m = 0; m < maxEle.length; m++){
    console.log(maxEle[m]);
}