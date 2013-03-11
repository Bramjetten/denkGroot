namespace :scripts do

  desc "Watch the coffeescripts and compile new changes"
  task :watch do
    system "coffee --watch --compile --output public/javascripts/lib/ views/javascripts/"
  end
  
end