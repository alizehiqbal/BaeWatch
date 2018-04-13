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
    description: "Maybe he has a little friend that lives right over here. That's the way I look when I get home late; black and blue. You don't have to be crazy to do this but it does help. We have no limits to our world. We're only limited by our imagination. Maybe there's a happy little bush that lives right there. We might as well make some Almighty mountains today as well, what the heck.",
    curr_lang: 'Ruby',
    seeking_lang: 'Haskell',
    email: 'im@im.com',
    img_url: "http://res.cloudinary.com/duur7awit/image/upload/v1523466981/isak.png"
  )

  User.create!(
    username: 'peruvian_perfection123',
    password: 'AppAcademy2',
    first_name: 'Americo',
    last_name: 'Zuzu',
    city: 'SF',
    description: "You want your tree to have some character. Make it special. In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers. But when I get home, the only thing I have power over is the garbage. Let's make some happy little clouds in our world.",
    curr_lang: 'Ruby',
    seeking_lang: 'Javascript',
    email: 'americo@americo.com',
    img_url: "http://res.cloudinary.com/duur7awit/image/upload/v1523467671/Americo.png"
  )

  User.create!(
    username: 'andyson_cooper',
    password: 'AppAcademy3',
    first_name: 'Andy',
    last_name: 'Wynkoop',
    city: 'SF',
    description: "The least little bit can do so much. Take your time. Speed will come later. In life you need colors. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Maybe there's a happy little waterfall happening over here.",
    curr_lang: 'Ruby',
    seeking_lang: 'Javascript',
    email: 'andy@andy.com',
    img_url: "http://res.cloudinary.com/duur7awit/image/upload/v1523467191/andy.png"
  )

  User.create!(
    username: 'checkered_pants',
    password: 'AppAcademy4',
    first_name: 'Alexandra',
    last_name: 'Savramis',
    city: 'SF',
    description: "Don't fight it, use what happens. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. Talent is a pursued interest. That is to say, anything you practice you can do. The only thing worse than yellow snow is green snow. Let's make a nice big leafy tree.",
    curr_lang: 'Ruby',
    seeking_lang: 'Python',
    email: 'lex@vegan.com',
    img_url:  "http://res.cloudinary.com/duur7awit/image/upload/v1523469164/lex.png"
  )

  User.create!(
    username: 'wakjfbfbejhrbghejr',
    password: 'AppAcademy5',
    first_name: 'Nima',
    last_name: 'Partovi',
    city: 'SF',
    description: "The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. We don't want to set these clouds on fire. Of course he's a happy little stone, cause we don't have any other kind.",
    seeking_lang: 'C++',
    email: 'nima@chaos.com',
    img_url: "http://res.cloudinary.com/duur7awit/image/upload/v1523468063/nima.png"
  )

  User.create!(
    username: 'crumpetmaster12',
    password: 'AppAcademy6',
    first_name: 'Yujie',
    last_name: 'Zhu',
    city: 'SF',
    description: "Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. Let your imagination be your guide. In this world, everything can be happy. I guess that would be considered a UFO. A big cotton ball in the sky. Now we'll take the almighty fan brush. If you do too much it's going to lose its effectiveness.",
    curr_lang: 'Ruby',
    seeking_lang: 'Java',
    email: 'yujeishuge@yujie.com',
    img_url: "http://res.cloudinary.com/duur7awit/image/upload/v1523468799/yujie.png"
  )

  User.create!(
    username: 'bobross',
    password: 'AppAcademy6',
    first_name: 'Anastassia',
    last_name: 'Bobo',
    city: 'SF',
    description: "We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. Go out on a limb - that's where the fruit is.",
    seeking_lang: 'Java',
    email: 'bobross@bobross.com',
    img_url: "https://yt3.ggpht.com/a-/AJLlDp0oE1v5gLNPmxlZfgDKJfdZXc58GgyJN60Iqg=s900-mo-c-c0xffffffff-rj-k-no"
  )


end
