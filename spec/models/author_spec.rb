require 'rails_helper'
#to run bundle exec rspec spec/models/author_spec.rb

RSpec.describe Author, type: :model do
  #validation
  #association
  #class methods
  #error message

  describe "validations" do
    it {should validate_presence_of(:full_name)} 
    it {should validate_uniqueness_of(:full_name)} 
  end 

  describe "associations" do
    it {should have_many(:books).through(:)}
  end 

  # describe "class methods" do 
  #   describe "::classm_method" do
  #     it "should do class method"
  #   end 
  # end 

end
