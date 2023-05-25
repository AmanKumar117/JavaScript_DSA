let fs = require("fs");
let data = fs.readFileSync('./AP.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let a= parseInt(readLine());
let b= parseInt(readLine());
let c= parseInt(readLine());
let d= 0; 
let difference1 = b - a;
let difference2 = c - b;
if(difference1 == difference2){
    d = c + difference1;
} 
console.log(d);