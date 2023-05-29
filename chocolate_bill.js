let fs = require("fs");
let data = fs.readFileSync('./chocolate_bill.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let choco_cost = parseInt(readLine());
let chocos = parseInt(readLine());
let icec_cost = parseInt(readLine());
let icecs = parseInt(readLine());
let final_amt = (choco_cost*chocos) + (icec_cost*icecs);
console.log(final_amt);