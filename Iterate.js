let fs = require("fs");
let data = fs.readFileSync('./Iterate.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let number = parseInt(readLine());
for(let  i = 1; i <= number; i++){
    console.log(number*i);
}