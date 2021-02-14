$('.slide').hiSlide();
function myFunction() {
  var darkcomponents = document.getElementsByClassName("dark");
  for(var i=0; i < darkcomponents.length; i++) {
      if(darkcomponents[i].classList.contains("darkman")==false){
        darkcomponents[i].classList.add("darkman");
        darkcomponents[i].classList.remove("bgcolor");
      } else {
        darkcomponents[i].classList.remove("darkman");
        darkcomponents[i].classList.add("bgcolor");
      }
  }
  {
    if(darkcomponents[i].classList.contains("darkman")==false){
      darkcomponents[i].classList.add("darkman");
      darkcomponents[i].classList.remove("bgcolor");
    } else {
      darkcomponents[i].classList.remove("darkman");
      darkcomponents[i].classList.add("bgcolor");
    }
}
}
