let fs = require("fs");
let data = fs.readFileSync('./quadrant.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let inputs = parseInt(readLine());
for(let i = 0; i<inputs; i++){
    let vals = readLine().split(" ");
    let val1 = parseInt(vals[0]);
    let val2 = parseInt(vals[1]);
    if(val1 > 0 && val2 > 0){
        console.log("Q1");
    }
    else if(val1 < 0 && val2 > 0){
        console.log("Q2");
    }
    else if(val1 < 0 && val2 < 0){
        console.log("Q3");
    }
    else if(val1 > 0 && val2 < 0){
        console.log("Q4");
    }
}