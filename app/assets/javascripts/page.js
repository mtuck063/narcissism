$(document).ready(function() {
  init();
});

window.onresize = function() {
  init();
};

var init = function() {
  //TODO
};

window.onload = function() {
  $('.automatic-typing').automaticTyping({
    writeTime   :  60,
    deleteTime  :  40,
    pauseTime   :  750,
    sentences   : ['is a student at the uOttawa.',
                  'loves to build things.', 
                  'is a member of SESA.', 
                  'is wondering why you are still reading this?', 
                  'did I just read your mind?', 
                  'you\'re probably waiting to see my portfolio.', 
                  'well I don\'t have one yet.', 
                  'come back in a few days.'
                   ]
  });
};


