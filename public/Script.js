// clock on screen:


var date;
var h;
var m;
var s;

function calcul(a,b,c){

    var total = a+b+c;
}

function showTime() {

             date = new Date();
             h = date.getHours();
             m = date.getMinutes();
             s = date.getSeconds();

            if (h == 0) {
                h == 12;
            }

            if (s < 10) {
                s = "0" + s;
            }

            if (m < 10) {
                m = "0" + m;
            }

            var time = "Time: "+ h + ":" + m + ":" + s;

            document.getElementById("clock").innerText = time;

        }
showTime();

setInterval(showTime, 1000); //calls the showTime() function in 1s of interval - shows Seconds


 // alert message GOOD Day:

function introMessage() {

                if (h >= 11 && h<=19)
                    window.alert("Gute Nachmittag");

                else if (h > 19 && h <= 24)
                    window.alert("Guten Abend");

                else
                    window.alert("Guten Morgen");

            }
            introMessage();


var regularVerbList = ["warten", "entwickeln", "messen", "kaufen","fehlen","erreichen","tanzen", "wohnen", "suchen", "warten","stehen","bauen","sagen", "reden", "leben", "spielen","essen", "malen", "zeigen", "lesen", "kuessen", "arbeiten", "reiten", "fahren", "laufen", "feiern", "schreiben"];
var randomWordsList = [{german:"ehrgeizig", english:"ambitios"}, {german:"langweilig", english:"boring"}, {german:"schlecht", english:"bad"},{german:"das Hund", english:"dog"}, {german:"das Maedchen", english:"lady"}, {german:"die Kirche", english:"church"}, {german:"der Baum", english:"tree"}, {german:"die Zeit", english: "time"}, {german:"das Beispiel", english: "example"}, {german:"damit", english:"for this reason"}, {german: "kurz", english:"short"}, {german: "oben", english:"up"}, {german: "unten", english: "under"}, {german:"durch", english:"through"}, {german:"schon", english:"already"}, {german:"schoen", english:"beautiful"}, {german:"vor", english: "before"}, {german:"das Fernseher", english:"television"}, {german:"wieder", english:"again"}, {german:"die Blumen", english:"the flowers"}, {german:"werden", english:"to become"}] // array of objects;
var randomMedicalList = [{german:"schwanger", english:"pregnant"},{german:"der Hautausschlag", english:"rash"},{german: "schwindlig", english:"dizzy"},{german:"das Erbrechen", english:"vomit"},{german:"gebrochen", english:"broken"},{german:" die Rueckenschmerzen", english:"backache"},{german:"der Krankenwagen", english:"ambulance"},{german:"die Blutprobe", english:"blood test"},{german: "der Knocken", english:"bone"},{german: "der Husten", english:"cough"},{german: "Entzuendung", english:"inflamation"},{german:"der Blutdruck", english:"blood pressure"},{german:"der Atem", english:"breath"},{german:"das Gehirn", english:"brain"}, {german:"die Lungen", english: "lungs"}, {german:"die Beine", english:"legs"}, {german:"die Hals", english:"neck"} ]
var randomTechnicalList= [{german:"der Bauingenieur", english:"civil engineer"}, {german:"der Weg", english:"road"}, {german:"die Wanze", english:"bug"}, {german:"zurueck", english:"back"}, {german:"ausschneiden", english:"cut"}, {german:"der Ordner", english:"folder"}, {german:"der Posteingang", english:"inbox"}, {german:"das Bild", english:"image"},{german:"der Arbeitsspeicher", english:"memory"}, {german:"das Kennwort", english:"password"},{german:"der Drucker", english:"printer"}, {german:"die Steigung", english:"the slope"},{german:"die Baustelle", english:"construction site"},{german:"die Baugrube", english:"excavation"}, {german:"die Sicherung", english:"protection"},{german:"der Helm", english:"helmet"},{german:"zeichnung", english:"drawing"}, {german:"messung", english:"measurement"}];

var translationDiv = document.getElementById("translatedWord");

var displayModal = document.getElementById("randomWordsModal");
var displayMedicalModal = document.getElementById("randomMedicalWordsModal");
var displayTechnicalModal = document.getElementById("randomTechnicalWordsModal");


var place = document.getElementById("randomWordsPlace");
var medicalPlace = document.getElementById("randomMedicalWordsPlace");
var technicalPlace = document.getElementById("randomTechnicalWordsPlace");

//function to generate verb up on refreshing the page


function refreshVerb() {
    var n = regularVerbList.length;
    for (var i = 0; i < 1; i++) {
        var verb = regularVerbList[Math.floor(regularVerbList.length * Math.random())];
        console.log(verb);
        document.getElementById("verbOnRefresh").innerHTML = verb;
    }
 }
refreshVerb();


//next function closes the randomWordsPlace which is activated by clicking on the Random Words button

function closeIt() {
    displayModal.style.display = "none";
    place.innerHTML = ""; /* asa golim div-ul de cuvintele aparute random */
    translationDiv.innerHTML = "";

    displayMedicalModal.style.display = "none";
    medicalPlace.innerHTML = "";
    translationDiv.innerHTML = "";

    displayTechnicalModal.style.display = "none";
    technicalPlace.innerHTML = "";
    translationDiv.innerHTML = "";
}


//this function will generate the random words list array up on clicking the Random Words button

function randomWords() {
    if (displayModal.style.display === "block") {
	    displayModal.style.display = "none";
	    place.innerHTML = "";
	    translationDiv.innerHTML ="";
	} else {
	    var existingWords = [];
	    for (var i = 0; i < 4; i++)
	    {
	        var word = randomWordsList[Math.floor(randomWordsList.length * Math.random())];

	        if (existingWords.includes(word))
	        { // this function checks for existing word in the existingWords array
	            word = randomWordsList[Math.floor(randomWordsList.length * Math.random())];
	        }
	        existingWords.push(word); // pushes the new word into the array
	    }
	    //document.getElementById("randomWordsPlace").innerHTML = existingWords;

        for (i = 0; i < existingWords.length; i++) {
	        place.innerHTML += `<span onmouseover = "translation('${existingWords[i].english}')"> ${existingWords[i].german} </span>`; //span is like a div but inline. $ TemplateLiterals ""
	        // atunci cand dam mouse over peste elementul in germana o sa apara explicatia in engleza
	    }
	    displayModal.style.display = "block";
	    }
}


function randomMedicalWords(){

    if(displayMedicalModal.style.display === "block"){
        displayMedicalModal.style.display = "none";
        medicalPlace.innerHTML = "";
        translationDiv.innerHTML=  "";
    } else {
        var wasEmptyArray = [];
        for (var i = 0; i < 3; i++)
        {

            var words = randomMedicalList[Math.floor(randomMedicalList.length * Math.random())];

            if (wasEmptyArray.includes(words)){
                words = randomMedicalList[Math.floor(randomMedicalList.length * Math.random())];
            }
            wasEmptyArray.push(words);
        }
    }
    for(i=0; i < wasEmptyArray.length; i++)
    {
        medicalPlace.innerHTML += `<span onmouseover="translation('${wasEmptyArray[i].english}')">${wasEmptyArray[i].german} </span>`;
    }
    displayMedicalModal.style.display="block";
}

function randomTechnicalWords(){

    if(displayTechnicalModal.style.display === "block"){
        displayTechnicalModal.style.display = "none";
        technicalPlace.innerHTML = "";
        translationDiv.innerHTML = "";
    }else{
        var wasEmpty = [];
        for (var i = 0; i < 4; i++)
        {
            var words = randomTechnicalList[Math.floor(randomTechnicalList.length * Math.random())];

            if(wasEmpty.includes(words)){
                words=randomTechnicalList[Math.floor(randomTechnicalList.length * Math.random())];
            }
            wasEmpty.push(words);
        }
    }
    for(i=0; i< wasEmpty.length; i++)
    {
        technicalPlace.innerHTML += `<span onmouseover="translation('${wasEmpty[i].english}')">${wasEmpty[i].german} </span>`;
    }
    displayTechnicalModal.style.display="block";
}


//when you go with the mouse over the German word which is generated in the list - you get the corresponding English word
function translation(word) {
    translationDiv.innerHTML = word
}

document.getElementById("translatedWord").onmouseout = function() {
    translationDiv.innerHTML = "";
};

