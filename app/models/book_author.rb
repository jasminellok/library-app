class BookAuthor < ApplicationRecord
    validates :book_id, :author_id, presence:true
end
