class ArticleImage < ApplicationRecord
  has_one :article, class_name: "article", foreign_key: "article_id"
end
