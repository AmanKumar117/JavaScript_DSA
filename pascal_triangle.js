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
function getRow(rowIndex) {
  let currow = [];

  // 1st element of every row is 1
  currow.push(1);

  // Check if the row that has to
  // be returned is the first row
  if (rowIndex == 0) {
    return currow;
  }
  // Generate the previous row
  let prev = getRow(rowIndex - 1);

  for (let i = 1; i < prev.length; i++) {
    // Generate the elements
    // of the current row
    // by the help of the
    // previous row
    let curr = prev[i - 1] + prev[i];
    currow.push(curr);
  }
  currow.push(1);

  // Return the row
  return currow;
}
let n = parseInt(readLine());
let arr = getRow(n-1);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
