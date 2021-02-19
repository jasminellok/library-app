class AddRefToBooksRemoveDuplicateInJoins < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :parent_id, :integer
    remove_column :book_authors, :duplicate_of, :integer
    add_index :books, :parent_id
  end
end
