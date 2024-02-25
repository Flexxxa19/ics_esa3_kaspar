/*
ESA Aufgabe 2.5a - Bilder alle 2 Sekunden wechseln
*/
window.onload=function() {

  var mxpix = ["./images/01.png", "./images/02.png", "./images/07.jpg"];
  var count = 0;
  var time = setInterval(function() {
      if (mxpix.length == count) {
          count = 0;
      } else {
          document.getElementById(image_01).src = mxpix[count];
          count++;
      }
  }, 2000);

}

/*
ESA Aufgabe 2.5b - 
*/

function display(textarea) {
    with(document.getElementById(textarea).style) {
        if (display == "none") {
            display = "inline";
        } else {
            display = "none";
        }
    }
}


/*
ESA Aufgabe 2.6a - Auf 500 Zeichen begrenzen und anzeigen
*/

document.addEventListener('DOMContentLoaded', function () {
    updateCharacterCount();
  });
  
  function countChar(val) {
    var len = val.value.length;
  
    if (len >= 500) {
      val.value = val.value.substring(0, 500);
    }
  
    updateCharacterCount();
  }
  
  function updateCharacterCount() {
    var charNumElement = document.getElementById('charNum');
    var remainingChars = 500 - document.getElementById('Klick').value.length;
    charNumElement.textContent = remainingChars;
  }
/*
ESA Aufgabe 3 b - Ajax-Beispiel einbinden und an Bedürfnisse anpassen
*/

  //Sicherstellen, dass der DOM-Inhalt bereits geladen ist, bevor AJAX ausgeführt wird, sonst funktioniert es nicht
  document.addEventListener("DOMContentLoaded", function() {

  "use strict"; // ältere JavaScript Systax verbieten

   // select-Element zur Stadtwahl im DOM finden
   var citySelector = document.querySelector("#city-selector select");

   // Auf Änderungen des select-Elements reagieren
   citySelector.addEventListener("change", function(event) {
     // Referenz auf select-Element
     var select = this;
     // Ausgewählte Stadt auslesen
     var cityFileName = select.value;

     // Informationen zur ausgewählten Stadt per AJAX laden.
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {

         // Inhalt der Daten von JSON in ein JavaScript-Objekt wandeln
         var cityData = JSON.parse(this.responseText);

         // Anzeige für die Stadt mit geladeden Daten aktualisieren
         updateCityPanel(cityData);

       }
     };
     xhttp.open("GET", "./" + cityFileName, true);
     xhttp.send();
   });

   var updateCityPanel = function(cityData) {

     // Anzeigebereich für die Städte im DOM finden
     var cityPanel = document.querySelector("#city-panel");

     // Titel setzen
     var title = cityPanel.querySelector(".title");
     title.innerHTML = cityData.title;

     // Quellen hinzufügen
     var ref = cityPanel.querySelector(".ref");
     var label = ref.querySelector(".label");
     ref.href = cityData.ref;
     label.innerHTML = cityData.ref;

     // Beschreibung setzten
     var description = cityPanel.querySelector(".description");
     description.innerHTML = cityData.description;
   }
});

