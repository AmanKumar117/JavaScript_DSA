let fs = require("fs");
let data = fs.readFileSync('./Parity.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let size = parseInt(readLine());
let arr = [];
let min = 0;
for(let i = 0; i < size; i++){
    arr[i] = parseInt(readLine());
}
for(let j= 0; j < size-1; j++){
    if(arr[j] < arr[j+1]){
        min = arr[j];
    }
    else{
        min = arr[j+1];
    }
}
let minimum = min.toString();
minimum = minimum.split("");
sum = 0;
for(let k = 0; k < minimum.length; k++){
    let temp = parseInt(minimum[k]);
    sum += temp; 
}
if(sum %2 == 0){
    console.log(1);
}
else{   console.log(0);}