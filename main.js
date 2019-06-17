var q = Math.floor(Math.random()*100)+1;

var h = q%2;

if (h==0)
	alert(q+"number is even");
else
	alert(q+"number is odd");

for (count=1;count<=10;count++){
	let num= prompt("please input any number:");
	if (num == 1){
		alert("You Win")
		break;
	}
	if (num<h){
		alert("Number is lower, "+"please try again.");
	}
	if (num>h){
		alert ("Number is higher, "+ "please try again.")
	}
	if (count ==10){
		alert("You Lose!")
	}
} 