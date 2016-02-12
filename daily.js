$(document).ready(function(){
	var goalNumb = 0;

	var date = moment().format("DD-MMM-YYYY");
	if(localStorage.getItem(moment().format("DD-MMM-YYYY"))){ // if it's the same day
		var storage = localStorage.getItem(moment().format("DD-MMM-YYYY"));
		storage = JSON.parse(storage);
		for (var i = 0; i < storage.length; i ++){
			var single = storage[i];
			if (single.check == 1){
				goalNumb += 1;
				$(".table").append("<li class='"+single.id+"'>"+single.text+ "<input type='checkbox' checked='checked' class='"+single.id+"'> <a class='remove'>remove</a>");
			}
			else{
				$(".table").append("<li class='"+single.id+"'>"+single.text+ "<input type='checkbox' class='"+single.id+"'> <a class='remove'>remove</a>");
			}
		}
	}
	else{ // if it's a new day
		var yesterday = moment().add(-1, "days").format("DD-MMM-YYYY");
		if (!localStorage.getItem("total") && !localStorage.getItem("done")){
			localStorage.setItem("total", 0);
			localStorage.setItem("done", 0);		
		}
		if (localStorage.getItem(yesterday)){
			var storage = JSON.parse(localStorage.getItem(yesterday));
			var total;
			var done;
			for (var i = 0; i < storage.length; i ++){
				total ++;
				if (storage[i].check == 1){
					done ++;
				}
			}
			localStorage.setItem("total", total);
			localStorage.setItem("done", done);
		}
	}

	function Goal(text){
		this.id = String(Math.random().toString(36).substring(7));
		this.text = text;
		this.checked = 0;
		this.Date =  moment().format('DD-MMM-YYYY');
		this.getId = function(){
			return this.id;
		} 
		this.getText = function(){
			return this.text;
		} 
		this.getChecked = function(){
			return this.checked;
		}
		this.getDate = function(){
			return this.Date;
		}
	}

	function store(goal){
		var date = moment().format("DD-MMM-YYYY");
		if (! localStorage.getItem(date)){
			var firstTime = [{"id":goal.getId(), "text":goal.getText(), "check":goal.getChecked()}];
			localStorage.setItem(date, JSON.stringify(firstTime));
		}
		else{
			var secondTime = JSON.parse(localStorage.getItem(date));
			secondTime.push({"id":goal.getId(), "text":goal.getText(), "check":goal.getChecked()});
			localStorage.setItem(date,  JSON.stringify(secondTime));

		}
	}

	$(".daily input:checkbox").click(function(){
		var inputClass = $(this).attr("class");
		var storage = JSON.parse(localStorage.getItem(date));
		for (var i = 0; i < storage.length; i++){
			if (storage[i].id == inputClass){
				if(storage[i].check == 1){
					storage[i].check = 0;
				}
				else{
					storage[i].check = 1
				}
			}
		}
		localStorage.setItem(date, JSON.stringify(storage));
		if (!$(this).is("checked")){ //when pressed, the checkbox is "unchecked"
			goalNumb += 1;
			if (goalNumb == $(".table li").length){
				alert("swagadon"); //TODO: change this
			}
		}
		else{
			goalNumb -= 1;
		}
	});


	$("#goal").click(function(){
		if ($(".goalText").val()){
			var newGoal = new Goal($(".goalText").val());
			$(".table").append("<li class='"+newGoal.getId()+"'>"+newGoal.getText()+ "<input type='checkbox' class='"+newGoal.getId()+"'>");
			//still missing a X image
			store(newGoal);
			$(".goalText").val("");
		}
		else{
			alert("Text Box empty");
		};
	});

	


})