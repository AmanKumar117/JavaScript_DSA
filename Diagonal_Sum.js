let fs = require("fs");
let data = fs.readFileSync('./Diagonal_Sum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let n = parseInt(readLine());
let matrix = [];
for(let i = 0; i < n; i++){
    matrix[i] = readLine().split(" ");
}
let diagonalSum = 0;
for(let i = 0; i < n; i++){
    diagonalSum += parseInt(matrix[i][i]) + parseInt(matrix[n-1-i][i]);
}
console.log(diagonalSum);