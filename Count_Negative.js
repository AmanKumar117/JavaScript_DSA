let fs = require("fs");
let data = fs.readFileSync('./Count_Negative.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let size = parseInt(readLine());
let arr = readLine().split(" ");
let count = 0;
for(let i = 0; i < size; i++){
    let x = parseInt(arr[i]);
    if(x < 0){
        count++;
    }
}
console.log(count);