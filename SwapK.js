let fs = require("fs");
let data = fs.readFileSync('./SwapK.txt', 'utf-8');
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
let k = parseInt(vars[1]);
let array = readLine().split(" ");
let temp = array[k-1];
array[k-1] = array[n - k];
array[n - k] = temp;
for(let j = 0; j < n; j++){
    console.log(parseInt(array[j]));
}