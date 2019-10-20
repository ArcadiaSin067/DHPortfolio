
// every iteration where AI can go in a place to win the game
function WinScenario() {
    var bx1 = $('#box1').text(), bx2 = $('#box2').text(), bx3 = $('#box3').text(),
        bx4 = $('#box4').text(), bx5 = $('#box5').text(), bx6 = $('#box6').text(),
        bx7 = $('#box7').text(), bx8 = $('#box8').text(), bx9 = $('#box9').text();
    if (bx1 == bx2 && bx1 == "X" && bx3 == "") {
        e = "#box3"; winS = 1;
    }
    else if (bx1 == bx3 && bx1 == "X" && bx2 == "") {
        e = "#box2"; winS = 1;
    }
    else if (bx2 == bx3 && bx2 == "X" && bx1 == "") {
        e = "#box1"; winS = 1;
    } //end line 1

    else if (bx4 == bx5 && bx4 == "X" && bx6 == "") {
        e = "#box6"; winS = 1;
    }
    else if (bx4 == bx6 && bx4 == "X" && bx5 == "") {
        e = "#box5"; winS = 1;
    }
    else if (bx5 == bx6 && bx5 == "X" && bx4 == "") {
        e = "#box4"; winS = 1;
    } //end line 2

    else if (bx7 == bx8 && bx7 == "X" && bx9 == "") {
        e = "#box9"; winS = 1;
    }
    else if (bx7 == bx9 && bx7 == "X" && bx8 == "") {
        e = "#box8"; winS = 1;
    }
    else if (bx8 == bx9 && bx8 == "X" && bx7 == "") {
        e = "#box7"; winS = 1;
    }// end line 3

    else if (bx1 == bx4 && bx1 == "X" && bx7 == "") {
        e = "#box7"; winS = 1;
    }
    else if (bx1 == bx7 && bx1 == "X" && bx4 == "") {
        e = "#box4"; winS = 1;
    }
    else if (bx4 == bx7 && bx4 == "X" && bx1 == "") {
        e = "#box1"; winS = 1;
    }// end line 4

    else if (bx2 == bx5 && bx2 == "X" && bx8 == "") {
        e = "#box8"; winS = 1;
    }
    else if (bx2 == bx8 && bx2 == "X" && bx5 == "") {
        e = "#box5"; winS = 1;
    }
    else if (bx5 == bx8 && bx5 == "X" && bx2 == "") {
        e = "#box2"; winS = 1;
    }// end line 5

    else if (bx3 == bx6 && bx3 == "X" && bx9 == "") {
        e = "#box9"; winS = 1;
    }
    else if (bx3 == bx9 && bx3 == "X" && bx6 == "") {
        e = "#box6"; winS = 1;
    }
    else if (bx6 == bx9 && bx6 == "X" && bx3 == "") {
        e = "#box3"; winS = 1;
    }// end line 6

    else if (bx1 == bx5 && bx1 == "X" && bx9 == "") {
        e = "#box9"; winS = 1;
    }
    else if (bx1 == bx9 && bx1 == "X" && bx5 == "") {
        e = "#box5"; winS = 1;
    }
    else if (bx5 == bx9 && bx5 == "X" && bx1 == "") {
        e = "#box1"; winS = 1;
    }// end line 7

    else if (bx3 == bx5 && bx3 == "X" && bx7 == "") {
        e = "#box7"; winS = 1;
    }
    else if (bx3 == bx7 && bx3 == "X" && bx5 == "") {
        e = "#box5"; winS = 1;
    }
    else if (bx5 == bx7 && bx5 == "X" && bx3 == "") {
        e = "#box3"; winS = 1;
    }// end line 8

    else {
        winS = 0;
    }
    return e, winS;
}
// every iteration where AI can go in a place to block the player's win
function BlockScenario() {
    if (winS == 0) {
        var bx1 = $('#box1').text(), bx2 = $('#box2').text(), bx3 = $('#box3').text(),
            bx4 = $('#box4').text(), bx5 = $('#box5').text(), bx6 = $('#box6').text(),
            bx7 = $('#box7').text(), bx8 = $('#box8').text(), bx9 = $('#box9').text();
        if (bx1 == bx2 && bx1 == "O" && bx3 == "") {
            e = "#box3"; blkS = 1;
        }
        else if (bx1 == bx3 && bx1 == "O" && bx2 == "") {
            e = "#box2"; blkS = 1;
        }
        else if (bx2 == bx3 && bx2 == "O" && bx1 == "") {
            e = "#box1"; blkS = 1;
        } //end line 1

        else if (bx4 == bx5 && bx4 == "O" && bx6 == "") {
            e = "#box6"; blkS = 1;
        }
        else if (bx4 == bx6 && bx4 == "O" && bx5 == "") {
            e = "#box5"; blkS = 1;
        }
        else if (bx5 == bx6 && bx5 == "O" && bx4 == "") {
            e = "#box4"; blkS = 1;
        } //end line 2

        else if (bx7 == bx8 && bx7 == "O" && bx9 == "") {
            e = "#box9"; blkS = 1;
        }
        else if (bx7 == bx9 && bx7 == "O" && bx8 == "") {
            e = "#box8"; blkS = 1;
        }
        else if (bx8 == bx9 && bx8 == "O" && bx7 == "") {
            e = "#box7"; blkS = 1;
        }// end line 3

        else if (bx1 == bx4 && bx1 == "O" && bx7 == "") {
            e = "#box7"; blkS = 1;
        }
        else if (bx1 == bx7 && bx1 == "O" && bx4 == "") {
            e = "#box4"; blkS = 1;
        }
        else if (bx4 == bx7 && bx4 == "O" && bx1 == "") {
            e = "#box1"; blkS = 1;
        }// end line 4

        else if (bx2 == bx5 && bx2 == "O" && bx8 == "") {
            e = "#box8"; blkS = 1;
        }
        else if (bx2 == bx8 && bx2 == "O" && bx5 == "") {
            e = "#box5"; blkS = 1;
        }
        else if (bx5 == bx8 && bx5 == "O" && bx2 == "") {
            e = "#box2"; blkS = 1;
        }// end line 5

        else if (bx3 == bx6 && bx3 == "O" && bx9 == "") {
            e = "#box9"; blkS = 1;
        }
        else if (bx3 == bx9 && bx3 == "O" && bx6 == "") {
            e = "#box6"; blkS = 1;
        }
        else if (bx6 == bx9 && bx6 == "O" && bx3 == "") {
            e = "#box3"; blkS = 1;
        }// end line 6

        else if (bx1 == bx5 && bx1 == "O" && bx9 == "") {
            e = "#box9"; blkS = 1;
        }
        else if (bx1 == bx9 && bx1 == "O" && bx5 == "") {
            e = "#box5"; blkS = 1;
        }
        else if (bx5 == bx9 && bx5 == "O" && bx1 == "") {
            e = "#box1"; blkS = 1;
        }// end line 7

        else if (bx3 == bx5 && bx3 == "O" && bx7 == "") {
            e = "#box7"; blkS = 1;
        }
        else if (bx3 == bx7 && bx3 == "O" && bx5 == "") {
            e = "#box5"; blkS = 1;
        }
        else if (bx5 == bx7 && bx5 == "O" && bx3 == "") {
            e = "#box3"; blkS = 1;
        }// end line 8

        else {
            blkS = 0;
        }
        return e, winS, blkS;
    }
}
// checking if there is a win or draw on the board
function check4Win() { //begin win check by setting all boxes to a variable
    var bx1 = $('#box1').text(), bx2 = $('#box2').text(), bx3 = $('#box3').text(),
        bx4 = $('#box4').text(), bx5 = $('#box5').text(), bx6 = $('#box6').text(),
        bx7 = $('#box7').text(), bx8 = $('#box8').text(), bx9 = $('#box9').text();
    if (!Win && count > 4) { //look for all matching instances of 3 in a row
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
            $('#TTTresult').text('This game is a Draw. Reset and try again?');
        }
        if (Win) { //output the winner and shift the boxes to show it
            $('#TTTresult').text("Congratulations! " + (xo) + "'s" + " Win!"); //Woo-hoo!
            return $(`#box${a}, #box${b}, #box${c}`).addClass("Won");
        }
    }
}

// script for easy mode AI
function EasyAI() {
    if (xo == "X") { // check its AIs turn
        winS = 0; BlockScenario(); // check for a blocking move
        if (blkS == 0 && count < 9) { // if no block can be made and board is not full
            let RandArray = new Array();
            for (i = 1; i <= 9; i++) { // run a loop that checks all boxes if empty
                var str = '#box' + i;
                if ($(str).text() == "") { // a box is excluded if it is full
                    RandArray.push(str); // push the non-excluded boxes to new array
                }
            }
            // this takes the new array and picks a random element in it
            var Rndum = RandArray[Math.floor(Math.random() * RandArray.length)];
            e = Rndum; // that random element is set to the picked box to play
        }
    }
    PlaceInBox(e); // output the chosen box
}


// script for the hard mode AI
function HardAI() {
    if (xo == "X") { // check its AIs turn
        WinScenario(); // check for a winning move
        BlockScenario(); // check for a blocking move
        if (winS == 0 && blkS == 0 && count < 9) { //if no win or block, set variables
        var bx1 = $('#box1').text(), bx2 = $('#box2').text(), bx3 = $('#box3').text(),
            bx4 = $('#box4').text(), bx5 = $('#box5').text(), bx6 = $('#box6').text(),
            bx7 = $('#box7').text(), bx8 = $('#box8').text(), bx9 = $('#box9').text();
            if (bx5 == "") { // begin picking move, always prioritize center if open
                e = "#box5";
            } // section below is for setting up late game traps
            else if (bx1 == bx5 && bx1 == "X" && bx9 == bx2 && bx9 == "O" && count == 4) {
                e = "#box7";
            }
            else if (bx1 == bx5 && bx1 == "X" && bx9 == bx4 && bx9 == "O" && count == 4) {
                e = "#box3";
            }
            else if (bx3 == bx5 && bx3 == "X" && bx7 == bx2 && bx7 == "O" && count == 4) {
                e = "#box9";
            }
            else if (bx3 == bx5 && bx3 == "X" && bx7 == bx6 && bx7 == "O" && count == 4) {
                e = "#box1";
            }
            else if (bx7 == bx5 && bx7 == "X" && bx3 == bx4 && bx3 == "O" && count == 4) {
                e = "#box9";
            }
            else if (bx7 == bx5 && bx7 == "X" && bx3 == bx8 && bx3 == "O" && count == 4) {
                e = "#box1";
            }
            else if (bx9 == bx5 && bx9 == "X" && bx1 == bx6 && bx1 == "O" && count == 4) {
                e = "#box7";
            }
            else if (bx9 == bx5 && bx9 == "X" && bx1 == bx8 && bx1 == "O" && count == 4) {
                e = "#box3";
            }
            // section below is for avoiding some player traps
            else if (bx3 == bx7 && bx3 == "O" && bx2 == "") {e = "#box2";}
            else if (bx7 == bx6 && bx7 == "O" && bx9 == "") {e = "#box9";}
            else if (bx9 == bx2 && bx9 == "O" && bx3 == "") {e = "#box3";}
            else if (bx9 == bx4 && bx9 == "O" && bx7 == "") {e = "#box7";}
            // section below is for setting up early game traps
            else if (bx1 == "O" && bx9 == "" && count != 3) {e = "#box9";}
            else if (bx2 == "O" && bx7 == "" && count != 3) {e = "#box7";}
            else if (bx3 == "O" && bx7 == "" && count != 3) {e = "#box7";}
            else if (bx4 == "O" && bx3 == "" && count != 3) {e = "#box3";}
            else if (bx7 == "O" && bx3 == "" && count != 3) {e = "#box3";}
            // section below is for prioritizing corners
            else if (bx1 == "") {e = "#box1";}
            else if (bx3 == "") {e = "#box3";}
            else if (bx7 == "") {e = "#box7";}
            else if (bx9 == "") {e = "#box9";}
            else { // failing all the above, this picks a random square
                let RandArray = new Array();
                for (i = 1; i <= 9; i++) { // run a loop that checks all boxes if empty
                    var str = '#box' + i;
                    if ($(str).text() == "") { // a box is excluded if it is full
                        RandArray.push(str); // push the non-excluded boxes to new array
                    }
                }
                // this takes the new array and picks a random element in it
                var Rndum = RandArray[Math.floor(Math.random() * RandArray.length)];
                e = Rndum; // that random element is set to the picked box to play
            }
        }
        PlaceInBox(e); // output the chosen box
    }
}


// script for the Legendary AI
function Legendary() {
    if (xo == "X") { // check its AIs turn
        WinScenario(); // check for a winning move
        BlockScenario(); // check for a blocking move
        if (winS == 0 && blkS == 0 && count < 9) { //if no win or block, set variables
            var bx1 = $('#box1').text(), bx2 = $('#box2').text(), bx3 = $('#box3').text(),
                bx4 = $('#box4').text(), bx5 = $('#box5').text(), bx6 = $('#box6').text(),
                bx7 = $('#box7').text(), bx8 = $('#box8').text(), bx9 = $('#box9').text();
            if (bx5 == "") { // begin picking move, always prioritize center if open
                e = "#box5";
            } // section below is for setting up late game traps
            else if (bx1 == bx5 && bx1 == "X" && bx9 == bx2 && bx9 == "O" && count == 4) {
                e = "#box7";
            }
            else if (bx1 == bx5 && bx1 == "X" && bx9 == bx4 && bx9 == "O" && count == 4) {
                e = "#box3";
            }
            else if (bx3 == bx5 && bx3 == "X" && bx7 == bx2 && bx7 == "O" && count == 4) {
                e = "#box9";
            }
            else if (bx3 == bx5 && bx3 == "X" && bx7 == bx6 && bx7 == "O" && count == 4) {
                e = "#box1";
            }
            else if (bx7 == bx5 && bx7 == "X" && bx3 == bx4 && bx3 == "O" && count == 4) {
                e = "#box9";
            }
            else if (bx7 == bx5 && bx7 == "X" && bx3 == bx8 && bx3 == "O" && count == 4) {
                e = "#box1";
            }
            else if (bx9 == bx5 && bx9 == "X" && bx1 == bx6 && bx1 == "O" && count == 4) {
                e = "#box7";
            }
            else if (bx9 == bx5 && bx9 == "X" && bx1 == bx8 && bx1 == "O" && count == 4) {
                e = "#box3";
            }
            // section below is for avoiding all player traps
            else if (bx6 == bx8 && bx6 == "O" && count == 3) { e = "#box9"; }
            else if (bx1 == bx6 && bx1 == "O" && bx3 == "") { e = "#box3"; }
            else if (bx1 == bx8 && bx1 == "O" && bx7 == "") { e = "#box7"; }
            else if (bx1 == bx9 && bx1 == "O" && bx2 == "") { e = "#box2"; }
            else if (bx3 == bx7 && bx3 == "O" && bx2 == "") { e = "#box2"; }
            else if (bx3 == bx8 && bx3 == "O" && bx9 == "") { e = "#box9"; }
            else if (bx7 == bx6 && bx7 == "O" && bx9 == "") { e = "#box9"; }
            else if (bx9 == bx2 && bx9 == "O" && bx3 == "") { e = "#box3"; }
            else if (bx9 == bx4 && bx9 == "O" && bx7 == "") { e = "#box7"; }
            // section below is for setting up early game traps
            else if (bx1 == "O" && bx9 == "" && count != 3) { e = "#box9"; }
            else if (bx2 == "O" && bx7 == "" && count != 3) { e = "#box7"; }
            else if (bx3 == "O" && bx7 == "" && count != 3) { e = "#box7"; }
            else if (bx4 == "O" && bx3 == "" && count != 3) { e = "#box3"; }
            else if (bx7 == "O" && bx3 == "" && count != 3) { e = "#box3"; }
            // section below is for prioritizing corners
            else if (bx1 == "") { e = "#box1"; }
            else if (bx3 == "") { e = "#box3"; }
            else if (bx7 == "") { e = "#box7"; }
            else if (bx9 == "") { e = "#box9"; }
            else { // failing all the above, this picks a random square
                let RandArray = new Array();
                for (i = 1; i <= 9; i++) { // run a loop that checks all boxes if empty
                    var str = '#box' + i;
                    if ($(str).text() == "") { // a box is excluded if it is full
                        RandArray.push(str); // push the non-excluded boxes to new array
                    }
                }
                // this takes the new array and picks a random element in it
                var Rndum = RandArray[Math.floor(Math.random() * RandArray.length)];
                e = Rndum; // that random element is set to the picked box to play
            }
        }
        PlaceInBox(e); // output the chosen box
    }
}
