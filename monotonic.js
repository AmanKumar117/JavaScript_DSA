let fs = require("fs");
let data = fs.readFileSync('./monotonic.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let nums = parseInt(readLine());
let num = [];
let countinc = true;
let countdec = true;
for(let i = 0; i < nums; i++){
    num.push(parseInt(readLine()));
}
for(let j =0; j < nums-1; j++){
   if(num[j] > num[j+1]){
    countinc = false;
   }
   if(num[j] < num[j+1]){
    countdec == false;
   }
}   
if(countinc || countdec ){
    console.log(1);
}
else{
    console.log(0);
}
