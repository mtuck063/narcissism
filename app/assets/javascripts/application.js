// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .

$(document).on('click', '.root-link', function(e){
  e.preventDefault();
  $(".body").velocity({ opacity: 0, right: '-200px' }, { duration: 250 }, "easeOutCubic");
  var link = $(this).attr("href");
  setTimeout(function() { Turbolinks.visit(link) }, 250);
});

// $(document).on('page:change', function(){

//   $('.automatic-typing').automaticTyping({
//     writeTime   :  60,
//     deleteTime  :  40,
//     pauseTime   :  20000,
//     sentences   : ['FULL STACK DEVELOPER',
//                   'FRONTEND DEVELOPER', 
//                   'BACKEND DEVELOPER'
//                    ]
//   });

// });