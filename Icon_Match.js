let fs = require("fs");
let data = fs.readFileSync('./Icon_Match.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let n = parseInt(readLine());
let array = [];
let occurance = 0;
for(let i = 0; i < n; i++){
    array[i] = parseInt(readLine());
}
let m = parseInt(readLine());
let k = [];
for(let j = 0; j < m; j++){
    k[j] = parseInt(readLine());
}
for(let i = 0; i < n; i++){
    let count = 0;
    for(let j = 0; j < m; j++){
        if(array[i] == k[j]){
            count++;
            i = i+1;
        }
    }
    if(count == k.length){
        occurance++;
    }
}
console.log(occurance);