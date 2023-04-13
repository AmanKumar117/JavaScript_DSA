let fs = require("fs");
let data = fs.readFileSync('./rotatearray.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let arr = readLine().split(" ");
let size = arr.length;
let rotatetimes = parseInt(readLine());
while(rotatetimes!=0){
    for(let j = 0; j < size-1; j++){
        let temp = arr[0];
        arr[0] = arr[j+1];
        arr[j+1] =temp;
    }
    rotatetimes--;
}
console.log(arr);