class Article < ApplicationRecord
  has_many :article_images
  has_one :tech_skill_memo
  enum tag_name: [:top, :work, :skill]
end
