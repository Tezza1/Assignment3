$(document).ready(function() {

	// theme buttons -------------------------
	$(".btn-primary").click(function() {
		$("h1, h2, h3, h4").css("color", "blue");
		$(".jumbotron").css("backgroundColor", "#C6C2F5");
		$(".alert").addClass("alert-info");
		$(".alert").removeClass("alert-success");
		$(".alert").removeClass("alert-warning");
		$(".alert").removeClass("alert-danger");
		$( ".alert" ).empty();
		$( ".alert" ).append( "<strong>Blue</strong> theme applied." );
	});
	
	$(".btn-success").click(function() {
		$("h1, h2, h3, h4").css("color", "green");
		$(".jumbotron").css("backgroundColor", "#C4F5C2");
		$(".alert").removeClass("alert-info");
		$(".alert").removeClass("alert-warning");
		$(".alert").removeClass("alert-danger");
		$(".alert").addClass("alert-success");
		$( ".alert" ).empty();
		$( ".alert" ).append( "<strong>Green</strong> theme applied." );
	});

	$(".btn-warning").click(function() {
		$("h1, h2, h3, h4").css("color", "darkorange");
		$(".jumbotron").css("backgroundColor", "#F5E2C2");
		$(".alert").removeClass("alert-info");
		$(".alert").removeClass("alert-success");
		$(".alert").removeClass("alert-danger");
		$(".alert").addClass("alert-warning");
		$( ".alert" ).empty();
		$( ".alert" ).append( "<strong>Orange</strong> theme applied." );
	});

	$(".btn-danger").click(function() {
		$("h1, h2, h3, h4").css("color", "red");
		$(".jumbotron").css("backgroundColor", "#F5C6C2");
		$(".alert").removeClass("alert-info");
		$(".alert").removeClass("alert-success");
		$(".alert").removeClass("alert-warning");
		$(".alert").addClass("alert-danger");
		$( ".alert" ).empty();
		$( ".alert" ).append( "<strong>Red</strong> theme applied." );
	});

	$(".btn-default").click(function() {
		$("h1, h2, h3, h4").css("color", "");
		$(".jumbotron").css("backgroundColor", "");
		$(".alert").removeClass("alert-info");
		$(".alert").removeClass("alert-success");
		$(".alert").removeClass("alert-warning");
		$(".alert").removeClass("alert-danger");
		$( ".alert" ).empty();
	});

	// table --------------------------------
	$("#tableRow1").hover(function() {
			// hover on state Row 1
			$('#tableRow1').css({
				backgroundColor: "#f5f6f7",
			});

			$("#tableRow2").css({
				color: "grey"
			});

			$("#tableRow3").css({
				color: "grey"
			});
		},
		function() {
			//hover off state Row 1
			$('#tableRow1').css({
				backgroundColor: ''
			});

			$("#tableRow2").css({
				color: ""
			});

			$("#tableRow3").css({
				color: ""
			});
		});

	$("#tableRow2").hover(function() {
			// hover on state Row 2
			$('#tableRow2').css({
				backgroundColor: "#f5f6f7"
			});

			$("#tableRow1").css({
				color: "grey"
			});

			$("#tableRow3").css({
				color: "grey"
			});
		},
		function() {
			//hover off state Row 2
			$('#tableRow2').css({
				backgroundColor: ''
			});

			$("#tableRow1").css({
				color: ""
			});

			$("#tableRow3").css({
				color: ""
			});
		});

	$("#tableRow3").hover(function() {
			// hover on state Row 3
			$('#tableRow3').css({
				backgroundColor: "#f5f6f7"
			});

			$("#tableRow1").css({
				color: "grey"
			});

			$("#tableRow2").css({
				color: "grey"
			});
		},
		function() {
			//hover off state Row 3
			$('#tableRow3').css({
				backgroundColor: ''
			});

			$("#tableRow1").css({
				color: ""
			});

			$("#tableRow2").css({
				color: ""
			});
		});
	
	$("textarea").hover(function() {
			// hover on state Row 1
			$('textarea').css({
				backgroundColor: "#f5f6f7",
			});
		},
		function() {
			//hover off state Row 1
			$('textarea').css({
				backgroundColor: ''
			});
		});
	
	$( "option" ).filter( ":even" ).css( "background-color", "#f5f6f7" );
	
	// Form handling
	$("#submitBtn").click(function(event) {
		// stop the form submitting
		event.preventDefault();

		if ($("#city").val() == "") {
			$("#divCity").addClass("has-warning");
			$("#spanCity").addClass("glyphicon-warning-sign");
		} else {
			$("#divCity").removeClass("has-warning");
			$("#spanCity").removeClass("glyphicon-warning-sign");
			$("#divCity").addClass("has-success");
			$("#spanCity").addClass("glyphicon-ok");
		}
	});

	// canvase drawing
	$('canvas').drawText({
  		fillStyle: 'grey',
  		fontFamily: 'arial',
  		fontSize: 18,
  		text: 'Sensational Cities | ',
  		x: 55, y: 110,
  		radius: 50,
  		rotate: 0
	}).drawText({
  		fillStyle: 'grey',
  		fontFamily: 'arial',
  		fontSize: 18,
  		text: '| Sensational Cities',
  		x: 145, y: 70,
  		radius: 50,
  		rotate: 180
	}).drawText({
  		fillStyle: 'grey',
  		fontFamily: 'arial',
  		fontSize: 18,
  		text: 'Sensational Cities |',
  		x: 240, y: 110,
  		radius: 50,
  		rotate: 0
	}).drawText({
  		fillStyle: 'grey',
  		fontFamily: 'arial',
  		fontSize: 18,
  		text: '| Sensational Cities',
  		x: 330, y: 70,
  		radius: 50,
  		rotate: 180
	});
	
	$("#drawCanvas").click( function(){
    	// draw a circle
		$('canvas').drawEllipse({
  			fillStyle: 'grey',
  			x: 145, y: 75,
  			width: 50, height: 50
		}).drawEllipse({
  			fillStyle: 'grey',
  			x: 240, y: 105,
  			width: 50, height: 50
		});
	});
	
	$("#colorPicker").change( function(){
    	if($("#colorPicker").val() == "white"){
        	$("canvas").css("backgroundColor", "");
   		 } else if ($("#colorPicker").val() == "blue"){
       		 $("canvas").css("backgroundColor", "#C6C2F5");
    	} else if ($("#colorPicker").val() == "red"){
        	$("canvas").css("backgroundColor", "#F5C6C2");
   		} else if ($("#colorPicker").val() == "green"){
        	$("canvas").css("backgroundColor", "#C4F5C2");
    	}
	});
	
	// add a slogan
	$("#addSlogan").click( function(){
    
    	var slogan = $("#slogan").val();
    
    	$('canvas').drawText({
        	fillStyle: 'black',
        	fontStyle: 'bold',
        	fontSize: '10pt',
        	fontFamily: 'sans-serif',
        	text: slogan,
        	x: 180, y: 170,
        	align: 'center',
        	maxWidth: 300
    	});
	}); //end button
	
	// clear the canvas
	$("#clearCanvas").click( function(){
    	$("canvas").clearCanvas()
	});

});