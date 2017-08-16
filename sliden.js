(function($) {

  //Create the slidenjs function object
  var slidenjs = function(classname) {
    return new slidenjs.init(classname);
  };

  //Object Literal for all slider properties. This includes:
  //A variable for every div with the ".slidenjs" class.
  //A Variable for every child in every div in sliderdivparent.
  var slider = {
    sliderdivparent: [],
    sliderdivchild: new Array
  };

  //Creates a two dimensional array for each slider with ".slidenjs" class and all its child divs.
  var getAllSliderDivs = function() {
    console.log("executing:");
    console.log("getAllSliderDivs()");

    var parent = slider.sliderdivparent = $("div.slidenjs");

    for (var a = 0; a < parent.length; a++) {
      slider.sliderdivchild[a] = new Array;

      for (var b = 0; b < $("div.slidenjs:eq(" + a + ")").children().length; b++) {
        slider.sliderdivchild[a][b] = $("div.slidenjs:eq(" + a + ") div:eq(" + b + ")");
        
      }
    }

    console.log("returning:");
    console.log(slider.sliderdivchild);

    return slider.sliderdivchild;
  };

  //Adds a left button and a right button to every div with ".slidenjs"
  var addButtons = function() {
    console.log("executing:");
    console.log("addButtons()");

    var parent = slider.sliderdivparent;
    var div = '<div></div>';

    for (var i = 0; i < parent.length; i++) {
      $(parent[i]).append($(div).addClass("slidenjs__button slidenjs__button--left slidenjs__button--nr" + i));
      $(parent[i]).append($(div).addClass("slidenjs__button slidenjs__button--right slidenjs__button--nr" + i));
    }

    console.log("Finishing:");
    console.log("addButtons()");
  };

  //Adds Style classes to all divs
  var addStyleClasses = function() {
    console.log("executing:");
    console.log("addStyleClasses()");

    for (var i = 0; i < slider.sliderdivchild.length; i++) {

      for (var h = 0; h < slider.sliderdivchild[i].length; h++) {

        //Check if the element is a div
        if ( !slider.sliderdivchild[i][h].is( "div" ) ) {
          return;

        }
       slider.sliderdivchild[i][h].addClass("slidenjs__slide");

      }

      //Add the first active class, so something is displayed at the start
      slider.sliderdivchild[i][0].addClass("slidenjs__slide--active");

    }

    console.log("Finishing:");
    console.log("addStyleClasses()");
  };

  //Adds a event handler to on the click event of every right and left button
  var buttonHandler = function() {
    console.log("Executing:");
    console.log("buttonHandler()");

    var slide = slider.sliderdivchild;
    var activeposition = [];

    for (var i = 0; i < slider.sliderdivparent.length; i++) {
      rotate(i);

    }

    //Add the event handler to every "parentnr" passed through
    function rotate(parentnr) {
      console.log("Executing:");
      console.log("rotate():");
      var activeposition = 0;

      //Right button
      $(".slidenjs__button.slidenjs__button--right.slidenjs__button--nr" + parentnr).click(function() {
        console.log("Button right");

        activeposition++;
        if (activeposition == slide[parentnr].length) {
          activeposition = 0;

        }

        if (activeposition < 0) {
          activeposition = (slide[parentnr].length -1);
        }

        for (var i = 0; i < slide[parentnr].length; i++) {
         slide[parentnr][i].removeClass("slidenjs__slide--active");
        }

        slide[parentnr][activeposition].addClass("slidenjs__slide--active");
      });

      //Left button
      $(".slidenjs__button.slidenjs__button--left.slidenjs__button--nr" + parentnr).click(function() {
        console.log("Button left");

        activeposition--;
        if (activeposition < 0) {
          activeposition = (slide[parentnr].length -1);
        }

        if (activeposition == slide[parentnr].length) {
          activeposition = 0;
        }

        for (var i = 0; i < slide[parentnr].length; i++) {
         slide[parentnr][i].removeClass("slidenjs__slide--active");

        }

        slide[parentnr][activeposition].addClass("slidenjs__slide--active");
      });

      console.log("Finishing:");
      console.log("rotate():");
    }

    console.log("Finishing:");
    console.log("buttonHandler():");
  };

  //Public Methods are placed on the prototype of the slidenjs object.
  slidenjs.prototype = {

    //Initialize function executes all the important private functions for creating the slider
    initialize: function() {
      getAllSliderDivs();
      addButtons();
      addStyleClasses();
      buttonHandler();
    }

  };

  //Slidenjs.init is to set all attributes passed through
  slidenjs.init = function(classname) {
    this.classname = classname || "slidenjs";
  };

  //The passsed through attributes are placed directly on the slidenjs prototype
  slidenjs.init.prototype = slidenjs.prototype;

  //Slidenjs is placed on the window object, so that the user can access it
  window.slidenjs = slidenjs;

}(jQuery));
