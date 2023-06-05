let fs = require("fs");
let data = fs.readFileSync('./diamondPat.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}
///////////////////////////////////////////////////
/*let val = parseInt(readLine());
let spaces = 0;

for(let i = 1; i <= val; i++){
    let pattern = "";
    spaces = val - i;
    pattern += " ";
    pattern = pattern.repeat(spaces);
    let patternstar = "*";
    patternstar = patternstar.repeat(i+i-1);
    pattern += patternstar;
    console.log(pattern);
}
for(let j = val-1 ; j >= 1; j--){
    let belowpat = "";
    spaces = val - j;
    belowpat += " ";
    belowpat = belowpat.repeat(spaces);
    let patternstar1 = "*";
    patternstar1 = patternstar1.repeat(j+j-1);
    belowpat += patternstar1;
    console.log(belowpat); 
}
*/
let val = parseInt(readLine());
let spaces = 0;

for(let i = 1; i <= val; i++){
    let pattern = "";
    spaces = val - i;
    pattern += " ";
    pattern = pattern.repeat(spaces);
    let patternstar = "* ";
    patternstar = patternstar.repeat(i);
    pattern += patternstar;
    console.log(pattern);
}
for(let j = val-1 ; j >= 1; j--){
    let belowpat = "";
    spaces = val - j;
    belowpat += " ";
    belowpat = belowpat.repeat(spaces);
    let patternstar1 = "* ";
    patternstar1 = patternstar1.repeat(j);
    belowpat += patternstar1;
    console.log(belowpat); 
}