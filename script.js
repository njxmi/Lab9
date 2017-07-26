//js file for Lab 9

$( "li" ).hover(function() {
  $( this ).fadeOut( 100, 0.25 );
  $( this ).fadeIn( 500, 1 );
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