$("#lang").click(function(){
    $(".ukr").toggle();
    $(".eng").toggle();
 });
  
 $('#toggle-box-checkbox').on('change', function(){
    if(this.checked){
      $('body').addClass('day');
      $('.navbar-dark').toggleClass('nav-ligth');
      $('.light-text').toggleClass('light-text').toggleClass('dark-text');
    }else{
      $('body').removeClass('day');
      $('.navbar-dark').toggleClass('nav-ligth');
      $('.dark-text').toggleClass('light-text').toggleClass('dark-text');
    }
  });


  localStorage.setItem('myKey', 'myValue');
  if ($('#toggle-box-checkbox.checked') = true) {
    localStorage.myKey = true;
  }
