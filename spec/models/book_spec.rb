require 'rails_helper'
#to run bundle exec rspec spec/models/book_spec.rb

RSpec.describe Book, type: :model do
  describe "validations" do
    it {should validate_presence_of(:title)} 
    subject { Book.new(title: "harry potter #1") }
    it {should validate_uniqueness_of(:title)} 
  end 

  describe "associations" do
    it {should have_many(:authors).through(:book_authors)}
  end 
end
