class VenuesController < ApplicationController


def index
		venues = Venue.all 
		render json: venues
	end

	def update
		venue = Venue.find_by(id: params[:id])
		venue.favorite = true
		venue.save
		render json: venue.to_json
	end
















end
