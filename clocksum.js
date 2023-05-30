let fs = require("fs");
let data = fs.readFileSync('./clocksum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let vars = readLine().split(" ");
let num1 = parseInt(vars[0]);
let num2 = parseInt(vars[1]);
let sum = num1 +num2;
if(sum > 12){   console.log(sum -12);}
else{   console.log(sum);}