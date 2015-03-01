$(document).ready(function(){ 


  // pointer

  $("a[href^='http://']").attr("target","_blank");




  // header waypoint
               
  $(".header").waypoint(function(){

    $(".header, .header > *").toggleClass("black");
    
  }, {offset: 67}); // RESEARCH: need to add 15.9% in here




  // Make nav text bigger / smaller on hover
 
  $("li a").mouseenter(function(){ 

    $(this).toggleClass("big");
    $(this).parent().toggleClass("decrease-li-margin");
  });

  $("li a").mouseleave(function(){ 

    $(this).toggleClass("big");
    $(this).parent().toggleClass("decrease-li-margin");
  });   




  // hide nav text

  $("#pure-lonboards-certificates, #saddleback-leather-co, #web, #brand-media, #baby, #twitter, #email").hide(); 
















  // move nav on click, hide / show nested elements


  $("#stuff-ive-made").click(function(){     // if mobile
      
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    
      $(this).parent().addClass("container-2-add-on");

      if ($("#twitter, #email").is(":visible")){
      $("#web, #brand-media, #baby").delay(500).fadeToggle(500);
      }
      else {
        $("#web, #brand-media, #baby").fadeToggle(500);
      }

      $("#saddleback-leather-co, #pure-lonboards-certificates, #twitter, #email").fadeOut(500);
    }

    else {

      $(this).parent().animate({marginTop : "141px"} , function(){ // Won't let me change position to relative from absolute. Try addClass here with container-2-add-on and only position:relative in there

        if ($("#twitter, #email").is(":visible")){
          $("#web, #brand-media, #baby").delay(500).fadeToggle(500);
        }
        else {
          $("#web, #brand-media, #baby").fadeToggle(500);
        }

        $("#saddleback-leather-co, #pure-lonboards-certificates, #twitter, #email").fadeOut(500);
      });     
    }
  }); 


  $("#web").click(function(){

    if($("#saddleback-leather-co").is(":visible")){
      $("#pure-lonboards-certificates").delay(500).fadeToggle(500);}
    else{ 
      $("#pure-lonboards-certificates").fadeToggle(500);
    }  
   
    $("#saddleback-leather-co").fadeOut(500);
  });




  $("#baby").click(function(){

    $("#saddleback-leather-co").fadeOut(500);
    $("#pure-lonboards-certificates").fadeOut(500);
  }); 




  $("#brand-media").click(function(){

    if($("#pure-lonboards-certificates").is(":visible")){
      $("#saddleback-leather-co").delay(500).fadeToggle(500);}
    else{
      $("#saddleback-leather-co").fadeToggle(500); 
    }

    $("#pure-lonboards-certificates").fadeOut(500);
  }); 




  $("#talk-to-me").click(function(){     // if mobile
      
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    
      $(this).parent().addClass("container-2-add-on");

      if($("#web, #brand-media, #baby").is(":visible")){
        $("#twitter, #email").delay(500).fadeToggle(500);
      }
      else{
        $("#twitter, #email").fadeToggle(500);
      }
      
      $("#web, #brand-media, #baby, #saddleback-leather-co, #pure-lonboards-certificates").fadeOut(500);
      }

    else {

      $(this).parent().animate({marginTop : "141px"} , function(){ // Won't let me change position to relative from absolute. Try addClass here with container-2-add-on and only position:relative in there

        if($("#web, #brand-media, #baby").is(":visible")){
          $("#twitter, #email").delay(500).fadeToggle(500);
        }
        else{
          $("#twitter, #email").fadeToggle(500);
        }
        
        $("#web, #brand-media, #baby, #saddleback-leather-co, #pure-lonboards-certificates").fadeOut(500);
      });     
    }
  });









  // // $("#talk-to-me").click(function(){

  //   $("#stuff-ive-made").parent().animate({marginTop : "181px"} , function(){

  //     if($("#web, #brand-media, #baby").is(":visible")){
  //       $("#twitter, #email").delay(500).fadeToggle(500);
  //     }
  //     else{
  //       $("#twitter, #email").fadeToggle(500);
  //     }
      
  //     $("#web, #brand-media, #baby, #saddleback-leather-co, #pure-lonboards-certificates").fadeOut(500);

  //   });
  // // }); 




  // $("#email").click(function(){

  //   $("#email-form, #lightbox-background").fadeToggle(500);
  //   });

  // $("#lightbox-background").click(function(){

  //   $("#email-form, #lightbox-background").fadeToggle(500);
  //   });






  // Lucy lightbox


  // hide

  $("#lucy-photo, #email-form, #lightbox-background").hide();   


  // lightbox

  $("#baby, #lucy-photo, #lightbox-background").click(function(){

    $("#lightbox-background").fadeToggle(500);
    $("#lucy-photo").hide();
    $("#email-form").hide();
    });

  $("#baby").click(function(){

    $("#lucy-photo").fadeToggle(500);
    });



//email click

  $("#email").click(function(){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    
      document.location.href = "mailto:keenanerwin@gmail.com?subject=Your Website is Number One!";
    }

    else {

          $("#email-form").fadeToggle(500);
          $("#lightbox-background").fadeToggle(500);  
    }

  });  


          // $("#email-form").fadeToggle(500);
          // $("#lightbox-background").fadeToggle(500);
          // $("#lucy-photo").hide();
          // $("#email-form").hide();






// email form
 

// add text shadow to corresponding p element

$(".name-input").focus(function(){
  
    $(".name-label").addClass("text-shadow");
  
});
$(".name-input").blur(function(){
  
    $(".name-label").removeClass("text-shadow");
  
});


$(".email-input").focus(function(){
  
    $(".email-label").addClass("text-shadow");
  
});
$(".email-input").blur(function(){
  
    $(".email-label").removeClass("text-shadow");
  
});


$(".message-input").focus(function(){
  
    $(".message-label").addClass("text-shadow");
  
});
$(".message-input").blur(function(){
  
    $(".message-label").removeClass("text-shadow");
  
});


$("#hidden-submit-button").bind("mouseenter focus",function(){

  $(this).toggleClass("hidden");
});
$("#hidden-submit-button").bind("mouseleave focusout",function(){

  $(this).toggleClass("hidden");
});
 

// keep input / textarea background white if it contains text

$("input, textarea").blur(function(){

  if ($.trim($(this).val()) !== ""){
      $(this).addClass("input-blur-keep-background-white");
      }
  else ($(this).removeClass("input-blur-keep-background-white"));

});

///wonder if there's a way to add ":initial" to this instead of add / remove class?


















});