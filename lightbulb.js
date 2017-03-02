// In this drill, you'll need to use event listeners to detect when users click on an element 
// with the .js-lightbulb class. When that happens, the current clicked element should get the class
// .bulb-on applied to it, and any other elements that previously had the .bulb-on class should have it removed.

// With the CSS styles already in place, this will cause the currently clicked lightbulb
// to appear to turn on, and any other lit bulbs off.
$(document).ready(function(){
  $('.js-lightbulb').click(function(event){
    $('.js-lightbulb').each(function() {
      $(this).removeClass('bulb-on');
    //image.removeClass('bulb-on');
    });
    // for(var i = 0; i < )
    $(this).addClass('bulb-on');
  });
})




