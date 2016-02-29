class VenuesViewsController < ApplicationController

	def index
		@user = current_fake_user
	end


end
