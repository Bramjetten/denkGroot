namespace :styles do

  desc "Watch stylesheets"
  task :watch do
    system "sass --watch views/stylesheets:public/stylesheets"
  end

end