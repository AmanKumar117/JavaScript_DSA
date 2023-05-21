let fs = require("fs");
let data = fs.readFileSync('./GP.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let num1 = parseFloat(readLine());
let num2 = parseFloat(readLine());
let num3 = parseFloat(readLine());
let num4 = 0;
let gp_ratio1 = num2/num1;
let gp_ratio2 = num3/num2;
if(gp_ratio1 == gp_ratio2){
    num4 = num3 * gp_ratio1;
}    
console.log(num4);