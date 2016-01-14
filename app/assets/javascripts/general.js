// window.onload = function() {
//   $('.automatic-typing').automaticTyping({
//     writeTime   :  60,
//     deleteTime  :  40,
//     pauseTime   :  750,
//     sentences   : ['is a student at the uOttawa.',
//                   'loves to build things.', 
//                   'is a member of SESA.', 
//                   'is wondering why you are still reading this?', 
//                   'did I just read your mind?', 
//                   'you\'re probably waiting to see my portfolio.', 
//                   'if the page hasn\'t completed loading yet, there is something wrong', 
//                   'come back in a few days.'
//                    ]
//   });
// };

$("a.root-link").click(function(e){
  e.preventDefault();
  $(".body").velocity({ opacity: 0, right: '-200px' }, { duration: 250 }, "easeOutCubic");
  var link = $(this).attr("href");
  setTimeout(function() { Turbolinks.visit(link) }, 250);
});


