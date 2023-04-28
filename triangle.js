let fs = require("fs");
let data = fs.readFileSync('./triangle.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let a = parseInt(readLine());
let b = parseInt(readLine());
console.log(180-(a+b)); 