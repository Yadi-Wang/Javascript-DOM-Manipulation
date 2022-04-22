'use strict';
const button = document.queryselectorAll('.color-change')
button.addEventListener ('click', () => {
    const colorChangeEls = document.queryselectorAll('.color-change');
    for (const colorChangeEl of colorChangeEls) {
        colorChangeEl.classList.add('red');
    };
}
);


const form = document.querySelector('form')
form.addEventListener ('submit', (evt) => {
    evt.preventDefault();
    const inputNumber = document.querySelector('input[name="number"]');
    const fromFeedback = document.querySelector('#formFeedback');
    if (isNaN(inputNumber) || imput.value > 10) {
        fromFeedback.innerHTML = 'Please enter a smaller bumber';
    }
    else{
        fromFeedback.innerHTML = 'You are good to go!';
    };
});