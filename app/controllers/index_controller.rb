class IndexController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def show
  	@petImages = Dir.glob("app/assets/images/pets/*")
  	@portraitImages = Dir.glob("app/assets/images/portraits/*")
  	puts @portraitImages
  	puts "SUCCESS PORTAITS"
  	@eventImages = Dir.glob("app/assets/images/events/*")
  	puts @eventImages
  	puts "SUCCESS EVENTS"
  	render "index/show"
  end
end
