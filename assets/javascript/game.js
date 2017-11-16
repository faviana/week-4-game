//anonymous function that runs once the DOM is ready for JavaScript code to execute
$(document).ready(function () {
    // create a random number between 10-120
    var createRandomNumber = Math.floor(Math.random() * 101 + 19)
    //createRandomNumber is added to the InitialRandomNumber id div
    $('#InitialRandomNumber').text(createRandomNumber);

    //assign random values (1-12) to the images
    var randomPointNumber1 = Math.floor(Math.random() * 11 + 1)
    var randomPointNumber2 = Math.floor(Math.random() * 11 + 1)
    var randomPointNumber3 = Math.floor(Math.random() * 11 + 1)
    var randomPointNumber4 = Math.floor(Math.random() * 11 + 1)

    //declare variables
    var totalPoint = 0;
    var wins = 0;
    var losses = 0;


    function winOrLose(){
        //if created random number equals total points
        if(totalPoint == createRandomNumber){
            // you win, add one point to wins
            wins++;
            //displays the winning point++
            $('#win').text(wins);

           //assign new random value
            createRandomNumber=Math.floor(Math.random()*101+19);
            $('#InitialRandomNumber').text(createRandomNumber);
        
            //total points equal to zero
            totalPoint = 0;
            $('#totalValue').text(totalPoint);

        }
        
        //if totalPoint is geated than the random number
        else if(totalPoint>createRandomNumber){
            //you loose, add one point to losses
            losses++;
            //displays the lossing point++
            $('#lose').text(losses);

            //assign new random value
            createRandomNumber=Math.floor(Math.random()*101+19);
            $('#InitialRandomNumber').text(createRandomNumber);
        
            //total points equal to zero
            totalPoint = 0;
            $('#totalValue').text(totalPoint);
        }

    }

   
    //randomPointNumber1 is assigned to blueGeenL image
    $('#blueGreenL').on ('click', function(){

        //calculates total points while clicking
        totalPoint = totalPoint + randomPointNumber1;
        //displays the total points so far
        $('#totalValue').text(totalPoint); 

        winOrLose()  
    });

    //randomPointNumber2 is assigned to blueGreen image
    $('#blueGreen').on ('click', function(){

        //calculates total points while clicking        
        totalPoint = totalPoint + randomPointNumber2;
        //displays the total points so far
        $('#totalValue').text(totalPoint);
        
        winOrLose()
 
     });

    //randomPointNumber3 is assigned to coral image  
     $('#coral').on ('click', function(){

        //calculates total points while clicking        
        totalPoint = totalPoint + randomPointNumber3;
        //displays the total points so far
        $('#totalValue').text(totalPoint);
        
        winOrLose()        
 
     });

     //randomPointNumber4 is assigned to mustard image
     $('#mustard').on ('click', function(){

        //calculates total points while clicking        
        totalPoint = totalPoint + randomPointNumber4;
        //displays the total points so far
        $('#totalValue').text(totalPoint);
        
        winOrLose()
 
     });

});