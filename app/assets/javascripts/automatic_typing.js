(function($) {
  "use strict";
  var methods = {
    init: function(options){
      
      options = $.extend({
        writeTime         :   60,
        deleteTime        :   60,
        pauseTime         :   1000,
        sentences         :   [
       'if you are seeing this',
       'you have not set your own values'
        ],
        charArray         :   [], //do not set this value and values below this point
        sentencesIndex    :   0,  
        charIndex         :   0,
        distance          :   0   
      }, options);

      this.each(function(){

        options = $.extend(true, {}, options); //deep copy the options object for every element
        options.charArray = options.sentences[0].split("");
        methods.loopCharacters.call(this, options);

      });

    },

    loopSentences: function(options){

      options.sentencesIndex = (options.sentencesIndex + 1) % options.sentences.length;
      options.charIndex = options.distance;
      options.charArray = options.sentences[options.sentencesIndex].split("");
      methods.loopCharacters.call(this, options);

    },

    loopCharacters: function(options){

      var i = options.charIndex;
      var len = options.charArray.length;
      var timer = options.writeTime;

      if (i === len) {
        timer = options.pauseTime;
      }

      setTimeout((function() {
        if (i === len) {
          methods.setDistance.call(this, options);
          return methods.deleteCharacters.call(this, options);
        }
        
        $(this).append(options.charArray[options.charIndex]);
        options.charIndex++;
        methods.loopCharacters.call(this, options);

      }).bind(this), timer);

    },

    deleteCharacters: function(options){

      setTimeout((function() {
        var currentSentence = $(this).text();

        if (currentSentence.length === options.distance) {
          return methods.loopSentences.call(this, options);
        }

        $(this).text(currentSentence.slice(0, currentSentence.length - 1));
        methods.deleteCharacters.call(this, options);

      }).bind(this), options.deleteTime);

    },

    setDistance: function(options){

      var nextSentenceIndex = options.sentencesIndex + 1;
      var cArr = options.charArray;
      var nextcArr = options.sentences[nextSentenceIndex % options.sentences.length].split('');
      var counter = 0;

      for (var i = 0; i <= cArr.length; i++) {
        if (cArr[i] === nextcArr[i]) {
      counter++;
        } else { break; }
      }

      if (cArr[counter] !== " " && counter !== 0) {
        while (true) { 
      if (cArr[--counter] === " ") { break; } 
        }
      }

      options.distance = counter;
    }

  };

  $.fn.automaticTyping = function(method){

    if ( typeof method === 'object' ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.');
    }

  };

})(jQuery);
