$(document).ready ->
	automatic_typing()
	start()
	return

window.onload = ->
	$('.bg-loading').css
    'height': $(window).height() - 30
    'width': $(window).width() - 30
  setTimeout (->
  	$('.loading, .bg-loading').hide()
  	return
  	), 750
	return

start = ->
  $('#home-container-1').css
    'height': $(window).height() - 30
    'width': $(window).width() - 30
  return


window.onresize = ->
  start()
  return

