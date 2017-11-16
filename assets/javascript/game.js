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

    var totalPoint = 0;
    var wins = 0;
    var losses = 0;


    //randomPointNumber1 is assigned to blueGeenL image
    $('#blueGreenL').on ('click', function(){

        //calculates total points while clicking
        totalPoint = totalPoint + randomPointNumber1;
        //displays the total points so far
        $('#totalValue').text(totalPoint); 

        //if created random number equals total points
        if(totalPoint == createRandomNumber){
            // you win, add one point to wins
            wins++;
            //displays the winning point++
            $('#win').text(wins);
        }
        
        else{
            losses++;
            //displays the lossing point++
            $('#lose').text(losses);
        }
       
    });

    //randomPointNumber2 is assigned to blueGreen image
    $('#blueGreen').on ('click', function(){

        //calculates total points while clicking        
        totalPoint = totalPoint + randomPointNumber2;
        //displays the total points so far
        $('#totalValue').text(totalPoint);
        
        //if created random number equals total points
        if(totalPoint == createRandomNumber){
            // you win, add one point to wins
            wins++;
            //displays the winning point++
            $('#win').text(wins);
        }
        
        else{
            losses++;
            //displays the lossing point++
            $('#lose').text(losses);
        }
 
     });

    //randomPointNumber3 is assigned to coral image  
     $('#coral').on ('click', function(){

        //calculates total points while clicking        
        totalPoint = totalPoint + randomPointNumber3;
        //displays the total points so far
        $('#totalValue').text(totalPoint);
        
        //if created random number equals total points
        if(totalPoint == createRandomNumber){
            // you win, add one point to wins
            wins++;
            //displays the winning point++
            $('#win').text(wins);
        }
        
        else{
            losses++;
            //displays the lossing point++
            $('#lose').text(losses);
        }
 
     });

     //randomPointNumber4 is assigned to mustard image
     $('#mustard').on ('click', function(){

        //calculates total points while clicking        
        totalPoint = totalPoint + randomPointNumber4;
        //displays the total points so far
        $('#totalValue').text(totalPoint);
        
        //if created random number equals total points
        if(totalPoint == createRandomNumber){
            // you win, add one point to wins
            wins++;
            //displays the winning point++
            $('#win').text(wins);
        }
        
        else{
            losses++;
            //displays the lossing point++
            $('#lose').text(losses);
        }
 
     });

});