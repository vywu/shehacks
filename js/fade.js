function fadeNav(){  
  var offset = getScrollXY();
  //if y offset is greater than 0, set opacity to desired value, otherwise set to 1
  offset[1] > 0 ? setNavOpacity(0.5) : setNavOpacity(1.0); 
}

function setNavOpacity(newOpacity){
  var navBar = document.getElementById("header_bar");
  navBar.style.opacity = newOpacity;
}

function getScrollXY() {
  var scrOfX = 0, scrOfY = 0;
if( typeof( window.pageYOffset ) == 'number' ) {
  //Netscape compliant
  scrOfY = window.pageYOffset;
  scrOfX = window.pageXOffset;
} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
  //DOM compliant
  scrOfY = document.body.scrollTop;
  scrOfX = document.body.scrollLeft;
} else if( document.documentElement && ( document.documentElement.scrollLeft ||     
  document.documentElement.scrollTop ) ) {
  //IE6 standards compliant mode
  scrOfY = document.documentElement.scrollTop;
  scrOfX = document.documentElement.scrollLeft;
}

  return [ scrOfX, scrOfY ];
}

