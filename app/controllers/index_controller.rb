class IndexController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def show
  	@petImages = Dir.glob("app/assets/images/pets/*")
  	render "index/show"
  end
end
