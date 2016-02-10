$(document).ready(function() {
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	google.charts.setOnLoadCallback(drawChart2);
	
	function drawChart() {

	    var total = localStorage.getItem("total");
	    var done = localStorage.getItem("done");
	    console.log(total, done);
		var data = new google.visualization.DataTable();
	    data.addColumn('string', 'Completed');
	    data.addColumn('number', 'Uncompleted');
	    data.addRows([
	      ["Total", total],
	      ["Done", done]
	    ]);

	    var options = {'title':'Daily Goal Completion',
                       'width':400,
                       'height':300};
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById("daily-completion"));
        chart.draw(data, options);

	}

	function drawChart2(){
		var chapter = parseInt(localStorage.getItem("chapter"));
		var left = 325 - chapter;
		var data = new google.visualization.DataTable();
	    data.addColumn('string', 'Completed');
	    data.addColumn('number', 'Uncompleted');
	    data.addRows([
	      ["Total", left],
	      ["Done", chapter]
	    ]);

	    var options = {'title':'Daily Goal Completion',
                       'width':400,
                       'height':300};
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById("chapter-completion"));
        chart.draw(data, options);
	}

});