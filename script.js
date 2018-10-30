
  function PlusMinus() {
    
const a = Math.floor(Math.random() * 100) + 1;
const b = Math.floor(Math.random() * 100) + 1;
const c = Math.floor(Math.random()*10)+1;
const d = Math.floor(Math.random()*10)+1;
const e = Math.floor(Math.random()*9)+2;
const f = Math.floor((Math.random()*9)+2)*e;
const val = Math.floor(Math.random()*3)+1;
const sinnum = ["*"];
const deili = ["/"];
const plusmin = ["+", "-"][Math.floor(Math.random()*2)];
if (val == 1){
return prompt("hvað er " + a + " " + plusmin + " " + b + " ?") == eval( a + plusmin + b);}
else if (val == 2){
return prompt("hvað er " + c + " " + sinnum + " " + d + " ?") == eval(c + sinnum + d);}
else
return prompt("hvað er " + f + " " + deili + " " + e + " ?") == eval(f + deili + e);
}

{
const questions =[PlusMinus(), PlusMinus(), PlusMinus(), PlusMinus(), PlusMinus(), PlusMinus(), PlusMinus(), PlusMinus(), PlusMinus(), PlusMinus()   ];

heild = questions.length,
rétt = questions.filter(Boolean).length;
}
 

alert( "Þú náðir "+rétt+"/"+heild+" Rétt");
