const rocket = document.querySelector("#rocket");
const sky = document.querySelector("#sky");
const ex = document.querySelector("#exhaust");
var bottom = 0;
var last_y = 0;
var wheel;



window.addEventListener("wheel", function (e) {
  wheel = e.deltaY;
});

window.addEventListener("scroll", function (e) {
  var h = window.innerHeight;
  var y = document.documentElement.scrollTop;
  var doc = document.body.offsetHeight - 700;
  var perc = y / (doc - h);
  // console.log(perc)

  if (perc < 1) {
    sky.style.bottom = -1 * perc * 100 + "%";
  }

  if (perc > 0) {
    rocket.classList.add("shake_rocket");
    ex.classList.add("exhaust");
  } else {
    rocket.classList.remove("shake_rocket");
    ex.classList.remove("exhaust");
  }

  if (perc > 0.37) {
    ex.classList.remove("exhaust");
  }

  if (perc > 0.25) {
    bottom = (perc - 0.25) * 133;
  }

  if (perc > 0) {
    bottom = (perc - 0.25) * 133;
    if (perc - 0.25 < 0) {
      bottom = 0;
    }
  }
  rocket.style.bottom = bottom + "%";
  last_y = y;
});


window.addEventListener("scroll", function() {
  var scroll = window.scrollY;
  if (scroll > 50) {
    document.querySelector("nav").style.backgroundColor = "white";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
});