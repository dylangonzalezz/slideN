# dmg-sortMe

## Welcome!
slideN is a npm package that creates a simple slider.

## Motivation
Hello! This Package was made by Dylan Gonzalez for learning purposes.

## Installation with Node
To install with **Node**, open your terminal and go to your project directory.
Then do `npm install slideN`.

## Content
With this package you can easily create your own slider without much code.

#Setting up:
Link the .js and .css file in your html file.

`<script src="js/jquery-3.2.1.js"></script>
<script src="sliden/sliden.js"></script>

<script>
  var slider = slidenjs();
  slider.initialize("slidenjs");
</script>`
Don't forget you will also need jquery!

`<link rel="stylesheet" type="text/css" href="sliden/sliden.css"/>`

#Next:
Create a div with the class "slidenjs" and fill it with smaller divs.
Your content can be placed in those smaller divs.

`<div class="slidenjs">
  <div>
    //your content
  </div>
  <div>
    //your content
  </div>
  <div>
    //your content
  </div>
</div>`

#Done!
Now on loading your page your divs should be converted into sliders! :)
