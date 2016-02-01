$(document).ready(function($) {
	var date = moment().format("DD-MMM-YYYY");
	if (localStorage.getItem("year")){
		var storage = JSON.parse(localStorage.getItem("year"));
		for(var i = 0; i < storage.length; i++){
			if (storage[i].check == 1){
				$(".yearList").append("<li class='"+storage[i].id+"'>"+storage[i].text+"<input type='checkbox' checked='checked' class='"+storage[i].id+"'>");
			}
			else{
				$(".yearList").append("<li class='"+storage[i].id+"'>"+storage[i].text+"<input type='checkbox' class='"+storage[i].id+"'>");
			}
		}

	}
	$(".list input:checkbox").click(function(){
		var input = $(this).attr("class");
		var storage = JSON.parse(localStorage.getItem("year"));
		for (var i = 0; i < storage.length; i ++){
			if (storage[i].id == input){
				if (storage[i].check == 1){
					storage[i].check = 0;
				}
				else{
					storage[i].check = 1;
				}
			}
		}
		localStorage.setItem("year", JSON.stringify(storage));
	});

	if (date < "31-12-2016"){
		$("#reso").click(function(event) {
			if ($(".yearText").val()){
				var id = String(Math.random().toString(36).substring(7));
				$(".yearList").append("<li class='"+id+"'>"+$(".yearText").val()+"<input type='checkbox' class='"+id+"'>");
				
				if (!localStorage.getItem("year")){
					localStorage.setItem("year", JSON.stringify([{"id": id, "text":$(".yearText").val(), "check": 0}]));
				}
				else{
					var storage = JSON.parse(localStorage.getItem("year"));
					storage.push({"id":id, "text":$(".yearText").val(), "check": 0});
					localStorage.setItem("year", JSON.stringify(storage));
				}
				$(".yearText").val("");
			}	
			else{
				alert("You Need TexT!!")
			}
		});
	}
	else{
		alert("Happy New Year!!!");
	}
});
