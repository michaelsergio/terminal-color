/*
 * Generate a color code.
 * inputs:
 * text string
 * fgc foreground color int
 * bgc background color int
 * properties string [normal |  bold | faint | underline | blink] 
 *
 * The color int is a number 0-7 and maps to the array below.
 * [Black, Red, Green, Yellow, Blue, Magenta, Cyan, White]
 *
 * Returns ansi escaped color coded text
 */
function colorcode(text, fgc, bgc, properties) {

  // property map: name -> ansi property id
  var prop = {
    "normal": 0,
    "bold": 1,
    "faint":2, 
    "underline":4, 
    "blink": 5
  };

  //TODO: add properties by linking them to the checkboxes


  // Take the property parameter and turn it into ansi codes joined by ;
  var specialprops = properties.map(function(e) {
    return prop[e];
  }).join(";");


  // If no properties, add a ; delimiter
  if (specialprops !== "") specialprops = ";" + specialprops;


  // set the foreground color
  var fg = '3'+fgc;

  // set the bg color if it exists
  var bg = (bgc === "") ? "" : ";" + '4' + bgc;


  // write the ansi color esacape header
  var esc = "\\033";
  var colorings = esc + "[" + fg + bg + specialprops + 'm';


  // join the header, text and reset escape into the color text string
  var reset =  esc + "[0m";
  var color_text = colorings + text + reset;
  return color_text;
}


/*
 * A helper for the colorcode function.
 *
 */
function color(text, fg, bg, opts) {
    if (!opts) opts = [];
    return colorcode(text, fg, bg, opts);
}

