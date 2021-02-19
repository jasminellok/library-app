json.extract! @book, :id, :title
json.authorId @book.authors

if @book.parent
    json.parent @book.parent 
else
    json.children @book.children
end 
