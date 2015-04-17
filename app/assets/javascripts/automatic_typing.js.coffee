sentences = ->
	all_sentences = [
  	'is a student at the uOttawa.'
  	'loves to build things.'
  	'is a member of SESA.'
  	'is wondering why you are still reading this?'
  	'did I just read your mind?'
  	'you\'re probably waiting to see my portfolio.'
  	'well I don\'t have one yet.'
  	'come back in a few days.'
  ]

window.automatic_typing = -> 
	char_array = sentences()[0].split('')
	loop_characters(char_array, 0, 0)
	return

loop_sentences = (prev_index) ->
	current_index = (prev_index + 1) % sentences().length
	char_index = str_distance(prev_index)
	char_array = sentences()[current_index].split('')
	loop_characters(char_array, char_index, current_index)
	return

loop_characters = (char_array, char_index, index) ->
	timer = 60
	timer = 750 if char_index == char_array.length
	setTimeout (->
		return delete_characters(index, str_distance(index)) if char_index == char_array.length
		print_char(char_array[char_index++])
		loop_characters(char_array, char_index, index)
		return
		), timer
	return

print_char = (c) ->
	$('.automatic-typing').append(c)
	return 

delete_characters = (index, dist) ->
	setTimeout (->
		temp = $('.automatic-typing').text()
		return loop_sentences(index) if temp.length == dist
		$('.automatic-typing').text(temp.slice(0, temp.length - 1))
		delete_characters(index, dist)
		return
	), 40
	return

str_distance = (index) ->
	str_array = sentences()[index].split('')
	next_index = index + 1
	next_str_array = sentences()[next_index % sentences().length].split('')
	counter = 0
	for i in [0..str_array.length] by 1
		if str_array[i] == next_str_array[i] then counter++ else break
	if str_array[counter] != " " && counter != 0
		loop
			break if str_array[--counter] == " " 
	return counter