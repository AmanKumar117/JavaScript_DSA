const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let inp = readLine().split(" ");
let arr = readLine().split(" ");
for(let i = 0; i < parseInt(inp[1]); i++){
    let q = readLine().split(" ");
    let L = parseInt(q[0]);
    let R = parseInt(q[1]);
    let sum = 0;
    for(let j = L; j <= R; j++){
        sum = sum + parseInt(arr[j]);
    }
    console.log(sum);
}