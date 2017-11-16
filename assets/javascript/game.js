
//anonymous function that runs once the DOM is ready for JavaScript code to execute
$( document ).ready(function(){
    // create a random number between 10-120
    var createRandomNumber=Math.floor(Math.random()*101+19)
    //createRandomNumber is added to the randomNumber id div
    $('#randomNumber').text(createRandomNumber);
});

//created a click funtion to images
$(".color-image").on("click", function() {
    
        // Clicking the button triggers an alert message.
        alert("You clicked a crystal!");
    
      });