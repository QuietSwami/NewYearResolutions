$(document).ready(function() {

	var noBook = 'Not reading any book at the moment';

	if (localStorage.getItem("currentBook") != "" && localStorage.getItem("currentBook")){
		$(".currentBook").append(localStorage.getItem("currentBook"));
		$("#newBook").css('visibility', 'hidden');
		$(".currentPage").val(parseInt(localStorage.getItem("currentPage")));
	}
	else{
		$(".currentBook").append(noBook);
		$(".page").css('visibility', 'hidden');
	}

	if (localStorage.getItem("bookList")){
		var storage = JSON.parse(localStorage.getItem("bookList"));
		for(var i = 0; i < storage.length; i++){
			$(".bookList").append("<li>"+storage[i]+"</li>");
		}
	}

	setInterval(function(){
		if ($(".currentPage").val() == localStorage.getItem("currentPage")){
			$(".pageSet").css('pointer-events', 'none');
		}
		else{
			$(".pageSet").css('pointer-events', 'auto');
			$(".pageSet").click(function(){
				localStorage.setItem("currentPage", parseString($(".pageSet").val())); // missing string parser
			});
		}
	},1000);

	$()

	$("#newBook").click(function(){
		$(".currentBook").empty();
		$(".white_content").css("display", "block");
		$(".black_overlay").css("display", "block");
	});

	$(".finished").click(function(event) {
		var book = localStorage.getItem("currentBook");
		if (! localStorage.getItem("bookList")){
			var storage = [];
			localStorage.setItem("bookList", JSON.stringify(storage));
		}
		var storage = JSON.parse(localStorage.getItem("bookList"));
		storage.push(book);
		localStorage.setItem("bookList", JSON.stringify(storage));
		localStorage.setItem("currentBook", "");
		localStorage.setItem("currentPage", 0);
		location.reload();
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
		$(".page").css('visibility', 'visible');
		$(".currentPage").val(0);
		$(".white_content").css("display", "none");
		$(".black_overlay").css("display", "none");
	});


});