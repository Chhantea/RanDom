require "application_system_test_case"

class ProductsTest < ApplicationSystemTestCase
  setup do
    @product = products(:one)
  end

  test "visiting the index" do
    visit products_url
    assert_selector "h1", text: "Products"
  end

  test "creating a Product" do
    visit products_url
    click_on "New Product"

    fill_in "Additional Information", with: @product.additional_information
    fill_in "Badge", with: @product.badge
    fill_in "Description", with: @product.description
    fill_in "Image", with: @product.image
    fill_in "Inner Tag Seller", with: @product.inner_tag_seller
    fill_in "Item Name", with: @product.item_name
    fill_in "Price Tag", with: @product.price_tag
    fill_in "Tag", with: @product.tag
    click_on "Create Product"

    assert_text "Product was successfully created"
    click_on "Back"
  end

  test "updating a Product" do
    visit products_url
    click_on "Edit", match: :first

    fill_in "Additional Information", with: @product.additional_information
    fill_in "Badge", with: @product.badge
    fill_in "Description", with: @product.description
    fill_in "Image", with: @product.image
    fill_in "Inner Tag Seller", with: @product.inner_tag_seller
    fill_in "Item Name", with: @product.item_name
    fill_in "Price Tag", with: @product.price_tag
    fill_in "Tag", with: @product.tag
    click_on "Update Product"

    assert_text "Product was successfully updated"
    click_on "Back"
  end

  test "destroying a Product" do
    visit products_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Product was successfully destroyed"
  end
end
