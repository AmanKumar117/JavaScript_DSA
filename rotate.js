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
let m = parseInt(readLine());
let arr = []
for(let i = 0; i < m; i++){
  arr[i] = readLine().split(" ");
}
let n = arr[0].length;
console.log(n);
for(let i = 0; i < n; i++){
  for(let j = m-1; j >=0; j--){
    process.stdout.write(arr[j][i]+" ");
  }
  console.log();
}