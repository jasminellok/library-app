class AuthorsController < ApplicationController
    def show
        @author = Author.find_by(id: params[:id])
        debugger
        render "authors/show"
    end
    
    def index
        @authors = Author.all.includes(:books) 
        render "authors/index"
    end

end
