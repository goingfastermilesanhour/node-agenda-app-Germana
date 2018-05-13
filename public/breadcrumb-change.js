

var alphabetAndPronunciation= document.getElementById("Alphabet");
var titleOnRight = document.getElementsByClassName("widget-right")[0];
var textOnRight = document.getElementById("right-side");

var alphabet = [
    ["Letter", "Pronunciation", "Example"],
    ["A", "Ah", "Arbeit"],      ["B", "Beh", "Besuchen"],     ["C", "Tseh", "Celsius"],   ["D", "Deh", "Darm"],
    ["E", "Eeh", "Eskimo"],     ["F", "eff", "Familie"],      ["G", "Geh", "Giessen"],    ["H", "Hah", "Hallo"],
    ["I", "Ih", "Idee"],        ["J", "yott", "Januar"],      ["K", "kah", "Klettern"],   ["L", "el", "Laufen"],
    ["M", "em", "Mut"],         ["N", "en", "Name"],          ["O", "oh", "Oliven"],      ["P", "peh", "Pflaumen"],
    ["Q", "kuh", "Quatsch"],    ["R", "er", "Regen"],         ["S", "es", "Seife"],       ["T", "teh", "Temperatur"],
    ["U", "u", "Unglaublich"],  ["V", "fau", "Vater"],        ["W", "veh", "Wetter"],     ["X", "iks", "X-Beine"],
    ["Y", "Ypsilon", "Yoga"],   ["Z", "Tzett", "Zitrone"]
];
var rows= "<table>";



alphabetAndPronunciation.onclick=function(e){

    Alphabet.innerHTML = "You are currently viewing the alphabet";
    titleOnRight.innerHTML = "<p>Alphabet and Pronunciation</p>";

    alphabet.forEach(function(element){
        rows += getRow(element[0], element[1], element[2]);
    } );
    rows += '</table>'
    textOnRight.innerHTML = rows;
    e.preventDefault();
};

function getRow(Letter, Pronunciation, Word){
    return `<tr><th>${Letter}</th><th>${Pronunciation}</th><th>${Word}</th></tr>`;
}


var articleDeclension = document.getElementById("Declension");
var newBody = document.getElementsByClassName("test")[0];

articleDeclension.onclick = function(e){

    Declension.innerHTML = "You are currently reading the declension tables";
    titleOnRight.innerHTML = "<p>Important grammar: declension tables</p>";
    newBody.innerHTML = "<img src=\"declension.png\" id=\'declension'\>";
    e.preventDefault();

};


var voc = document.getElementById("Vocabulary");

voc.onclick = function(e) {

    voc.innerHTML = "<p>Basic German phrases</p>";
    titleOnRight.innerHTML = "<p>Vocabulary: basic German phrases</p>";
    newBody.innerHTML = "<img src=\"usefulPhrase.png\" id=\'declension'\>";
    e.preventDefault();

};

