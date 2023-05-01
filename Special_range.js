let fs = require("fs");
let data = fs.readFileSync('./Special_range.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let lrange = parseInt(readLine());
let Rrange = parseInt(readLine());
for(let i = lrange; i<= Rrange ; i++){
    if(i >= 0){
        console.log(i);
    }
}