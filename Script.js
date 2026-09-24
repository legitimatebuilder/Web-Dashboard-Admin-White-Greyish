const leftSideBar = document.querySelector('.left-sidebar');
const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    leftSideBar.classList.toggle('active');
    toggle.classList.toggle('active');
};