let fs = require("fs");
let data = fs.readFileSync('./Armstrong.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let number = parseInt(readLine());
let temp = number
let sum = 0;
while(temp != 0){
    let rem = temp % 10;
    sum += rem**3;
    temp = parseInt(temp/10);
}
if(sum === number){
    console.log("Yes");
}
else{ console.log("No");}