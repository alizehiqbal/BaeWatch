Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :index, :show]
    resources :likes, only: [:create, :update, :destroy, :show]
  end

  root "static_pages#root"
end
