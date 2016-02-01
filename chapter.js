$(document).ready(function($) {
	if (!localStorage.getItem("chapter")){
		localStorage.setItem("chapter", 0);
	}
	else{
		$(".dailyChapter").click(function(){
			var chapters = parseInt(localStorage.getItem("chapter"));
			chapters += 1;
			console.log(chapters);
			localStorage.setItem("chapter", chapters);
		});
	}
});