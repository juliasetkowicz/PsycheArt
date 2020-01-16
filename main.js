const welcome = (name, age) => {
    console.log('witaj ${name}, masz ${age} lat!');
}
welcome('marta', 23)

const button = document.querySelector('.header__button--js');
console.log(button)

button.addEventListener('click', (e) => {
const header = document.querySelector('.header__title--js');
header.innerHTML = 'klik, klik';
header.classList.toggle('header__title--red');
alert('hello');
});
