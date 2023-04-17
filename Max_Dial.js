let fs = require("fs");
let data = fs.readFileSync('./Max_Dial.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let n = parseInt(readLine());
let max= parseInt(readLine());
let m = parseInt(readLine());
let arr_dial = [];
let count_dial = [];
for(let j = 0; j < n; j++){
    count_dial[j] = 0;
}
for(let i = 0; i < m; i++){
    arr_dial[i] = parseInt(readLine());
    count_dial[arr_dial[i]-1]++;
    if(count_dial[arr_dial[i]-1] == 2){
        console.log(arr_dial[i]);
    }
}
let countnotmax = 0;
for(let j = 0; j < n; j++){
    if(count_dial[j] < 2){
        countnotmax++;
    }
}
if(countnotmax == n){
    console.log(0);
}
