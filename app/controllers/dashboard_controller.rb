class DashboardController < ApplicationController
	# layout 'md'
	# before_action :authenticate_user!
  def index
  	# @products = Product.all
  	@products = Product.paginate(:page => params[:page], :per_page => 8)
	  respond_to do |format|
	    format.html # index.html.erb
	    format.json { render json: @products }
	    format.js
	  end

  end
  def product
  	@p = Product.find(params[:id])
  p @p
  end
end
