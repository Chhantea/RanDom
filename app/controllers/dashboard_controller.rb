class DashboardController < ApplicationController
	# layout 'md'
	before_action :authenticate_user!
  def index
  end
end
