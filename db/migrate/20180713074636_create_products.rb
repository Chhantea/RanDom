class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :tag
      t.string :item_name
      t.string :price_tag
      t.string :badge
      t.text :image
      t.text :description
      t.text :additional_information
      t.string :inner_tag_seller

      t.timestamps
    end
  end
end
