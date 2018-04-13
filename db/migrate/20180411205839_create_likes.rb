class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :admirer_id
      t.integer :crush_id

      t.timestamps
    end

    add_index :likes, [:admirer_id, :crush_id], unique: true
  end
end
