load "config/recipes/base"
load "config/recipes/nginx"

role :web, "176.58.115.131"
role :app, "176.58.115.131"
role :db,  "176.58.115.131", :primary => true

set :port, 48392
set :application, "denkgroot_v2"

default_run_options[:pty] = true

set :user, "deployer"
set :use_sudo, false
set :ssh_options, { forward_agent: true }

set :scm, :git
set :scm_passphrase, "v6g6IPwarI"
set :repository,  "git@github.com:Bramjetten/denkGroot.git"
set :branch, "master"

set :deploy_to, "/home/#{user}/apps/#{application}"
set :deploy_via, :remote_cache

after "deploy", "deploy:cleanup"

namespace :deploy do
  task :restart, roles: :app do
    run "touch #{current_path}/tmp/restart.txt"
  end

  desc "Local git eerst in sync met remote"
  task :check_revision, roles: :web do
    unless `git rev-parse HEAD` == `git rev-parse origin/master`
      puts "WARNING: HEAD is not the same as origin/master"
      puts "Run `git push` to sync changes."
      exit
    end
  end
  before "deploy", "deploy:check_revision"

  task :finalize_update, :except => { :no_release => true } do
    run "chmod -R g+w #{latest_release}" if fetch(:group_writable, true)
 
    # mkdir -p is making sure that the directories are there for some SCM's that don't save empty folders
    run <<-CMD
      rm -rf #{latest_release}/log &&
      mkdir -p #{latest_release}/public &&
      mkdir -p #{latest_release}/tmp &&
      ln -s #{shared_path}/log #{latest_release}/log
    CMD
 
    if fetch(:normalize_asset_timestamps, true)
      stamp = Time.now.utc.strftime("%Y%m%d%H%M.%S")
      asset_paths = %w(images css).map { |p| "#{latest_release}/public/#{p}" }.join(" ")
      run "find #{asset_paths} -exec touch -t #{stamp} {} ';'; true", :env => { "TZ" => "UTC" }
    end
  end
end
