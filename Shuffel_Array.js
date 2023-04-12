let fs = require("fs");
let data = fs.readFileSync('./Shuffel_Array.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let n = parseInt(readLine());
let arrx = []
let arry = []
for(let i = 0; i < n; i++){
    arrx[i] = parseInt(readLine());
}
console.log(arrx);
for(let i = 0; i < n; i++){
    arry[i] = parseInt(readLine());
}
console.log(arry);
let m = 0;
let l = 0;
for(let j = 0; j < 2*n; j++){
    
    if(j % 2 == 0){
        console.log(arrx[j % 2 + m]);
        m++; 
    }
    else{
        console.log(arry[j % 2 + l -1]);
        l++;
    }
}