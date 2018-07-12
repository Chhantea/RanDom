json.extract! product, :id, :name, :category, :tag, :price, :created_at, :updated_at
json.url product_url(product, format: :json)
