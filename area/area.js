import quests from '../data.js';

const ul = document.querySelector('ul');

quests.forEach(quest => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = quest.title;
    link.href = `/quest/?id=${quest.id}`;

    ul.append(li);
});
