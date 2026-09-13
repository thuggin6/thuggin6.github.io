const button = document.getElementById('welcomeButton');
const message = document.querySelector('#message');
      
// Add a click event listener 
button.addEventListener('click', function() {
  if(message.textContent.trim().length == 0){
    button.textContent = 'GoodBye!';
    // Change color of button when clicked
    button.style.backgroundColor = '#28a745';
    message.textContent = "Thanks for reading my portfolio!";
  }
  else{
    message.textContent = "";
    button.style.backgroundColor = '#222';
    button.textContent = 'Hello!';
  }
            
});
