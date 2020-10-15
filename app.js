import { saveUser } from './local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const user = {
        name: data.get('name'),
        character: data.get('character'),
        sanity: 100,
        Eucharist: 1,
        completed: {}
    };
    saveUser(user);
    window.location.href = './area/';
});
// initialize state

// set event listeners to update state and DOM