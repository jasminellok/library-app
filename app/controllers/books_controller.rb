class BooksController < ApplicationController
    def show
        @book = Book.find_by(id: params[:id])
        render "books/show"
    end
    
    def index
        @books = Book.all.includes(:authors)
        render "books/index"
    end
end
