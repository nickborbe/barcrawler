Rails.application.routes.draw do
  
get "/" => "venues_views#index"
		
patch "/api/upvote/venues/:id" => "venues#upvote"

patch "/api/downvote/venues/:id" => "venues#downvote"

	
	scope "/api" do 
		resources :venues, only: [:index, :destroy] 
	end





end
