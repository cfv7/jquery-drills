$(document).ready(function(){
	function wordCount(text){
		return text.split(" ").length;
	}

	function uniqueWordCount(text){
		var words = text.split(" ");
		let unique = [...new Set(words)]; // 	NEED AN EXPLANATION PLZ
		return unique.length;
	}

	function averageWordLength(text){
		let words = text.split(" ");
		let join = words.join('');
		let len = join.length;
		let avg = len / words.length;
		return avg;
	}

	$('form').submit(function(event){
		$('dl').removeClass('hidden');
		event.preventDefault();
		var textArea = $('textarea').val()
			console.log(textArea)
		$('#wordCount').html(wordCount(textArea));
		$('#uniqueWordCount').html(uniqueWordCount(textArea));
		$('#avgWordLen').html(averageWordLength(textArea));


	})



	console.log("aareallylongstring".length);
	wordCount("This is some text for testing");
	uniqueWordCount("This is is is some text for testing");
	averageWordLength("This is is is some text for testing antidiste")
	
});


