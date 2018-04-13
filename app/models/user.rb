class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_cupids_arrow
  after_initialize :ensure_profile_pic

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_cupids_arrow
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_profile_pic
    self.img_url ||= "default_prof.png"
  end

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

end
