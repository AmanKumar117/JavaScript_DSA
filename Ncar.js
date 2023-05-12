let fs = require("fs");
let data = fs.readFileSync('./Ncar.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let numbers = readLine().split(" ");
let N = parseInt(numbers[0]);
let i = parseInt(numbers[1]);
let j = N - i + 1;
console.log(j);