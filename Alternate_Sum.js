let fs = require("fs");
let data = fs.readFileSync('./Alternate_Sum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let size = parseInt(readLine());
let arr = readLine().split(" ");
let sum = 0;
for(let i = 0; i < size; i += 2){
    let x = parseInt(arr[i]);
    sum += x;
}
console.log(sum);