
// In this challenge, you need to write JavaScript that provides the following experience: 
// when a user clicks on one of the thumbnail images, that image should be 
// displayed in the full size image container at the top.
// $(document).ready(function(){
	
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
