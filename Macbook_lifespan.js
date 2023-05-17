let fs = require("fs");
let data = fs.readFileSync('./Macbook_lifespan.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let inputs = parseInt(readLine());
let count = 0;
for(let i = 0; i<inputs; i++){
    let num = parseInt(readLine());
    if(num > 0){
        count += num;
    }
}
console.log(count);