function scrollBanner(){
  var scrollPos = window.scrollY;
  var headerText = document.querySelector('.header__title');

  if (scrollPos <= 300){
    headerText.style.transform = "translateY("+(-scrollPos/3)+"px"+")";
    headerText.style.opacity = 1 - (scrollPos/300);
  }
}
window.addEventListener('scroll', scrollBanner);
