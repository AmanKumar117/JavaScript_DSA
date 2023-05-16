let fs = require("fs");
let data = fs.readFileSync('./Max_Prod.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let size = parseInt(readLine());
let arr = [];
let max_prod = 1;
for(let i = 0; i < size; i++){
    arr[i] = parseInt(readLine());
}
for(let j = 0; j < size-1; j++){
    let temp = arr[j]*arr[j+1];
    if(temp > max_prod){
        max_prod = temp;
    }
}
console.log(max_prod);