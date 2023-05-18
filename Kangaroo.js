let fs = require("fs");
let data = fs.readFileSync('./Kangaroo.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let testcases = parseInt(readLine());
for(let i = 0; i < testcases; i++){
    let vars = readLine().split(" ");
    let result = "NO";
    let x1 = parseInt(vars[0]);
    let v1 = parseInt(vars[1]);
    let x2 = parseInt(vars[2]);
    let v2 = parseInt(vars[3]);
    for(let j = 0; j < 10000 && result == "NO"; j++){
        if(x1 + v1 * j == x2 + v2 * j){
            result = "YES";
        }
    }
    console.log(result);
}