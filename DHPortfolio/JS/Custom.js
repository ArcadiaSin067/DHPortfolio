
//script to pull data and calc it for basic math modal
$('#BM-btn-1').click(function () {
    //establish variables and calculatable array
    var count = 0, sum = 0, mult = 0, least = 0, most = 0, ave = 0;
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
        out = "This number is too high to display.";
    };
    if (num = isNaN(num)) { //if the input is not a number tell to put a number
        out = "Please enter a valid number."
    };
    //print result
    $('#factRes').text(out);
};

// this section has a clear for the fields, results, and hidden codes of the modals
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

//toggle the hidden codes for java exercises
$("#BM-btn-3").click(function () {
    $('#mathCode').toggle();
});
$("#Fa-btn-3").click(function () {
    $('#factCode').toggle();
});

//on clicking away from the modals this calls the Clears above
$('#myModal').on('hidden.bs.modal', function () { CClear1() });
$('#myModal2').on('hidden.bs.modal', function () { CClear2() });

