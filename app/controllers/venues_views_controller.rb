class VenuesViewsController < ApplicationController



def index
	@venues = Venue.all
	a = Venue.first.id 
	b = Venue.last.id 
	@bar = Venue.find((a..b).to_a.sample)
	render 'index'
end





end
