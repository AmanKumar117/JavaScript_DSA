let fs = require("fs");
let data = fs.readFileSync('./palindrome.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let input = parseInt(readLine());
let temp = input;
let sum = 0;
while(temp!=0){
    let rem = temp % 10;
    sum += rem;
    temp = Math.floor(temp/10);
    if(temp!=0){
        sum *= 10;
    }
}
if(input == sum){
    console.log("True");
}
else{   console.log("False")}