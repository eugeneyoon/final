// video. 15 pts.
var video = document.getElementById("video");
function bigger() {video.width += 50;}
function smaller() {video.width -= 50;}
function reset() {video.width = 420;}


//dropdown and responsive menu. 20 pts.

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//sticky. 10 pts.
window.onscroll = function(){stick()};
var navPosition = document.getElementById("nav").offsetTop;
function stick() {
  if (window.pageYOffset >= navPosition){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }

  if (nav.classList.value === "sticky"){
    document.getElementById("dropdownStuff1").style.position = "fixed";
    document.getElementById("dropdownStuff2").style.position = "fixed";
    document.getElementById("dropdownStuff3").style.position = "fixed";
    document.getElementById("list").style.position = "fixed";
  }
  else if (nav.classList.value != "sticky"){
    document.getElementById("dropdownStuff1").style.position = "absolute";
    document.getElementById("dropdownStuff2").style.position = "absolute";
    document.getElementById("dropdownStuff3").style.position = "absolute";
    document.getElementById("list").style.position = "absolute";
  }
}


//filtering search. 20pts.
function filtering(){
  document.getElementById("list").style.display = "block";
  var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }
    }
}
window.onclick = function(thing){document.getElementById("list").style.display = "none";}

//modal. 15 pts.
document.getElementById("button").onclick = function(){document.getElementById("modal").style.display = "block";}
document.getElementsByClassName("close")[0].onclick = function(){document.getElementById("modal").style.display = "none";}

// hamburger. 15 pts.
document.getElementsByClassName("icon")[0].onclick = function(){document.getElementById("list").style.display = "block";}
