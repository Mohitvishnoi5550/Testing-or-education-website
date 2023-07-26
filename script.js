$("#menu").click(function menu() {
      $("#menulinks").toggle();
})
function settings() {
      document.getElementById("st").showModal();
}
function stclose() {
      document.getElementById("st").close();
}
let dd = new Date();
let hh = new Date().getHours();
let mm = new Date().getMinutes();
let ampm = hh >= 12 ? 'PM' : 'AM';
let h = hh % 12;
document.getElementById("time").innerHTML = h + ":" + mm + " " + ampm;
let greting;
if (hh <12) {
      greting = "good morning!";
}
else if(hh <16) {
      greting = "good afternoon!";
}
else if(hh <20) {
      greting = "good evening!";
}
else {
      greting = "good night!";
}
document.getElementById("greting").innerHTML = greting;
document.getElementById("date").innerHTML = dd.toDateString();
var clicksound = document.getElementById("clicksound");
var btns = document.getElementsByTagName("button");
for (let i = 0; i < btns.length; i ++ ) {
      btns[i].addEventListener("click", function() {
            clicksound.play();
      })
}
