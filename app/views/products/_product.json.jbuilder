json.extract! product, :id, :tag, :item_name, :price_tag, :badge, :image, :description, :additional_information, :inner_tag_seller, :created_at, :updated_at
json.url product_url(product, format: :json)
