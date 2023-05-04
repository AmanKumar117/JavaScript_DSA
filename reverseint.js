let fs = require("fs");
let data = fs.readFileSync('./reverseint.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
let value = parseInt(readLine());
let temp = value;
let num = 0;
if(value>0){
    while(temp !=0){
        let rem = temp % 10;
        num += rem;
        temp = parseInt(temp/10);
        if(temp!=0){
            num *= 10;
        }
    }
    if (num > (2**31 - 1)) {
        console.log(0);
    }
    else{ 
        let newz = parseInt(num);
        console.log(newz);}
    
}
else if(temp< 0){
    let temp1 = temp* (-1);
    while(temp1!=0){
        let rem = temp1%10;
        num += rem;
        temp1 = parseInt(temp1/10);
        if(temp1!=0){
            num *= 10;
        }
    }
    if(-(2**31) < num*(-1)){
        console.log(num*(-1));
    }
    else{ console.log(0);}
    
}   
