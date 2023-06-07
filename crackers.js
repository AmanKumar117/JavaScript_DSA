let fs = require("fs");
let data = fs.readFileSync('./crackers.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let inputs = readLine().split(" ")
let N = parseInt(inputs[0]);
let K = parseInt(inputs[1]);
let div = N/K;
let largest = Math.ceil(div);
let smallest = parseInt(div);
console.log(largest-smallest); 