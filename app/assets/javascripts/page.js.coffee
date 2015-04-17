$(document).ready ->
	automatic_typing()
	start()
	return

start = ->
  $('#home-container-1').css
    'height': $(window).height() - 30
    'width': $(window).width() - 30
  console.log $('#social-media').css('bottom')
  return


window.onresize = ->
  start()
  return

