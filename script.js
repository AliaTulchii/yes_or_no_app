// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


const showAnswer = (answer) => {
    setTimeout(() => {
        document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
    document.querySelector('#ball').classList.remove('shake__ball');
    },1000);
    
}

const fetchAnswer = () => {
    document.querySelector('#ball').classList.add('shake__ball');

    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => showAnswer(data.answer))
}

fetchAnswer();

const handleKeyEnter = (e) => {
    if (e.keyCode === 13) {
        fetchAnswer();
    }
}

document.querySelector('#button').addEventListener('click', () => {
    fetchAnswer();
 })