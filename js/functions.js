$(window).load(function () {
  $(window).resize(function() {
    checkSize();
  }).resize();
});

function checkSize(){
  if ($(".responsive-trigger").css("height") == "2px" ){
    var height = $(".section-map img").height();
    $(".photo-b").height(height);
  } else {
    $(".photo-b").css('height', '');
  }

  var meetups_height = $(".section-meetups").height();
  var map_height     = $(".section-map").height();
  var photo_height   = meetups_height - map_height;

  if ($(".responsive-trigger").css("height") == "3px" ){
    $(".photo-a").height(photo_height);
  } else {
    $(".photo-a").css('height', '');
  }
}
