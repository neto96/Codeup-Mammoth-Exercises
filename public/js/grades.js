/**
 * Created by Neto on 10/11/16.
 */
var gradesTotal = 0;
var awesomeAverage = 80;
var gradesEntered = 0;

function average3grades () {
    for (gradesEntered = 1; gradesEntered <= 3; gradesEntered++) {
        gradesTotal += parseInt(prompt('Enter your grade'));
    }
    console.log(gradesTotal / 3);
    return (gradesTotal / 3) > awesomeAverage ? alert("You're awesome!") : alert("You suck! BOOOO!");
}

function genericGradesAverage() {
    do {
        gradesTotal += parseInt(prompt('Enter your grade: '));
        gradesEntered = gradesEntered + 1;
        console.log(gradesTotal);
        console.log(gradesEntered);
    } while (confirm('Add another grade?'));
    var studentAverage = gradesTotal / gradesEntered;
    console.log(studentAverage);
    return studentAverage > awesomeAverage ? alert("You're awesome!") : alert("You suck! BOOOO!");
}
average3grades();

// genericGradesAverage();
