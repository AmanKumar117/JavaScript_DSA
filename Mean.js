let fs = require("fs");
let data = fs.readFileSync('./Mean.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let val = parseInt(readLine());
let numbers = readLine().split(" ");
let count = 0;
for(let i = 0; i < val; i++){
    let num = parseInt(numbers[i]);
    count += num;
}
let mean = parseInt(count/val);
console.log(mean);