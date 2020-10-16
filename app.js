import { saveUser } from './local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const classPick = document.querySelector(':checked');
    const data = new FormData(form);

    if (classPick.value === 'teacher') {
        const user = {
            name: data.get('name'),
            character: data.get('character'),
            sanity: 60,
            eucharist: 10,
            completed: {}
        };
        saveUser(user);
    }
    if (classPick.value === 'prodigal-son') {
        const user = {
            name: data.get('name'),
            character: data.get('character'),
            sanity: 30,
            eucharist: 1,
            completed: {}
        };
        saveUser(user);
    } else {
        const user = {
            name: data.get('name'),
            character: data.get('character'),
            sanity: 100,
            eucharist: 80,
            completed: {}
        };
        saveUser(user);
    }
    window.location.href = './area/';
});