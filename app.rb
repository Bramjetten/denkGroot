require 'rubygems'
require 'sinatra'
require 'haml'

# Set Sinatra variables

set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_folder, 'public'
set :haml, { format: :html5 }

# Application routes
get '/' do
  haml :index
end
