
$(document).ready(function(){
	var barID = $(".js-bar-name").data("bar-id")
	$(".js-maybe").on("click", function(){
		maybe(barID);
	});

	$(".js-nope").on("click", function(){
		nope();
	});

	$(".js-favorites-button").on("click", function(){
		showFavorites();

	});

});


function maybe(barID){
	$.ajax({
		type: "GET",
		// data: {ingredient_id: ingredient},
		url: "/api/venues/",
		success: function(response){
			var theBar = Math.floor(Math.random() * ((response.length) - 2) + 1);
			$(".js-bar-name").text(response[theBar].name);
			$(".the-pic").prop("src", response[theBar].url);
			
		},
		error: function(){
			console.log(error);
		}
	});

	$.ajax({
		type: "PATCH",
		url: "api/venues/"+ barID,
		success: function(){
			console.log("this is the bar id" + barID)

		},
		error: function(error){
			console.log(error);
		}
	});

	//change favorite from false to true
	
}


function nope(){
$.ajax({
		type: "GET",
		// data: {ingredient_id: ingredient},
		url: "/api/venues/",
		success: function(response){
			var theBar = Math.floor(Math.random() * ((response.length) - 2) + 1);
			$(".js-bar-name").text(response[theBar].name);
				$(".the-pic").prop("src", response[theBar].url);
			
		},
		error: function(){
			console.log(error);
		}
	});
	
}


function showFavorites(){

	$.ajax({
		type: "GET",
		url: "/api/venues/",
		success: function(response){
			console.log(response)

			$(".js-favorites-modal").modal("show");
			
		},
		error: function(){
			console.log(error)
		}
	});
}









  // albums.forEach(function (venue) {

  //   var html = `
  //     <li data-album-id="${album.id}">
  //       <img src="${album.images[1].url}">
  //       <h5> ${album.name} </h5>
  //     </li>
  //   `;

  //   $(".js-favorites").html(html);

  // });

  

// }
