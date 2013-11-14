require 'rubygems'
require 'sinatra'
require 'newrelic_rpm'
require 'haml'

# Set Sinatra variables

set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_folder, 'public'
set :haml, { format: :html5 }

# Application routes
get '/' do
  @page = "home"
  haml :home
end

get '/ons-werk' do
  @page = "portfolio"
  haml :onswerk
end

get '/over-ons' do
  @page = "aboutus"
  haml :overons
end

get '/diensten' do
  @page = "services"
  haml :diensten
end

get '/blog' do
  @page = "blog"
  haml :blog
end

get '/contact' do
  @page = "contact"
  haml :contact
end