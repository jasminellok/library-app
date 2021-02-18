class Author < ApplicationRecord
    validates :full_name, presence: true, uniqueness: true

    has_many :book_authors, 
        foreign_key: :author_id,
        class_name: :BookAuthor

    has_many :books, 
        through: :book_authors,
        source: :book
end
