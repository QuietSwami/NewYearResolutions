$(document).ready(function(){
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
		this.flipChecked = function(){
			if (this.checked == 0){
				this.checked = 1;
			}else{
				this.checked = 0;
			}
		}
		this.onChecked = function(){
			this.checked = 1;
		}
		this.offChecked = function(){
			this.checked = 0;
		}
	}

	/*function goalOperator(goal){
		setInterval(function(){
				var numOfChecked = 0
				var numOfGoals = $(".table").children('li').size();
				$(".table").children('li').each(function(){
					if($(this).find('input').is(':checked')){ //checks which is the input and checks if it's checked
						numOfChecked += 1;
						goal.onChecked();
					}
					else{
						goal.offChecked();
					}
				});
				console.log(goal.getId(), goal.getChecked());
				if (numOfChecked == numOfGoals && numOfGoals > 0){
					console.log('Felizidade');
				}
			}, 1000);
	}*/

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

	$(".remove").click(function(){
		$(this).parent().remove();
	});
	
	$("#goal").click(function(){
		if ($(".goalText").val()){
			var newGoal = new Goal($(".goalText").val());
			$(".table").append("<li class='"+newGoal.getId()+"'>"+newGoal.getText()+ "<input type='checkbox' class='"+newGoal.getId()+"'> <a class='remove'>remove</a>");
			//still missing a X image
			store(newGoal);
			$(".goalText").val("");
			//goalOperator(newGoal);
		}
		else{
			alert("Text Box empty");
		};
	});

	


})