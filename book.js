$(document).ready(function() {
	if (localStorage.getItem("currentBook")){
		$(".currentBook").append(localStorage.getItem("currentBook"));
	}
	else{
		$(".currentBook").append('Not reading any book at the moment');
		
	}
});