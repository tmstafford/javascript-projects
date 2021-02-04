// select DOM variables
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

function toggleClickHandler() {
    sidebar.classList.toggle('show-sidebar');
};

function closeClickHandler() {
    sidebar.classList.remove('show-sidebar');
};

toggleBtn.addEventListener('click', toggleClickHandler);
closeBtn.addEventListener('click', closeClickHandler);