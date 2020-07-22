// jQuery(document).ready(function() {
//   jQuery('h1').click(function(){
//     alert("This is a heading tag")
//   });

//   jQuery('p').click(function(){
//     alert("This is a paragraph")
//   });

//   jQuery('img').click(function(){
//     alert("This is an image")
//   });
// });


        //or (replacing jquery with $) also as

// $(document).ready(function() {
//   $("h1").click(function() {  //event listener click() on h1
//     alert("This is a header.");
//   });
        
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
          
//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });

//         //show() image on click on p's above the image
// $(document).ready(function() {
//   $("p").click(function() {
//     $("img").show();
//   });
// });


$(document).ready(function() {
  $(".clickable").click(function() {
    $(".showing").toggle();                 //try also fadeIn(),fadeOut(),fadeToggle()
    $(".hidden").toggle();                  //try also slideDown(),slideUp(),slideToggle()
  });
});