(function() {
var heading = document.createElement('h2');
var headline = document.getElementById('head');
heading.classList = 'head';
heading.textContent = "PIXEL ART PROJECT";
headline.appendChild(heading);
heading.style.color = "Chartreuse";


// var brush =
var num = 300;
var container = document.getElementsByClassName('container');

var blackColor = ".blackDye"

var paintbrush = function(color_div) {
   color_div.classList.remove(color_div.classList.item(1));
   color_div.classList.add(blackColor);
 }

var drawing = function() {
for (i=0; i<num; i++) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.className = "grid";
  for (j=0; j<7; j++) {
    var row = document.createElement('div');
    document.body.appendChild(row);
    row.className = "grid";
  }
}
}
 var clickPaint = function takePaint() {
   var takeColor = document.querySelector('colors');

for (i=0; i<23; i++) {
  var colors = document.getElementById('colors');
  var color_div = document.createElement('div');
  color_div.className = 'colors';
  colors.appendChild(color_div);
}
  var colorHeading = document.createElement('h2');
  colorHeading.textContent = "Select Your Color";
  colors.appendChild(colorHeading);


    colors.addEventListener('click', function(event) {
      if (event.target === colors_div) {
        return;
      }


    });
}
drawing();
clickPaint();
})();
