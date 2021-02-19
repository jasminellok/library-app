@authors.each do |author|
  json.set! author.id do 
    json.extract! author, :id, :full_name
  end
end
 