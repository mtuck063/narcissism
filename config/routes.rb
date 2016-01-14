Rails.application.routes.draw do

  root 'page#portfolio'

  namespace :page, path: '/', as: nil do
    post :contact
  end

  namespace :projects do
    get :sesa
    get :makerepo
    get :compass
    get :yusso
  end

end
