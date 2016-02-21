
$(document).ready(function(){
		loadFeed();

	$(".js-maybe").on("click", function(){
		maybe();
	});

	$(".js-nope").on("click", function(){
		nope();
	});

	$(".js-favorites-button").on("click", function(){
		showFavorites();
	});
});

function loadFeed(){
	$.ajax({
		type:"GET",
		url:"/api/venues/",
		success: function(response){
			var theBar = Math.floor(Math.random() * ((response.length) - 2) + 1);
			barID = response[theBar].id;
			$(".js-bar-name").text(response[theBar].name);
			$(".js-live-feed").prop("src", response[theBar].url);
		},
		error: function(){
			console.log(error);
		}
	});
}



function maybe(){
	$.ajax({
		type: "PATCH",
		url: "api/upvote/venues/"+ barID,
		success: function(response){
			console.log(response.name);
			response.favorite = true;

		},
		error: function(error){
			console.log(error);
		}
	});
		loadFeed();	
}


function nope(){
	$.ajax({
		type: "PATCH",
		url: "api/downvote/venues/"+ barID,
		success: function(response){
			console.log(response.name);
			response.favorite = false;

		},
		error: function(error){
			console.log(error);
		}
	});
			loadFeed();	
}
		


function showFavorites(){

	$.ajax({
		type: "GET",
		url: "/api/venues/",
		success: function(response){
			var favorites = [];
			response.forEach(function(bar){
				if (bar.favorite == true) {
					favorites.push(bar);
				} else {}
			});
			$(".js-favorites").empty();
			favorites.forEach(function(favorite){
				var list = `
				<li>
				${favorite.name}
				</li>
				`;
			$(".js-favorites").append(list);
			});


			$(".js-favorites-modal").modal("show");
		},
		error: function(){
			console.log(error)
		}
	});
}

