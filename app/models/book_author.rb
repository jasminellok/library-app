class BookAuthor < ApplicationRecord
    validates :book_id, :author_id, presence:true

    belongs_to :book,
        foreign_key: :book_id,
        class_name: :Book

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :Author
end
