$(document).ready(function($) {
	if (!localStorage.getItem("chapter") && !localStorage.getItem("dailyChapter")){
		localStorage.setItem("chapter", 0);
		localStorage.setItem("dailyChapter", "");
	}else{
		var date = moment().format("DD-MMM-YYYY");
		if (localStorage.getItem("dailyChapter") != date){
			$(".dailyChapter").click(function(){
				var chapters = parseInt(localStorage.getItem("chapter"));
				chapters += 1;
				localStorage.setItem("chapter", chapters);
				localStorage.setItem("dailyChapter", date);
			});
		}
		else{
			$(".dailyChapter").prop("checked", true);
		}
	}
});