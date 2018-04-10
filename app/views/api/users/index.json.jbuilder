@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.description user.description
    json.imgUrl asset_path(user.img_url)
  end
end
