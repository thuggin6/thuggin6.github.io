function nextQuestion(inputName){
    const listContainer = document.getElementById('results_container');
    
    //make results container visible
    listContainer.style.display = "block";

    // Add the results greeting to header
    document.getElementById('results_msg').innerText = "Time to Count , " + inputName + "...";
}


function generateGreeting(event) {
        // Prevent the form from refreshing the page on submission
        event.preventDefault();

        // Target the standard original greeting
        const originalGreeting = document.querySelector('#greeting').textContent;

        // Get values using DOM
        const firstName = document.getElementById('first_name').value.trim();
        const middleInitial = document.getElementById('middle_initial').value.trim();
        const lastName = document.getElementById('last_name').value.trim();

        // Construct Fullname
        let fullName = firstName;
        
        if (middleInitial) {
            fullName += " " + middleInitial.toUpperCase() + ".";
        }
        
        fullName += " " + lastName;

        // Create new greeting
        const newGreeting = originalGreeting + " " + fullName + "!";

        // Add the new greeting to header
        document.getElementById('greeting').innerText = newGreeting;

        document.getElementById("form_container").style.display = "none";

        nextQuestion(firstName);
        
}


function generateText(){
    
    const listContainer = document.getElementById('results_container');
    const counter = document.getElementById('count_value').value;
    const firstDivisor = document.getElementById('first_divisor').value;
    const secondDivisor = document.getElementById('second_divisor').value;


    //<ul> element
    const list = document.createElement('ul');
    list.id = "baking-list";
    list.style.listStyleType = "none";
    list.style.padding = '0';

    //<li> items
    for (let i = 1; i <= counter; i++) {
    const listItem = document.createElement('li');
    let outputMsg = "";

    //Divisible check
    if (checkDivision(i, firstDivisor) && checkDivision(i,secondDivisor)){
        outputMsg = "cookie, cake";
    } 
    else if (checkDivision(i, firstDivisor)){
        outputMsg = " cookie";
    }
    else if (checkDivision(i,secondDivisor)){
        outputMsg = "cake";
    }
    else {
       outputMsg = "cupcake";
    }

    listItem.textContent = `${i}. ${outputMsg}`;

    //add to end of unordered list
    list.appendChild(listItem);
    }

    //add to results container
    listContainer.appendChild(list);
}

    
function resetPage(){
    //Reset header
    document.getElementById('greeting').innerText = "Welcome to Sugar Queen Bakery";

    //hide results
    document.getElementById('results_container').style.display = "none";

    //restore form visibility
    document.getElementById("form_container").style.display = "block";

    //reset the content of the form
    document.getElementById("fizzbuzz_form").reset(); 

}

function handleResultsreset() {
    //clear out list
    const myList = document.getElementById('baking-list');
    //myList.innerHTML = '';
    myList.replaceChildren();

    //reset form
    document.getElementById("results_form").reset();    

}
//check if a counter value is evenly divisible by a number
function checkDivision(counter, secDivisor){ 
    let isDivisiable = false   
    if (counter % secDivisor === 0){isDivisiable = true;  }
    return isDivisiable;
}