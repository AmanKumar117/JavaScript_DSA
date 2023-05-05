let fs = require("fs");
let data = fs.readFileSync('./Rating.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let rating = parseInt(readLine());
if(rating<1200){
    console.log("ABC");
}
else if(rating>=1200 && rating< 2800){
    console.log("ARC");
}
else{
    console.log("AGC");
}