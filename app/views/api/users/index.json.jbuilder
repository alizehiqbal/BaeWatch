@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.first_name user.first_name
    json.last_name user.last_name
    json.description user.description
    json.imgUrl asset_path(user.img_url)
  end
end
