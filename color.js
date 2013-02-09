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
    "blink": 5,
    "negative": 7
};

//TODO: add properties by linking them to the checkboxes


var specialprops = properties.map(function(e) {
    return prop[e];
}).join(";");

if (specialprops !== "") specialprops = ";" + specialprops;


var fg = ['3'+fgc].join(";");
var bg = ['4'+bgc].join(";");

var colors = bg ? [fg].concat(bg) : [fg];


var colorings = "\\x1b[" + [fg, bg].join(";") + specialprops + 'm';
var reset = "\\x1b[0m";

var color_text = colorings + text + reset;
return color_text;
}

function color(text,fg,bg, opts) {
    if (!opts) opts = [];
    document.getElementById('the-code').innerText = colorcode(text,fg,bg, opts);
}

