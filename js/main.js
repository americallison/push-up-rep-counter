// Main javascript file for pushup reps counter
// Author: Americ Allison
// Date: November 11, 2022

// set initial rep counter
let count = 0;

// assign counter id to my_counter
let my_counter = document.getElementById("counter") 

// adds push up rep by 1
function add_rep() {
    my_counter.innerHTML = count + 1;
    // store previous count value and add 1
    count += 1;
}

let set = 0;
let total_reps = 0;

function save_set() {
    set += 1;
    let sets = count;
    let my_message = document.getElementById("pushupset");
    my_message.innerHTML += `Set ${set}: ${sets} reps / `;
    // add count for each set
    total_reps += count;
    let total_reps_message = document.getElementById('total-reps');
    total_reps_message.innerHTML = `Total Reps: ${total_reps}`
    // reset count and counter
    count = 0;
    my_counter.innerHTML = 0;
}

