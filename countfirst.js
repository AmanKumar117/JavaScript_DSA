let fs = require("fs");
let data = fs.readFileSync('./countfirst.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let count = 1;
let inputs = parseInt(readLine());
let a0 = parseInt(readLine());
for(let i = 1; i<inputs; i++){
    let num = parseInt(readLine());
    if(num == a0){
        count++;
    }
}
console.log(count);