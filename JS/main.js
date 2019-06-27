$("#lang").click(function(){
    $(".ukr").toggle();
    $(".eng").toggle();
 });

 $("#plot").click(function(){
 $('.secret').toggle();

} ) 

$('.media-body.skill-name').click(function(){
// $('this.skill-description').toggle();
$('.secret').toggle();

})
  





 $('#toggle-box-checkbox').on('change', function(){
    if(this.checked){
      $('body').addClass('day');
      $('.navbar-dark').toggleClass('nav-ligth');
      $('.light-text').toggleClass('light-text').toggleClass('dark-text');
      $('.mybackground').css('background-image', 'url("/pics/smokelight.png")');
    }else{
      $('body').removeClass('day');
      $('.navbar-dark').toggleClass('nav-ligth');
      $('.dark-text').toggleClass('light-text').toggleClass('dark-text');
      $('.mybackground').css('background-image', 'url("/pics/smokedark.png")');
    }
  });


  localStorage.setItem('myKey', 'myValue');
  if ($('#toggle-box-checkbox.checked') = true) {
    localStorage.myKey = true;
  }
