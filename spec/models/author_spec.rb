require 'rails_helper'
#to run bundle exec rspec spec/models/author_spec.rb

RSpec.describe Author, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  #validation
  #association
  #class methods
  #error message

  describe "validations" do
    it "should validate presence of full name"
    it "should validate uniqueness of full name"
  end 

  describe "associations" do
    it "should have many books"
  end 

  # describe "class methods" do 
  #   describe "::classm_method" do
  #     it "should do class method"
  #   end 
  # end 

end
