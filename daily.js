$(document).ready(function(){
	function Goal(text){
		this.id = Math.random().toString(36).substring(7);
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
	$("#goal").click(function(){
		if ($(".goalText").val()){
			var newGoal = new Goal($(".goalText").val());
			console.log(newGoal.getId());
			console.log(newGoal.getText());
			console.log(newGoal.getDate());
			console.log(newGoal.getChecked());
			$(".table").append("<li class='"+newGoal.getId()"'>"+newGoal.getText()+ "<input type='checked' class='"+newGoal.getId()+"'>");
		}
		else{
			alert("Text Box empty");
		};
	})
})