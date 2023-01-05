

							
							
	var counter = 0;
	var oval_counter = 0;
	
	$(document).on("click","#dd_submitBtn",function() {
		var range = parseFloat($("#diam_duct").val());
		if(range == "" || isNaN(range)) {
			alert("Please insert diameter of the duct!");
		} else {
			if(range >= 0.5 && range <= 0.6) {
				//$("#oval_img1").animate({top: "11px"});
				$("#oval_img1").css("display","block");
				$(".inputDiv").css("display","none");
			} else {
				alert("Diameter of the duct must be within 0.5 to 0.6");
			}
		}
	});
	
	$(document).ready(function (){
		var top = 130;
		var left = 50;
		var temp = top;
		var temp1 = left;
		var goUp = true;
		var goDown = false;
		var goLeft = false;
		var goRight = true;
		setInterval(function(){ 
			if(goUp) {
				temp--;
				if(temp == 30) {
					goUp = false;
					goDown = true;
				}
			} else if(goDown) {
				temp++;
				if(temp == 130) {
					goDown = false;
					goUp = true;
				}
			}
			$("#anemometer").css("top",temp);
			
			if(goRight) {
				temp1++;
				if(temp1 == 65) {
					goRight = false;
					goLeft = true;
				}
			} else if(goLeft) {
				temp1--;
				if(temp1 == 50) {
					goLeft = false;
					goRight = true;
				}
			}
			$("#anemometer").css("left",temp1);
		}, 50);
	
	
	$(document).on("click",".oval_img",function() {
		oval_counter++;
		
		$("#velReadBttn,#mtsvr1, #mtsvr2, #mtsvr3,.measureDiv, .calculateDiv").css("display","none");
		$("#aniBttn").css("display","inline-block");
		
		
		var id = "#oval_img"+oval_counter;
		if(oval_counter == 1) $(id).animate({top: "11px"});	
		else if(oval_counter == 2) $(id).animate({top: "-165px"});
		else if(oval_counter == 3) $(id).animate({top: "-340px"});
		else if(oval_counter == 4) $(id).animate({top: "-517px"});
		$(".rightSidebarSimulator").css("display","block");
		
		var redWidth = 0;
		if(oval_counter == 1) redWidth = "15px";
		else if(oval_counter == 2) redWidth = "34px";
		else if(oval_counter == 3) redWidth = "67px";
		else if(oval_counter == 4) redWidth = "85px";
		$(".dynm_red_div").css("width",redWidth).addClass("red_tube_class");
	});
	
	
	
	$(document).on("click", "#aniBttn", function() {
		$(this).css("display", "none");	
		$("#velReadBttn").css("display", "inline-block");	
		$(".animometerDiv").css("display", "block");	
	});
	
	
	
	$(document).on("click", "#velReadBttn", function() {
		counter++;
		if(counter == 1) {
			var velocity = 0;
			if(oval_counter == 1) {
				velocity = (2 + ((2.95 - 2) * Math.random())).toFixed(2);
			} else if(oval_counter == 2) {
				velocity = (3 + ((3.95 - 3) * Math.random())).toFixed(2);
			} else if(oval_counter == 3) {
				velocity = (4 + ((4.95 - 4) * Math.random())).toFixed(2);
			} else if(oval_counter == 4) {
				velocity = (5 + ((5.95 - 5) * Math.random())).toFixed(2);
			}
			$("#mtsvr1").css("display","block");
			$("#vr1").val(velocity);
		} else if(counter == 2) {
			var velocity = 0;
			if(oval_counter == 1) {
				velocity = (2.25 + ((2.75 - 2.25) * Math.random())).toFixed(2);
			} else if(oval_counter == 2) {
				velocity = (3.25 + ((3.75 - 3.25) * Math.random())).toFixed(2);
			} else if(oval_counter == 3) {
				velocity = (4.25 + ((4.75 - 4.25) * Math.random())).toFixed(2);
			} else if(oval_counter == 4) {
				velocity = (5.25 + ((5.75 - 5.25) * Math.random())).toFixed(2);
			}
			$("#mtsvr2").css("display","block");
			$("#vr2").val(velocity);
		} else if(counter == 3) {
			var velocity = 0;
			if(oval_counter == 1) {
				velocity = (2.6 + ((2.9 - 2.6) * Math.random())).toFixed(2);
			} else if(oval_counter == 2) {
				velocity = (3.6 + ((3.9 - 3.6) * Math.random())).toFixed(2);
			} else if(oval_counter == 3) {
				velocity = (4.6 + ((4.9 - 4.6) * Math.random())).toFixed(2);
			} else if(oval_counter == 4) {
				velocity = (5.6 + ((5.9 - 5.6) * Math.random())).toFixed(2);
			}
			$("#mtsvr3").css("display","block");
			$("#vr3").val(velocity);
			$(this).css("display","none");
			$("#measureBttn").css("display", "inline-block");
			$(".animometerDiv").css("display","none");
			counter = 0;
		}
	});
	
	
	$(document).on("click", "#measureBttn", function() {
		//oval_counter++;
		$(this).css("display","none");
		$(".measureDiv").css("display","block");
		var avg_velocity = ((parseFloat($("#vr1").val()) + parseFloat($("#vr2").val()) + parseFloat($("#vr3").val())) / 3).toFixed(2);
		$("#av").val(avg_velocity);
		
		var veloc_press = 0;
		if(oval_counter == 1) {
			var local2 = avg_velocity
			veloc_press = (10 + ((11 - 10) * Math.random())).toFixed(2);
		} else if(oval_counter == 2) {
			veloc_press = (24 + ((26 - 24) * Math.random())).toFixed(2);
		} else if(oval_counter == 3) {
			veloc_press = (40 + ((48 - 40) * Math.random())).toFixed(2);
		} else if(oval_counter == 4) {
			veloc_press = (50 + ((59 - 50) * Math.random())).toFixed(2);
		}
		$("#vp").val(veloc_press);
		
		$("#calculateBttn").css("display","inline-block");
	});
	
	
	$(document).on("click", "#calculateBttn", function() {
		$(this).css("display","none");
		$(".calculateDiv").css("display","block");
		
		var local2 = parseFloat($("#av").val());
		var local3 = 1.2;
		var local4 = parseFloat($("#vp").val());
		var local5 = Math.sqrt(((2 * local4) / local3)).toFixed(2);
		$("#cv").val(local5);
		
		var local6 = (local2 / local5).toFixed(2);
		$("#mf").val(local6);
		
		$("#addResultBttn").css("display","inline-block");
	});
	
	
	$(document).on("click", "#addResultBttn", function() {
		$(this).css("display","none");
		var row = "<tr><td>"+ $("#av").val() +"</td><td>"+ $("#cv").val() +"</td><td>"+ $("#mf").val() +"</td></tr>";
		$(row).prependTo("table.addTableData > tbody");
		//$("table.addTableData").append(row);
		
		
		
		if(oval_counter == 4) {
			$(".graphDiv").css("display","block");	
		} else {
			$(".yesDiv").css("display","block");	
		}
	});
	
	
	
	$(document).on("click", "#yesBttn", function() {
		$(".yesDiv").css("display","none");
		var id = (oval_counter+1);
		if(id == 2) var top = "120px";
		else if(id == 3) var top = "-60px";
		else if(id == 4) var top = "-235px";
		$("#oval_img"+id).css({"display":"block","top":top});	
	});
	
});

var xArray=[];
var yArray=[];
var rows;

function showgraph(){

var otable= document.getElementById('table');
alert(otable.rows.length);
for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
	var rwe1 = otable.rows[tabrowindex].cells;
	 
	//dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
	xArray.push(parseFloat(rwe1[1].innerHTML));
	yArray.push(parseFloat(rwe1[0].innerHTML));
	
}

var data = [
	{x:xArray, y:yArray, mode:"markers"}
	
  ];
  
  var layout = {
	xaxis: {range: [0, 10],dtick: 1, title: "Central Velocity "},
	yaxis: {range: [1, 10],dtick: 1, title: "Average Velocity"},  
	title: "Central Velocity Vs Average Velocity"
  };
  
  Plotly.newPlot("myPlot", data, layout);

  
}

