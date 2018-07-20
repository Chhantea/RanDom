Rails.application.routes.draw do
  resources :products,param: :item_name
  devise_for :users
  root "dashboard#index"
  match ':controller(/:action(/:id))', :via => [:get, :post]
  get "dashboard/product/:id :name", to: "dashboard#product", as: :dashboard_product
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
