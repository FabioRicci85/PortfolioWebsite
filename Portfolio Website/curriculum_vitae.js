const portfolioLink = document.getElementById('portfolio-link');
portfolioLink.addEventListener('click', handleClick);
const dropdown = document.getElementsByClassName('div__menu')[0];
function handleClick(e) {
    e.preventDefault();
    dropdown.classList.toggle('open');
    console.log()
}
