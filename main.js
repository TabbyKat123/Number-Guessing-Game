var q = Math.floor(Math.random()*100)+1;

var h = q%2;

if (h==0)
	alert("number is even");
else
	alert("number is odd");

for (count=1;count<=10;count++){
	let num= prompt("please input any number:");
	if (num == q){
		alert("You Win")
		break;
	}
	if (num<q){
		alert("Number is lower, "+"please try again.");
	}
	if (num>q){
		alert ("Number is higher, "+ "please try again.")
	}
	if (count ==10){
		alert("You Lose!")
	}
} 