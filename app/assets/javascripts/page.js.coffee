$(document).ready ->
	start()
	return

window.onload = ->
	automatic_typing()
	return

start = ->
  $('#home-container-1').css
    'height': $(window).height() - 30
    'width': $(window).width() - 30
  return


window.onresize = ->
  start()
  return

