# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create!(
#   username: 'Ana',
#   password: 'AppAcademy',
#   first_name: 'Anastassia',
#   last_name: 'B',
#   city: 'SF',
#   description: 'super awesome',
#   curr_lang: 'Ruby',
#   seeking_lang: 'Python',
#   email: 'ana@ana.com'
# )

User.destroy_all

ActiveRecord::Base.transaction do

  User.create!(
    username: 'durian_lover666',
    password: 'AppAcademy1',
    first_name: 'Isak',
    last_name: 'Mlad',
    city: 'SF',
    description: 'circle leader extraordinaire',
    curr_lang: 'Ruby',
    seeking_lang: 'Haskell',
    email: 'im@im.com'
  )

  User.create!(
    username: 'peruvian_perfection123',
    password: 'AppAcademy2',
    first_name: 'Americo',
    last_name: 'Zuzu',
    city: 'SF',
    description: 'Americo with an "O" for "Oh so fly"',
    curr_lang: 'Ruby',
    seeking_lang: 'Javascript',
    email: 'americo@americo.com'
  )

  User.create!(
    username: 'andyson_cooper',
    password: 'AppAcademy3',
    first_name: 'Andy',
    last_name: 'Wynkoop',
    city: 'SF',
    description: 'do not date me, i am weird',
    curr_lang: 'Ruby',
    seeking_lang: 'Javascript',
    email: 'andy@andy.com'
  )

  User.create!(
    username: 'checkered_pants',
    password: 'AppAcademy4',
    first_name: 'Alexandra',
    last_name: 'Savramis',
    city: 'SF',
    description: 'vegan',
    curr_lang: 'Ruby',
    seeking_lang: 'Python',
    email: 'lex@vegan.com'
  )

  User.create!(
    username: 'wakjfbfbejhrbghejr',
    password: 'AppAcademy5',
    first_name: 'Nima',
    last_name: 'Partovi',
    city: 'SF',
    description: 'just a really relaxed guy, hey, meditation, you know',
    curr_lang: 'Ruby',
    seeking_lang: 'C++',
    email: 'nima@chaos.com'
  )

  User.create!(
    username: 'crumpetmaster12',
    password: 'AppAcademy6',
    first_name: 'Yujie',
    last_name: 'Zhu',
    city: 'SF',
    description: 'just an english chav seeking chavette',
    curr_lang: 'Ruby',
    seeking_lang: 'Java',
    email: 'yujeishuge@yujie.com'
  )

end
