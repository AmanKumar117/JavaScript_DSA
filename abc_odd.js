let fs = require("fs");
let data = fs.readFileSync('./abc_odd.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let vars = readLine().split(" ");
let a = parseInt(vars[0]);
let b = parseInt(vars[1]);
let prod = 1;
let result = "No";
for(let i =1; i<=3 && result == "No"; i++){
    prod = a*b*i;
    if(prod % 2 == 1){
        result = "Yes";
    }
}
console.log(result);