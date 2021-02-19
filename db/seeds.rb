# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


author_1 = Author.create(full_name: 'Jk Rowling')
author_2 = Author.create(full_name: 'Brandon Sanderson')
author_3 = Author.create(full_name: 'Neil Gaiman')
author_4 = Author.create(full_name: 'Terry Pratchett')

book_1 = Book.create(title: 'harry potter book and the sorcerers stone')
book_2 = Book.create(title: 'harry potter book and the chamber of secrets')
book_3 = Book.create(title: 'harry potter book#1', parent_id:book_1.id)

book_4 = Book.create(title: 'Way of Kings')
book_5 = Book.create(title: 'Words of Radiance')
book_6 = Book.create(title: 'The Stormlight Archive Book 1', parent_id:book_4.id)

book_7 = Book.create(title: 'Good Omens')


BookAuthor.create(book_id: book_1.id , author_id:  author_1.id)
BookAuthor.create(book_id: book_2.id , author_id:  author_1.id)
BookAuthor.create(book_id: book_3.id , author_id:  author_1.id)

BookAuthor.create(book_id: book_4.id , author_id:  author_2.id)
BookAuthor.create(book_id: book_5.id , author_id:  author_2.id)
BookAuthor.create(book_id: book_6.id , author_id:  author_2.id)

BookAuthor.create(book_id: book_7.id , author_id:  author_3.id)
BookAuthor.create(book_id: book_7.id , author_id:  author_4.id)
