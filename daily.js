$(document).ready(function(){
	var date = moment().format("DD-MMM-YYYY");
	if(localStorage.getItem(moment().format("DD-MMM-YYYY"))){
		var storage = localStorage.getItem(moment().format("DD-MMM-YYYY"));
		storage = JSON.parse(storage);
		for (var i = 0; i < storage.length; i ++){
			var single = storage[i];
			$(".table").append("<li class='"+single.id+"'>"+single.text+ "<input type='checkbox' class='"+single.id+"'> <a class='remove'>remove</a>");
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

	$("input:checkbox").click(function(){
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
		console.log(localStorage.getItem(date));
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