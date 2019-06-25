$("#lang").click(function(){
    $(".ukr").toggle();
    $(".eng").toggle();
 });
  
 $('#toggle-box-checkbox').on('change', function(){
    if(this.checked){
      $('body').addClass('day');
      $('.navbar-dark').addClass('nav-ligth');
      $('#contact-button').removeClass('bg-primary')
      $('#contact-button').addClass('bg-light');

    }else{
      $('body').removeClass('day');
      $('.navbar-dark').removeClass('nav-ligth');
      $('#contact-button').removeClass('bg-light')
      $('#contact-button').addClass('bg-primary')

    }
  });