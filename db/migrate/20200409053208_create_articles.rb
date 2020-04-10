class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :description
      t.string :sub_description
      t.integer :tag_name

      t.timestamps
    end
  end
end
