// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// select DOM variables
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

function displayNav() {
    links.classList.toggle('show-links');
};

navToggle.addEventListener('click', displayNav);