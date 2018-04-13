# BaeWatch

## About

Bae Watch, a web app born from an inside joke and raised into a joke played on the developer herself, is a tool for software engineers to kindle romance among their own kind. Traditionally, attraction is billed as a function of elusive factors in unpredictable proportions: charm, charisma, appearance, wit, etc. Problem is, love breaks all the time. Charm, charisma, etc. are buggy: they exist in gradients, and rarely mature in ways one can predict. Binary, on the other hand, is devoid of gradient. The maker of Bae Watch suggests that basing compatibility decisions on one’s attraction to another’s code may prove more lasting and joyful. It also might not, but who can say truly. Bae Watch is a tool for users to upload pictures of their finest code, and “like” other users if they’re compelled by images of their code. When there’s mutual attraction, users will match and can message one another. Cue: cupid.

## Helpful Links

You are welcome to search for bae on Bae Watch at the following link, with either the demo or with your most compelling code at hand: https://bae-watch.herokuapp.com/. Bae Watch Is build with a variety of technologies: Rails, React, Redux, Cloudinary and PostgreSQL. You are welcome to access the design documents at the following link: https://github.com/alizehiqbal/BaeWatch/wiki.

## Function

Current core functionality includes the ability to form a secure, BCrypt-encrypted account, and the ability to peruse users and their descriptions. Users' descriptions appear to the viewer in form of a reader-friendly modal. For purposes of the demo account, descriptions include Bob Ross quotations, as seen below.

![Modal](https://i.imgur.com/901Wytu.png)

## Future Directions

A feature currently in the process of re-implementation is the ability for users to like other users, delete likes, and have their like data rendered on a separate view page. The backend infrastructure for this functionality can be observed in the code rendered below. Stay tuned! In addition, future incarnations of Bae Watch will include the ability for users to take a quiz based on coding preferences to determine compatibility and match percentage (e.g. "how often do you program until your eyes can't stay open?" or "do you prefer development on the backend or the frontend?"). In the future users will also have the ability to message other users they've matched with; this will require development with web sockets.

```ruby
class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_cupids_arrow
  after_initialize :ensure_profile_pic

  has_many :crushes,
    foreign_key: :admirer_id,
    class_name: :Like

  has_many :admirers,
    foreign_key: :crush_id,
    class_name: :Like

  has_many :liked_users,
    through: :crushes,
    source: :crush

  has_many :admiring_users,
    through: :admirers,
    source: :admirer

  #...shortened for display...

  private

  def ensure_cupids_arrow
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_profile_pic
    self.img_url ||= "default_prof.png"
  end
end
```
