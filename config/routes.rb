Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/about', to: 'pages#about'
  get '/works', to: 'pages#works'
  get '/skills', to: 'pages#skills'
  get '/articles/create', to: 'articles#create'
  # get 'pages/index'
  # get 'pages/about'
  # get 'pages/works'
  # get 'articles/create'
  # get 'articles/delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
