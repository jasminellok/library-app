require 'rails_helper'
#to run bundle exec rspec spec/models/author_spec.rb

RSpec.describe Author, type: :model do

  describe "validations" do
    it {should validate_presence_of(:full_name)} 
    subject { Author.new(full_name: "jk rowling") }
    it {should validate_uniqueness_of(:full_name)} 
  end 

  describe "associations" do
    it {should have_many(:books).through(:book_authors)}
  end 



end
