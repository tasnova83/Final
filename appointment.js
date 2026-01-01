//----Mobile menu start
$('.mobile-hide').hide();

/* FIX: mobile-show প্রথমে visible করা হলো */
$('.mobile-show').show();

$('.mobile-menu').hide();


$('.mobile-show').click(function(){
  $('.mobile-menu').slideDown();
  $('.mobile-show').hide();
  $('.mobile-hide').show();
});

$('.mobile-hide').click(function(){
  $('.mobile-menu').slideUp();
  $('.mobile-show').show();
  $('.mobile-hide').hide();
});

$('.click-menu').click(function(){
  $('.mobile-menu').slideUp();
  $('.mobile-show').show();
  $('.mobile-hide').hide();
})
//----Mobile menu end