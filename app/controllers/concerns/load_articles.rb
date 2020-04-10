module LoadArticles
  extend ActiveSupport::Concern

  included do

  end

  def load_articles
    Articles.order(:id).all
  end
end