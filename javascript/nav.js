function navExpand() {

  var newWindowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (newWindowWidth > 800) {
    return;
  }

  var nav = document.getElementById("nav");
  nav.style.WebkitTransition = '0.5s';
  nav.style.MozTransition = '0.5s';
  if (nav.style.height === '300px') {
    nav.style.height = '60px';
  } else {
    nav.style.height = '300px';
  }
}
