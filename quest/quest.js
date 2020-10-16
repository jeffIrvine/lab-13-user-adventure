import quests from '../data.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const quest = findById(quests, id);

const h2 = document.createElement('h2');

h2.textContent = quest.title;

section.appendChild(h2);

console.log(quest.choices);