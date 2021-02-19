class Book < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_many :book_authors, 
        foreign_key: :book_id,
        class_name: :BookAuthor

    has_many :authors, 
        through: :book_authors,
        source: :author

    belongs_to :parent,
        foreign_key: :parent_id, 
        class_name: :Book

    has_many :children,
        foreign_key: :parent_id, 
        class_name: :Book

end
