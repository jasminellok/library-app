class BooksController < ApplicationController
    def show
        @book = Book.find_by(id: params[:id])
        render "books/show"
    end
    
    def index
        @books = Book.all.includes(:authors)
        render "books/index"
    end

    def update
        @book = Book.find_by(id: params[:id])
        if @book && @book.update(book_params)
            render "books/show"
        else
            render json: @book.errors.full_messages
        end
    end

    protected
    def book_params
        params.require(:book).permit(:parent_id)
    end 
end
