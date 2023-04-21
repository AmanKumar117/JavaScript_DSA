const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync('./findSumZero.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
function findSumZero(arr){
    let sum = 0;
    for(let i = 0; i< arr.length - 1; i++){
        let initialSum = arr[i]
        for(let j = i+1; j< arr.length; j++){
            if(initialSum+arr[j]==0){
                return [arr[i],arr[j]]
            }
            else if(initialSum+arr[j]!=0){
                initialSum += arr[j]
                continue;
            }
        }
    }
    // if no sum-zero pairs are found, return "No Elements found"
    return "No Elements found";
}
const arr = [1,2,-3,4,5]
console.log(findSumZero(arr))