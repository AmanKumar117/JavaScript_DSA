let fs = require("fs");
let data = fs.readFileSync('./seatpredict.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let testcases = parseInt(readLine());
for(let i = 1; i <= testcases; i++){
    let query = readLine().split(" ");
    let c = parseInt(query[0]);
    let b = parseInt(query[1]);
    let rem = b % 8;
    if(c < b){ console.log("Invalid");}
    switch(rem){
        case (0): console.log("SU");
        break;
        case (7): console.log("SL");
        break;
        case (6): console.log("U");
        break;
        case (5): console.log("M");
        break;
        case (4): console.log("L");
        break;
        case (3): console.log("U");
        break;
        case (2): console.log("M");
        break;
        case (1): console.log("L");
        break;
    }
}