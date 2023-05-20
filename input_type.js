let fs = require("fs");
let data = fs.readFileSync('./input_type.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let strVar = readLine().split(" "); // when input is in 1 line
let num1 = parseInt(strVar[0]);
let num2 = parseInt(strVar[1]);
let num3 = parseInt(strVar[2]);
/* input type
5  number of terms
1
2
3
4
5
*/
let inputs = readLine();
for(let i = 0; i<inputs; i++){
    let num = parseInt(readLine());
    if(num % 2 == 0){
        console.log("even");
    }
    else{   console.log("odd");}
    // or whatever function you want to perform on the number call that function
}
/*input type
5  number of terms
12 23 34 45 56
*/
let num4, count=0;
let len = readLine();
let seq = readLine().split(" ");
for(let j = 0; j < len; j++){
    num4 = parseInt(seq[j]);
    if(num4 % 2 != 0){ count++; }// or call the function which has to perform the task
}
console.log(count);