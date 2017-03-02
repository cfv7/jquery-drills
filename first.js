
// In this challenge, you need to write JavaScript that provides the following experience: 
// when a user clicks on one of the thumbnail images, that image should be 
// displayed in the full size image container at the top.
// $(document).ready(function(){
	
// this function does two things.
// First it creates a variable
// called `clickCount`. This variable
// is meant to keep track of
// the number of times the user
// has clicked the "click me"
// button. Initially we set its value
// to zero.
function handleClicks() {
  var clickCount = 0;
  
  // this line sets the inner text
  // of the `.js-click-counter`
  // element the current value
  // of `clickCount` (which is 0)
  $('.js-click-counter').text(clickCount);
  
  // this line says when the
  // `.js-clicker` element is
  // clicked, run the instructions
  // inside the anonymous function
  // (that is, the instructions 
  // between the {...} brackets).
  $('.js-clicker').click(function(event) {
    
    // any time the user clicks, 
    // we add 1 to the value of 
    // `clickCount ...
    clickCount += 1;
    
    // ...and display the updated
    // click count in the
    // `.js-click-count` element.
    $('.js-click-counter').text(clickCount);
  });
}

// this code just says that when
// the browser is done loading the
// page, it should run the
// `handleClicks` function
// we've defined above.
$(handleClicks);
	
function doHelloWorld() {
  $('.js-hide-it').addClass('hidden');
  $('.js-hello-world').text('hello world from JS');
}

doHelloWorld();

function doIt() {
  var toDos = $('.js-to-dos');
  toDos.children('.js-complete').addClass('complete');
  toDos.parent().removeClass('hidden');
}

doIt();

$('.thumbnail').click(function(event){
	console.log('hello');
	//$("img").attr("src")
	// $('.hero img').addClass('hidden');
	$('.hero img').replaceWith(this);
});


// $('.thumbnail img').click(function(event){
// 	$('.hero img').replaceWith(this);
// });

// }	
