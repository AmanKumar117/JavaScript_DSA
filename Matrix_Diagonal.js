let fs = require("fs");
let data = fs.readFileSync('./Matrix_Diagonal.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let m = parseInt(readLine());
let matrix = [];
for(let i = 0; i < m; i++){
    matrix[i]=readLine().split(" ");
}
for(let i = 0; i < m; i++){
    if(matrix[i][i] < 0){
        matrix[i][i] = '0';
    }
    else{
        matrix[i][i] = '1';
    }
}
for(let i = 0; i < m; i++){
    for(let j = 0; j < m; j++){
        let x = parseInt(matrix[i][j]);
        process.stdout.write(x+" ");
    }
    console.log();
    
}   