require 'test_helper'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get articles_create_url
    assert_response :success
  end

  test "should get delete" do
    get articles_delete_url
    assert_response :success
  end

end
