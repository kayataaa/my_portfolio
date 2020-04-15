class CreateTechSkillMemos < ActiveRecord::Migration[6.0]
  def change
    create_table :tech_skill_memos do |t|
      t.string :url
      t.string :skill_memo
      t.integer :article_id

      t.timestamps
    end
  end
end
