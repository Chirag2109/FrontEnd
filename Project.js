var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  }
  else 
  {
    navbar.classList.remove("sticky");
  }
}

function find()
{
  var x=document.getElementById('Search').value;
  if(x=='Admission')
  {
    window.open("Project(a).html", "_parent");
  }
}