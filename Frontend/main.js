//call the api here:

//where the text is displayed on the page when a response is recieved
let displayText = document.getElementById('apiText');
//button to click to receive message from backend
let button = document.getElementById('callAPI');
let nameInput = document.getElementById('name-input');
let nameButton = document.getElementById('submit-name-button');
let nameOutput = document.getElementById('name-output');
//update event listeners so they call the correct function
    button.removeEventListener('click', callBackend);
    button.addEventListener('click', callBackend);
    


//function that calls the api and displays the text on the page
 async function callBackend() {
    //Initiate request
    let message  = await fetch('http://localhost:3000/api/getMessage', {
        method: "GET",
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        //convert the response to simple plaintext
    }).then (response => response.text());

    //show the message from the backend on the page
   displayText.textContent = message;
}
async function callBackendName() {
    //Initiate request
    let name = nameInput.value;
    let message  = await fetch('http://localhost:3000/api/getName/' + name, {
        method: "POST",
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        //convert the response to simple plaintext
    }).then (response => response.text());

    //show the message from the backend on the page
   nameOutput.textContent = message;
}
nameButton.addEventListener('click', callBackendName);

