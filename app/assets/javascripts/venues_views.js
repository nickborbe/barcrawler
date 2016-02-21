
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

// response.forEach(function(bar){
// 				if (bar.favorite == true) {
// 					favorites.push(bar);
// 				} else {}
// 			});

function takeAnotherLook(id){
	console.log("id of bar" + id);
	$.ajax({
		type:"GET",
		url:"/api/venues/",
		success: function(response){
			var arrayPosition;
			response.forEach(function(bar){
				if( bar.id == id){
					barID = id;
					arrayPosition = response.indexOf(bar);
					console.log("array position" + arrayPosition)
			$(".js-bar-name").text(response[arrayPosition].name);
			$(".js-live-feed").prop("src", response[arrayPosition].url);
				};
			});
			// barID = response[id-1].id;
		},
		error: function(){
			console.log(error);
		}
	});
	
}

function loadFeed(){
	$.ajax({
		type:"GET",
		url:"/api/venues/",
		success: function(response){
			 var barNumber;
			  // = Math.floor(Math.random() * ((response.length) - 1));
			if (response.length > 0) {
			response.forEach(function(bar){
				if(bar.favorite == false){
					barNumber = response.indexOf(bar);
					barID = bar.id;
				} else {
					
					$(".js-bar-name").text("No more bars - loading your favorites");
			$(".js-live-feed").prop("src", "https://s-media-cache-ak0.pinimg.com/originals/e0/f5/a5/e0f5a5f8c2e378df4fddd75e26e9a5a3.gif");
				}
			});

			$(".js-bar-name").text(response[barNumber].name);
			$(".js-live-feed").prop("src", response[barNumber].url);
				} else {
					$(".js-bar-name").text("You have run out of bars");
			$(".js-live-feed").prop("src", "https://s-media-cache-ak0.pinimg.com/originals/e0/f5/a5/e0f5a5f8c2e378df4fddd75e26e9a5a3.gif");
				}

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
		},
		error: function(error){
			console.log(error);
		}
	});
	$.ajax({
		type: "DELETE",
		url: "api/venues/"+ barID,
		success: function(response){
			console.log(response.length);
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
					<button class="js-take-another-look" data-bar-id="${favorite.id}"> 
						${favorite.name} 
					</button>
				</li>
				`;
			$(".js-favorites").append(list);
			});

			$(".js-take-another-look").on("click", function(event){
				var theID = $(event.currentTarget).data("bar-id");
			takeAnotherLook(theID);
		});	


		},
		error: function(){
			console.log(error)
		}
	});

	
}

