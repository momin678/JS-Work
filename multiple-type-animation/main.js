var text = ['Learn with Md. Mominul Haque', 'I am a profesonal Web-developer', 'I can build any web application by PHP and Laravel Framework', 'Thanks for Visite'];
var count = 0;
var index = 0;
var currentText = 0;
var letter = 0;
setInterval(myFunction, 100);
function myFunction(){
    currentText = text[count];
    letter = currentText.slice(0, index++);
    var showText = document.querySelector('h1').innerHTML = letter
    if(letter.length == currentText.length){
        count++;
        index = 0;
    }
    if(count == text.length){
        count = 0;
    }
}