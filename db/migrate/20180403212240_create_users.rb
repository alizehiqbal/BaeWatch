class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :last_name
      t.string :first_name
      t.string :city
      t.string :description
      t.string :curr_lang
      t.string :seeking_lang
      t.string :email
      t.string :img_url

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
    add_index :users, :curr_lang
    add_index :users, :seeking_lang 
  end
end
