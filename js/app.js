
$(document).ready(function() {

	for ( var x = 1; x <= 100; x++ ) {
	if ( (x % 3 === 0) && (x % 5 === 0) ) {
		$("body").append("FizzBuzz<br>");
		console.log(" FizzBuzz ");
	}
	else if((x % 3) === 0) {
		$("body").append("Fizz<br>");
		console.log("Fizz");
	}
	else if ((x % 5) === 0) {
		$("body").append("Buzz<br>");
		console.log("Buzz");
	}
	else {
		$("body").append(+ x +"<br>");
		console.log(x);
	}
}

});













