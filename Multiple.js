let fs = require("fs");
let data = fs.readFileSync('./Multiple.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let N = parseInt(readLine());
for(let i = N; i > 0; i *=2){
    if(i % 2 == 0){
        if(i % N == 0){
            console.log(i);
            break;
        }
    }
}