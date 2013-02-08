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


var fgp = [prop.underline, prop.bold];
var bgp = [];

var fg = ['3'+fgc].concat(fgp).join(";");
var bg = ['4'+bgc].concat(bgp).join(";");

var colors = bg ? [fg].concat(bg) : [fg];

var colorings = "\\x1b[" + [fg, bg].join(";")+ 'm';
var reset = "\\x1b[0m";

var color_text = colorings + text + reset;
return color_text;
}

function color(text,fg,bg) {
    document.getElementById('the-code').innerText = colorcode(text,fg,bg);
}

