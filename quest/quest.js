import quests from '../data.js';
import { findById, hasCompletedAllQuests } from '../utils.js';
import { getUser, saveUser } from '../local-storage-utils.js';

const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const quest = findById(quests, id);

const h2 = document.createElement('h2');

h2.textContent = quest.title;

section.appendChild(h2);

const form = document.createElement('form');

section.appendChild(form);

quest.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.appendChild(label);
});

const button = document.createElement('button');

button.textContent = 'Are you sure?';



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const checked = document.querySelector(':checked');

    const userChecked = checked.value;

    const choice = findById(quest.choices, userChecked);
    
    // console.log(choice);
    const user = getUser();
    
    user.sanity += choice.sanity;
    user.eucharist += choice.eucharist;
    
    user.completed[id] = true;

    saveUser(user);

    if (user.sanity <= 1 || hasCompletedAllQuests(quests, user)) { 
        window.location.href = '../results/';
    }
});

form.appendChild(button);
