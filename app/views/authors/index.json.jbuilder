@authors.each do |author|
  json.set! author.id do 
    json.extract! author, :full_name
  end
end
 