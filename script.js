const accordText = document.querySelectorAll('.accord__text');
const accordItems = document.querySelectorAll('.accord__title');

function showAccordContent () {
    addEventListener('click', (event) => {
        console.log(event);
        if (event.target.className === "accord__title") {
            event.target.nextElementSibling.classList.toggle('accord__text-show');
            console.log (event.target.nextElementSibling.className);
        }
    })
}
showAccordContent ();