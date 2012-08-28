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
          $(section).removeClass('hide')
          $(image).addClass('active');
        } else{
          $(section).addClass('hide');
          $(image).removeClass('active');
        }
      }
      
      
    });

var circles = function(){
  var x = 845;
  var y = 150;

  var radius = 210;
  var paper = Raphael(document.getElementById("venn-diagram"), radius*4-x/5, radius*2);

  // Creates circle at x = 50, y = 40, with radius 10

  var circle1 = paper.circle(radius, radius, radius);
  var circle2 = paper.circle(3*radius-x/5, radius, radius);
  // Sets the fill attribute of the circle to red (#f00)
  circle1.attr("fill", "#3ba4db");
  circle2.attr("fill", "#ffa53a");

  // Sets the stroke attribute of the circle to white
  // circle1.attr("stroke", "#3ba4db");
  // circle2.attr("stroke", "#ffa53a");
}
    $('#interests').on("click",function(){
      var c = $("circle");
      if (c.length > 0){
        return null
      }else{
        circles();
      }
    });
  });

