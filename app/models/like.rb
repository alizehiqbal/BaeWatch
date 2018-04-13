class Like < ApplicationRecord

  validates :admirer_id, :crush_id, presence: true
  validates :admirer_id, uniqueness: {scope: :crush_id}

  belongs_to :admirer,
    foreign_key: :admirer_id,
    class_name: :User

  belongs_to :crush,
    foreign_key: :crush_id,
    class_name: :User


end
