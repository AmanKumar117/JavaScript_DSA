let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////


your_name= readLine()
your_ame= readLine()
console.log("hello "+your_name)
console.log("you ordered "+your_ame)