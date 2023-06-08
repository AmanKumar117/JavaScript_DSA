let fs = require("fs");
let data = fs.readFileSync('./ProductnSum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let number = parseInt(readLine());
let temp = number;
let product = 1;
let sum = 0;
while(temp != 0){
    let rem = temp % 10;
    sum += rem;
    product *= rem;
    temp = parseInt(temp/10);
}
console.log(product - sum);
