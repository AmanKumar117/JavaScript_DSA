let fs = require("fs");
let data = fs.readFileSync('./Extreme_prod.txt', 'utf-8');
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
for(let i = 0; i < size; i++){
    arr[i] = parseInt(readLine());
}
arr.sort(function(a, b){return a - b});
console.log(arr[0] * arr[size-1]);