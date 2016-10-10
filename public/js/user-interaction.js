"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
do {
    var name = prompt('What is your name?');
// TODO: Show an alert message that welcomes the user based on their input.

} while (name.trim() == "" || name == null);
console.log('This fool\'s name is ' + name.trim() + '. Seriously!');

alert('I pity the fools named ' + name.trim() + '! WELCOME FOOL!');
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var pizza = confirm('FOOL! Do you like pizza?');

pizza ? alert('NOOOOOICE!!') : alert('Your foolness level is breaking the fool-o-meter!! I PITY YOU ' + name.trim() + '!');
console.log(pizza ? 'This fool likes pizza!' : 'This fool is a fool, he does not like pizza!');


