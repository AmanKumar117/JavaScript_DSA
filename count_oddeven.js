let fs = require("fs");
let data = fs.readFileSync('./count_oddeven.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let counteven = countodd = 0;
let inputs = parseInt(readLine());
for(let i = 0; i<inputs; i++){
    let num = parseInt(readLine());
    if(num %2 == 0){
        counteven++;
    }
    else{ countodd++;}
}
console.log(countodd);
console.log(counteven);