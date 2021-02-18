class Book < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_many :book_authors, 
        foreign_key: :book_id,
        class_name: :BookAuthor

    has_many :authors, 
        through: :book_authors,
        source: :author
end
