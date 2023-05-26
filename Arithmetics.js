let fs = require("fs");
let data = fs.readFileSync('./Arithmetics.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let num1 = parseInt(readLine());
let num2 = parseInt(readLine());
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);