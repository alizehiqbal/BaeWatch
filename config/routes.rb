Rails.application.routes.draw do
  get 'likes/create'

  get 'likes/update'

  get 'likes/destroy'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :index, :show]
  end

  root "static_pages#root"
end
