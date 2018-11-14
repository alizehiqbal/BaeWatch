class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :fav_br_quote, :string
    add_column :users, :toughest_bug, :string
    add_column :users, :what_im_building, :string
    add_column :users, :dream_project, :string
    add_column :users, :talk_syntax_to_me, :string 
  end
end
