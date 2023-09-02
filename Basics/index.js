// Get all the buttons and divs
const buttons = document.querySelectorAll('.myButton');
const divs = document.querySelectorAll('.myDiv');

// Add a click event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Toggle the display of the corresponding div
    divs[index].style.height = (divs[index].style.height === '20px') ? '200px' : '20px';
    
  });
});