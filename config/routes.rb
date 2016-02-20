Rails.application.routes.draw do
  
get "/" => "venues_views#index"
	scope "/api" do 
		resources :venues, only: [:index, :update]
	end


end
