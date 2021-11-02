var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function validate(){
  var errorMsg = document.getElementById("ErrorMsg")
  var name = document.getElementById("txtname").value
  var email = document.getElementById("txtemail").value
  var genmale = document.getElementById("txtgendermale").checked
  var genfemale = document.getElementById("txtgenderfemale").checked
  var checkAg = document.getElementById("txtag").checked
  var address = document.getElementById("txtaddress").value
  var city = document.getElementById("txtcity").value
  var g = email.search("@gmail.com")
  
  if(name==""){
    errorMsg.innerHTML = "Name must be filled"
  } else if(email==""){
    errorMsg.innerHTML = "Email must be filled"
  } else if(email.length - g!=10){
    errorMsg.innerHTML = "Must be using @gmail.com"
  } else if(g==0){
    errorMsg.innerHTML = "Input a valid email"
  } else if(!genfemale && !genmale){
    errorMsg.innerHTML = "Must choose a gender"
  } else if(address==""){
    errorMsg.innerHTML = "Address must be filles"
  } else if(city==""){
    errorMsg.innerHTML = "City must be filled"
  }
  else if(!checkAg){
    errorMsg.innerHTML = "Must agree with the terms before register"
  }
  else{
    errorMsg = ""
    alert("Success to register")
  }
}

