$(document).ready(function(){
	function wordCount(text){
		console.log(text.split(" ").length);
	}

	function uniqueWordCount(text){
		var words = text.split(" ");
		let unique = [...new Set(words)]; // 	NEED AN EXPLANATION PLZ
		console.log(unique.length);
	}

	function averageWordLength(text){
		let words = text.split(" ");
		let join = words.join('');
		let len = join.length;
		console.log(join);
		let avg = len / words.length;
		console.log(typeof len, typeof words.length)
		console.log(avg);
	}


	console.log("aareallylongstring".length);
	wordCount("This is some text for testing");
	uniqueWordCount("This is is is some text for testing");
	averageWordLength("This is is is some text for testing antidiste")
	
});


