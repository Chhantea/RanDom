Rails.application.routes.draw do
  resources :products
  devise_for :users
  root "dashboard#index"
  match ':controller(/:action(/:id))', :via => [:get, :post]
  get "dashboard/product/:id", to: "dashboard#product", as: :dashboard_product
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
