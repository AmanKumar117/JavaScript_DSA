let fs = require("fs");
let data = fs.readFileSync('./Amazing_Sum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let size = parseInt(readLine());
let arr = []
let result ="false"
for(let i = 0; i < size; i++){
    arr[i]= parseInt(readLine());
}
for(let j = 0; j < size-1 && result == "false"; j++){
    if(arr[j] + arr[j+1] > 100){
        result = "true";
    }
}
console.log(result);