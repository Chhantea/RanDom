class DashboardController < ApplicationController
	# layout 'md'
	# before_action :authenticate_user!
  def index
  	@products = Product.all

  end
  def product
  	@p = Product.find(params[:id])
  p @p
  end
end
