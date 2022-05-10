//toggle sidebar when clicking navbar search button
jQuery('#navbarSearchButton').click(function(){
  jQuery(this).toggleClass('active');//set button in active state when sidebar is displayed
  jQuery('#mainContentRow').toggleClass('sbHidden sbDisplay');//toggle sidebar on and off
});//end click
