// Create a button element
const button = document.createElement('button');
button.textContent = 'Click me';

// Add click event listener to the button
button.addEventListener('click', () => {
  console.log('Button clicked!');
});



const dropdownButton = document.querySelector('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
  dropdownButton.addEventListener('click', () => {
  dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
});