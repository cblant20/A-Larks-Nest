class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def index
  	@petImages = Dir.glob("app/assets/images/Pets/*")
  	render "layouts/application"
  end
end
