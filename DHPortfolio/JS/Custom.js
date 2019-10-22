
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
    //var reverseStr = lowRegStr.split('').reverse().join(''); //convert the above to a string, reverse it, and recombine to a new string

    //or I can use a for loop to reverse the string
    let myArray = new Array;
    let reverseStr = new String;
    myArray = lowRegStr;
    for (i = 0; i < lowRegStr.length; i++) {
        reverseStr = myArray[i] + reverseStr;
    }

    if (reverseStr === lowRegStr) { //if the condensed string is = to the reversed string use the first result, otherwise use the second result
        var out = " Which makes a palindrome!";
    }
    else {
        var out = " Which does not make a palindrome.";
    }
    var result = (`What you entered is "${str}". Reversed and condensed this makes "${reverseStr}".`);
    $('#PalRes').text(result + out); //print the output
}


// start code section for Tic-Tac-Toe
var xo = "O", Win = false, count = 0, mSelect = 1, a, b, c, e; // declare global variables
function GoThere(e) { //function to decide what mode and who plays when
    if (mSelect == 2 && xo == "X") {
        setTimeout(EasyAI, 750);
    }
    else if (mSelect == 3 && xo == "X") {
        setTimeout(HardAI, 750);
    }
    else if (mSelect == 4 && xo == "X") {
        setTimeout(Legendary, 750);
    }
    else {PlaceInBox(e);}
}
function PlaceInBox(e) { //function to place an X or O in a picked box
    if ($(e).text() == "") {
        if (!Win) {
            $(e).text(xo); count++;
            check4Win();
            xo = (xo == "O") ? xo = "X" : xo = "O";
            $('#whoTurn').text(`It is now ${xo}'s turn.`);
            if (mSelect != 1 && xo == "X") {
                GoThere(e);
            }
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
};
function CClear4() {
    $('#PTI').val("");
    $('#PalRes').text("");
    $('#PalCode').hide();
};
function CClear5() {
    $('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').removeClass("Won");
    $('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').text("");
    $('#TTTresult').text("Play until someone lines up 3 X's or O's!");
    $('#whoTurn').text(`It is now ${xo}'s turn.`);
    $('#TTTCode2p').hide();
    $('#TTTCodeEz').hide();
    $('#TTTCodeHd').hide();
    $('#TTTCodeLegend').hide();
    count = 0; Win = false;
};
function SafeClear5() {
    if (mSelect != 1 && xo == "X" && (count == 9 || Win == true)) {
        CClear5();
        setTimeout(GoThere, 750); // starts AI turn if game was draw and its X turn
    }
    else if (mSelect != 1 && xo == "O") {
        CClear5();
    }
    else if (mSelect == 1) {
        CClear5();
    }
};
//special on click for the AI modes to prevent resetting during AI turns
$('#TTT-btn-1').click(SafeClear5);

//mode select on click
$('#twoPlyr').click(function () {
    $('#twoPlyr').addClass('active');
    $('#EzAI').removeClass('active');
    $('#HdAI').removeClass('active');
    $('#LegendAI').removeClass('active');
    $('#sMode').text("2 Player");
    mSelect = 1; CClear5();
});
$('#EzAI').click(function () {
    $('#twoPlyr').removeClass('active');
    $('#EzAI').addClass('active');
    $('#HdAI').removeClass('active');
    $('#LegendAI').removeClass('active');
    $('#sMode').text("Easy AI");
    mSelect = 2; xo = "O"; CClear5();
});
$('#HdAI').click(function () {
    $('#twoPlyr').removeClass('active');
    $('#EzAI').removeClass('active');
    $('#HdAIr').addClass('active');
    $('#LegendAI').removeClass('active');
    $('#sMode').text("Hard AI");
    mSelect = 3; xo = "O"; CClear5();
});
$('#LegendAI').click(function () {
    $('#twoPlyr').removeClass('active');
    $('#EzAI').removeClass('active');
    $('#HdAI').removeClass('active');
    $('#LegendAI').addClass('active');
    $('#sMode').text("Legendary");
    mSelect = 4; xo = "O"; CClear5();
});

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
    if (mSelect == 1) { $('#TTTCode2p').toggle() };
    if (mSelect == 2) { $('#TTTCodeEz').toggle() };
    if (mSelect == 3) { $('#TTTCodeHd').toggle() };
    if (mSelect == 4) { $('#TTTCodeLegend').toggle() };
});

//on clicking away from the modals this calls the Clears above
$('#myModal').on('hidden.bs.modal', function () { CClear1() });
$('#myModal2').on('hidden.bs.modal', function () { CClear2() });
$('#myModal3').on('hidden.bs.modal', function () { CClear3() });
$('#myModal4').on('hidden.bs.modal', function () { CClear4() });
$('#myModal5').on('hidden.bs.modal', function () {
    $('#twoPlyr').addClass('active');
    $('#EzAI').removeClass('active');
    $('#HdAI').removeClass('active');
    $('#LegendAI').removeClass('active');
    $('#sMode').text("Select Mode");
    mSelect = 1; CClear5();
});


//smptJS area
//$('#btnSubmit').click(function () {
//    Email.send({
//        SecureToken: "37e5b069-22f4-4029-a2f5-549cc59fbdaf",
//        To: "d.hebbard32987@gmail.com",
//        From: $("#email").val(),
//        Subject: $('#subject').val(),
//        Body: $("#message").val()
//    }).then(
//        message => alert("Your message was sent!")
//    );
//});