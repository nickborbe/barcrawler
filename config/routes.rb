Rails.application.routes.draw do

get "/" => "venues_views#index"

get "/api/venues/upvoted" => "venues#maybes"

get "/api/venues/downvoted" => "venues#nopes"

get "/api/venues/unseen" => "venues#unseen"
		
patch "/api/upvote/venues/:id" => "venues#upvote"

patch "/api/downvote/venues/:id" => "venues#downvote"

	
	scope "/api" do 
		resources :venues, only: [:index, :destroy] 
	end





end
