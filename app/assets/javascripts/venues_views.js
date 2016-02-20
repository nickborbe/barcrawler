
$(document).ready(function(){
	$(".js-maybe").on("click", function(){
		console.log("you clicked the maybe button");
		maybe();
	});

	$(".nope").on("click", function(){
		nope();
	});

});


function maybe(){
	$.ajax({
		type: "GET",
		// data: {ingredient_id: ingredient},
		url: "/api/venues/index",
		success: function(response){

			console.log(response);
			var theBar = Math.floor(Math.random() * ((response.length) - 2) + 1);
			$(".js-bar-name").text(response[theBar].name);
			
		},
		error: function(response){
			console.log(response);
		}
	});

	//change favorite from false to true
	// $(".the-pic").prop("src", the_next_bar.url)
}


function nope(){

	// $(".the-pic").prop("src", the_next_bar.url)
}// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
