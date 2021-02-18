class CreateBookAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :book_authors do |t|
      t.integer :book_id, null:false
      t.integer :author_id, null:false
      t.integer :ref_id

      t.timestamps
    end

    add_index :book_authors, :book_id
    add_index :book_authors, :author_id
  end
end
