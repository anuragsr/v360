var l = console.log.bind(window.console)
var isMobile = function(){
  if(    navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      || window.innerWidth <= 500
    ){
    return true
  }
  else {
    return false
  }
}
// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

$(function() {

  var currMatterPort = '';
  var ifr = '';

  $('a.portfolio-link').on("click", function(e){
    e.preventDefault()
    currMatterPort = $(e.currentTarget).attr("link")    
    ifr = $($(e.currentTarget).attr("href")).find("iframe")
    ifr.attr("src", currMatterPort)
  })  

  $('.modal:not(.fm)').on('hidden.bs.modal', function (e) {
    currMatterPort = '';
    ifr.attr("src", currMatterPort)
    ifr = '';    
  })

  // Setting bg video based on mobile    
  $("#bg-vid").attr("src", isMobile()?"vid/v360-bar-patio-vid_mobile.mp4":"vid/v360-bar-patio-vid_1.mp4")

  // Video
  // var options = {
  //   id: 313733585,
  //   // height: 2000,
  //   width: 200,
  //   // background: true,
  //   autoplay: true,
  //   loop: true,
  //   byline: false,
  //   title: false,
  // };

  // var player = new Vimeo.Player('video-ctn', options);
  // player.setVolume(0);
  // player.ready().then(function() {
  //   // the player is ready
  //   player.play().then(function() {
  //     // the video was played
  //   }).catch(function(error) {
  //     l(error)
  //     // switch (error.name) {
  //     //     case 'PasswordError':
  //     //         // the video is password-protected and the viewer needs to enter the
  //     //         // password first
  //     //         break;

  //     //     case 'PrivacyError':
  //     //         // the video is private
  //     //         break;

  //     //     default:
  //     //         // some other error occurred
  //     //         break;
  //     // }
  //   });
  // });
  // player.on('play', function() {
  //   l('played the video!');
  // });

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
//# sourceURL=pen.js