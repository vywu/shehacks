document.addEventListener('DOMContentLoaded',function(event){
/*balleffects*/
// Some random colors
  console.log("here!");
const colors = ["#F61067", "#00F0B5", "#F46036", "#D8CBC7", "#6A2D8C","#FABC3C"];

const numBalls = 70;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${2*Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.getElementById("landing").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
//update the balls after user clicked the enter button
/*ballefect*/

  // array with texts to type in typewriter
  var dataText = [ "WOMAN","MUSTANG","CODER", "DESIGNER",  "NEWBIE","ENGINEER","EXPLORER"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".typewriter").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback,2000);

      
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (i>=dataText.length){
        setTimeout(function() {
          //start from the beginning
          StartTextAnimation(0);
        }, 600);
     }
     // check if dataText[i] exists
   else {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }

  function fnCallback(){
    console.log("called");
    
  }
  // start the text animation
  StartTextAnimation(0);
});

function hideLanding(){
  console.log("lol");
  document.querySelector("#landing").remove();
  document.querySelector(".mainPage").style.display="inline";

}
