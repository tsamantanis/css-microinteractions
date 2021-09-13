var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    }, 1200);
};

document.addEventListener("DOMContentLoaded", function(event) { 
    let bubbleButton = document.getElementById("bubble-button");
    
    bubbleButton.addEventListener('click', animateButton, false);

    let processButton = document.getElementById("process-button");
    
    processButton.addEventListener('click', animateButton, false);
});
  
