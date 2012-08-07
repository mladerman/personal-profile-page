$(document).ready(function(){

    var sections = $("div.hide");
    var images = $(".column>img");

    $(".column>img").on("click",function(){
      var span = $(this).siblings()[0];

      //Changes h2 to span name
      $("h2").text($(span).text());
      var id = $(this).attr('id');
      var new_id = id+'-content';

      //Toggles content and image selection
      for(i=0;i<sections.length;i++){
        var section = sections[i];
        var image = images[i];
        if (new_id === $(section).attr('id')){
          $(section).removeClass('hide');
          $(image).addClass('active');
        } else{
          $(section).addClass('hide');
          $(image).removeClass('active');
        }
      }
      
      
    });
  });



