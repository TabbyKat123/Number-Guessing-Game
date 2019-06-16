var q = Math.floor(Math.random()*100)+1;
var h = q%2;
if (h==0)
	alert(q+"number is even");
else
	alert(q+"number is odd");

for (count=1;count<=10;count++){
	let num= prompt("please input any number:");
	if (num>q)
		alert("number is higher, try another one.");
	else if (num<q)
		alert("number is lower, try anther one.");
	else if(num==q)
		alert("You Win!")
	else 

		alert("You lose!")
} 