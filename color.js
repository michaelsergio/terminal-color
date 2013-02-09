function colorcode(text, fgc, bgc, properties) {
// b r g y u m c w
//
// 0 - 7
//


var prop = {
    "normal": 0,
    "bold": 1,
    "faint":2, 
    "underline":4, 
    "blink": 5
};

//TODO: add properties by linking them to the checkboxes


var specialprops = properties.map(function(e) {
    return prop[e];
}).join(";");

if (specialprops !== "") specialprops = specialprops;


var fg = '3'+fgc;
var bg = (bgc === "") ? "" : '4'+bgc + ";";

var colors = bg ? [fg].concat(bg) : [fg];


var colorings = "\\x1b[" + [fg, bg].join(";") + specialprops + 'm';
var reset = "\\x1b[0m";

var color_text = colorings + text + reset;
return color_text;
}

function color(text,fg,bg, opts) {
    if (!opts) opts = [];
    return colorcode(text,fg,bg, opts);
}

