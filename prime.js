let fs = require("fs");
let data = fs.readFileSync('./prime.txt', 'utf-8');
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
    let num = parseInt(readLine());
    if(num < 2){
        console.log("No");
    }
    else if(num == 2){   console.log("Yes");}
    else{
        for(let j = 2; j <= num/2; j++){
            if(num % j == 0){   console.log("No");}
            else{   console.log("Yes");}
        }
    }
}