(function() {

//****************   created Elements - beginning
var battery = document.createElement('p');
battery.classList = 'battery';
battery.textContent = 'BATTERY';
firstDiv.appendChild(battery);

var battery_bulb = document.createElement('p');
battery_bulb.classList = "battery_bulb";
battery.appendChild(battery_bulb);

var company = document.createElement('h3');
var headline = document.getElementById('firstDiv');
company.classList = "company";
document.body.appendChild(company);
company.textContent = "pixel";
company.style.color = "MidnightBlue";

var heading = document.createElement('h2');
var headline = document.getElementsByClassName('company');
heading.classList = 'head';
heading.textContent = "ART PROJECT";
company.appendChild(heading);
heading.style.color = "MidnightBlue";

var tmAdd = document.getElementsByClassName("head");
var tm = document.createElement('span');
tm.classList = "span1";
tm.textContent = "TM";
heading.appendChild(tm);

var domMatrix = document.createElement('p');
var addDOM = document.getElementById('colors');
domMatrix.classList = "domLines";
addDOM.appendChild(domMatrix);

var domMatrix2 = document.createElement('p');
domMatrix2.classList = "domLines2";
addDOM.appendChild(domMatrix2);

var domMessage = document.createElement('span');
var message = document.getElementsByClassName('domLines');
domMessage.classList = "domMessage";
domMessage.textContent = "DOM MATRIX WITH STEREO SOUND";
domMatrix.appendChild(domMessage);

var controlPad = document.createElement('div');
controlPad.classList = "control_pad";
heading.appendChild(controlPad);

var controlPadVert = document.createElement('div');
controlPadVert.classList = "control_padVert";
heading.appendChild(controlPadVert);

var aButton = document.createElement('div');
aButton.classList = 'aButton';
heading.appendChild(aButton);

var bButton = document.createElement('div');
bButton.classList = 'bButton';
heading.appendChild(bButton);

var aText = document.createElement('div');
aText.classList = "aText";
aText.textContent = 'A';
heading.appendChild(aText);

var bText = document.createElement('div');
bText.classList = "bText";
bText.textContent = 'B';
heading.appendChild(bText);

var select = document.createElement('div');
select.classList = "select";
heading.appendChild(select);

var start = document.createElement('div');
start.classList = "start";
heading.appendChild(start);

var startText = document.createElement('div');
startText.classList = "startText";
heading.appendChild(startText);
startText.textContent = "START";

var selectText = document.createElement('div');
selectText.classList = "selectText";
heading.appendChild(selectText);
selectText.textContent = "SELECT";

var colorHeading = document.createElement('h2');
colorHeading.textContent = "Select Your Color";
colors.appendChild(colorHeading);
colorHeading.classList = "colorHeading"

var num = 2048;
var container = document.getElementsByClassName('container');

var paintbrush = function(color_div) {
   color_div.classList.remove(color_div.classList.item(1));
   color_div.classList.add();
 }

var drawing = function() {
for (i=0; i<num; i++) {
  var div = document.createElement('div');
  firstDiv.appendChild(div);
  div.className = "grid";
  // for (j=0; j<2; j++) {
  //   var row = document.createElement('div');
  //   firstDiv.appendChild(row);
  //   row.className = "grid";
  // }
}
}
 var clickPaint = function takePaint() {
  var takeColor = document.querySelector('colors');

var palette = ['red', 'green', 'blue', 'orange', 'yellow',
'darkGreen', 'dodgerBlue', "lawnGreen", 'mediumBlue', 'purple', 'saddleBrown', 'yellow', 'tan', 'maroon', 'deepPink', 'chocolate', 'black', 'plum', 'teal', 'turquoise','tomato', 'oliveDrab', 'lime', 'indianRed', 'fireBrick', 'darkSlateGray', 'darkGoldenRod', 'beige'];

  //********************* for the palette. First part: creating divs  *********
  var grid = document.getElementsByClassName('grid');
  var colors = document.getElementById('colors');
  for (j=0; j<palette.length; j++) {
    var color_div = document.createElement('div');
    color_div.className = 'colors';
    color_div.style.backgroundColor = palette[j];
    colors.appendChild(color_div);
  }
firstDiv.addEventListener('click', function() {
  if (event.target === this) {}
  else {
    event.target.style.backgroundColor = ;
  }
})
colors.addEventListener('click', function() {

})
start.addEventListener('click', function() {
  if (event.target === this) {
    grid.style.backgroundColor = 'grey';
  }

})
}
drawing();
clickPaint();
})();
