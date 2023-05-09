let fs = require("fs");
let data = fs.readFileSync('./pattern122333.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let val = parseInt(readLine());
for(let i = 1; i <= val; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += i;
    }
    console.log(pattern);
}