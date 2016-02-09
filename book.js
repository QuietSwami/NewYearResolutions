$(document).ready(function() {

	var noBook = 'Not reading any book at the moment';
	if (localStorage.getItem("currentBook") != ""){
		$(".currentBook").append(localStorage.getItem("currentBook"));
		$("#newBook").css('visibility', 'hidden');
		$(".currentPage").val(localStorage.getItem("currentPage"));
	}
	else{
		$(".currentBook").append(noBook);
		$("")
	}

	if (localStorage.getItem("bookList")){
		var storage = JSON.parse(localStorage.getItem("bookList"));
		for(var i = 0; i < storage.length; i++){
			$(".bookList").append("<li>"+storage[i]+"</li>");
		}
	}

	$("#newBook").click(function(){
		$(".currentBook").empty();
		$(".white_content").css("display", "block");
		$(".black_overlay").css("display", "block");
	});

	$(".finished").click(function(event) {
		localStorage.setItem("currentBook", "");
	});
	$(".close").click(function(event) {
		var title = $(".title").val();
		var numOfPages = $(".pages").val();
		$(".pages").val("");
		$(".title").val("");
		$(".currentBook").append(title);
		localStorage.setItem("currentBook", title);
		localStorage.setItem("currentPage", 0);
		$("#newBook").css('visibility', 'hidden');
		$(".white_content").css("display", "none");
		$(".black_overlay").css("display", "none");
	});


});