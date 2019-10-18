
//script to pull data and calc it for basic math modal
$('#BM-btn-1').click(function () {
    //establish variables and calculatable array
    let count = 0, sum = 0, mult = 0, least = 0, most = 0, ave = 0;
    let calcVals = new Array();
    //run a loop that checks each field to see it there is something in it,
    for (i = 1; i <= 5; i++) {
        var str = '#UTI-' + i;
        if ($(str).val() != "" && $.isNumeric(Number($(str).val()))) { //a field is excluded if it is blank or NaN
            calcVals.push(Number($(str).val())); //push the non-excluded fields to a new array
            if (calcVals.length == 1) { //makes the highest and lowest number equal to the first number in the array
                least = calcVals[count];
                most = calcVals[count];
                mult = 1;
            }
            if (calcVals[count] > most) { //assigning highest for each loop through
                most = calcVals[count];
            }
            else if (calcVals[count] < least) { //assigning lowest for each loop through
                least = calcVals[count];
            }
            sum += calcVals[count]; //calculate the total sum by adding each array item value together
            mult *= calcVals[count]; //multiply all numbers within the array together
            ave = (sum / calcVals.length); //average the fields using the sum
            count++
        }
    }
    //output the results
    var out1 = "The smallest of your #'s is " + least + ".";
    var out2 = "The largest of your #'s is " + most + ".";
    var out3 = "The average of your #'s is " + ave + ".";
    var out4 = "The sum total of your #'s is " + sum + ".";
    var out5 = "The product of your #'s is " + mult + ".";
    $('#result1').text(out1);
    $('#result2').text(out2);
    $('#result3').text(out3);
    $('#result4').text(out4);
    $('#result5').text(out5);
});

//function to find the factorial of a number
function factorialize(num) {
    var result = num, out; //set variables
    if (num < 0) { //if the input is a negative number tell to make positive
        out = "Please enter a positive number."
    };
    if (num < 171) {
        if (num === 0 || num === 1) //if the input is 0 or 1 then the result is 1 otherwise factorialize
            out = "The Factorial of your # is 1."
        while (num > 1) {
            num--;
            result *= num;
            out = "The Factorial of your # is " + result + ".";
        };
    };
    if (num >= 171) { //if the input exceeds 170 tell it is to big
        out = "The Factorial of your # is too big to display.";
    };
    if (num = isNaN(num)) { //if the input is not a number tell to put a number
        out = "Please enter a valid number."
    };
    //print result
    $('#factRes').text(out);
};

//on clicking the Buzz It! button this will trigger the FizzBuzz code to run
$('#FB-btn-1').click(FBClick);
function FBClick() { // function called on click
    let num1 = document.getElementById('Fizz').value; //get the Fizz user input number
    let num2 = document.getElementById('Buzz').value; //get the Buzz user input number
    output = FizzBuzz(num1, num2); //call FizzBuzz function, set the variables to the user inputs
    $('#FBRes').html(output); //output the array to the results column
}
function FizzBuzz(val1, val2) { //function to run the fizz-buzz 
    let myArray = []; //create an array
    for (loop = 1; loop < 101; loop++) { //loop through the array, 1 to 100
        myArray[loop - 1] = ((loop % val1 == 0 ? '<span id="Fizz">Fizz</span>' : '') + //if the modulist of fizz = 0 then print Fizz, else return false
        (loop % val2 == 0 ? '<span id="Buzz">Buzz</span>' : '') || loop); //if the modulist of buzz = 0 then print Buzz, else return false (if neither is 0 then print the loop #)
    }
    return myArray.join(' - '); //compile the array and add a hyphen between each part 
}

//function to find a palindrome
function PalInput() {
    var str = document.getElementById('PTI').value; //get user input
    var re = /[\W_]/g; //use a RegExp to remove all non-alphanumeric characters 
    var lowRegStr = str.toLowerCase().replace(re, ''); //convert the whole string to lower case and apply the RegExp
    var reverseStr = lowRegStr.split('').reverse().join(''); //convert the above to a string, reverse it, and recombine to a new string
    if (reverseStr === lowRegStr) { //if the condensed string is = to the reversed string use the first result, otherwise use the second result
        var out = " Which makes a palindrome!";
    }
    else {
        var out = " Which does not make a palindrome.";
    }
    var result = (`What you entered is "${str}". Reversed and condensed this makes "${reverseStr}".`);
    $('#PalRes').text(result + out); //print the output
}

//declare global variables
var xo = "X", Win = false, a, b, c, count = 0;

function GoThere(e) { //function on click to place an X or O
    if ($(e).text() == "") {
        if (!Win) {
            $('#whoTurn').text(`It is now ${xo}'s turn`); //list what turn it is
            Turn = (xo == "O") ? xo = "X" : xo = "O";
            $(e).text(Turn); count++;
            check4Win();
        }
    }
}
function check4Win() { //begin win check by setting all boxes to a variable
    var bx1 = $('#box1').text(), bx2 = $('#box2').text(), bx3 = $('#box3').text(),
        bx4 = $('#box4').text(), bx5 = $('#box5').text(), bx6 = $('#box6').text(),
        bx7 = $('#box7').text(), bx8 = $('#box8').text(), bx9 = $('#box9').text();
    if (!Win) { //look for all matching instances of 3 in a row
        if (bx1 == bx2 && bx1 == bx3 && bx1 != "") {
            Win = true; a = 1, b = 2, c = 3;
        }
        else if (bx4 == bx5 && bx4 == bx6 && bx4 != "") {
            Win = true; a = 4, b = 5, c = 6;
        }
        else if (bx7 == bx8 && bx7 == bx9 && bx7 != "") {
            Win = true; a = 7, b = 8, c = 9;
        }
        else if (bx1 == bx4 && bx1 == bx7 && bx1 != "") {
            Win = true; a = 1, b = 4, c = 7;
        }
        else if (bx2 == bx5 && bx2 == bx8 && bx2 != "") {
            Win = true; a = 2, b = 5, c = 8;
        }
        else if (bx3 == bx6 && bx3 == bx9 && bx3 != "") {
            Win = true; a = 3, b = 6, c = 9;
        }
        else if (bx1 == bx5 && bx1 == bx9 && bx1 != "") {
            Win = true; a = 1, b = 5, c = 9;
        }
        else if (bx3 == bx5 && bx3 == bx7 && bx3 != "") {
            Win = true; a = 3, b = 5, c = 7;
        }
        else if (!Win && count == 9) { //this checks if the game ends in a draw
            $('#TTTresult').text('This game is a Draw...');
            $('#whoTurn').text("Reset and try again?");
        }
        if (Win) { //output the winner and shift the boxes to show it
            $('#whoTurn').text((xo) + "'s" + " Win!"); //Woo-Hoo!
            $('#TTTresult').text("Congratulations!");
            return $(`#box${a}, #box${b}, #box${c}`).addClass("Won");
        }
    }
}


//this section has a clear for the fields, results, and hidden codes of the modals
function CClear1() {
    $('#UTI-1,#UTI-2,#UTI-3,#UTI-4,#UTI-5').val("");
    $('#result1, #result2, #result3, #result4, #result5').text("");
    $("#mathCode").hide();
};
function CClear2() {
    $('#FTI').val("");
    $('#factRes').text("");
    $("#factCode").hide();
};
function CClear3() {
    $('#Fizz,#Buzz').val("");
    $('#FBRes').text("");
    $('#FBCode').hide();
}
function CClear4() {
    $('#PTI').val("");
    $('#PalRes').text("");
    $('#PalCode').hide();
}
function CClear5() {
    $('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').text("");
    $('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').removeClass("Won");
    $('#TTTresult').text("Play until someone lines up 3 X's or O's!");
    $('#whoTurn').text("It is now O's turn"); count = 0;
    Win = false; $('#TTTCode').hide(); xo = "X";
}

//toggle the hidden codes for java exercises
$("#BM-btn-3").click(function () {
    $('#mathCode').toggle();
});
$("#Fa-btn-3").click(function () {
    $('#factCode').toggle();
});
$("#FB-btn-3").click(function () {
    $('#FBCode').toggle();
});
$("#Pa-btn-3").click(function () {
    $('#PalCode').toggle();
});
$("#TTT-btn-2").click(function () {
    $('#TTTCode').toggle();
});

//on clicking away from the modals this calls the Clears above
$('#myModal').on('hidden.bs.modal', function () { CClear1() });
$('#myModal2').on('hidden.bs.modal', function () { CClear2() });
$('#myModal3').on('hidden.bs.modal', function () { CClear3() });
$('#myModal4').on('hidden.bs.modal', function () { CClear4() });
$('#myModal5').on('hidden.bs.modal', function () { CClear5() });


