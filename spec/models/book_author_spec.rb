require 'rails_helper'
#to run bundle exec rspec spec/models/book_author_spec.rb

RSpec.describe BookAuthor, type: :model do
  describe "validations" do
    it {should validate_presence_of(:book_id)} 
    it {should validate_presence_of(:author_id)} 
  end 

  describe "associations" do
    it { should belong_to(:book).class_name('Book') }
    it { should belong_to(:author).class_name('Author') }
  end 
end
