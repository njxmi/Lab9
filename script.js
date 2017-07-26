//js file for Lab 9

$( "li" ).hover(function() {
  $( this ).fadeOut( 2000, 0.25 );
  $( this ).fadeIn( 2000, 1 );
});

$( "li" ).click(function() {
  $(this).css("background", "yellow");
});

$( "li" ).click(
  function() {
  $( this ).append( $( "<span> Clicked! </span>" ) 
  );}, 
  function() {
   $( this ).find( "span:last" ).remove();
});