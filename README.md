# Mini Library 

## Completed Functionality, Concept, Specs:
- [x] Have books entity where books have one title and multiple authors
- [x] Have an authors entity where the author has a full name and multiple books
- [x] Books may be duplicates of other books and the app links a book duplicate to reference
- [x] The app shows a listing of books and authors and can select an author or a book
- [x] A book view displays the book title, authors, and either the reference (original title) of the duplicate copies of the book
- [x] A author view displays the authors’ full name and the books they wrote

## Incomplete: 
- [] There should be a way to mark/unmark a book as a duplicate of another 
- [] Some basic tests in place (Have a unit test for the models in the backend)
- [] Simple schematics of the react components hierarchy.

### Comments:
For the mark/unmark duplicate feature, I have most of the backend setup including the controller action to update the parent_id. Aside from testing/ implement better testing, my next steps/goals for this project would be to set up the update action (ajax request, thunk actions, reducers, etc.) on the frontend, and create an edit component that would be accessible on the book view page to update the parent_id of the book to either another book(mark) or to null(unmark). 

## Setting Up

1. Run `bundle install` to install gems 
2. Run `rails db:setup` to setup database 
3. Run `npm install` to install packages
4. Run `npm start` to run webpack
5. Run `rails s` to start the server
6. Run `bundle exec rspec spec/models` to run model unit tests



