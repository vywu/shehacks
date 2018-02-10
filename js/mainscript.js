
 window.onscroll = fadeNav;

function fadeNav(){  
  console.log("MIAN");
  var offset = getScrollXY();
  //if y offset is greater than 0, set opacity to desired value, otherwise set to 1
  offset[1] > 40 ? setNavOpacity(0.5) : setNavOpacity(1.0); 
}

function setNavOpacity(newOpacity){
  // console.log(newOpacity);
  var navBar = document.getElementById("mainNav");
  // console.log("hit");
  if(newOpacity==0.5){
    navBar.style.boxShadow="0 8px 6px -6px grey";
    navBar.style.backgroundColor="white";

  }

  else{
    navBar.style.boxShadow="0px 0px 0px grey";
    navBar.style.backgroundColor="transparent";

  }
 
}

function getScrollXY() {
  var scrOfX = 0, scrOfY = 0;
if( typeof( window.pageYOffset ) == 'number' ) {
  console.log("1");
  //Netscape compliant
  scrOfY = window.pageYOffset;
  scrOfX = window.pageXOffset;
} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
  console.log("2");
  //DOM compliant
  scrOfY = document.body.scrollTop;
  scrOfX = document.body.scrollLeft;
} else if( document.documentElement && ( document.documentElement.scrollLeft ||     
  document.documentElement.scrollTop ) ) {
  console.log("3");
  //IE6 standards compliant mode
  scrOfY = document.documentElement.scrollTop;
  scrOfX = document.documentElement.scrollLeft;
}
console.log("4");

  return [ scrOfX, scrOfY ];
}
