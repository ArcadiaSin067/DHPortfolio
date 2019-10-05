
//script to pull data and calc it
$('#BM-btn-1').click(function () {
    //establish variables and calculatable array
    var count = 0, sum = 0, mult = 0, least = 0, most = 0, ave = 0;
    let calcVals = new Array();
    //run a loop that checks each field to see it there is something in it,
    for (i = 1; i <= 5; i++) {
        var str = '#UTI-' + i;
        if ($(str).val() != "" && !isNaN(Number($(str).val()))) { //a field is excluded if it is blank or NaN
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

// this clears the fields, results, and math code
function CClear1() {
    $('#UTI-1,#UTI-2,#UTI-3,#UTI-4,#UTI-5').val("");
    $('#result1, #result2, #result3, #result4, #result5').text("");
    $("#mathCode").hide();
};

//toggle math code for java exercises
$("#BM-btn-3").click(function () {
    $('#mathCode').toggle();
});

//on clicking away from modal1 this calls the Clear above
$('#myModal').on('hidden.bs.modal', function () { CClear1() });

