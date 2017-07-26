// Rutgers Coding Bootcamp //
// Prework Assignment #10 //
// Code by William Rainaud //


// When the button1 button is clicked...
$("#button1").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked... 
$("#button2").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

// When the button3 button is clicked... 
$("#button3").on("click", function() {
	// Change color of the box to blue.
	$("#box").css("backgroundColor", "blue")
})

// When the button4 button is clicked... 
$("#button4").on("click", function() {
	// Decrease the opacity of the box.
	$("#box").animate({opacity: "-=0.1"}, "fast");
})

// When the button5 button is clicked... 
$("#button5").on("click", function() {
	// return the box to original form.
	$("#box").animate({height:"150px", width:"150px"}, "fast");
	$("#box").css("backgroundColor", "orange", "fast");
	$("#box").animate({opacity: "1.0"}, "fast");
})

