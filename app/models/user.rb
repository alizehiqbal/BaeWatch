class User < ApplicationRecord

  validates :password_digession, :session_token, presence: true
  validates :password, length: { minimnum: 6, allow_nil: true }

  attr_reader :password

  has_many :likes
  has_many :matches

  after_initialize :ensure_cupids_arrow

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_cupids_arrow
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end









end