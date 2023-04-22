let fs = require("fs");
let data = fs.readFileSync('./divisibility.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let vars = readLine().split(" ");
let n = parseInt(vars[0]);
let x = parseInt(vars[1]);
let array = readLine().split(" ");
let count = 0;
for(let i = 0; i < n; i++){
    if(parseInt(array[i]) % x == 0){
        count++;
    }
}
console.log(count);