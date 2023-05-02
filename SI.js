let fs = require("fs");
let data = fs.readFileSync('./SI.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let P= parseInt(readLine());
let T= parseInt(readLine());
let R= parseInt(readLine());
let simpeI= (P*T*R)/100;
console.log(simpeI); 