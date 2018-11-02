require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  post '/store' do
    session[:temperature] = params[:temperature]
    session[:psm_status] = params[:psm_status]
  end

  get '/return_temp' do
    session[:temperature]
  end

  run! if app_file == $0
end
