//anonymous function that runs once the DOM is ready for JavaScript code to execute
$(document).ready(function () {
    // create a random number between 10-120
    var createRandomNumber = Math.floor(Math.random() * 101 + 19)
    //createRandomNumber is added to the randomNumber id div
    $('#randomNumber').text(createRandomNumber);

    //assign random numbers (1-12) to the images
    var randomPointNumber1 = Math.floor(Math.random() * 11 + 1)
    var randomPointNumber2 = Math.floor(Math.random() * 11 + 1)
    var randomPointNumber3 = Math.floor(Math.random() * 11 + 1)
    var randomPointNumber4 = Math.floor(Math.random() * 11 + 1)

    totalPoint = 0;

    //randomPointNumber1 is assigned to blueGeenL image
    $('#blueGreenL').on ('click', function(){

        totalPoint = totalPoint + randomPointNumber1;
        console.log("New totalPoint= " + totalPoint);
        $('#totalValue').text(totalPoint); 
       
    });

    //randomPointNumber2 is assigned to blueGreen image
    $('#blueGreen').on ('click', function(){
        
        totalPoint = totalPoint + randomPointNumber2;
        console.log("New totalPoint= " + totalPoint);
        $('#totalValue').text(totalPoint); 
 
     });

    //randomPointNumber3 is assigned to coral image  
     $('#coral').on ('click', function(){
        
        totalPoint = totalPoint + randomPointNumber3;
        console.log("New totalPoint= " + totalPoint);
        $('#totalValue').text(totalPoint); 
 
     });

     //randomPointNumber4 is assigned to mustard image
     $('#mustard').on ('click', function(){
        
        totalPoint = totalPoint + randomPointNumber4;
        console.log("New totalPoint= " + totalPoint);
        $('#totalValue').text(totalPoint); 
 
     });

});