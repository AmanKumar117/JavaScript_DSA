let fs = require("fs");
let data = fs.readFileSync('./Count_First.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let size = parseInt(readLine());
let a0 = parseInt(readLine());
let count = 1;
for(let i = 1; i < size; i++){
    let num = parseInt(readLine());
    if(num == a0){
        count++;
    }
}
console.log(count);